import { ComingSoonBadge } from "@/components";
import {
  EnergyFinanceActive,
  EnergyFinanceInActive,
  EnergyFinanceOpen,
  GlobalBankingActive,
  GlobalBankingInActive,
  GlobalBankingOpen,
  HomeFinanceInActive,
  HomeFinanceActive,
  HomeFinanceOpen,
  InvestmentsActive,
  InvestmentsInActive,
  InvestmentsOpen,
  TradeFinanceActive,
  TradeFinanceInActive,
  TradeFinanceOpen,
} from "@/public/assets";

export const offerings = [
  {
    id: 0,
    title: "Global Banking",
    description:
      "We’ve reimagined banking to be simple, secure, and suited to your unique financial needs.",
    icon: GlobalBankingInActive,
    activeIcon: GlobalBankingActive,
    coverIcon: GlobalBankingOpen,
    active: true,
    comingSoon: false,
    generalLink: null,
    generalLinkText: null,
    details: [
      {
        title: "Global Personal Banking",
        description:
          "Manage your everyday finances with confidence. Our personal banking services empower you to save, spend, invest, and transact effortlessly anywhere in the world.",
        link: "/offerings/individual",
        linkText: "Explore Personal Banking",
      },
      {
        title: "Global Corporate Banking",
        description:
          "Our dedicated solutions help your business operate at its best. Focus on growth while we take care of your global financial operations.",
        link: "/offerings/businesses",
        linkText: "Explore Corporate Banking",
      },
    ],
  },
  {
    id: 1,
    title: "Trade finance",
    description:
      "Backbone gives you access to the capital and instruments you need to scale your business",
    icon: TradeFinanceInActive,
    activeIcon: TradeFinanceActive,
    coverIcon: TradeFinanceOpen,
    active: false,
    comingSoon: ComingSoonBadge,
    generalLink: "offerings/trade-finance",
    generalLinkText: "Explore Trade Finance",
    details: [
      {
        title: "Bank Guarantee",
        description:
          "A bank guarantee from Backbone gives your customers the confidence to trust you without tying up your working capital.",
        link: null,
        linkText: null,
      },
      {
        title: "Letter of Credit",
        description:
          "Get your business or project moving by financing your unpaid invoices through Backbone.",
        link: null,
        linkText: null,
      },
      {
        title: "Overdraft",
        description:
          "Access extra funds instantly to cover short-term gaps and keep things moving smoothly.",
        link: null,
        linkText: null,
      },
    ],
  },
  {
    id: 2,
    title: "Investments",
    description:
      "Invest easily, earn steadily. Discover flexible options built to match your goals.",
    icon: InvestmentsInActive,
    activeIcon: InvestmentsActive,
    coverIcon: InvestmentsOpen,
    active: false,
    comingSoon: ComingSoonBadge,
    generalLink: "offerings/investments",
    generalLinkText: "Explore Investments",
    details: [
      {
        title: "Grow your money with ease",
        description:
          "Start investing with confidence. Backbone gives you access to simple, secure investment options that help your money grow overtime. No guesswork, no stress.",
        link: null,
        linkText: null,
      },
    ],
  },
  {
    id: 3,
    title: "Energy Finance",
    description:
      "Access flexible financing for energy solutions that keep your home and business running.",
    icon: EnergyFinanceInActive,
    activeIcon: EnergyFinanceActive,
    coverIcon: EnergyFinanceOpen,
    active: false,
    comingSoon: ComingSoonBadge,
    generalLink: "offerings/energy-finance",
    generalLinkText: "Explore Energy Finance",
    details: [
      {
        title: "Stay powered without the pressure",
        description:
          "Light up your home and business with affordable energy financing. Get what you need now, and pay in flexible and manageable installments.",
        link: null,
        linkText: null,
      },
    ],
  },
  {
    id: 4,
    title: "Home Finance",
    description:
      "Access rent and home payment support, and pay at your pace with Backbone.",
    icon: HomeFinanceInActive,
    activeIcon: HomeFinanceActive,
    coverIcon: HomeFinanceOpen,
    active: false,
    comingSoon: ComingSoonBadge,
    generalLink: "offerings/home-finance",
    generalLinkText: "Explore Home Finance",
    details: [
      {
        title: "Rent Finance",
        description:
          "Backbone helps cover your rent upfront so you can move in now and repay overtime.",
        link: null,
        linkText: null,
      },
      {
        title: "Property Finance",
        description:
          "With Backbone, you can purchase your dream home and pay back in flexible terms that suit your budget and lifestyle.",
        link: null,
        linkText: null,
      },
    ],
  },
];
