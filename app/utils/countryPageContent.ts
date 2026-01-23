import {
  Exchange,
  Exchange10,
  Exchange2,
  Exchange3,
  Exchange4,
  Exchange5,
  Exchange6,
  Exchange7,
  Exchange8,
  Exchange9,
  Hero1,
  Hero10,
  Hero11,
  Hero12,
  Hero13,
  Hero14,
  Hero15,
  Hero16,
  Hero17,
  Hero2,
  Hero3,
  Hero4,
  Hero5,
  Hero6,
  Meeting,
  Meeting2,
  Meeting3,
  Meeting4,
  Meeting5,
  Meeting6,
  Meeting7,
  Meeting8,
  Meeting9,
  Pattern2,
  Pattern4,
  Pattern5,
  Pattern6,
  Pattern7,
  Pattern8,
  Pattern9,
  Meeting10,
  TransactionIcon,
  TransactionIcon2,
  TransactionIcon3,
  TransactionIcon4,
  TransactionIcon5,
  TransactionIcon6,
  TransactionIcon7,
  TransactionIcon8,
  TransactionIcon9,
  WhyBB1,
  WhyBB10,
  WhyBB11,
  WhyBB12,
  WhyBB13,
  WhyBB14,
  WhyBB15,
  WhyBB16,
  WhyBB17,
  WhyBB18,
  WhyBB19,
  WhyBB2,
  WhyBB20,
  WhyBB21,
  WhyBB4,
  WhyBB5,
  WhyBB6,
  WhyBB7,
  WhyBB8,
  WhyBB9,
  Hero18,
} from "@/public/assets";

export interface CountryPageContent {
  code: string;
  homePage: HomePageContent;
}

export interface HomePageContent {
  heroSection: HeroSection;
  whyBackbone1: {
    img1Class?: string;
    img2Class?: string;
    img: string[];
    expensesCardValue: string;
    exchange: string;
  };
  joinUs: {
    joinUsIndividual: {
      pattern: string;
      tabClass: string;
      tabBgColor: string;
      contentBgColor: string;
      textColor: string;
      bodyColor: string;
    };
  };
  whyBackbone2: {
    totalProcessTransaction: string;
    totalSecureTransaction: string;
  };
  whyBackbone3: {
    className?: string;
    img: string;
  };
}

export interface HeroSection {
  heroContent: HeroContent;
  heroImage: string[];
  heroImageClass?: string;
  successToast: string[];
}

export interface HeroContent {
  tagLogo: string;
  contentHeading: string;
  contentBody: string;
}

