import {
  BackboneGlobilityIconD,
  BackboneGlobilityIconL,
  BackboneHarliviaIconD,
  BackboneHarliviaIconL,
  EnergyFinanceIconD,
  EnergyFinanceIconL,
  GlobalBankingIconD,
  GlobalBankingIconL,
  HomeFinanceIconD,
  HomeFinanceIconL,
  InvestmentIconD,
  InvestmentIconL,
  TradeFinanceIconD,
  TradeFinanceIconL,
} from "@/public/assets";

export const offerings = [
  {
    id: 0,
    title: "Global Banking",
    description:
      "We’ve reimagined banking to be simple, secure, and suited to your unique financial needs.",
    lightIcon: GlobalBankingIconL,
    darkIcon: GlobalBankingIconD,
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
    title: "Trade Finance",
    description:
      "Backbone gives you access to the capital and instruments you need to scale your business",
    lightIcon: TradeFinanceIconL,
    darkIcon: TradeFinanceIconD,
    comingSoon: false,
    generalLink: "/offerings/finance/trade",
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
          "A Letter of Credit protects both sides of the deal, ensuring payment only happens when terms are met.",
        link: null,
        linkText: null,
      },
      {
        title: "Invoice Financing",
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
    lightIcon: InvestmentIconL,
    darkIcon: InvestmentIconD,
    comingSoon: false,
    generalLink: "/offerings/investments",
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
    lightIcon: EnergyFinanceIconL,
    darkIcon: EnergyFinanceIconD,
    comingSoon: false,
    generalLink: "/offerings/finance/energy",
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
    lightIcon: HomeFinanceIconL,
    darkIcon: HomeFinanceIconD,
    comingSoon: false,
    generalLink: "/offerings/finance/property",
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
  {
    id: 5,
    title: "Backbone Harlivia",
    description:
      "Backbone Harlivia harmonises our efforts to advance Precision Agriculture, Agribusiness Finance, and inclusive Real Estate ownership across Africa.",
    lightIcon: BackboneHarliviaIconL,
    darkIcon: BackboneHarliviaIconD,
    comingSoon: true,
    generalLink: null,
    generalLinkText: null,
    details: [
      {
        title: "Backbone Agriculture",
        description:
          "Backbone Agriculture blends finance and precision agriculture to drive sustainable growth across the value chain. We help agribusinesses and investors improve yields, manage risk, and scale responsibly.",
        link: "/offerings/harlivia/agriculture",
        linkText: "Explore Backbone Agriculture",
      },
      {
        title: "Bricshare",
        description:
          "Brickshare lets you partner with friends, families, or trusted networks to invest in properties around the world. By pooling resources, you gain access to global real estate opportunities..",
        link: "/offerings/harlivia/bricshare",
        linkText: "Explore Bricshare",
      },
    ],
  },
  {
    id: 6,
    title: "Backbone Globility",
    description:
      "Backbone Globility integrates global banking, global mobility, and strategic investments to unlock access to emerging and high-growth markets—powering a truly global life.",
    lightIcon: BackboneGlobilityIconL,
    darkIcon: BackboneGlobilityIconD,
    comingSoon: true,
    generalLink: null,
    generalLinkText: null,
    details: [
      {
        title: "Orbis",
        description:
          "Orbis, from Backbone Globility, integrates global banking, global mobility, and strategic investments to unlock access to emerging and high-growth markets—powering a truly global life.",
        link: "/offerings/globility/orbis",
        linkText: "Explore Orbis",
      },
    ],
  },
];
