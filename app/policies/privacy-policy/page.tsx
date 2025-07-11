"use client";
import { Card } from "@heroui/card";
import { Icon } from "@iconify/react";
import React from "react";
import { motion } from "framer-motion";

import { useActiveSection } from "@/app/customHooks";

const PrivacyPolicy = () => {
  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "objective", label: "Objective" },
    { id: "scope", label: "Scope and Applicability" },
    { id: "interpretation", label: "Interpretation" },
    { id: "policy", label: "Policy" },
    {
      id: "responsibility",
      label: "Responsibility of Data Subject",
    },
    { id: "consent", label: "Consent" },
    { id: "processing", label: "Use/Processing of Data" },
    { id: "disclosure", label: "Third-Party Disclosure" },
    { id: "rights", label: "Data Confidentiality Rights" },
    { id: "cookies", label: "Cookies" },
  ];

  const activeId = useActiveSection(sections.map((s) => s.id));

  return (
    <div className="w-full max-w-none scroll-mt-44" id="introduction">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
        {/* Table of Contents - Sidebar */}
        <Card className="p-3 sm:p-4 h-fit xl:sticky top-20 order-2 xl:order-1  lg:mb-auto mb-20">
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
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary-200 mb-3 sm:mb-4">
              Data Privacy Policy
            </h1>
          </div>

          <Card className="p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="space-y-6 sm:space-y-8">
              {/* Introduction */}
              <section className="">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  1. Introduction
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  This Privacy Policy is developed by Backbone Finance Inc. (the
                  Company) in compliance with the Nigerian Data Protection
                  Regulation 2019 and other similar regulations as well as a
                  demonstration of the Company&apos;s commitment to provide its
                  customers and other stakeholders with highest level of
                  protection of their personal data obtained in the course of
                  interacting with the Company.
                </p>
              </section>

              {/* Objective */}
              <section className="scroll-mt-44" id="objective">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  2. Objective
                </h2>
                <p className="text-sm sm:text-base text-primary-700 mb-2 leading-relaxed">
                  This Privacy Policy has been put in place to:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>
                    Inform data subjects about their rights, responsibilities,
                    and privileges.
                  </li>
                  <li>
                    Ensure the protection of Client and other Stakeholder&apos;s
                    information.
                  </li>
                  <li>To ensure confidentiality as much as possible.</li>
                  <li>Take corrective action if wrongdoing is discovered.</li>
                </ul>
              </section>

              {/* Scope and Applicability */}
              <section className="scroll-mt-44" id="scope">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  3. Scope and Applicability
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  This Policy applies to all employees, clients and stakeholders
                  of the Company. This policy highlights the basis on which
                  personal data collected from Clients and other stakeholders
                  shall be processed by the Company. This policy applies to the
                  Company&apos;s website and physical contact with the Company
                  regardless of how you access or use them. By continuing to
                  visit our website, users of the website accepts and consent to
                  the practices described in this policy.
                </p>
              </section>

              {/* Ownership, Review and Approval */}
              <section className="scroll-mt-44">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  4. Ownership, Review and Approval
                </h2>
                <p className="text-sm sm:text-base text-primary-700 mb-3 sm:mb-4 leading-relaxed">
                  The Head of Data Protection shall be responsible for the
                  development and maintenance of the data protection policy. The
                  policy shall be reviewed periodically in line with the
                  provisions of extant Data Protection laws.
                </p>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Final approval of this policy lies with the Managing Director
                  of the Company.
                </p>
              </section>

              {/* Interpretation */}
              <section className="scroll-mt-44" id="interpretation">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  5. Interpretation
                </h2>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-primary-700">
                  <li>
                    <strong>i. Personal Data:</strong> This means any
                    information relating to an identified or identifiable
                    natural persons (Data Subject); an identifiable natural
                    person is one who can be identified, directly or indirectly.
                  </li>
                  <li>
                    <strong>ii. Data Subject:</strong> This refers to all person
                    who can be identified, directly or indirectly, via an
                    identifier such as a name, an ID Number, Location data, etc.
                  </li>
                  <li>
                    <strong>
                      iii. Personal Identifiable Information (PII):
                    </strong>{" "}
                    This means information that can be used on its own or with
                    other information to identify, contact or locate a single
                    person, or to identify an individual In a context.
                  </li>
                  <li>
                    <strong>iv. Processing:</strong> This means any operation or
                    set of operations which is performed on personal data or
                    sets of personal data, whether or not by automated means,
                    such as collection, recording, use, disclosure by
                    transmission, etc.
                  </li>
                </ul>
              </section>

              {/* Policy */}
              <section className="scroll-mt-44" id="policy">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  6. Policy
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  This Privacy Policy describes your privacy rights with respect
                  to personal information which the Company may collect, use,
                  store, or otherwise process when you engage our services. It
                  applies to the Company&apos;s website and all database,
                  applications, services, products, and physical contact with
                  us, regardless of how you access or use them.
                </p>
              </section>

              {/* Responsibility of Data Subject */}
              <section className="scroll-mt-44" id="responsibility">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  7. Responsibility of Data Subject
                </h2>
                <ul className="list-none pl-0 space-y-3 sm:space-y-4 text-sm sm:text-base text-primary-700">
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold mr-0 sm:mr-2 mb-1 sm:mb-0">
                      a.
                    </span>
                    <span className="leading-relaxed">
                      Usernames, identification codes, passwords, or any other
                      piece of information used as part of our access security
                      measures must be treated as confidential and must not
                      disclose to any third party.
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold mr-0 sm:mr-2 mb-1 sm:mb-0">
                      b.
                    </span>
                    <span className="leading-relaxed">
                      We reserve the right to disable any user identification
                      code or password, whether chosen or allocated by the
                      Company at any time, if in the Company&apos;s opinion,
                      there has been non-compliance with any of the provisions
                      of this privacy policy.
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold mr-0 sm:mr-2 mb-1 sm:mb-0">
                      c.
                    </span>
                    <span className="leading-relaxed">
                      All enquires, complaints or suspicion of a data breach
                      should be forwarded to compliance@mybackbone.io
                    </span>
                  </li>
                </ul>
              </section>

              {/* Consent */}
              <section className="scroll-mt-44" id="consent">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  8. Consent
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  You accept this privacy policy when you give consent upon
                  access to the Company&apos;s platforms, or use of the
                  Company&apos;s services, features, technologies, or functions
                  offered on our website, or visit to our office for official or
                  non-official purposes. The Company may amend this privacy
                  policy at any time by posting a revised version on its website
                  or placing such notice at conspicuous points at its office.
                </p>
              </section>

              {/* Use/Processing of Data Subject's Data */}
              <section className="scroll-mt-44" id="processing">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  9. Use/Processing of Data Subject&apos;s Data
                </h2>
                <p className="text-sm sm:text-base text-primary-700 mb-3 sm:mb-4 leading-relaxed">
                  During onboarding (electronically) and when you use our
                  website, we collect information such as website visits,
                  identification documents (driver&apos;s license, BVN, NIN,
                  Passport, etc), documents reflecting personal information such
                  as name, address, passport details, identification numbers,
                  telephone number, occupation, as is necessary. In the course
                  of carrying out our due diligence as required by our
                  Regulators, we may also use information obtained from third
                  parties such as friends, employers, regulators, and publicly
                  available sources such as the press, public search engines,
                  etc.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mb-3 sm:mb-4 leading-relaxed">
                  The Company will only collect personal data in other to give
                  efficient, enjoyable, and secure services. We may use your
                  information to:
                </p>
                <ul className="list-none pl-0 space-y-2 text-sm sm:text-base text-primary-700">
                  {[
                    "provide necessary services and support",
                    "process applications and send notices about transactions to requisite parties",
                    "verify your identity",
                    "manage risk, or detect, prevent, and/or remediate fraud or other potentially prohibited or illegal activities",
                    "detect, prevent, or remediate violation of laws, regulations, standards, guidelines and frameworks",
                    "improve the NITDA Services by implementing aggregate customer or user preferences",
                    "measure the performance of the NITDA Services and improve the content, technology and layout",
                    "track information breach and remediate such identified breaches",
                    "manage and protect our information technology and physical infrastructure; or",
                    "contact you at any time through your provided telephone number, email address or other contact details.",
                  ].map((item, index) => (
                    <li key={index} className="flex flex-col sm:flex-row">
                      <span className="font-bold mr-0 sm:mr-2 mb-1 sm:mb-0">
                        {String.fromCharCode(97 + index)}.
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Third-Party Disclosure */}
              <section className="scroll-mt-44" id="disclosure">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  10. Third-Party Disclosure
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  As a policy, the Company does not share its Clients or other
                  stakeholder&apos;s information with third parties (unless with
                  prior obtained approval of the data subject) except for
                  website hosting partners and other parties who assist us in
                  operating our website, conducting our business, or servicing
                  you, so long as those parties agree to keep this information
                  confidential. We may also disclose the personal information of
                  Data subjects under Regulatory requirements. However,
                  non-personally identifiable visitor information may be
                  provided to other parties in some limited cases.
                </p>
              </section>

              {/* Data Confidentiality Rights */}
              <section className="scroll-mt-44" id="rights">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  11. Data Confidentiality Rights
                </h2>
                <ul className="list-none pl-0 space-y-3 sm:space-y-4 text-sm sm:text-base text-primary-700">
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold mr-0 sm:mr-2 mb-1 sm:mb-0">
                      a.
                    </span>
                    <span className="leading-relaxed">
                      Your information is regarded as confidential and will not
                      be divulged to any third party, except under legal and/or
                      regulatory conditions.
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold mr-0 sm:mr-2 mb-1 sm:mb-0">
                      b.
                    </span>
                    <span className="leading-relaxed">
                      You have the right to request sight of, and copies of any
                      and all information we keep on you, if such requests are
                      made in compliance with the Freedom of Information Act and
                      other relevant enactments.
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold mr-0 sm:mr-2 mb-1 sm:mb-0">
                      c.
                    </span>
                    <span className="leading-relaxed">
                      You also have the right to request for the correction of
                      information we keep on you.
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row">
                    <span className="font-bold mr-0 sm:mr-2 mb-1 sm:mb-0">
                      d.
                    </span>
                    <span className="leading-relaxed">
                      While the Company is responsible for safeguarding the
                      information entrusted to us, you are also required to
                      practice appropriate security measures such as non-sharing
                      of passwords and other platform login details.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Cookies */}
              <section className="scroll-mt-44" id="cookies">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center">
                  <Icon
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
                    icon="lucide:cookie"
                  />
                  12. Cookies
                </h2>
                <p className="text-sm sm:text-base text-primary-700 mb-3 sm:mb-4 leading-relaxed">
                  Cookies are small text files stored on your computer or mobile
                  devices whenever you visit a website. Cookies have many uses,
                  such as memorizing your preferences to tailor your experiences
                  while on our site– or to help us analyze our website traffic.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mb-3 sm:mb-4 leading-relaxed">
                  The Company uses cookies to improve your experience while on
                  its website. We would like to let you know a few things about
                  our cookies:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base text-primary-700 mb-4">
                  <li>
                    Some cookies are essential to access certain areas of this
                    site;
                  </li>
                  <li>
                    We use analytics cookies to help us understand how you use
                    our site to discover what content is most useful to you
                  </li>
                </ul>
                <div className="mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    Why and How We Use Cookies on Our Website
                  </h3>
                  <p>
                    We use cookies to improve your online activity session by
                    making navigation easier and providing important security
                    features.&nbsp;
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    When you access the Service by or through a mobile device,
                    we may collect certain information automatically, including,
                    but not limited to, the type of mobile device you use, your
                    mobile device’s unique ID, the IP address of your mobile
                    device, your mobile operating system, the type of mobile
                    Internet browser you use, unique device 5 identifiers and
                    other diagnostic data. We may also collect information that
                    your browser sends whenever you visit our Service or when
                    you access the Service on or through a mobile device.&nbsp;
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    We use cookies to track the activity on Our Service and
                    store certain information.&nbsp;
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    We use Google Analytics to collect the following types of
                    information from users who have JavaScript enabled on their
                    browsers:&nbsp;
                  </p>
                  <ul className="list-disc space-y-2 ml-5">
                    <li>
                      Web browser used – software manufacturer and version
                      number
                    </li>
                    <li>Operating system</li>
                    <li>Screen colours</li>
                    <li>JavaScript support</li>
                    <li>Flash version</li>
                    <li>Screen resolution</li>
                    <li>Network location and IP address</li>
                    <li>Geographic data</li>
                    <li>Hostname</li>
                    <li>Connection bandwidth</li>
                    <li>Time of visit</li>
                    <li>Pages visited and dwell time on these pages</li>
                    <li>
                      Referring site
                      <ul className=" ml-5">
                        <li>- The referring website URL</li>
                        <li>- Search engine query used</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  Cookie Categories
                </h3>
                <p className="mb-3">
                  Some cookies are required to make our website work, but we
                  need your consent to use others. The cookie categories are:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 mb-4 text-sm sm:text-base">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          scope="col"
                        >
                          Category
                        </th>
                        <th
                          className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          scope="col"
                        >
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-background-400 divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                          Strictly Necessary
                        </td>
                        <td className="px-3 sm:px-6 py-4 text-sm text-primary-800 dark:text-primary-700">
                          These cookies are required to run our website, to keep
                          it secure, and to obey regulations that apply to us.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                          Functional
                        </td>
                        <td className="px-3 sm:px-6 py-4 text-sm text-primary-800 dark:text-primary-700">
                          These cookies remember your region or country,
                          language, accessibility options, and your settings.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                          Performance
                        </td>
                        <td className="px-3 sm:px-6 py-4 text-sm text-primary-800 dark:text-primary-700">
                          These cookies tell us how customers use our website.
                          We study and profile this data to help us improve our
                          products and performance.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                          Marketing
                        </td>
                        <td className="px-3 sm:px-6 py-4 text-sm text-primary-800 dark:text-primary-700">
                          These cookies help us decide which products, services,
                          and offers may be relevant for you.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    What are your choices regarding cookies?
                  </h3>
                  <p>
                    You can choose to have your computer warn you each time a
                    cookie is collected, or you can choose to turn off all
                    cookies. Since browsers differ, we recommend that you access
                    the Help Menu to learn the correct way to modify your
                    cookies.
                  </p>
                  <br />
                  <p>
                    If you turn your cookies off, some of the features that make
                    your site, experience more efficient may not function
                    properly.
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

export default PrivacyPolicy;
