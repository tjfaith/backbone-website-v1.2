"use client";

import { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDraggable,
} from "@heroui/modal";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";

import { VolumeBg2 } from "@/public/assets";
import { RootState } from "@/app/store";
import { updateShowAnnouncement } from "@/app/store/Features/settingsSlice";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}

const TimelineItem = ({ date, title, description }: TimelineItemProps) => {
  return (
    <div className=" flex  items-stretch gap-4 ">
      <div className="flex flex-col items-center">
        <div className="h-[10px] w-[10px] rounded-full bg-foreground-100 my-2" />

        <div
          className="w-[2px] h-full rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #E1E4EA 0, #E1E4EA 6px, transparent 6px, transparent 16px)",
          }}
        />
      </div>
      <div>
        <div className="text-primary-450 font-normal text-base leading-6 tracking-[-0.176px] mb-2">
          {date}
        </div>
        <div className="text-black font-medium text-xl clash-display-font leading-7 mb-2">
          {title}
        </div>
        <div className="text-primary-450 font-normal text-base leading-6 tracking-[-0.176px] mb-2">
          {description}
        </div>
      </div>
    </div>
  );
};

const STORAGE_KEY = "announcement_seen_v1";

const AnnouncementModal = () => {
  const targetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { showAnnouncement } = useSelector(
    (state: RootState) => state.settings,
  );
  const dispatch = useDispatch();

  // Auto popup (once)
  useEffect(() => {
    const hasSeen = localStorage.getItem(STORAGE_KEY);

    if (!hasSeen) {
      dispatch(updateShowAnnouncement(true));
    }

    // Redux controls visibility in real-time
    setIsOpen(showAnnouncement);
  }, [showAnnouncement, dispatch]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);

    if (!open) {
      localStorage.setItem(STORAGE_KEY, "true");
      dispatch(updateShowAnnouncement(false));
    }
  };

  const { moveProps } = useDraggable({
    targetRef,
    canOverflow: true,
    isDisabled: !isOpen,
  });

  return (
    <Modal
      ref={targetRef}
      backdrop="transparent"
      classNames={{
        wrapper: "items-end justify-end p-6 ",
        base: "rounded-2xl",
        closeButton:
          "hover:bg-background-200/50 bg-background-200 rounded-full p-2",
      }}
      isDismissable={false}
      isKeyboardDismissDisabled={false}
      isOpen={isOpen}
      placement="top"
      shouldBlockScroll={false}
      onOpenChange={handleOpenChange}
    >
      <ModalContent className="border">
        {() => (
          <>
            {/* Header */}
            <ModalHeader {...moveProps} className="flex flex-col gap-1 pb-0">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-primary-450 text-base font-normal leading-6 tracking-[-0.176px]">
                  Dec 1
                </span>
                <div className=" flex items-center gap-[6px]">
                  <span className="h-2 w-2 rounded-full bg-info-250" />
                  <span
                    className="text-info-250 font-normal leading-6 tracking-[-0.176px] text-base
                  "
                  >
                    New
                  </span>
                </div>
              </div>

              <h3 className="text-xl clash-display-font text-black font-medium leading-7 mb-2">
                Growing transaction volume
              </h3>
            </ModalHeader>

            {/* Body */}
            <ModalBody className="m-0 p-0 " {...moveProps}>
              <div className=" px-6">
                <div className="text-base text-primary-450 leading-6 tracking-[-0.176px] mb-3">
                  We have processed significantly more transactions, reinforcing
                  trust and reliability at scale. Join us on the road to{" "}
                  <span className="font-medium text-primary">$1B</span>.
                </div>

                <div className="relative w-full overflow-hidden">
                  <Image
                    removeWrapper
                    alt=""
                    className=" w-full h-full object-cover"
                    src={VolumeBg2.src}
                  />
                </div>

                {!showMore && (
                  <div className="flex items-center justify-center gap-[22px] max-w-xs mx-auto py-[22px]">
                    <Divider className=" w-[70px] h-[1px]" />
                    <button
                      className=" whitespace-nowrap mx-auto italic font-normal leading-5 tracking-[-0.084px] text-sm  text-primary-400 hover:text-foreground"
                      onClick={() => setShowMore(true)}
                    >
                      Read More
                    </button>
                    <Divider className=" w-[70px]" />
                  </div>
                )}

                {showMore && (
                  <>
                    <div className="space-y-6 mt-[38px] mb-7">
                      <TimelineItem
                        date="Nov 30"
                        description="Our IMTO licensing process is ongoing as part of our commitment to compliant operations in Nigeria."
                        title="Regulatory approvals underway"
                      />

                      <TimelineItem
                        date="Nov 30"
                        description="Our EMI licensing process in the UK is ongoing, in line with regulatory requirements."
                        title="EMI licensing ongoing"
                      />

                      <TimelineItem
                        date="Nov 30"
                        description="Our Canadian MSB license application is in progress as we continue to strengthen our global regulatory presence."
                        title="Expanding into Canada"
                      />
                    </div>
                    <div className="flex items-start justify-center w-full">
                      <button
                        className="mx-auto cursor-pointer text-xl hover:text-foreground text-primary-400"
                        onClick={() => setShowMore(false)}
                      >
                        <Icon icon="ri:arrow-up-double-line" />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="p-0 my-0 bg-[#F8FAFB] text-primary-450 flex items-center justify-center w-full text-[11px] py-4 shadow-[0_0_0_1px_var(--neutral-200,_#E1E4EA)] text-center border-t-[0.5px">
                POWERED BY BACKBONE FINANCE INC
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AnnouncementModal;
