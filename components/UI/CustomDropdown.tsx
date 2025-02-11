"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const CustomDropdown = ({
  label,
  items,
  setIsMenuOpen,
}: {
  label: string;
  items: any[];
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const router = useRouter();

  const handleNav = (route: string) => {
    router.push(route);
    setIsOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        className="flex items-center justify-between   text-background rounded-lg transition-all"
        onClick={toggleDropdown}
      >
        {label}
        <Icon
          className={`ml-2 text-lg transition-transform ${isOpen ? "rotate-180" : ""}`}
          icon="ri:arrow-down-s-line"
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            animate={{ opacity: 1, y: 0 }}
            className="absolute bg-background border-foreground-200 z-10 mt-2 w-56 border rounded-lg shadow-lg text-foreground hover:bg-default-100 dark:hover:bg-default-50 "
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: -10 }}
          >
            <div className="text-xs  px-4  pt-2">
              Personal and Business Banking
            </div>
            {items.map((item: any, index: number) => (
              <li key={index}>
                <button
                  className=" w-full text-left px-4 py-2 hover:bg-gray-100 transition-all flex items-center space-x-6"
                  onClick={(e) => {
                    e.stopPropagation(), handleNav(item.href);
                  }}
                >
                  <Icon icon={item.icon} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdown;
