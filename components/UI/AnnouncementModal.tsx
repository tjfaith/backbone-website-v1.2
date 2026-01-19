// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Divider } from "@heroui/divider";
// import { Image } from "@heroui/image";
// import { useDispatch, useSelector } from "react-redux";
// import { Icon } from "@iconify/react";

// import { VolumeBg2 } from "@/public/assets";
// import { RootState } from "@/app/store";
// import { updateShowAnnouncement } from "@/app/store/Features/settingsSlice";

// interface TimelineItemProps {
//   date: string;
//   title: string;
//   description: string;
// }

// const TimelineItem = ({ date, title, description }: TimelineItemProps) => {
//   return (
//     <div className="flex items-stretch gap-4">
//       <div className="flex flex-col items-center">
//         <div className="h-[10px] w-[10px] rounded-full bg-foreground-100 my-2" />
//         <div
//           className="w-[2px] h-full rounded-full"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(to bottom, #E1E4EA 0, #E1E4EA 6px, transparent 6px, transparent 16px)",
//           }}
//         />
//       </div>

//       <div>
//         <div className="text-primary-450 font-normal text-xs leading-4  mb-2">
//           {date}
//         </div>
//         <div className="text-black font-medium text-base clash-display-font leading-7 mb-2">
//           {title}
//         </div>
//         <div className="text-primary-450 font-normal text-sm leading-6 tracking-[-0.154px] mb-2">
//           {description}
//         </div>
//       </div>
//     </div>
//   );
// };

// const STORAGE_KEY = "announcement_seen_v1";

// const AnnouncementPanel = () => {
//   const panelRef = useRef<HTMLDivElement | null>(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [showMore, setShowMore] = useState(false);

//   const { showAnnouncement } = useSelector(
//     (state: RootState) => state.settings
//   );
//   const dispatch = useDispatch();

//   // Auto popup (once)
//   useEffect(() => {
//     const hasSeen = localStorage.getItem(STORAGE_KEY);

//     if (!hasSeen) {
//       dispatch(updateShowAnnouncement(true));
//     }

//     setIsOpen(showAnnouncement);
//   }, [showAnnouncement, dispatch]);

//   const closePanel = () => {
//     setIsOpen(false);
//     setShowMore(false);
//     localStorage.setItem(STORAGE_KEY, "true");
//     dispatch(updateShowAnnouncement(false));
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* PANEL CONTAINER */}
//       <div
//         ref={panelRef}
//         className={`
//     fixed z-[60]
//     ${showMore ? "top-6" : "bottom-6"}
//     right-6
//     max-w-[420px] w-full
//     bg-white
//     border
//     rounded-2xl
//     shadow-lg
//     pointer-events-auto
//     overflow-hidden
//     max-h-[calc(100vh-48px)]
//     mb-16
//     flex flex-col

//   //  MOBILE ONLY
//     max-sm:right-0
//     max-sm:left-0
//     max-sm:mx-auto
//     max-sm:bottom-4
//     max-sm:top-auto
//     max-sm:w-[calc(100%-24px)]
//     max-sm:max-h-[calc(80vh-48px)]
//     max-sm:rounded-xl
//     max-sm:mb-16
//   `}
//       >
//         {/* Header */}
//         <div className="flex flex-col gap-1 pb-0 px-6 pt-6">
//           <div className="flex items-center gap-4 mb-2">
//             <span className="text-primary-450 text-base font-normal leading-6 tracking-[-0.176px]">
//               Dec 1
//             </span>

//             <div className="flex items-center gap-[6px]">
//               <span className="h-2 w-2 rounded-full bg-info-250" />
//               <span className="text-info-250 font-normal leading-6 tracking-[-0.176px] text-base">
//                 New
//               </span>
//             </div>
//           </div>

//           <h3 className="text-base clash-display-font text-black font-medium leading-7 tracking-[-0.176px] mb-1">
//             Growing transaction volume
//           </h3>
//         </div>

//         {/* Body */}
//         <div className="flex-1 overflow-y-auto scroll-smooth">
//           <div className="px-6">
//             <div className="text-sm text-primary-450 leading-6 tracking-[-0.154px] mb-3">
//               We have processed significantly more transactions, reinforcing
//               trust and reliability at scale. Join us on the road to{" "}
//               <span className="font-medium text-primary">$1B</span>.
//             </div>

