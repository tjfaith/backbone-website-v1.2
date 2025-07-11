"use client";
import { Card } from "@heroui/card";
import { Icon } from "@iconify/react";
import React from "react";
import { motion } from "framer-motion";

import { useActiveSection } from "@/app/customHooks";

const AmlPolicy = () => {
  const sections = [
    { id: "aml-overview", label: "Overview" },
    { id: "aml-introduction", label: "Introduction" },
    { id: "aml-objective", label: "Objective" },
    { id: "aml-interpretation", label: "Interpretation" },
    {
      id: "aml-customer-acceptance",
      label: "Customer Acceptance Policy",
    },
    {
      id: "aml-customer-identification",
      label: "Customer Identification Procedure",
    },
    { id: "aml-monitoring", label: "Monitoring of Transactions" },
    { id: "aml-due-diligence", label: "Customer Due Diligence" },
    { id: "aml-roles", label: "Roles and Responsibilities" },
    { id: "aml-trainings", label: "Trainings" },
    {
      id: "aml-risk-classification",
      label: "Risk-Based Classification of Clients",
    },
    { id: "aml-suspicious", label: "Suspicious Transactions" },
    { id: "aml-customer-education", label: "Customer Education" },
    {
      id: "aml-existing-accounts",
      label: "KYC for Existing Accounts",
    },
    { id: "aml-minimum-kyc", label: "Minimum Standard for KYC" },
    { id: "aml-vasp", label: "Virtual Asset Service Providers" },
    { id: "aml-record-keeping", label: "Record Keeping" },
    {
      id: "aml-internal-control",
      label: "Internal Control Policies on KYC",
    },
    { id: "aml-appendix-i", label: "Appendix I" },
    { id: "aml-appendix-ii", label: "Appendix II" },
    { id: "aml-appendix-iii", label: "Appendix III" },
    { id: "aml-appendix-iv", label: "Appendix IV" },
    {
      id: "aml-annexure",
      label: "Annexure 1: Regulatory & Legal Framework",
    },
  ];
  const activeId = useActiveSection(sections.map((s) => s.id));

  return (
    <div className="w-full max-w-none scroll-mt-44" id="aml-overview">
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
          <div className="text-center mb-6 sm:mb-8  md:hidden block">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary-800 mb-3 sm:mb-4">
              Anti-Money Laundering (AML), Combating Financing of Terrorism
              (CFT) and Countering Proliferation Financing (CPF) Policy and
              Procedure Manual
            </h1>
          </div>

          {/* AML Overview Section */}
          <Card className="p-4 sm:p-6 lg:p-8 mb-6 bg-amber-50 border-amber-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-amber-800">
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-amber-700">
                    Risk-Based Client Classification
                  </h3>
                  <p className="text-sm text-primary-700 dark:text-background-700 mb-2">
                    Clients are classified into three risk categories:
                  </p>
                  <ul className="list-roman pl-5 text-sm text-primary-700 dark:text-background-700 space-y-1">
                    <li>
                      <strong>High Risk:</strong> PEPs, non-residents, virtual
                      asset service providers
                    </li>
                    <li>
                      <strong>Medium Risk:</strong> Clients whose identity is
                      not easily verifiable
                    </li>
                    <li>
                      <strong>Low Risk:</strong> Clients with easily
                      identifiable sources of wealth
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-amber-700">
                    Customer Due Diligence
                  </h3>
                  <p className="text-sm text-primary-700 dark:text-background-700 mb-2">
                    Three levels of due diligence are applied:
                  </p>
                  <ul className="list-roman pl-5 text-sm text-primary-700 dark:text-background-700 space-y-1">
                    <li>
                      <strong>Standard Due Diligence:</strong> For all new
                      clients
                    </li>
                    <li>
                      <strong>Enhanced Due Diligence:</strong> For high-risk
                      clients
                    </li>
                    <li>
                      <strong>Simplified Due Diligence:</strong> For low-risk
                      clients
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-amber-700">
                    Suspicious Transaction Monitoring
                  </h3>
                  <p className="text-sm text-primary-700 dark:text-background-700">
                    All suspicious transactions must be reported regardless of
                    amount. Red flags include:
                  </p>
                  <ul className="list-roman pl-5 text-sm text-primary-700 dark:text-background-700 space-y-1">
                    <li>Transactions involving high-risk countries</li>
                    <li>Transactions involving shell companies</li>
                    <li>Transactions involving virtual assets</li>
                    <li>Complex and unusually large transactions</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-amber-700">
                    Record Keeping
                  </h3>
                  <p className="text-sm text-primary-700 dark:text-background-700">
                    All client information is retained for a minimum of 5 years
                    post-transaction, including:
                  </p>
                  <ul
                    className="list-roman pl-5 text-sm text-primary-700 dark:text-background-700 space-y-1"
                    id="aml-introduction"
                  >
                    <li>Identification data and risk profiles</li>
                    <li>Account and financial details</li>
                    <li>Transaction records (nature, date, type, number)</li>
                    <li>Communication records with clients</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-3 sm:p-4 md:p-6 lg:p-8 scroll-mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  1. BACKBONE AML/KYC POLICY
                </h2>
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  Introduction
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Drawing significantly from the recommendations of the Basel
                  Committee on Banking Regulations and Supervisory Practices,
                  Financial Action Task Force Recommendations, provisions of the
                  Money Laundering (Prevention & Prohibition) Act, 2022, Central
                  Bank of Nigeria (CBN) Anti-Money Laundering, Combating the
                  Financing of Terrorism and Countering Proliferation Financing
                  of Weapons of Mass Destructions in Financial Institutions)
                  Regulations 2022. The management of Backbone Finance Inc.
                  (&quot;The Company&quot;) has come up with the following
                  measures in the attainment of its objectives of ensuring full
                  compliance and to safeguard the Company from being used as a
                  tool for financial crime. The Company sets specific procedures
                  for monitoring client onboarding, account classification, and
                  KYC documentation.
                </p>
              </section>

              {/* Objective */}
              <section className="scroll-mt-44" id="aml-objective">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  Objective
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  The objective of this policy is to provide Anti-Money
                  Laundering, Combating the Proliferation of Terrorism and
                  Countering Proliferation (AML, CFT & CPE) compliance
                  guidelines for Backbone Finance Inc. &quot;The Company&quot;
                  under the regulatory purview of the CBN. Also, to diligently
                  enforce AML, CFT, CPE measures and ensure effective
                  compliance.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  This Policy shall apply to every customer or client of the
                  Company.
                </p>
              </section>

              {/* Interpretation */}
              <section className="scroll-mt-44" id="aml-interpretation">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  Interpretation
                </h3>
                <div className="space-y-4 ml-5">
                  <ul className=" list-decimal space-y-3">
                    <li className="text-sm sm:text-base text-primary-700 leading-relaxed">
                      <b>Customer-</b> A customer which shall be used
                      interchangeably with Client in this policy may be defined
                      as follows:
                      <ul className=" list-roman pl-6 mt-2 space-y-2 text-sm sm:text-base text-primary-700">
                        <li>
                          A person or entity that maintains an account and/or
                          has a business relationship with the Company or on
                          whose behalf an account is maintained.
                        </li>
                        <li>
                          A person or entity connected with a financial
                          transaction that can pose significant reputational or
                          other risks to the Company, such as a wire transfer or
                          issue of a high-value demand draft as a single
                          transaction.
                        </li>
                      </ul>
                    </li>
                    <li className="text-sm sm:text-base text-primary-700 leading-relaxed">
                      <b>Regulators-</b> The Regulator refers to the Central
                      Bank of Nigeria (CBN) and other Regulators as Backbone may
                      from time to time be subject to.
                    </li>
                    <li className="text-sm sm:text-base text-primary-700 leading-relaxed">
                      <b>Politically Exposed Persons (PEPs):</b> Individuals who
                      are or have been entrusted with prominent public function
                      or anybody relating to them e g. President, Governors,
                      Local Government/ Local Government Development Agency
                      Chairmen and their vice/deputy, senior politicians, senior
                      government, judicial and military officials, senior
                      executives of state-owned corporations, important
                      political party officials such as Party Chairmen, etc,
                      members of Royal Families, etc. Persons related to PEPs
                      for the sake of this policy include:
                      <ul className="list-roman pl-6 mt-2 space-y-1 text-sm sm:text-base text-primary-700">
                        <li>the spouse, civil partner, or life partner;</li>
                        <li>
                          the previous spouse, civil partner, or life partner,
                          if applicable;
                        </li>
                        <li>
                          children and stepchildren and their spouse, civil
                          partner, or life partner;
                        </li>
                        <li>parents;</li>
                        <li>
                          siblings and stepsiblings and their spouse, civil
                          partner, or life partner;
                        </li>
                        <li>Close associates; and</li>
                        <li>Staff, both domestic and corporate</li>
                      </ul>
                    </li>
                    <li className="text-sm sm:text-base text-primary-700 leading-relaxed">
                      <b>KYC:</b> Know Your Customers
                    </li>
                    <li className="text-sm sm:text-base text-primary-700 leading-relaxed">
                      <b>Suspicious Transaction:</b> Activity of a Client which
                      does not fit the profile or knowledge of the Client or
                      goes outside his regular transaction pattern.
                    </li>
                    <li className="text-sm sm:text-base text-primary-700 leading-relaxed">
                      <b>Beneficial owner:</b> a person who ultimately owns or
                      controls a Company or a person on whose behalf a
                      transaction is being conducted.
                    </li>
                    <li className="text-sm sm:text-base text-primary-700 leading-relaxed">
                      <b>Virtual Asset (VA):</b> A digital representation of
                      value that can be digitally traded, or transferred, and
                      can be used for payment or investment purposes. Virtual
                      assets do not include digital representations of fiat
                      currencies (e.g. naira, dollars, etc.), securities, and
                      other financial assets that are already covered elsewhere
                      in the Financial Action Task Force (FATF) Recommendations.
                      Examples of virtual assets include Bitcoin, Ethereum, etc.
                    </li>
                    <li className="text-sm sm:text-base text-primary-700 leading-relaxed">
                      <b>Virtual Asset Service Provider (VASP):</b> means any
                      entity that has a business or conducts one or more of the
                      following activities for or on behalf of another natural
                      or legal person:
                      <ul className="list-roman pl-6 mt-2 space-y-1 text-sm sm:text-base text-primary-700">
                        <li>
                          Exchange between virtual assets and fiat currencies.
                        </li>
                        <li>
                          Exchange between one or more forms of virtual assets.
                        </li>
                        <li>transfer of virtual assets.</li>
                        <li>
                          safekeeping and/or administration of virtual assets or
                          instruments enabling control over virtual assets; and
                          participation in and provision of financial services
                          related to an issue and/or sale of a virtual asset.
                        </li>
                        <li>
                          individual or corporate body registered by the CBN to
                          trade Virtual Assets in the capital market.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Customer Acceptance Policy */}
              <section className="scroll-mt-44" id="aml-customer-acceptance">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  Customer Acceptance Policy (CAP)
                </h3>
                <p className="text-sm sm:text-base text-primary-700 mb-3 leading-relaxed">
                  It highlights the criteria for the determination of the basis
                  upon which Backbone shall enter into a relationship with a
                  customer. The criteria are as follows:
                </p>
                <ul className="list-roman list-outside pl-6 space-y-2 text-sm sm:text-base text-primary-700 text-left">
                  <li>
                    The Company shall accept customers strictly in accordance
                    with this policy.
                  </li>
                  <li>
                    No account shall be opened in an anonymous or false name.
                  </li>
                  <li className=" text-justify">
                    Responsible Units within the Company shall ensure that
                    Clients provide relevant documents and other information
                    depending on risk categories.
                  </li>
                  <li>
                    The Sales Executive shall oversee the closure of an existing
                    account when it becomes clear that it is impossible to apply
                    the proper customer due diligence measures. This includes
                    when it becomes impossible to verify the identity of the
                    customer or obtain the documents necessary for risk
                    categorization due to the customer&apos;s lack of
                    cooperation or the unreliability of the data/information
                    provided to the authorized Sales Executive. However, the
                    Sales Executive must make sure that these measures do not
                    subject the Client to any form of embarrassment.
                  </li>
                  <li>
                    The Sales Executive shall escalate to the Heads of Sales and
                    Customer Service any difficulty in obtaining necessary KYC
                    documents from Clients.
                  </li>
                  <li>
                    In case an account must be closed on the above-mentioned
                    ground, the authorized officer shall do so only after
                    receiving written approval from the Managing Director.
                  </li>
                  <li>
                    The Client shall be given prior reasonable notice before the
                    closure of his/her account and shall also be informed of the
                    reasons for the closure of his account.
                  </li>
                  <li>
                    The Sales Executive, Compliance and Risk team shall make
                    necessary checks before opening a new account to ensure that
                    the identity of the customer does not match with any person
                    with a known criminal background or with banned entities.
                  </li>
                  <li>
                    All the teams concerned shall therefore exercise caution
                    when dealing with transactions that involve people or
                    entities whose names are on the Nigerian Sanctions List or
                    UN Consolidated Sanctions Lists as published periodically.
                    The Sales team shall also take caution when dealing with
                    Clients from countries categorized as high-risk by the FATF
                    such as Cambodia, Burkina Faso, Venezuela, etc.
                  </li>
                  <li>
                    The Sales team shall liaise with the Compliance/Risk Team to
                    ascertain if the prospective individual or entity desirous
                    of establishing a relationship with the company is not in
                    any way involved in any unlawful activity.
                  </li>
                  <li>
                    Responsible units within the Company Shall prepare a profile
                    for every new customer and shall maintain the profile of
                    each new customer.
                  </li>
                  <li>
                    The nature and extent of due diligence shall depend on the
                    risk perceived by the Compliance/Risk team However, the
                    Company shall continue to follow strictly with its Data
                    Privacy Policy concerning Customer information. The Company
                    shall be mindful that the adoption of the Customer
                    Acceptance Policy and its implementation shall be subject to
                    regulatory disclosure and shall not result in the denial of
                    its services to the general public
                  </li>
                </ul>
              </section>

              {/* Customer Identification Procedure */}
              <section
                className="scroll-mt-44"
                id="aml-customer-identification"
              >
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  1.0 Customer Identification/Know Your Customer Procedure
                  (CI/KYC)
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Customer identification/KYC means identifying a person and
                  verifying the identity of a client by using reliable,
                  independent source documents or information. The Sales
                  Executive needs to obtain sufficient information necessary to
                  establish, to his satisfaction, the identity of each new
                  Client and the purpose of the intended nature of the business
                  relationship. The Sales Executive, Compliance and Risk teams
                  must be able to assure management that due diligence was
                  observed based on the risk profile of the Client in compliance
                  with the existing guidelines.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  In addition to the risk profiling, the nature of
                  information/documents required would also depend on the type
                  of customer (individual, corporate, etc.). For customers that
                  are natural persons, the Sales Executive shall obtain
                  sufficient documentation to verify the identity of the
                  customer, his address/location, as well as a photo ID.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  The teams involved shall also conduct physical verification of
                  the customers&apos; address where there is
                  unclarity/likelihood of inaccuracy of documents evidencing the
                  address of the customer and subsequently complete the required
                  address verification form. For body corporate, the
                  Relationship Manager shall verify the legal status of the
                  entity through proper and relevant documents/online checks and
                  shall also verify that any person purporting to act on behalf
                  of the entity is so authorized. He shall also take the
                  necessary steps to verify the identity of that person.{" "}
                  <a href="#aml-appendix-i">
                    <b>
                      <i>(See Appendix1 for requirement guidelines)</i>
                    </b>
                  </a>
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  If the authorized Sales Executive decides to accept such
                  accounts in terms of the Customer Acceptance Policy, he shall
                  take reasonable measures to identify the beneficial owner(s)
                  and to verify his/her/their identity in a manner that he is
                  satisfied that he knows who the beneficial owner(s) is/are. An
                  indicative list of the nature and type of
                  documents/information that may be relied upon for customer
                  identification is given in Annexure II.
                </p>
              </section>

              {/* Monitoring of Transactions */}
              <section className="scroll-mt-44" id="aml-monitoring">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  2.0 Monitoring of Transactions
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Continuous monitoring is an essential ingredient of effective
                  KYC procedures, and the extent of monitoring should be
                  according to the risk sensitivity of the account. The Head of
                  Operations in conjunction with the Risk department shall pay
                  special attention to all complex, unusually large transactions
                  and all unusual patterns which have no apparent economic or
                  visible lawful purpose. Transactions that involve large
                  amounts of cash inconsistent with the size of the balance
                  maintained may indicate that the funds are being
                  &apos;washed&apos; through the account. Such transactions
                  shall be reported to the Head of Compliance who then reports
                  to Management and files the necessary regulatory reports.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  High-risk accounts shall be subjected to intensive monitoring.
                  The directives concerning cash transactions and the regulatory
                  threshold limit (included in Appendix III) must be adhered to
                  by the departments concerned, with utmost strictness.
                  According to the extant laws, a correct record of all
                  transactions—both deposits and withdrawals—must be maintained
                  and provided to the Head of Compliance within the time frame
                  specified in Appendix III. The information provided should
                  include complete customer details, such as name, account
                  number, account opening date, and amount deposited/withdrawn.
                </p>
              </section>

              {/* Due Diligence */}
              <section className="scroll-mt-44" id="aml-due-diligence">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  3.0 Due Diligence
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-medium text-primary-800 mb-2">
                      4.1 Customer Due Diligence: This shall be carried out in
                      the following circumstances.
                    </h4>
                    <ul className="list-roman pl-6 space-y-2 text-sm sm:text-base text-primary-700">
                      <li>
                        When a customer is onboarded/business relationship is
                        established. Upon onboarding, necessary measures shall
                        be taken to confirm the validity of the KYC documents
                        provided in line with the provisions of Appendix II;
                      </li>
                      <li>
                        a customer carries out a transaction from $10,000,
                        N5,000,000 (for an individual), or N10,000,000 (for a
                        body corporate) or their equivalents or such other
                        thresholds to be determined by the Regulators from time
                        to time;
                      </li>
                      <li>
                        a VASP carries out a transaction above $1,000 or its
                        equivalent. Including where the transaction is carried
                        out in a single operation or several operations that
                        appear to be linked;
                      </li>
                      <li>
                        There is a suspicion of money laundering, terrorism
                        financing, proliferation financing, or any other red
                        flag as may be stated in Appendix IV;
                      </li>
                      <li>
                        There are doubts as to the KYC documentation previously
                        obtained from the Client;
                      </li>
                      <li>
                        There is a change in the way the account is operated;
                        and
                      </li>
                      <li>
                        The account officer determines that there is no
                        sufficient information about an existing Client.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-medium text-primary-800 mb-2">
                      4.2 Ongoing Due Diligence:
                    </h4>
                    <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                      This is carried out in the course of the relationship with
                      a customer. This includes scrutinizing the transactions
                      undertaken by the customer to ensure that the transactions
                      conducted are consistent with the knowledge of the client.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-medium text-primary-800 mb-2">
                      4.3 Enhanced Due Diligence (EDD):
                    </h4>
                    <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                      EDD is a higher level of scrutiny than Customer Due
                      Diligence. The primary purpose of EDD is to gather
                      information about the Client&apos;s history, reputation,
                      business, address, lifestyle, and in the case of a
                      corporate entity, the beneficial owners among other
                      things. This shall apply to all High-Risk Clients.
                    </p>
                    <h5 className="text-base font-medium text-primary-800 mt-3 mb-2">
                      Considerations/Procedures to be Adopted for Enhanced Due
                      Diligence
                    </h5>
                    <ol className="list-decimal pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                      <li>
                        Risk-based approach must be adopted while conducting
                        EDD.
                      </li>
                      <li>
                        Information about the concerned account must be obtained
                        from verified and reliable sources.
                      </li>
                      <li>
                        Investigate the source of funds of the account owner and
                        the ultimate beneficiaries.
                      </li>
                      <li>
                        Pay attention to ongoing transactions involving such
                        accounts.
                      </li>
                      <li>
                        Examine and assess the adverse media and market
                        reputation of the account owner or the ultimate
                        beneficiaries.
                      </li>
                      <li>
                        On-site visits to be conducted to confirm the address
                        and sometimes confirm the activities going on in the
                        address.
                      </li>
                      <li>
                        Internal Control/Risk Team to prepare a report on the
                        findings from the above consideration and same is to be
                        shared with management.
                      </li>
                      <li>
                        Approval of the MD is required to open a new account or
                        maintain an existing account for high- risk client.
                      </li>
                      <li>
                        The Head of Compliance shall escalate to the appropriate
                        regulator where necessary.
                      </li>
                      <li>
                        Identify and take reasonable steps to verify the
                        identity of a beneficial owner, using relevant
                        information or data obtained from reliable sources to
                        satisfy itself that it knows who the beneficial owner is
                        through methods including:
                        <ol className="list-alpha pl-6 mt-1 space-y-1">
                          <li>
                            For legal persons;
                            <ol className="list-roman pl-6 mt-1 space-y-1">
                              <li>
                                Identify and verify the natural persons, where
                                they exist, that have ultimate controlling
                                ownership interest in a legal person, taking
                                into cognizance the fact that ownership interest
                                can be so diversified that there may be no
                                natural persons, whether acting alone or with
                                others, exercising control of the legal person
                                or arrangement through ownership.
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                    </ol>
                    <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                      Enhanced Dule Diligence shall be performed for higher risk
                      customers, business relationships or transactions
                      including:
                    </p>
                    <ol className="list-alpha pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                      <li>non-resident customers;</li>
                      <li>Private banking customers;</li>
                      <li>
                        Legal persons or legal arrangements such as trusts that
                        are personal- assets vehicles;
                      </li>
                      <li>
                        Companies that have nominee-shareholders or shares in
                        bearer form;
                      </li>
                      <li>
                        Politically Exposed Persons (&quot;PEP&quot;) as defined
                        in item 3 above;
                      </li>
                      <li>Cross- border banking and business relationships;</li>
                      <li>
                        Any other businesses, activities or professions that may
                        be prescribed by regulatory, supervisory or competent
                        authorities
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-base font-medium text-primary-800 mb-2">
                      4.4 Simplified/Reduced Due Diligence:
                    </h4>
                    <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                      This level of due diligence shall be adopted for lower
                      risk category of clients only where lower risk has been
                      identified through an adequate analysis of the risks in
                      the following instances of:
                    </p>
                    <ol className="list-alpha pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                      <li>
                        financial institution that is compliant with AML/CFT
                        requirements;
                      </li>
                      <li>
                        Where information on the clients or the beneficial
                        owners is publicly available;
                      </li>
                      <li>
                        The risk of money laundering, terrorist financing, and
                        proliferation financing is lower.
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Roles and Responsibilities */}
              <section className="scroll-mt-44" id="aml-roles">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  Roles and Responsibilities of Relevant Team Members
                </h3>
                <h4 className="text-base font-medium text-primary-800 mb-2">
                  Roles and Responsibilities of Relevant Teams
                </h4>
                <ol className="list-roman pl-6 space-y-3 text-sm sm:text-base text-primary-700">
                  <li>
                    <strong>Management-</strong> The Organization&apos;s
                    policies and procedures cover management oversight, systems
                    and controls, segregation of duties, training, and other
                    related matters. To ensure the effective implementation of
                    this policy, Management shall explicitly allocate
                    responsibilities within the various units/departments.
                  </li>
                  <li>
                    <strong>Chief Compliance Officer (CCO)</strong>
                    <p className="mt-1">
                      The financial institution shall designate a Chief
                      Compliance Officer with the relevant competence, authority
                      and independence to implement the Company&apos;s AML, CFT
                      and CPF compliance program. The Chief Compliance Officer
                      who shall be appointed at the management level shall have
                      the following duties:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        Ensure adherence to AML/CFT regulation during the
                        onboarding of new Clients.
                      </li>
                      <li>
                        Develop an AML/CFT/CPF Compliance Program and ensure
                        adherence
                      </li>
                      <li>
                        The Head of Compliance in conjunction with the CRO shall
                        ensure compliance with threshold limits in line with
                        Regulatory provisions on AML/CFT.
                      </li>
                      <li>
                        Rendering &quot;Nil&quot; returns to the CBN and NFIU
                        where necessary to ensure compliance
                      </li>
                      <li>
                        Filing other regulatory returns with the CBN and other
                        relevant and supervisory authorities
                      </li>
                      <li>
                        Receiving and vetting suspicious transaction reports
                        from staff
                      </li>
                      <li>
                        Receiving and escalating where necessary client
                        complaints from the Customer Services department
                      </li>
                      <li>
                        Coordinating the training of Board, management and staff
                        in AML/CFT/CPF awareness, detection methods and
                        reporting requirements
                      </li>
                      <li>
                        Serving as liaison officer to the CBN and any other
                        regulator Backbone may be subject to from time to time.
                      </li>
                      <li>
                        Serving as a point of contact for all employees on
                        issues relating to money laundering, terrorist
                        financing, and proliferation financing
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Internal Audit –</strong> The Internal Audit and
                    Compliance functions have a key role in establishing
                    evaluating, maintaining and ensuring procedures, policies
                    and control to prevent ML, PF and PE, which have regard to
                    their ML or TF risks and the size of the business and
                    communicate these to their employees
                    <p className="mt-2">
                      The procedures, policies and control established by
                      Backbone shall cover operational matters including the
                      CDD, record retention, detection of unusual and suspicious
                      transaction and reporting obligation.
                    </p>
                    <p className="mt-2">
                      The Compliance Officer and Internal Control are to have
                      timely access to CDD information, accounts and transaction
                      records including information and all analysis of
                      transactions and activities and other relevant
                      information.
                    </p>
                    <p className="mt-2">
                      The Head of the internal audit shall conduct routine
                      checks to ensure adherence to the KYC policies and
                      procedures and may comment on the lapses if any observed
                      in this regard. This lapse/remedial steps taken shall be
                      escalated to Management on a monthly basis and a report
                      shall be presented to the Audit and Risk Management
                      Committee quarterly.
                    </p>
                  </li>
                </ol>
              </section>

              {/* Trainings */}
              <section className="scroll-mt-44" id="aml-trainings">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  4.0 TRAININGS
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Training encompassing applicable money laundering laws,
                  current trends in money laundering activities, and the
                  Company&apos;s policies/ procedures to combat money laundering
                  shall be conducted for all staff members periodically
                  (quarterly). The Compliance Officer with the assistance of the
                  HR Department, shall determine the frequency of training and
                  identify personnel to be trained.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  There shall also be relevant training for frontline staff and
                  any other staff dealing with customers.
                </p>
              </section>

              {/* Risk-Based Classification of Clients */}
              <section className="scroll-mt-44" id="aml-risk-classification">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  5.0 RISK-BASED CLASSIFICATION OF CLIENTS
                </h3>
                <p className="text-sm sm:text-base text-primary-700 mb-3 leading-relaxed">
                  Customers of the Company shall be categorized into 3 risk
                  categories in line with the CBN&apos;s three- tiered KYC
                  framework as follows:
                </p>
                <ol className="list-alpha pl-6 space-y-2 text-sm sm:text-base text-primary-700">
                  <li>
                    <strong>High-Risk Clients:</strong> All non-resident
                    Clients, PEPs, and those resident in grey/blacklisted
                    countries (for non-compliance with AML/CFT Rules or FATF
                    Recommendations) must be categorised as high-risk. Enhanced
                    due diligence must be conducted for all customers classified
                    as high-risk.
                  </li>
                  <li>
                    <strong>Medium Risk Clients:</strong> These are Clients who
                    are likely to pose higher than average risk but are not high
                    risk. They may open and operate their accounts either
                    physically or virtually.
                  </li>
                  <li>
                    <strong>Low-Risk Clients:</strong> They are face-to-face
                    clients who are resident in Nigeria and are able to open and
                    operate their accounts virtually or physically with
                    appropriate and easily verifiable documentation. Low-risk
                    clients also include the clients listed in Clause 4.4 (a-f)
                    of this Policy.
                  </li>
                </ol>

                <div className="mt-6">
                  <h4 className="text-base font-medium text-primary-800 mb-3">
                    Figure 1: Client classification
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-primary-200 border">
                      <thead className="bg-primary-50 dark:text-background">
                        <tr>
                          <th
                            className="px-4 py-3 text-left text-xs font-medium text-primary-500 dark:text-background-500 uppercase tracking-wider border-r"
                            scope="col"
                          >
                            Risk Category
                          </th>
                          <th
                            className="px-4 py-3 text-left text-xs font-medium text-primary-500 dark:text-background-500 uppercase tracking-wider border-r"
                            scope="col"
                          >
                            Features
                          </th>
                          <th
                            className="px-4 py-3 text-left text-xs font-medium text-primary-500 dark:text-background-500 uppercase tracking-wider"
                            scope="col"
                          >
                            KYC
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-primary-200">
                        {/* Low Risk */}
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-primary-900 dark:text-background-500 border-r align-top">
                            Low Risk
                          </td>
                          <td className="px-4 py-4 text-sm text-primary-700 dark:text-background-500 border-r">
                            <div className="space-y-2">
                              <ol className="list-roman pl-5">
                                <li>
                                  Persons whose identities and sources of wealth
                                  can be easily identified.
                                </li>
                                <li>
                                  Persons whose transactions conform to the
                                  known profile
                                </li>
                                <li>Nigerian citizens and residents</li>
                                <li>
                                  No foreign remittance can be credited to this
                                  account
                                </li>
                              </ol>
                              <p className="font-medium">Examples include</p>
                              <ol className="list-alpha pl-5 space-y-1">
                                <li>
                                  salaried employees whose salary structures are
                                  well-defined
                                </li>
                                <li>
                                  persons with small account balances/low
                                  turnover i.e accounts with a cumulative
                                  balance of N200,000; single deposit amount of
                                  N20,000 and maximum daily redemption of
                                  N30,000
                                </li>
                                <li>
                                  employees of government ministries,
                                  departments, parastatals apart from the
                                  Permanent Secretaries and Directors of these
                                  agencies
                                </li>
                                <li>
                                  Employees of government-owned companies whose
                                  income/source of funds are verifiable.
                                </li>
                                <li>
                                  Financial Institutions that are AML/CFT
                                  compliant
                                </li>
                                <li>Listed Companies</li>
                                <li>Regulators/SROs</li>
                                <li>statutory bodies</li>
                                <li>Pension Fund Administrators</li>
                              </ol>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-primary-700 dark:text-background-500 passport photograph">
                            <ol className="list-roman pl-5 space-y-1">
                              <li>Name</li>
                              <li>passport photograph</li>
                              <li>means of ID</li>
                              <li>place and date of birth</li>
                              <li>nationality</li>
                              <li>gender</li>
                              <li>home address & telephone number</li>
                              <li>other KYC information</li>
                              <li>
                                relevant incorporation documents in the case of
                                corporate bodies
                              </li>
                            </ol>
                          </td>
                        </tr>

                        {/* Medium Risk */}
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-primary-900 dark:text-background-500 border-r align-top">
                            Medium Risk
                          </td>
                          <td className="px-4 py-4 text-sm text-primary-700 dark:text-background-500 border-r">
                            <div className="space-y-2">
                              <ol className="list-roman pl-5">
                                <li>
                                  Persons whose identity and source of wealth
                                  are not easily verifiable.
                                </li>
                                <li>
                                  Nigerian citizens temporarily resident abroad
                                </li>
                                <li>
                                  Persons who do not qualify as high-risk or
                                  low-risk
                                </li>
                                <li>
                                  Customer identification is subject to
                                  verification
                                </li>
                              </ol>
                              <p className="font-medium">Examples include:</p>
                              <ol className="list-alpha pl-5 space-y-1">
                                <li>
                                  Persons with maximum cumulative balance of
                                  N400,000, single deposit of N40,000, and
                                  maximum daily redemption of N50,000
                                </li>
                                <li>
                                  Students and other persons abroad for a
                                  short/specific period.
                                </li>
                                <li>
                                  Persons employed in industries without
                                  formally registered bodies or regulators.
                                </li>
                              </ol>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-primary-700 dark:text-background-500 passport photograph">
                            <ol className="list-roman pl-5 space-y-1">
                              <li>passport photograph</li>
                              <li>name</li>
                              <li>place & date of birth</li>
                              <li>means of ID</li>
                              <li>nationality</li>
                              <li>gender</li>
                              <li>home address & telephone number</li>
                              <li>other relevant KYC information.</li>
                            </ol>
                            <p className="mt-2 font-medium">
                              N.B: Information provided is subject to
                              verification
                            </p>
                          </td>
                        </tr>

                        {/* High Risk */}
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-primary-900 dark:text-background-500 border-r align-top">
                            High Risk
                          </td>
                          <td className="px-4 py-4 text-sm text-primary-700 dark:text-background-500 border-r">
                            <ol className="list-roman pl-5 space-y-1">
                              <li>
                                Persons living in or doing business in an
                                industry or place known for unlawful
                                trading/business activity e.g. drug production,
                                trafficking or smuggling, and money laundering
                                activities e.g. Bureau de Change, casinos, etc.
                              </li>
                              <li>
                                Persons whose profile is perceived to be
                                uncertain or dubious.
                              </li>
                              <li>
                                Persons living or doing business in a country
                                where FATF recommendations are not applicable or
                                countries with no AML/CFT regulations.
                              </li>
                              <li>Virtual Asset Service providers</li>
                              <li>Non-resident Customers</li>
                              <li>
                                Politically Exposed Persons (foreign and
                                international) and persons or companies related
                                to them
                              </li>
                              <li>Complex legal arrangements e.g SPVs</li>
                              <li>Companies that have nominee-shareholders</li>
                              <li>non-face-to-face customers.</li>
                            </ol>
                            <p className="mt-2 font-medium">N.B</p>
                            <p>
                              The approval of the Managing Director/CEO shall be
                              obtained before opening a high-risk account.
                            </p>
                          </td>
                          <td className="px-4 py-4 text-sm text-primary-700 dark:text-background-500">
                            <p>
                              All the above-listed information as well as
                              Enhanced Due Diligence (EDD) and Customer Due
                              Diligence (CDD)
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Suspicious Transactions */}
              <section className="scroll-mt-44" id="aml-suspicious">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  6.0 Suspicious Transactions:
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  All suspicious transactions including attempted transactions
                  are to be reported regardless of the amount involved. The
                  requirement is to file STRs applies regardless of whether the
                  transactions are considered to involve tax matters or other
                  matters.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  The following are transactions that may be suspicious:
                </p>
                <ol className="list-roman pl-6 space-y-2 text-sm sm:text-base text-primary-700">
                  <li>
                    Transactions involving high-risk countries vulnerable to
                    ML/TF/PF
                  </li>
                  <li>transactions involving shell companies.</li>
                  <li>
                    transactions involving virtual assets or virtual asset
                    service providers.
                  </li>
                  <li>
                    large transaction activity involving monetary instruments
                    such as bank drafts.
                  </li>
                  <li>
                    transaction activity involving amounts that are just below
                    the reporting threshold.
                  </li>
                  <li>
                    where employees live luxurious lifestyles that cannot be
                    justified by their salaries, do not comply with approved
                    guidelines, or refuse to go on leave.
                  </li>
                  <li>Complex and unusually long transactions.</li>
                </ol>
              </section>

              {/* Customer Education */}
              <section className="scroll-mt-44" id="aml-customer-education">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  7.0 Customer Education
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Implementing the above KYC procedures requires that the
                  Relationship Manager request from the Client certain
                  information that may be private/personal in nature, or which
                  have never been called for from the client. This can sometimes
                  lead to a lot of questioning by the Client as to the motive
                  and purpose of collecting such information. Therefore, the
                  concerned Relationship Manager needs to handle such situations
                  tactfully while dealing with Clients and educate such Clients
                  on the objectives of the KYC program.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  The Company must have a clear and detailed Account Opening
                  Form which will help the Relationship Manager adequately
                  address enquiries. This account opening form must be signed by
                  the Client to confirm the information so collected. The
                  Relationship Manager must also ensure that Clients are
                  informed about the company&apos;s minimum KYC requirements
                  during the onboarding process.
                </p>
              </section>

              {/* KYC For Existing Accounts */}
              <section className="scroll-mt-44" id="aml-existing-accounts">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  8.0 KYC For Existing Accounts
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  It is the regulatory standard that existing accounts be
                  reviewed at least once a year. To ensure compliance, all
                  existing active clients of all business units in the Company
                  shall be contacted through all possible means in order to
                  update their records when necessary.
                </p>
              </section>

              {/* Minimum Standard for KYC */}
              <section className="scroll-mt-44" id="aml-minimum-kyc">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  Minimum Standard for KYC
                </h3>
                <ol className="list-roman pl-6 space-y-3 text-sm sm:text-base text-primary-700">
                  <li>
                    <strong>Individual Client-</strong> An individual client
                    shall provide the following minimum KYC documents:
                    <ol className="list-alpha pl-6 mt-2 space-y-1">
                      <li>
                        Bank account details (including account name, type,
                        number, and date of account opening)
                      </li>
                      <li>
                        A Federal Government recognized means of ID such as a
                        Bank Verification Number (BVN), National Identification
                        Number (NIN), International Passport, voter card, etc.
                        which shall be validated through an accepted
                        identification validation portal; provided that the
                        identification number shall be obtained separately from,
                        and in addition to other acceptable means of personal
                        identification.
                      </li>
                      <li>
                        Utility Bill or other proof of residential address
                      </li>
                      <li>Employment details and/or source of funds</li>
                    </ol>
                  </li>
                  <li>
                    <strong>Corporate Entities -</strong>{" "}
                    Incorporation/Registration documents of the entity, in
                    addition to the BVN or any other Federal Government
                    recognized identification number of at least one (1)
                    director and all of the authorized signatories to the
                    corporate entity&apos;s securities trading account.
                  </li>
                </ol>
              </section>

              {/* Virtual Asset Service Providers */}
              <section className="scroll-mt-44" id="aml-vasp">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  9.0 Virtual Asset Service Providers:
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Any account involving a virtual asset, or a virtual asset
                  service provider shall be categorized as a high-risk account.
                  Such account will only be opened, and mandates executed upon
                  the conclusion of Enhanced Due Diligence by the relevant
                  department. In addition to the information and documents
                  stated above, the account officer shall ensure that such
                  individual or corporate body has obtained the
                  license/permit/approval of the CBN and/or other such
                  regulatory body empowered to regulate transactions involving
                  virtual assets.
                </p>
              </section>

              {/* Record Keeping */}
              <section className="scroll-mt-44" id="aml-record-keeping">
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  10.0 Record Keeping
                </h3>
                <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base text-primary-700">
                  <li>
                    In compliance with the provisions of the CBN Regulations and
                    further to the Company&apos;s fiduciary duty to all its
                    stakeholders, the Legal and Compliance Department shall
                    ensure that all responsible units retain Clients&apos;
                    information for a minimum of 5 years post transaction or for
                    longer if required.
                  </li>
                  <li>
                    Upon the expiration of 5 years, Client&apos;s information
                    shall be archived in electronic format for another period of
                    5 to 10 years.
                  </li>
                  <li>
                    The information of Clients who were involved in larger
                    volume, complex, or suspicious transactions shall be kept
                    longer than 5 years and the electronic copy shall be kept
                    for as long as is practicable.
                  </li>
                  <li>
                    The Legal and Compliance Department shall also ensure that
                    all stakeholders (Directors, Shareholders, Clients, and such
                    other persons whose information the Company has recourse to)
                    information within the custody of the Company are well kept
                    and preserved in compliance with extant Corporate Governance
                    Rules.
                  </li>
                  <li>
                    Records, in this case, will include records of
                    identification data, risk profile of the Client,
                    account/financial details, or CDD information, nature, date,
                    type, and number of transactions.
                  </li>
                  <li>
                    Any information obtained during any meeting, discussion, or
                    other communication with the clients shall be recorded and
                    kept to ensure that current clients&apos; information is
                    readily accessible to Compliance Officers or relevant
                    regulatory bodies
                  </li>
                </ol>
              </section>

              {/* Internal Control Policies on KYC */}
              <section className="scroll-mt-44" id="aml-internal-control">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  1. INTERNAL CONTROL POLICIES ON KYC
                </h2>
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  Introduction
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  The Management of Backbone Finance Inc. [&quot;The
                  Company&quot;) is responsible for maintaining an effective
                  internal control system commensurate with the scale, nature,
                  and complexity of the organization&apos;s operations. The
                  Company is responsible for setting specific internal control
                  requirements for customer onboarding. This policy sets out the
                  objectives, roles and responsibilities, processes, and
                  reporting procedures relating to Know Your Customer (KYC)
                  documentation and Controls.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  As a rule, a business relationship with Backbone will not be
                  established until the identity of a potential customer has
                  been satisfactorily established. Where a potential customer
                  declines to provide any account initiation information, the
                  relationship will not be established. In the case of an
                  existing relationship, where the customer refuses to provide
                  further information and documents required to update existing
                  records, any relationship already established will be
                  terminated. This policy is developed in line with the
                  applicable regulatory requirements and is aligned with
                  CBN&apos;s regulations of onboarding and updating client
                  information.
                </p>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  Objective
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  The purpose of the internal control system is to provide
                  reasonable assurance to Senior Management and the Board of
                  Directors regarding measures taken with respect to all new and
                  existing customer onboarding at Backbone. Customer for the
                  purpose of our KYC policy is defined as:
                </p>
                <ol className="list-roman pl-6 space-y-2 text-sm sm:text-base text-primary-700 mt-3">
                  <li>
                    A person or entity that maintains an account and/or has a
                    business relationship with Backbone.
                  </li>
                  <li>
                    One on whose behalf the account is maintained (i.e. the
                    beneficiaries)
                  </li>
                  <li>
                    Beneficiaries of transactions conducted by professional
                    intermediaries (3rd party accounts such as Lawyers,
                    stockbrokers, etc.
                  </li>
                  <li>
                    Any person or entity connected with a financial transaction,
                    which can pose significant reputational or other risks to
                    Backbone.
                  </li>
                </ol>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  Our approach to KYC is from a wider prudential, not just
                  anti-money laundering, perspective. Sound KYC procedures must
                  be seen as a critical element In the effective management of
                  Financial Institution risks. KYC safeguards go beyond simple
                  account opening and record-keeping and require that the
                  relevant teams in Backbone formulate a customer acceptance
                  policy and Account Opening form that provides relevant
                  information which involves more extensive due diligence for
                  higher-risk accounts and includes proactive account monitoring
                  for suspicious activities.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  To this end, the Backbone&apos;s KYC policies and procedures
                  emphasize the following:
                </p>
                <ol className="list-roman pl-6 space-y-2 text-sm sm:text-base text-primary-700 mt-3">
                  <li>
                    Obtaining the necessary documents and information from every
                    customer as specified in the Backbone&apos;s Operations
                    Policy Manual.
                  </li>
                  <li>
                    Prohibition of opening numbered or anonymous accounts or
                    accounts in fictitious or pseudo names.
                  </li>
                  <li>
                    Minimum acceptable identification evidence for low-risk and
                    low-value accounts.
                  </li>
                  <li>
                    Independent verification of the legal status of incorporated
                    entities and sole proprietorships with the Corporate Affairs
                    Commission.
                  </li>
                  <li>
                    Screening of customer information against a database of
                    individuals and entities subject to sanction (watch-list
                    check) at the onboarding stage and quarterly customer
                    database scan as required by the AML regulations.
                  </li>
                  <li>
                    Identifying the customer as well as the beneficial owners
                    and verifying the customer&apos;s identity using reliable,
                    independent source documents, data, or information.
                  </li>
                  <li>
                    Profiling of customers and risk rating such that
                    transactions by customers are fairly predictable.
                  </li>
                  <li>
                    Conducting ongoing due diligence on the business
                    relationship and scrutiny of transactions undertaken
                    throughout the course of that relationship to ensure that
                    the transactions being conducted are consistent with the
                    institution&apos;s knowledge of the customer, their
                    business, and risk profile, including, where necessary, the
                    source of funds.
                  </li>
                  <li>Customer information update whenever the need arises.</li>
                  <li>
                    Obligation to report to the regulatory authorities
                    suspicious transactions, which may ultimately have a bearing
                    on money laundering activities.
                  </li>
                </ol>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  Onboarding of New Clients
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Sales Executives are required to take reasonable and
                  appropriate measures to establish the identities of their
                  clients and others for whom they may open accounts and provide
                  financial services. Sufficient information on the following
                  must be obtained at the beginning of the relationship and
                  periodically thereafter.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  <strong>Individuals/Corporate Entity:</strong> Relationship
                  Managers must take necessary steps to ensure that they know
                  the person they are dealing with. They must confirm
                  information such as beneficial owners, controllers,
                  signatories, and directors.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  <strong>Fund:</strong> Relationship Managers must know and
                  trace the source of funds and nature of business as the case
                  may be.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  <strong>Location:</strong> Relationship Managers must verify
                  the address of the customer or the place of business as
                  applicable.
                </p>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  Procedure for Account Opening
                </h3>
                <h4 className="text-base font-medium text-primary-800 mb-2">
                  Individual Account
                </h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base text-primary-700">
                  <li>
                    At the point of entry for all new clients, a set of account
                    opening forms is provided for the client to complete. The
                    Relationship Manager shall ensure that the client
                    understands all the fields in the account opening form and
                    fills it appropriately.
                  </li>
                  <li>
                    Upon completion of the form, the Relationship Manager shall
                    ensure that all the documents listed in the Customer
                    Identification Procedure of the AML Policy is attached
                    appropriately.
                  </li>
                  <li>
                    The completed form is then forwarded by the Relationship
                    Manager to the Customer Services team who confirms that the
                    account opening form is properly filled and necessary
                    documents attached.
                  </li>
                  <li>
                    The Customer Services team shall ensure that the account
                    opening documents are also approved by Internal Audit/Risk
                    and Legal & Compliance.
                  </li>
                  <li>
                    Upon necessary approvals for the account opening form, the
                    Customer Services department shall ensure that the
                    Client&apos;s account is opened internally and externally.
                  </li>
                  <li>Code is assigned to the customer within 24 hours.</li>
                </ol>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  Control Over Account Opening Forms
                </h3>
                <h4 className="text-base font-medium text-primary-800 mb-2">
                  A. Sales Department/ Relationship Officer
                </h4>
                <ol className="list-roman pl-6 space-y-2 text-sm sm:text-base text-primary-700">
                  <li>
                    Ensure that the account opening form is properly completed
                    by the Client and same is also accompanied by all necessary
                    KYC documentation.
                  </li>
                  <li>
                    In the case of an old account, the relationship officer
                    shall communicate with the Client with regard to the need to
                    update the Client&apos;s records.
                  </li>
                </ol>

                <h4 className="text-base font-medium text-primary-800 mt-4 mb-2">
                  B. Customer Service Department
                </h4>
                <ol className="list-roman pl-6 space-y-2 text-sm sm:text-base text-primary-700">
                  <li>
                    Confirm that the account opening form provided by the Sales
                    Executive is properly completed and all accompanying
                    documents provided.
                  </li>
                  <li>
                    Return incomplete or inaccurate forms to the Sales Executive
                    for rectification.
                  </li>
                  <li>
                    Periodically review Client records to ensure that all KYC
                    documentation is up to date and liaise with the relationship
                    manager to obtain the necessary information or documents
                    from the Client when needed.
                  </li>
                  <li>
                    When an existing Client&apos;s records are updated, such
                    Client; &apos;s information shall be updated on all
                    necessary platforms.
                  </li>
                  <li>
                    Where physical verification of the account is carried out,
                    the same is signed off on the account opening form as
                    &quot;Verified&quot; or the account opening form shall be
                    accompanied by a verification form duly filled and signed by
                    the Relationship Manager.
                  </li>
                </ol>

                <h4 className="text-base font-medium text-primary-800 mt-4 mb-2">
                  C. Maker & Checker
                </h4>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  The account opening process shall pass through 2 stages of
                  approval before completion of onboarding i.e. approval by
                  Risk/Internal Control and Legal &Compliance. This approval
                  level ensures that the account opening form is accurately and
                  properly completed and all required accompanying documents are
                  attached. The Internal Control/Risk Management department
                  shall periodically review customers&apos; files to ensure that
                  they are always complete.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  After onboarding, the Client&apos;s mandate shall pass through
                  Internal Control/Risk Management and Treasury before final
                  execution. The Internal Control/Risk Management shall ensure
                  that the account is funded and also confirm the completeness
                  of KYC before approval of execution.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  <strong>ACCOUNT CLOSURE:</strong> Clients&apos; accounts are
                  closed either directly by the client or upon an action
                  initiated by the company. Upon the receipt of a written
                  request from a client for an account closure, the head of
                  Sales shall engage the client to know why he intends to close
                  the account. Ultimately, accounts shall only be closed upon
                  the approval of the MD first sought and obtained. The account
                  Opening form is marked closed only after proper verification
                  of the client&apos;s ledger account & clearance has been
                  received from the Finance and Treasury regarding dues & margin
                  if any.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  Client&apos;s accounts may also be closed on an action
                  initiated by the company in the following cases:
                </p>
                <ol className="list-alpha pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>
                    If the client fails to provide proper documents as required
                    under the rules & regulations of the CBN even after repeated
                    requests by the company.
                  </li>
                  <li>
                    If the client is declared insolvent under any law in
                    Nigeria.
                  </li>
                  <li>
                    If criminal cases are filed or pending against the Client
                    and such information is not disclosed at the time of
                    registration with the company
                  </li>
                </ol>
              </section>

              {/* Appendix I */}
              <section className="scroll-mt-44" id="aml-appendix-i">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Appendix I: Customer Identification Requirements
                </h2>
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  1. Trust/Nominee or Fiduciary Accounts
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  A trust account is an account held by a third party (the
                  trustee) for the benefit of another party (the beneficiary).
                  Consequently, the Relationship Manager should determine
                  whether a customer is acting on behalf of another person as a
                  trustee/nominee or any other intermediary. If so, he shall
                  insist on receipt of satisfactory evidence of the identity of
                  the intermediaries and of the persons on whose behalf they are
                  acting. He shall also obtain details of the nature of the
                  trust or other arrangements in place.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  While opening an account for a trust, the Relationship Manager
                  should take reasonable precautions to verify the identity of
                  the trustees and the settlers of the trust, guarantors,
                  protectors, beneficiaries, and signatories. Beneficiaries
                  should be identified when they are defined. In the case of a
                  &apos;foundation,&apos; steps should be taken to verify the
                  founding managers, directors, and beneficiaries.
                </p>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  2. Accounts of Companies and Firms
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  The Sales Executive must be vigilant against business entities
                  being used by individuals as a front for maintaining accounts
                  with financial institutions (i.e. shell companies). He should
                  examine the control structure of the entity, determine the
                  source of funds, and identify the natural persons who have a
                  controlling interest and the profile of their management
                  staff. These requirements may be moderated according to the
                  risk perception e.g., in the case of a public company it will
                  not be necessary to identify all the shareholders. However,
                  promoters, directors, and executives need to be identified
                  adequately.
                </p>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  3. Accounts of Politically Exposed Persons (PEPs)
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  The Managing Director (M.D) shall approve to onboard a PEP,
                  hence, the Head of Customer Service must notify the M.D of any
                  PEP who seeks to open an account with the Company. In the case
                  of an existing Client, the Managing Director/CEO must approve
                  a continued relationship with such a Client.
                </p>
                <p className="text-sm sm:text-base text-primary-700 mt-3 leading-relaxed">
                  The Head of Sales shall gather sufficient information on PEPs
                  and check all the information available to the person in the
                  public domain. He should verify the identity of the person and
                  seek information about the sources of funds before seeking the
                  MD&apos;s approval to onboard the PEP as a customer. The
                  Risk/Internal Control department together with the Customer
                  Service department shall put in place appropriate mechanisms
                  to determine whether a Client is a PEP. The Compliance Officer
                  shall render returns on the transactions carried out by the
                  PEP to the NFIU.
                </p>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  4. Accounts of non-face-to-face customers
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  With the introduction of telephone and electronic banking,
                  accounts are being opened for Clients without the need for the
                  Client to walk in. In the case of non—face—to—face Clients,
                  apart from applying the usual customer identification
                  procedures, there must be specific and adequate procedures to
                  mitigate the high risk involved. Certification of all the
                  documents presented by Clients resident abroad shall be
                  insisted upon and, if necessary, additional documents may be
                  called for. Such documents shall be certified by a third party
                  which may be a government body or a regulated and supervised
                  entity with adequate KYC systems in place
                </p>
              </section>

              {/* Appendix II */}
              <section className="scroll-mt-44" id="aml-appendix-ii">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  APPENDIX-II: CUSTOMER IDENTIFICATION PROCEDURE
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Highlighted below are information/documents that must be
                  obtained and verified before the completion of the onboarding
                  process.
                </p>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  A. Individual Accounts
                </h3>
                <ol className="list-roman pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>Legal name and any other names</li>
                  <li>
                    Means of identification e.g., international passport,
                    residence permit issued by the Immigration Authorities,
                    driver&apos;s license issued by the Federal Road Safety
                    Commission (FRSC), Tax Clearance Certificate, birth
                    certificate or sworn declaration of age, national identity
                    card, permanent Voters&apos; Card and Bank Verification
                    Number (BVN)
                  </li>
                  <li>
                    Permanent address evidenced by record of home visit in
                    respect of non-Nigerians, confirmation from the electoral
                    register, recent utility bill such as electricity, waste or
                    water bill, driver&apos;s license issued by FRSC, bank
                    statement or passbook containing current address, letter
                    from a solicitor confirming recent house purchase or search
                    report from the Land Registry, tenancy agreement, search
                    reports on prospective client&apos;s place of employment and
                    residence (as approved by senior management).
                  </li>
                  <li>Date of birth</li>
                  <li>Source of funds</li>
                </ol>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  B. Corporate Account
                </h3>
                <ol className="list-roman pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>Name of the company;</li>
                  <li>
                    Trade or brand name if different from the incorporated name;
                  </li>
                  <li>Certificate of incorporation;</li>
                  <li>Memorandum and Articles of Association;</li>
                  <li>
                    Status Report from CAC detailing particulars of Directors;
                  </li>
                  <li>Mailing address of the company and proof of address;</li>
                  <li>Telephone number;</li>
                  <li>
                    Name, Addresses and Identity cards (government-issued:
                    international passport, driver&apos;s license) of the
                    Directors and their BVN;
                  </li>
                  <li>
                    Board Resolution to open an account and identification of
                    those who have authority to operate the account;
                  </li>
                  <li>Passport photo;</li>
                  <li>Tax Identification Number (TIN);</li>
                  <li>
                    Special Control Unit Against Money Laundering (SCUML)
                    registration(number, certificate or approval) for DNFBP; and
                  </li>
                  <li>Nature of Company&apos;s business</li>
                </ol>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  C. Partnership Firms
                </h3>
                <ol className="list-roman pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>Legal name;</li>
                  <li>Address and proof of same;</li>
                  <li>Names of all partners and their addressee;</li>
                  <li>Telephone numbers of the firm and partners;</li>
                  <li>Registration certificate, if registered;</li>
                  <li>Partnership deed;</li>
                  <li>
                    Power of Attorney granted to a partner or an employee of the
                    firm to transact business on its behalf.
                  </li>
                  <li>
                    Any officially valid document identifying the partners and
                    the persons holding the power of Attorney and his/her
                    addresses
                  </li>
                </ol>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  D. Accounts of Trusts & Foundations/Associations
                </h3>
                <ol className="list-roman pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>
                    Names of trustees, settlers, beneficiaries, and signatories
                  </li>
                  <li>mailing address</li>
                  <li>
                    Names and addresses of the founder, the managers/directors,
                    and the beneficiaries
                  </li>
                  <li>Telephone/fax number</li>
                  <li>Certificate of registration, if registered</li>
                  <li>
                    document describing the purpose or objectives of the
                    organization
                  </li>
                  <li>
                    Power of Attorney granted to transact business on its behalf
                  </li>
                  <li>
                    Any officially valid document to identify the trustees and
                    beneficiaries
                  </li>
                </ol>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  E. Foreign Client: In addition to the above,
                </h3>
                <ol className="list-roman pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>
                    copy of international passport, national identity card, or
                    proof of address certified by;
                  </li>
                </ol>
                <ul className="list-roman pl-10 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>
                    the embassy, consulate, or high commission of the country of
                    issue
                  </li>
                  <li>notary public or court of competent jurisdiction</li>
                  <li>
                    where the original is cited, copies signed and stamped
                    &quot;original sighted by me&quot; by senior management
                  </li>
                </ul>
              </section>

              {/* Appendix III */}
              <section className="scroll-mt-44" id="aml-appendix-iii">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Appendix III: Reporting Threshold
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-primary-200 border">
                    <thead className="bg-primary-50">
                      <tr>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-primary-500 dark:text-background uppercase tracking-wider border-r"
                          scope="col"
                        >
                          S/N
                        </th>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-primary-500 dark:text-background uppercase tracking-wider border-r"
                          scope="col"
                        >
                          Name of Report
                        </th>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-primary-500 dark:text-background uppercase tracking-wider border-r"
                          scope="col"
                        >
                          Regulatory Threshold
                        </th>
                        <th
                          className="px-4 py-3 text-left text-xs font-medium text-primary-500 dark:text-background uppercase tracking-wider"
                          scope="col"
                        >
                          Reporting Timeline
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-primary-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-primary-900 dark:text-background-500 border-r">
                          1
                        </td>
                        <td className="px-4 py-4 text-sm text-primary-700 dark:text-background-500 border-r">
                          Suspicious Transaction Report (STR)
                        </td>
                        <td className="px-4 py-4 text-sm text-primary-700 dark:text-background-500 border-r">
                          Nil
                        </td>
                        <td className="px-4 py-4 text-sm text-primary-700 dark:text-background-500">
                          Within 24 hours
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Appendix IV */}
              <section className="scroll-mt-44" id="aml-appendix-iv">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Appendix IV: Suspicious Transactions
                </h2>
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  1 Potential suspicious transactions include:
                </h3>
                <ol className="list-alpha pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>
                    transactions involving high-risk countries vulnerable to
                    ML/TF/PF subject to this being confirmed.
                  </li>
                  <li>transactions involving shell companies.</li>
                  <li>
                    transactions with correspondents that have been identified
                    as higher risk.
                  </li>
                  <li>
                    large transaction activity involving monetary instruments
                    such as traveler&apos;s cheques, bank drafts, money orders,
                    particularly those that are serially numbered.
                  </li>
                  <li>Complex and unusual transactions</li>
                  <li>
                    transaction activity involving amounts that are just below
                    the stipulated reporting sum or enquiries that appear to
                    test an institution&apos;s own internal monitoring or
                    controls.
                  </li>
                  <li>
                    other ML/TF/PF indicators approved by the FATF, GIABA etc.
                  </li>
                </ol>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  2. Terrorist Financing &quot;Red flags&quot; includes
                </h3>
                <ol className="list-alpha pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>
                    where persons involved in a transaction share an address or
                    phone number especially when the address is also a business
                    address or does not correspond with the stated occupation,
                    such as student, unemployed, or self-employed.
                  </li>
                  <li>
                    transactions by a nonprofit or charitable organisation which
                    appears to be of no logical economic purpose.
                  </li>
                  <li>
                    Transactions by nonprofit or charitable organisation which
                    has no link to the stated activity of the organization and
                    other parties in the transaction.
                  </li>
                  <li>
                    large volume of transactions through a business account,
                    where there appears to be no logical business or other
                    economic purpose for the transfers, particularly when this
                    activity involves designated high- risk locations
                  </li>
                  <li>
                    Where the stated occupation of the client is inconsistent
                    with the type, balance and level of account activity
                  </li>
                  <li>
                    Reference to the persons or entities listed in the UN list
                    or Nigerian list of terrorists or terrorist organizations
                    under the terrorism prevention (Freezing of International
                    Terrorism Funds and Other Related Measures), Regulations
                  </li>
                  <li>
                    Other money laundering, financing of terrorism and
                    proliferation financing indicators published by FATF.
                  </li>
                </ol>

                <h3 className="text-lg font-medium text-primary-800 mt-6 mb-2">
                  3. Employee Red Flags
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  When an employee
                </p>
                <ol className="list-alpha pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>
                    exhibits a lavish lifestyle that cannot be justified by his
                    salary.
                  </li>
                  <li>fails to comply with approved operating guidelines.</li>
                  <li>is reluctant to go on leave or take a vacation</li>
                </ol>
              </section>

              {/* Annexure 1 */}
              <section className="scroll-mt-44" id="aml-annexure">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  ANNEXURE 1
                </h2>
                <h3 className="text-lg font-medium text-primary-800 mb-2">
                  REGULATORY AND LEGAL FRAMEWORK
                </h3>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Nigerian Financial Institutions are monitored for money
                  laundering by some organisations /agencies and under the
                  provisions of the regulations specified below:
                </p>

                <h4 className="text-base font-medium text-primary-800 mt-6 mb-2">
                  Institutional Framework – Local
                </h4>
                <ul className="list-roman pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>Economic and Financial Crimes Commission (EFCC).</li>
                  <li>Nigerian Financial Intelligence Unit (NFIU).</li>
                  <li>National Drug Law Enforcement Agency (NDLEA).</li>
                  <li>Central Bank of Nigeria (CBN).</li>
                  <li>Independent Corrupt Practices Commission (ICPC).</li>
                  <li>Federal Inland Revenue Services (FIRS).</li>
                </ul>

                <h4 className="text-base font-medium text-primary-800 mt-6 mb-2">
                  Institutional Framework International
                </h4>
                <ul className="list-roman pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>Basel Committee on Banking Supervision.</li>
                  <li>Financial Action Task Force (FATF).</li>
                  <li>
                    Inter-Governmental Group Against Money Laundering (GIABA).
                  </li>
                  <li>Egmont Group (of Financial Intelligence Units)</li>
                  <li>United Nations Office of Drugs and Crime (UNODC).</li>
                  <li>The World Bank.</li>
                  <li>European Union.</li>
                  <li>Interpol.</li>
                  <li>The Joint Money Laundering Steering Group.</li>
                </ul>

                <h4 className="text-base font-medium text-primary-800 mt-6 mb-2">
                  Legal Framework – Local
                </h4>
                <ul className="list-roman pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>
                    Money Laundering (Prevention & Prohibition) Act, 2022.
                  </li>
                  <li>Terrorism (Prevention & Prohibition) Act, 2022.</li>
                  <li>CBN AML/CFT Regulations, 2022.</li>
                  <li>
                    Terrorism Prevention (Freezing of International Terrorists
                    Funds and Other Related Measures) Regulations, 2011.
                  </li>
                  <li>Cybercrimes (Prohibition, Prevention, etc) Act, 2015.</li>
                  <li>
                    Special Control Unit against Money Laundering AML/CFT
                    Regulations for Designated Non-Financial Businesses and
                    Professions in Nigeria, 2013.
                  </li>
                  <li>
                    Advance Fee Fraud and other Fraud Related Offences Act,
                    2006.
                  </li>
                  <li>
                    Bank&apos;s (recovery of Debt) and Financial Malpractices in
                    Banks in Nigeria Act (as amended).
                  </li>
                  <li>Banks and other Financial Institutions Act, 1991.</li>
                  <li>ICPC (Establishment) Act.</li>
                </ul>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AmlPolicy;
