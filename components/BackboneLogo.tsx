// "use client";
// import React from "react";
// import { useTheme } from "next-themes";
// import { Image } from "@heroui/image";
// import { useIsSSR } from "@react-aria/ssr";

// import { FullLogo, FullLogoDark } from "@/public/assets";

// interface Props {
//   showDarkLogo?: boolean;
// }
// const BackboneLogo = ({ showDarkLogo }: Props) => {
//   const { theme } = useTheme();
//   const isSSR = useIsSSR();

//   return (
//     <>
//       {showDarkLogo && (theme === "light" || isSSR) ? (
//         <Image
//           alt="logo2"
//           className=" outline-none"
//           radius="none"
//           src={FullLogoDark.src}
//           width={220}
//         />
//       ) : (
//         <Image
//           alt="logo"
//           className=" outline-none"
//           radius="none"
//           src={FullLogo.src}
//           width={220}
//         />
//       )}
//     </>
//   );
// };

// export default BackboneLogo;


"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Image } from "@heroui/image";

import { FullLogo, FullLogoDark } from "@/public/assets";

interface Props {
  showDarkLogo?: boolean;
}

const BackboneLogo = ({ showDarkLogo }: Props) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent SSR/client mismatch
  if (!mounted) {
    return null;
  }

  const shouldUseDarkLogo =
    showDarkLogo && theme === "light";

  return (
    <Image
      alt="logo"
      className="outline-none"
      radius="none"
      src={(shouldUseDarkLogo ? FullLogoDark : FullLogo).src}
      width={220}
    />
  );
};

export default BackboneLogo;