//             <div className="relative w-full overflow-hidden">
//               <Image
//                 removeWrapper
//                 alt=""
//                 className="w-full h-full object-cover"
//                 src={VolumeBg2.src}
//               />
//             </div>

//             {!showMore && (
//               <div className="flex items-center justify-center gap-[22px] max-w-xs mx-auto py-[22px]">
//                 <Divider className="w-[70px] h-[1px]" />
//                 <button
//                   className="whitespace-nowrap mx-auto italic font-normal leading-5 tracking-[-0.084px] text-sm text-primary-400 hover:text-foreground"
//                   onClick={() => setShowMore(true)}
//                 >
//                   Read More
//                 </button>
//                 <Divider className="w-[70px]" />
//               </div>
//             )}

//             {showMore && (
//               <>
//                 <div className="space-y-6 mt-[38px] mb-7">
//                   <TimelineItem
//                     date="Nov 30"
//                     title="Regulatory approvals underway"
//                     description="Our IMTO licensing process is ongoing as part of our commitment to compliant operations in Nigeria."
//                   />

//                   <TimelineItem
//                     date="Nov 30"
//                     title="EMI licensing ongoing"
//                     description="Our EMI licensing process in the UK is ongoing, in line with regulatory requirements."
//                   />

//                   <TimelineItem
//                     date="Nov 30"
//                     title="Expanding into Canada"
//                     description="Our Canadian MSB license application is in progress as we continue to strengthen our global regulatory presence."
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//         {/* Footer */}
//         <div>
//           {showMore && (
//             <div className="flex items-start justify-center w-full mb-1">
//               <button
//                 className="mx-auto cursor-pointer text-xl hover:text-foreground text-primary-400"
//                 onClick={() => setShowMore(false)}
//               >
//                 <Icon icon="ri:arrow-up-double-line" />
//               </button>
//             </div>
//           )}

//           <div className="p-0 my-0 bg-[#F8FAFB] text-primary-450 flex items-center justify-center w-full text-[11px] py-4 shadow-[0_0_0_1px_var(--neutral-200,_#E1E4EA)] rounded-b-2xl text-center border-t-[0.5px]">
//             POWERED BY BACKBONE FINANCE INC
//           </div>
//         </div>

//         {/* Close */}
//         <button
//           onClick={closePanel}
//           className="absolute top-3 right-3 rounded-full p-2 hover:bg-background-200/50 bg-background-200"
//         >
//           <Icon icon="mdi:close" />
//         </button>
//       </div>
//     </>
//   );
// };

// export default AnnouncementPanel;


"use client";

import { useEffect, useRef, useState } from "react";
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
    <div className="flex items-stretch gap-4">
      <div className="flex flex-col items-center">
        <div className="h-[10px] w-[10px] rounded-full bg-foreground-100 dark:bg-foreground-400 my-2" />
        <div
          className="w-[2px] h-full rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(225,228,234,1) 0, rgba(225,228,234,1) 6px, transparent 6px, transparent 16px)",
          }}
        />
      </div>

      <div>
        <div className="text-primary-450 dark:text-foreground-300 font-normal text-xs leading-4 mb-2">
          {date}
        </div>

        <div className="text-black dark:text-foreground font-medium text-base clash-display-font leading-7 mb-2">
          {title}
        </div>

        <div className="text-primary-450 dark:text-foreground-300 font-normal text-sm leading-6 tracking-[-0.154px] mb-2">
          {description}
        </div>
      </div>
    </div>
  );
};

const STORAGE_KEY = "announcement_seen_v1";

