import { Card } from "@heroui/card";
import { Icon } from "@iconify/react";
import React from "react";
import { motion } from "framer-motion";

import { useActiveSection } from "@/app/customHooks";

const ServiceTerms = () => {
  const sections = [
    { id: "terms-eligibility", label: "Eligibility" },
    { id: "terms-services", label: "Services Description" },
    {
      id: "terms-accounts",
      label: "Account Registration and Responsibilities",
    },
    { id: "terms-compliance", label: "Compliance and KYC/AML" },
    { id: "terms-intellectual", label: "Intellectual Property" },
    { id: "terms-prohibited", label: "Prohibited Activities" },
    { id: "terms-third-party", label: "Third-Party Services" },
    { id: "terms-termination", label: "Termination" },
    { id: "terms-disclaimer", label: "Disclaimer of Warranties" },
    { id: "terms-limitations", label: "Limitation of Liability" },
    { id: "terms-indemnity", label: "Indemnification" },
    {
      id: "terms-governing",
      label: "Governing Law and Jurisdiction",
    },
    { id: "terms-changes", label: "Modifications to Terms" },
    { id: "terms-contact", label: "Contact Information" },
  ];
  const activeId = useActiveSection(sections.map((s) => s.id));

  return (
    <div className="w-full max-w-none" id="terms-eligibility">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
        {/* Table of Contents - Sidebar */}
        <Card className="p-3 sm:p-4 h-fit xl:sticky top-20 order-2 xl:order-1 lg:mb-auto mb-20">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
            <Icon
              className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
              icon="lucide:file-text"
            />
            Table of Contents
          </h2>
          <nav className="relative space-y-1">
            {sections.map((item, index) => {
              const isActive = item.id === activeId;

              return (
                <a
                  key={item.id}
                  className="relative block px-3 py-2 rounded-md text-xs sm:text-sm font-medium text-primary-700 hover:bg-gray-100 dark:hover:text-background transition-colors"
                  href={`#${item.id}`}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 dark:bg-background/20 rounded-md z-[-1]"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{index + 1}</span>
                    <span className="leading-tight">{item.label}</span>
                  </div>
                </a>
              );
            })}
          </nav>
        </Card>

        {/* Content */}
        <div className="xl:col-span-3 order-1 xl:order-2">
          <div className="text-center mb-6 sm:mb-8 md:hidden block">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary-800 mb-3 sm:mb-4">
              Terms of Service
            </h1>
          </div>

          <Card className="p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="space-y-6 sm:space-y-8">
              {/* Welcome */}
              <section className="scroll-mt-44">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Welcome to Backbone Finance Inc.
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) govern your access
                  to and use of all products and services offered by Backbone
                  finance inc. (&quot;Backbone,&quot; &quot;we,&quot;
                  &quot;our,&quot; or &quot;us&quot;), including but not limited
                  to Backbone Finance and BackbonePay, through our website
                  (mybackbone.io), mobile applications, and related platforms
                  (collectively, the &quot;Services&quot;). By accessing or
                  using our Services, you agree to be bound by these Terms and
                  our Privacy Policy. If you do not agree, please do not use our
                  Services.
                </p>
              </section>

              {/* 1. Eligibility */}
              <section className=" ">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  1. Eligibility
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  You must be at least 18 years old and legally capable of
                  entering into a binding agreement to use our Services.
                </p>
              </section>

              {/* 2. Services Description */}
              <section className="scroll-mt-44" id="terms-services">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  2. Services Description
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Backbone provides financial technology products and services
                  including cross-border payments, foreign exchange (FX)
                  transaction processing, crypto-related services, payment
                  gateways, remittances, and other financial tools. These
                  services may be regulated under local laws, and users are
                  responsible for complying with their applicable jurisdictions.
                </p>
              </section>

              {/* 3. Account Registration and Responsibilities */}
              <section className="scroll-mt-44" id="terms-accounts">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  3. Account Registration and Responsibilities
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed mb-3">
                  To access certain features, you may be required to create an
                  account. You are responsible for maintaining the
                  confidentiality of your login information and for all
                  activities that occur under your account.
                </p>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  We reserve the right to suspend or terminate your account at
                  our discretion, especially in cases of fraud, non-compliance
                  with laws, or violation of these Terms.
                </p>
              </section>

              {/* 4. Compliance and KYC/AML */}
              <section className="scroll-mt-44" id="terms-compliance">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  4. Compliance and KYC/AML
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Users must comply with our KYC (Know Your Customer), AML
                  (Anti-Money Laundering), and CFT (Combating the Financing of
                  Terrorism) policies, which may require identity verification
                  and documentation. Failure to provide such information may
                  result in denial of access or termination of your account.
                </p>
              </section>

              {/* 5. Intellectual Property */}
              <section className="scroll-mt-44" id="terms-intellectual">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  All content, trademarks, and proprietary materials on our
                  platforms are owned or licensed by Backbone. You may not
                  reproduce, distribute, or modify any content without our
                  express written permission.
                </p>
              </section>

              {/* 6. Prohibited Activities */}
              <section className="scroll-mt-44" id="terms-prohibited">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  6. Prohibited Activities
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed mb-3">
                  You agree not to:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>Use our services for any unlawful purpose</li>
                  <li>Circumvent security measures</li>
                  <li>Submit false or misleading information</li>
                  <li>Engage in fraud or money laundering</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              {/* 7. Third-Party Services */}
              <section className="scroll-mt-44" id="terms-third-party">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  7. Third-Party Services
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Our platform may include links or integrations with
                  third-party services. We are not responsible for the content,
                  policies, or practices of such services.
                </p>
              </section>

              {/* 8. Termination */}
              <section className="scroll-mt-44" id="terms-termination">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  8. Termination
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  We may suspend or terminate your access to the Services
                  without prior notice if we believe you are violating these
                  Terms, applicable laws, or putting the company or its users at
                  risk.
                </p>
              </section>

              {/* 9. Disclaimer of Warranties */}
              <section className="scroll-mt-44" id="terms-disclaimer">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  9. Disclaimer of Warranties
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Our Services are provided &quot;as is&quot; and &quot;as
                  available.&quot; We do not warrant that they will be
                  error-free, secure, or uninterrupted. You use the Services at
                  your own risk.
                </p>
              </section>

              {/* 10. Limitation of Liability */}
              <section className="scroll-mt-44" id="terms-limitations">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  10. Limitation of Liability
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  To the fullest extent permitted by law, Backbone shall not be
                  liable for any indirect, incidental, punitive, or
                  consequential damages resulting from your use of our Services.
                </p>
              </section>

              {/* 11. Indemnification */}
              <section className="scroll-mt-44" id="terms-indemnity">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  11. Indemnification
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  You agree to indemnify and hold harmless Backbone, its
                  affiliates, and its employees from any claim, loss, or demand
                  arising from your use of the Services or your violation of
                  these Terms.
                </p>
              </section>

              {/* 12. Governing Law and Jurisdiction */}
              <section className="scroll-mt-44" id="terms-governing">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  12. Governing Law and Jurisdiction
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  These Terms are governed by the laws of the Federal Republic
                  of Nigeria. Any disputes shall be resolved in the courts of
                  Lagos State, Nigeria.
                </p>
              </section>

              {/* 13. Modifications to Terms */}
              <section className="scroll-mt-44" id="terms-changes">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  13. Modifications to Terms
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  We reserve the right to update these Terms at any time.
                  Changes will be posted on our website, and your continued use
                  constitutes acceptance of the modified Terms.
                </p>
              </section>

              {/* Contact Information */}
              <section className="scroll-mt-44" id="terms-contact">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Contact Information
                </h2>
                <div className="text-sm sm:text-base text-primary-700 leading-relaxed space-y-2">
                  <p>
                    <strong>Backbone Finance Inc.</strong>
                  </p>
                  <p>
                    <strong>Head Office:</strong> S.95, TBS, Race Course,
                    Onikan, Lagos Island, Lagos, Nigeria
                  </p>
                  <p>
                    <strong>Email Address:</strong> hello@mybackbone.io
                  </p>
                  <p>
                    <strong>Phone Number:</strong>{" "}
                    {process.env.NEXT_PUBLIC_NGN_NUMBER}
                  </p>
                </div>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceTerms;