export const countryPageContent: Record<string, CountryPageContent> = {
  NG: {
    code: "NG",
    homePage: {
      heroSection: {
        heroContent: {
          tagLogo: "emojione:flag-for-nigeria",
          contentHeading: "Powering payments that unlock global opportunities",
          contentBody:
            "We connect individuals, businesses, and nonprofits to a seamless global payment solution, spanning over 150 countries worldwide.",
        },
        heroImage: [
          Hero1.src,
          Hero2.src,
          Hero3.src,
          Hero4.src,
          Hero5.src,
          Hero6.src,
        ],
        successToast: [TransactionIcon.src],
      },
      joinUs: {
        joinUsIndividual: {
          pattern: Pattern2,
          tabClass:
            "group-data-[selected=true]:text-[#1F7EAD] group-data-[selected=true]:bg-white dark:group-data-[selected=true]:bg-background-100",
          tabBgColor: "bg-info-250 dark:bg-info-200",
          contentBgColor: "bg-[#D5F1FF] dark:bg-background-200",
          textColor: "text-[#2597D0] dark:text-info-300",
          bodyColor: "text-[#124B68] dark:text-foreground-50",
        },
      },
      whyBackbone1: {
        img: [WhyBB1.src, WhyBB2.src],
        expensesCardValue: "$24,000",
        exchange: Exchange.src,
      },
      whyBackbone2: {
        totalProcessTransaction: "$ 837,287.19",
        totalSecureTransaction: "$ 837,287.19",
      },
      whyBackbone3: { img: Meeting.src },
    },
  },
  TZ: {
    code: "TZ",
    homePage: {
      heroSection: {
        heroContent: {
          tagLogo: "emojione:flag-for-tanzania",
          contentHeading:
            "Enjoy global payments possibilities built for Tanzania",
          contentBody:
            "We connect individuals, businesses, and nonprofits in Tanzania to a seamless global payment solution, spanning over 150 countries worldwide.",
        },
        heroImage: [Hero10.src],
        successToast: [TransactionIcon2.src],
      },
      joinUs: {
        joinUsIndividual: {
          pattern: Pattern2,
          tabClass:
            "group-data-[selected=true]:text-[#1F7EAD] group-data-[selected=true]:bg-white dark:group-data-[selected=true]:bg-background-100",
          tabBgColor: "bg-info-250 dark:bg-info-200",
          contentBgColor: "bg-[#D5F1FF] dark:bg-background-200",
          textColor: "text-[#2597D0] dark:text-info-300",
          bodyColor: "text-[#124B68] dark:text-foreground-50",
        },
      },
      whyBackbone1: {
        img1Class: "object-[50%_35px]",
        img: [WhyBB4.src, WhyBB5.src],
        expensesCardValue: "$24,000",
        exchange: Exchange2.src,
      },
      whyBackbone2: {
        totalProcessTransaction: "$ 837,287.19",
        totalSecureTransaction: "$ 837,287.19",
      },
      whyBackbone3: { img: Meeting2.src },
    },
  },
  GH: {
    code: "GH",
    homePage: {
      heroSection: {
        heroContent: {
          tagLogo: "emojione:flag-for-ghana",
          contentHeading: "Enjoy global payments possibilities built for Ghana",
          contentBody:
            "We connect individuals, businesses, and nonprofits in Ghana to a seamless global payment solution, spanning over 150 countries worldwide.",
        },
        heroImage: [Hero11.src],
        successToast: [TransactionIcon3.src],
      },
      joinUs: {
        joinUsIndividual: {
          pattern: Pattern4,
          tabClass:
            "group-data-[selected=true]:text-[#7D52F4] " +
            "group-data-[selected=true]:bg-white " +
            "dark:group-data-[selected=true]:bg-[#1E1B2E] " +
            "dark:group-data-[selected=true]:text-[#C4B5FD]",

          tabBgColor: "bg-[#7D52F4] dark:bg-[#4C3FB3]",

          contentBgColor: "bg-[#DCD5FF] dark:bg-[#2A244D]",

          textColor: "text-[#5B2CC9] dark:text-[#C4B5FD]",

          bodyColor: "text-[#351A75] dark:text-[#E0D7FF]",
        },
      },
      whyBackbone1: {
        img2Class: "object-[50%_62%]",
        img: [WhyBB6.src, WhyBB7.src],
        expensesCardValue: "¢24,000",
        exchange: Exchange3.src,
      },
      whyBackbone2: {
        totalProcessTransaction: "¢ 837,287.19",
        totalSecureTransaction: "¢ 837,287.19",
      },
      whyBackbone3: { className: " object-[50%_-130px]", img: Meeting3.src },
    },
  },
  UG: {
    code: "UG",
    homePage: {
      heroSection: {
        heroContent: {
          tagLogo: "emojione:flag-for-uganda",
          contentHeading:
            "Enjoy global payments possibilities built for Uganda",
          contentBody:
            "We connect individuals, businesses, and nonprofits in Uganda to a seamless global payment solution, spanning over 150 countries worldwide.",
        },
        heroImage: [Hero12.src],
        heroImageClass: "object-top",
        successToast: [TransactionIcon4.src],
      },
      joinUs: {
        joinUsIndividual: {
          pattern: Pattern5,

          tabClass:
            "group-data-[selected=true]:text-[#F6B51E] " +
            "group-data-[selected=true]:bg-white " +
            "dark:group-data-[selected=true]:bg-[#2A1F0A] " +
            "dark:group-data-[selected=true]:text-[#FFE08A]",

          tabBgColor: "bg-[#F6B51E] dark:bg-[#8A6A1F]",

          contentBgColor: "bg-[#FFEFCC] dark:bg-[#33260D]",

          textColor: "text-[#C99A2C] dark:text-[#FFD966]",

          bodyColor: "text-[#624C18] dark:text-[#FFF1C1]",
        },
      },
      whyBackbone1: {
        img1Class: "object-[50%_-12%]",
        img: [WhyBB8.src, WhyBB9.src],
        expensesCardValue: "UGX24,000",
        exchange: Exchange4.src,
      },
      whyBackbone2: {
        totalProcessTransaction: "UGX 837,287.19",
        totalSecureTransaction: "UGX 837,287.19",
      },
      whyBackbone3: {
        className: "object-[50%_25%] scale-110",
        img: Meeting4.src,
      },
    },
  },
  KE: {
    code: "KE",
    homePage: {
      heroSection: {
        heroContent: {
          tagLogo: "emojione:flag-for-kenya",
          contentHeading: "Enjoy global payments possibilities built for Kenya",
          contentBody:
            "We connect individuals, businesses, and nonprofits in Kenya to a seamless global payment solution, spanning over 150 countries worldwide.",
        },
        heroImage: [Hero13.src],
        successToast: [TransactionIcon5.src],
      },
      joinUs: {
        joinUsIndividual: {
          pattern: Pattern6.src,

          tabClass:
            "group-data-[selected=true]:text-[#22D3BB] " +
            "group-data-[selected=true]:bg-white " +
            "dark:group-data-[selected=true]:bg-[#0F2E2B] " +
            "dark:group-data-[selected=true]:text-[#5EEAD4]",

          tabBgColor: "bg-[#22D3BB] dark:bg-[#0F766E]",

          contentBgColor: "bg-[#D0FBF5] dark:bg-[#0A2F2A]",

          textColor: "text-[#178C7D] dark:text-[#5EEAD4]",

          bodyColor: "text-[#0B463E] dark:text-[#CFFAFE]",
        },
      },
      whyBackbone1: {
        img1Class: "object-[-15px_15%] scale-150",
        img2Class: "object-[50%_36%]",
        img: [WhyBB10.src, WhyBB11.src],
        expensesCardValue: "KSh24,000",
        exchange: Exchange5.src,
      },
      whyBackbone2: {
        totalProcessTransaction: "KSh 837,287.19",
        totalSecureTransaction: "KSh 837,287.19",
      },
      whyBackbone3: {
        className: "object-[50%_15%] scale-125",
        img: Meeting5.src,
      },
    },
  },
  CM: {
    code: "CM",
    homePage: {
      heroSection: {
        heroContent: {
          tagLogo: "emojione:flag-for-cameroon",
          contentHeading:
            "Enjoy global payments possibilities built for Cameroon",
          contentBody:
            "We connect individuals, businesses, and nonprofits in Cameroon to a seamless global payment solution, spanning over 150 countries worldwide.",
        },
        heroImage: [Hero14.src],
        heroImageClass: "object-top",
        successToast: [TransactionIcon6.src],
      },
      joinUs: {
        joinUsIndividual: {
          pattern: Pattern7.src,

          tabClass:
            "group-data-[selected=true]:text-[#1FC16B] " +
            "group-data-[selected=true]:bg-white " +
            "dark:group-data-[selected=true]:bg-[#0B2E1E] " +
            "dark:group-data-[selected=true]:text-[#6EE7B7]",

          tabBgColor: "bg-[#1FC16B] dark:bg-[#047857]",

          contentBgColor: "bg-[#D0FBE9] dark:bg-[#0A2A1D]",

          textColor: "text-[#178C4E] dark:text-[#6EE7B7]",

          bodyColor: "text-[#0B4627] dark:text-[#D1FAE5]",
        },
      },
      whyBackbone1: {
        img1Class: "object-[50%_-22%]",
        img: [WhyBB12.src, WhyBB13.src],
        expensesCardValue: "XAF24,000",
        exchange: Exchange6.src,
      },
      whyBackbone2: {
        totalProcessTransaction: "XAF 837,287.19",
        totalSecureTransaction: "XAF 837,287.19",
      },
      whyBackbone3: {
        className: "object-[50%_5%] scale-105",
        img: Meeting6.src,
      },
    },
  },
  SL: {
    code: "SL",
    homePage: {
      heroSection: {
        heroContent: {
          tagLogo: "emojione:flag-for-sierra-leone",
          contentHeading:
            "Enjoy global payments possibilities built for Sierra Leone",
          contentBody:
            "We connect individuals, businesses, and nonprofits in Sierra Leone to a seamless global payment solution, spanning over 150 countries worldwide.",
        },
        heroImage: [Hero15.src],
        heroImageClass: "object-top",
        successToast: [TransactionIcon7.src],
      },
      joinUs: {
        joinUsIndividual: {
          pattern: Pattern8.src,

          tabClass:
            "group-data-[selected=true]:text-[#335CFF] " +
            "group-data-[selected=true]:bg-white " +
            "dark:group-data-[selected=true]:bg-[#0F1E4A] " +
            "dark:group-data-[selected=true]:text-[#A5B4FC]",

          tabBgColor: "bg-[#335CFF] dark:bg-[#1E3A8A]",

          contentBgColor: "bg-[#D5E2FF] dark:bg-[#0B1437]",

          textColor: "text-[#2547D0] dark:text-[#A5B4FC]",

          bodyColor: "text-[#122368] dark:text-[#E0E7FF]",
        },
      },
      whyBackbone1: {
        img1Class: "object-[50%_32%]",
        img2Class: "object-[50%_5%] scale-125",
        img: [WhyBB14.src, WhyBB15.src],
        expensesCardValue: "SLE24,000",
        exchange: Exchange7.src,
      },
      whyBackbone2: {
        totalProcessTransaction: "SLE 837,287.19",
        totalSecureTransaction: "SLE 837,287.19",
      },
      whyBackbone3: {
        className: "object-[50%_25%] scale-105",
        img: Meeting7.src,
      },
    },
  },
  BJ: {
    code: "BJ",
    homePage: {
      heroSection: {
        heroContent: {
          tagLogo: "emojione:flag-for-benin",
          contentHeading: "Enjoy global payments possibilities built for Benin",
          contentBody:
            "We connect individuals, businesses, and nonprofits in Benin to a seamless global payment solution, spanning over 150 countries worldwide.",
        },
        heroImage: [Hero18.src],
        heroImageClass: "object-top",
        successToast: [TransactionIcon8.src],
      },
      joinUs: {
        joinUsIndividual: {
          pattern: Pattern9.src,

          tabClass:
            "group-data-[selected=true]:text-[#FB4BA3] " +
            "group-data-[selected=true]:bg-white " +
            "dark:group-data-[selected=true]:bg-[#2A0F1E] " +
            "dark:group-data-[selected=true]:text-[#FDA4D3]",

          tabBgColor: "bg-[#FB4BA3] dark:bg-[#BE185D]",

          contentBgColor: "bg-[#FFD5EA] dark:bg-[#240A17]",

          textColor: "text-[#D0257A] dark:text-[#FDA4D3]",

          bodyColor: "text-[#68123D] dark:text-[#FCE7F3]",
        },
      },
      whyBackbone1: {
        img1Class: "object-[50%_15%]",
        img2Class: "object-[50%_30%]",
        img: [WhyBB16.src, WhyBB17.src],
        expensesCardValue: "XOF 24,000",
        exchange: Exchange8.src,
      },
      whyBackbone2: {
        totalProcessTransaction: "XOF 837,287.19",
        totalSecureTransaction: "XOF 837,287.19",
      },
      whyBackbone3: {
        className: "object-[50%_30%] scale-105",
        img: Meeting8.src,
      },
    },
  },

  CI: {
    code: "CI",
    homePage: {
      heroSection: {
        heroContent: {
          tagLogo: "emojione:flag-for-cote-divoire",
          contentHeading:
            "Enjoy global payments possibilities built for Côte d'Ivoire",
          contentBody:
            "We connect individuals, businesses, and nonprofits in Côte d'Ivoire to a seamless global payment solution, spanning over 150 countries worldwide..",
        },
        heroImage: [Hero16.src],
        successToast: [TransactionIcon9.src],
      },
      joinUs: {
        joinUsIndividual: {
          pattern: Pattern2,
          tabClass:
            "group-data-[selected=true]:text-[#1F7EAD] group-data-[selected=true]:bg-white dark:group-data-[selected=true]:bg-background-100",
          tabBgColor: "bg-info-250 dark:bg-info-200",
          contentBgColor: "bg-[#D5F1FF] dark:bg-background-200",
          textColor: "text-[#2597D0] dark:text-info-300",
          bodyColor: "text-[#124B68] dark:text-foreground-50",
        },
      },
      whyBackbone1: {
        img1Class: "object-[50%_5%] scale-100",
        img2Class: "scale-125 object-[50%_-16%]",
        img: [WhyBB18.src, WhyBB19.src],
        expensesCardValue: "XOF 24,000",
        exchange: Exchange9.src,
      },
      whyBackbone2: {
        totalProcessTransaction: "XOF 837,287.19",
        totalSecureTransaction: "XOF 837,287.19",
      },
      whyBackbone3: {
        className: "object-[50%_-10%] scale-150",
        img: Meeting9.src,
      },
    },
  },

  ZA: {
    code: "ZA",
    homePage: {
      heroSection: {
        heroContent: {
          tagLogo: "emojione:flag-for-south-africa",
          contentHeading:
            "Enjoy global payments possibilities built for South Africa",
          contentBody:
            "We connect individuals, businesses, and nonprofits in South Africa to a seamless global payment solution, spanning over 150 countries worldwide.",
        },
        heroImage: [Hero17.src],
        heroImageClass: "object-top",
        successToast: [TransactionIcon9.src],
      },
      joinUs: {
        joinUsIndividual: {
          pattern: Pattern2,
          tabClass:
            "group-data-[selected=true]:text-[#1F7EAD] group-data-[selected=true]:bg-white dark:group-data-[selected=true]:bg-background-100",
          tabBgColor: "bg-info-250 dark:bg-info-200",
          contentBgColor: "bg-[#D5F1FF] dark:bg-background-200",
          textColor: "text-[#2597D0] dark:text-info-300",
          bodyColor: "text-[#124B68] dark:text-foreground-50",
        },
      },
      whyBackbone1: {
        img1Class: "object-[50%_32%]",
        img: [WhyBB20.src, WhyBB21.src],
        expensesCardValue: "XOF 24,000",
        exchange: Exchange10.src,
      },
      whyBackbone2: {
        totalProcessTransaction: "ZAR 837,287.19",
        totalSecureTransaction: "ZAR 837,287.19",
      },
      whyBackbone3: {
        className: "object-[50%_25%] scale-105",
        img: Meeting10.src,
      },
    },
  },
};
