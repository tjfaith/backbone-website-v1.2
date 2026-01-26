// "use client";

// import { useTheme } from "next-themes";
// import { useIsSSR } from "@react-aria/ssr";
// import { Icon } from "@iconify/react";
// import { Button } from "@heroui/button";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
// } from "@heroui/dropdown";

// export interface ThemeSwitchProps {
//   className?: string;
// }

// const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
//   const { theme, setTheme } = useTheme();
//   const isSSR = useIsSSR();

//   const displayTheme = theme ?? "system";

//   const getIcon = () => {
//     if (displayTheme === "light") {
//       return <Icon className="text-base text-white" icon="ri:sun-fill" />;
//     }
//     if (displayTheme === "dark") {
//       return <Icon className="text-base text-background" icon="ri:moon-fill" />;
//     }

//     return (
//       <Icon
//         className={`text-base ${theme === "light:" ? "text-white" : "text-background"}`}
//         icon="ri:computer-fill"
//       />
//     );
//   };

//   const getLabel = () => {
//     if (displayTheme === "light") return "Light";
//     if (displayTheme === "dark") return "Dark";

//     return "System";
//   };

//   return (
//     <Dropdown placement="bottom-end">
//       <DropdownTrigger className="border-none p-0">
//         <Button
//           isIconOnly
//           aria-label={`Theme: ${getLabel()}`}
//           className={`gap-2 ${className}`}
//           radius="full"
//           size="sm"
//           variant="ghost"
//         >
//           {!isSSR && getIcon()}
//           <span className="hidden xs:inline text-sm">
//             {!isSSR && getLabel()}
//           </span>
//         </Button>
//       </DropdownTrigger>

//       <DropdownMenu
//         aria-label="Theme selector"
//         selectedKeys={[displayTheme]}
//         selectionMode="single"
//         onSelectionChange={(keys) => {
//           const value = Array.from(keys)[0] as string;

//           setTheme(value);
//         }}
//       >
//         <DropdownItem key="light" startContent={<Icon icon="ri:sun-fill" />}>
//           Light
//         </DropdownItem>

//         <DropdownItem key="dark" startContent={<Icon icon="ri:moon-fill" />}>
//           Dark
//         </DropdownItem>

//         <DropdownItem
//           key="system"
//           startContent={<Icon icon="ri:computer-fill" />}
//         >
//           System
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// };

// export default ThemeSwitch;



"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔥 ABSOLUTELY REQUIRED
  if (!mounted) return null;

  const displayTheme = theme ?? "system";

  const getIcon = () => {
    if (displayTheme === "light") {
      return <Icon className="text-base text-white" icon="ri:sun-fill" />;
    }
    if (displayTheme === "dark") {
      return (
        <Icon className="text-base text-background" icon="ri:moon-fill" />
      );
    }

    return (
      <Icon
        className="text-base text-background"
        icon="ri:computer-fill"
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
          aria-label={`Theme: ${getLabel()}`}
          className={`gap-2 ${className}`}
          radius="full"
          size="sm"
          variant="ghost"
        >
          {getIcon()}
          <span className="hidden xs:inline text-sm">
            {getLabel()}
          </span>
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Theme selector"
        selectedKeys={[displayTheme]}
        selectionMode="single"
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