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
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const {
//     Component,
//     slots,
//     isSelected,
//     getBaseProps,
//     getInputProps,
//     getWrapperProps,
//   } = useSwitch({
//     isSelected: theme === "dark" && !isSSR,
//     "aria-label": `Switch mode`,
//     onChange,
//   });

//   return (
//     <Component
//       {...getBaseProps({
//         className: clsx(
//           "group inline-flex items-center cursor-pointer",
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
//               "relative flex items-center",
//               "w-14 h-8 px-1",
//               "rounded-full",
//               "bg-default-200 dark:bg-default-100",
//               "transition-colors duration-300",
//             ],
//             classNames?.wrapper,
//           ),
//         })}
//       >
//         {/* Sun Icon */}
//         <Icon
//           className={clsx(
//             "absolute left-2 text-xs transition-opacity duration-300",
//             isSelected ? "opacity-0" : "opacity-100 text-warning",
//           )}
//           icon="ri:sun-fill"
//         />

//         {/* Moon Icon */}
//         <Icon
//           className={clsx(
//             "absolute right-2 text-xs transition-opacity duration-300",
//             isSelected ? "opacity-100 text-primary" : "opacity-0",
//           )}
//           icon="ri:moon-fill"
//         />

//         {/* Sliding Knob */}
//         <span
//           className={clsx(
//             "absolute top-1 left-1",
//             "w-6 h-6 rounded-full",
//             "bg-white dark:bg-black",
//             "shadow-md",
//             "transition-transform duration-300 ease-out",
//             isSelected ? "translate-x-6" : "translate-x-0",
//           )}
//         />
//       </div>
//     </Component>
//   );
// };

// export default ThemeSwitch;
"use client";

import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";

export interface ThemeSwitchProps {
  className?: string;
}

const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const displayTheme = theme ?? "system";

  const getIcon = () => {
    if (displayTheme === "light") {
      return <Icon icon="ri:sun-fill" className="text-base text-white" />;
    }
    if (displayTheme === "dark") {
      return <Icon icon="ri:moon-fill" className="text-base text-background" />;
    }
    return (
      <Icon
        icon="ri:computer-fill"
        className={`text-base ${theme === "light:" ? "text-white" : "text-background"}`}
      />
    );
  };

  const getLabel = () => {
    if (displayTheme === "light") return "Light";
    if (displayTheme === "dark") return "Dark";
    return "System";
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger className="border-none p-0">
        <Button
          isIconOnly
          variant="ghost"
          size="sm"
          radius="full"
          className={`gap-2 ${className}`}
          aria-label={`Theme: ${getLabel()}`}
        >
          {!isSSR && getIcon()}
          <span className="hidden xs:inline text-sm">
            {!isSSR && getLabel()}
          </span>
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Theme selector"
        selectionMode="single"
        selectedKeys={[displayTheme]}
        onSelectionChange={(keys) => {
          const value = Array.from(keys)[0] as string;
          setTheme(value);
        }}
      >
        <DropdownItem key="light" startContent={<Icon icon="ri:sun-fill" />}>
          Light
        </DropdownItem>

        <DropdownItem key="dark" startContent={<Icon icon="ri:moon-fill" />}>
          Dark
        </DropdownItem>

        <DropdownItem
          key="system"
          startContent={<Icon icon="ri:computer-fill" />}
        >
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeSwitch;