const AnnouncementPanel = () => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const { showAnnouncement } = useSelector(
    (state: RootState) => state.settings
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const hasSeen = localStorage.getItem(STORAGE_KEY);

    if (!hasSeen) {
      dispatch(updateShowAnnouncement(true));
    }

    setIsOpen(showAnnouncement);
  }, [showAnnouncement, dispatch]);

  const closePanel = () => {
    setIsOpen(false);
    setShowMore(false);
    localStorage.setItem(STORAGE_KEY, "true");
    dispatch(updateShowAnnouncement(false));
  };

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className={`
        fixed z-[60]
        ${showMore ? "top-6" : "bottom-6"}
        right-6
        max-w-[472px] w-full
        bg-white dark:bg-background
        border border-neutral-200 dark:border-background-300
        rounded-2xl
        shadow-lg
        pointer-events-auto
        overflow-hidden
        max-h-[calc(100vh-48px)]
        mb-16
        flex flex-col

        max-sm:right-0
        max-sm:left-0
        max-sm:mx-auto
        max-sm:bottom-4
        max-sm:top-auto
        max-sm:w-[calc(100%-24px)]
        max-sm:max-h-[calc(80vh-48px)]
        max-sm:rounded-xl
        max-sm:mb-16
      `}
    >
      {/* Header */}
      <div className="flex flex-col gap-1 pb-0 px-6 pt-6">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-primary-450 dark:text-foreground-300 text-base font-normal leading-6 tracking-[-0.176px]">
            Dec 1
          </span>

          <div className="flex items-center gap-[6px]">
            <span className="h-2 w-2 rounded-full bg-info-250 dark:bg-info-600" />
            <span className="text-info-250 dark:text-info-600 font-normal leading-6 tracking-[-0.176px] text-base">
              New
            </span>
          </div>
        </div>

        <h3 className="text-base clash-display-font text-black dark:text-foreground font-medium leading-7 tracking-[-0.176px] mb-1">
          Growing transaction volume
        </h3>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto scroll-smooth">
        <div className="px-6">
          <div className="text-sm text-primary-450 dark:text-foreground-300 leading-6 tracking-[-0.154px] mb-3">
            We have processed significantly more transactions, reinforcing trust
            and reliability at scale. Join us on the road to{" "}
            <span className="font-medium text-primary">$1B</span>.
          </div>

          <div className="relative w-full overflow-hidden">
            <Image
              removeWrapper
              alt=""
              className="w-full h-full object-cover"
              src={VolumeBg2.src}
            />
          </div>

          {!showMore && (
            <div className="flex items-center justify-center gap-[22px] max-w-xs mx-auto py-[22px]">
              <Divider className="w-[70px] h-[1px]" />
              <button
                className="whitespace-nowrap mx-auto italic font-normal leading-5 tracking-[-0.084px] text-sm text-primary-400 dark:text-foreground-400 hover:text-foreground"
                onClick={() => setShowMore(true)}
              >
                Read More
              </button>
              <Divider className="w-[70px]" />
            </div>
          )}

          {showMore && (
            <div className="space-y-6 mt-[38px] mb-7">
              <TimelineItem
                date="Nov 30"
                title="Regulatory approvals underway"
                description="Our IMTO licensing process is ongoing as part of our commitment to compliant operations in Nigeria."
              />
              <TimelineItem
                date="Nov 30"
                title="EMI licensing ongoing"
                description="Our EMI licensing process in the UK is ongoing, in line with regulatory requirements."
              />
              <TimelineItem
                date="Nov 30"
                title="Expanding into Canada"
                description="Our Canadian MSB license application is in progress as we continue to strengthen our global regulatory presence."
              />
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div>
        {showMore && (
          <div className="flex items-start justify-center w-full mb-1">
            <button
              className="mx-auto cursor-pointer text-xl text-primary-400 dark:text-foreground-400 hover:text-foreground"
              onClick={() => setShowMore(false)}
            >
              <Icon icon="ri:arrow-up-double-line" />
            </button>
          </div>
        )}

        <div className="p-0 my-0 bg-[#F8FAFB] dark:bg-background-75 text-primary-450 dark:text-foreground-400 flex items-center justify-center w-full text-[11px] py-4 shadow-[0_0_0_1px_var(--neutral-200,_#E1E4EA)] dark:shadow-[0_0_0_1px_rgba(148,163,184,0.15)] rounded-b-2xl text-center border-t-[0.5px] dark:border-background-300">
          POWERED BY BACKBONE FINANCE INC
        </div>
      </div>

      {/* Close */}
      <button
        onClick={closePanel}
        className="absolute top-3 right-3 rounded-full p-2 bg-background-200 dark:bg-background-300 hover:bg-background-200/50 dark:hover:bg-background-400"
      >
        <Icon icon="mdi:close" />
      </button>
    </div>
  );
};

export default AnnouncementPanel;
