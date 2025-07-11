"use client";

import { Icon } from "@iconify/react";
import { Card } from "@heroui/card";
import { Link } from "@heroui/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Privacy Policy Card */}
        <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <div className="flex-shrink-0 self-center sm:self-start">
              <Icon
                className="h-10 w-10 sm:h-12 sm:w-12 text-info"
                icon="lucide:shield"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-primary mb-3 lg:mb-4">
                Privacy Policy
              </h2>
              <p className="text-sm sm:text-base text-primary-200 mb-4 sm:mb-6 leading-relaxed">
                Explains what information we collect and why, how we use it, and
                how to review and update it. Learn about our commitment to
                protecting your personal data in compliance with Nigerian Data
                Protection Regulation 2019.
              </p>
              <Link
                className="text-sm sm:text-base text-info hover:text-info-700 font-medium"
                href="/policies/privacy-policy"
              >
                Read our Privacy Policy
              </Link>
            </div>
          </div>
        </Card>

        {/* Terms of Service Card */}
        <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <div className="flex-shrink-0 self-center sm:self-start">
              <Icon
                className="h-10 w-10 sm:h-12 sm:w-12 text-green-600"
                icon="lucide:file-text"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-primary mb-3 lg:mb-4">
                Terms of Service
              </h2>
              <p className="text-sm sm:text-base text-primary-200 mb-4 sm:mb-6 leading-relaxed">
                Describes the rules which you agree to when using our services.
                Understand your rights and responsibilities when engaging with
                Backbone Finance Inc.
              </p>
              <Link
                className="text-sm sm:text-base text-info hover:text-info-700 font-medium"
                href="/policies/terms"
              >
                Read our Terms of Service
              </Link>
            </div>
          </div>
        </Card>

        {/* AML Policy Card */}
        <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <div className="flex-shrink-0 self-center sm:self-start">
              <Icon
                className="h-10 w-10 sm:h-12 sm:w-12 text-amber-600"
                icon="lucide:alert-triangle"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-primary mb-3 lg:mb-4">
                AML Policy
              </h2>
              <p className="text-sm sm:text-base text-primary-200 mb-4 sm:mb-6 leading-relaxed">
                Our Anti-Money Laundering (AML), Combating Financing of
                Terrorism (CFT) and Countering Proliferation Financing (CPF)
                Policy outlines our commitment to preventing financial crimes.
              </p>
              <Link
                className="text-sm sm:text-base text-info hover:text-info-700 font-medium"
                href="/policies/aml-policy"
              >
                Read our AML Policy
              </Link>
            </div>
          </div>
        </Card>

        {/* Cookie Policy Card */}
        <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <div className="flex-shrink-0 self-center sm:self-start">
              <Icon
                className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600"
                icon="lucide:cookie"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-primary mb-3 lg:mb-4">
                Cookie Policy
              </h2>
              <p className="text-sm sm:text-base text-primary-200 mb-4 sm:mb-6 leading-relaxed">
                Explains how we use cookies and similar tracking technologies on
                our website to improve functionality, analyze traffic, and
                enhance your browsing experience.
              </p>
              <Link
                className="text-sm sm:text-base text-info-600 hover:text-info-700 font-medium"
                href="/policies/cookie-policy"
              >
                Read our Cookie Policy
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
