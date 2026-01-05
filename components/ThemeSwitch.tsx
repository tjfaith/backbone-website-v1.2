// "use client";

// import { VisuallyHidden } from "@react-aria/visually-hidden";
// import { SwitchProps, useSwitch } from "@heroui/switch";
// import { useTheme } from "next-themes";
// import { useIsSSR } from "@react-aria/ssr";
// import clsx from "clsx";
// import { Icon } from "@iconify/react";

// export interface ThemeSwitchProps {
//   className?: string;
//   classNames?: SwitchProps["classNames"];
// }

// const ThemeSwitch = ({ className, classNames }: ThemeSwitchProps) => {
//   const { theme, setTheme } = useTheme();
//   const isSSR = useIsSSR();

//   const onChange = () => {
//     theme === "light" ? setTheme("dark") : setTheme("light");
//   };

//   const {
//     Component,
//     slots,
//     isSelected,
//     getBaseProps,
//     getInputProps,
//     getWrapperProps,
//   } = useSwitch({
//     isSelected: theme === "light" || isSSR,
//     "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
//     onChange,
//   });

//   return (
//     <Component
//       {...getBaseProps({
//         className: clsx(
//           "px-px transition-opacity hover:opacity-80 cursor-pointer",
//           className,
//           classNames?.base,
//         ),
//       })}
//     >
//       <VisuallyHidden>
//         <input {...getInputProps()} />
//       </VisuallyHidden>
//       <div
//         {...getWrapperProps()}
//         className={slots.wrapper({
//           class: clsx(
//             [
//               "w-auto h-auto",
//               "bg-transparent",
//               "rounded-lg",
//               "flex items-center justify-center",
//               "group-data-[selected=true]:bg-transparent",
//               "!text-default-500",
//             ],
//             classNames?.wrapper,
//           ),
//         })}
//       >
//         {!isSelected || isSSR ? (
//           <Icon className="text-background" icon="ri:sun-fill" />
//         ) : (
//           <Icon className="text-background" icon="ri:moon-fill" />
//         )}
//       </div>
//     </Component>
//   );
// };

// export default ThemeSwitch;

"use client";

import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";
import { Icon } from "@iconify/react";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

const ThemeSwitch = ({ className, classNames }: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "dark" && !isSSR,
    "aria-label": `Switch mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "group inline-flex items-center cursor-pointer",
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "relative flex items-center",
              "w-14 h-8 px-1",
              "rounded-full",
              "bg-default-200 dark:bg-default-100",
              "transition-colors duration-300",
            ],
            classNames?.wrapper
          ),
        })}
      >
        {/* Sun Icon */}
        <Icon
          icon="ri:sun-fill"
          className={clsx(
            "absolute left-2 text-xs transition-opacity duration-300",
            isSelected ? "opacity-0" : "opacity-100 text-warning"
          )}
        />

        {/* Moon Icon */}
        <Icon
          icon="ri:moon-fill"
          className={clsx(
            "absolute right-2 text-xs transition-opacity duration-300",
            isSelected ? "opacity-100 text-primary" : "opacity-0"
          )}
        />

        {/* Sliding Knob */}
        <span
          className={clsx(
            "absolute top-1 left-1",
            "w-6 h-6 rounded-full",
            "bg-white dark:bg-black",
            "shadow-md",
            "transition-transform duration-300 ease-out",
            isSelected ? "translate-x-6" : "translate-x-0"
          )}
        />
      </div>
    </Component>
  );
};

export default ThemeSwitch;
