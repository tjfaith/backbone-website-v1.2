import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/modal";
import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import { ViewImageProps } from "@/types";
import { Icon } from "@iconify/react";


const ViewImage = ({ img, className }: ViewImageProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="relative group cursor-pointer  ">
        <button
          className={
            "absolute lg:h-full lg:w-full lg:inset-0 bottom-0 right-0   flex items-center justify-center z-20 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          }
          onClick={onOpen}
        >
          <div className="rounded-full p-2 bg-black/80">
            <Icon
              className="text-white lg:text-4xl text-xl"
              icon="ri:zoom-in-fill"
            />
          </div>
        </button>

        <Image
          disableAnimation
          disableSkeleton
          alt="cover image"
          className={cn(
            "transition-transform duration-300 ease-in-out group-hover:scale-105",
            className,
          )}
          src={img}
        />
      </div>

      <Modal
        className="bg-transparent shadow-none"
        classNames={{
          closeButton:
            "  font-bold text-foreground transition-all duration-300 ease-in-out bg-background absolute top-2 right-2",
        }}
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="rounded-none animate__animated animate__zoomIn animate__faster">
          {() => (
            <>
              <ModalHeader className="bg-transparent text-white mb-4 " />
              <ModalBody className=" ">
                <Image
                  disableAnimation
                  disableSkeleton
                  className="object-contain h-screen-70"
                  alt="image"
                  radius="none"
                  src={img}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewImage;
