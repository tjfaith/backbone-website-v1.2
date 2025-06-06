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
                Backbone Technology Solutions.
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
                className="h-10 w-10 sm:h-12 sm:w-12 text-green-600"
                icon="lucide:file-text"
              />
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

        {/* Data Protection Centre */}
        {/* <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <div className="flex-shrink-0 self-center sm:self-start flex space-x-1">
              <Icon
                className="h-6 w-6 sm:h-8 sm:w-8 text-info-500"
                icon="lucide:shield"
              />
              <Icon
                className="h-6 w-6 sm:h-8 sm:w-8 text-green-500"
                icon="lucide:lock"
              />
              <Icon
                className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500"
                icon="lucide:eye"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-primary mb-3 lg:mb-4">
                Data Protection Centre
              </h2>
              <p className="text-sm sm:text-base text-primary-200 mb-4 sm:mb-6 leading-relaxed">
                Making technology solutions for everyone means protecting
                everyone who uses them. Visit our Data Protection Centre to find
                out more about our built-in security, privacy controls and tools
                to help set digital ground rules for your business online.
              </p>
              <a
                className="text-sm sm:text-base text-info hover:text-info-700 font-medium"
                href="#data-protection"
              >
                Explore what we do to help keep you safe
              </a>
            </div>
          </div>
        </Card> */}

        {/* Client Account */}
        {/* <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <div className="flex-shrink-0 self-center sm:self-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-info-100 rounded-full flex items-center justify-center">
                <Icon
                  className="h-5 w-5 sm:h-6 sm:w-6 text-info"
                  icon="lucide:user"
                />
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-primary mb-3 lg:mb-4">
                Client Account
              </h2>
              <p className="text-sm sm:text-base text-primary-200 mb-4 sm:mb-6 leading-relaxed">
                Control, protect and secure your account, all in one place. Your
                Client Account gives you quick access to settings and tools that
                let you safeguard your data and protect your privacy.
              </p>
              <a
                className="text-sm sm:text-base text-info hover:text-info-700 font-medium"
                href="#account"
              >
                Visit your Client Account
              </a>
            </div>
          </div>
        </Card> */}

        {/* Privacy and Security Principles */}
        {/* <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <div className="flex-shrink-0 self-center sm:self-start flex space-x-1">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-info-500 rounded-full flex items-center justify-center">
                <Icon
                  className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                  icon="lucide:users"
                />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Icon
                  className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                  icon="lucide:users"
                />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Icon
                  className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                  icon="lucide:users"
                />
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-primary mb-3 lg:mb-4">
                Our Privacy and Security Principles
              </h2>
              <p className="text-sm sm:text-base text-primary-200 mb-4 sm:mb-6 leading-relaxed">
                We build privacy that works for everyone. It&apos;s a
                responsibility that comes with creating products and services
                that are accessible for all. We look to these principles to
                guide our products, our processes and our people in keeping our
                users&apos; data private, safe and secure.
              </p>
              <a
                className="text-sm sm:text-base text-info hover:text-info-700 font-medium"
                href="#principles"
              >
                Explore our Privacy and Security Principles
              </a>
            </div>
          </div>
        </Card> */}

        {/* Service Privacy Guide */}
        {/* <Card className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <div className="flex-shrink-0 self-center sm:self-start flex space-x-1">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Icon
                  className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                  icon="lucide:globe"
                />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-info-500 rounded-full flex items-center justify-center">
                <Icon
                  className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                  icon="lucide:building"
                />
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-primary mb-3 lg:mb-4">
                Service Privacy Guide
              </h2>
              <p className="text-sm sm:text-base text-primary-200 mb-4 sm:mb-6 leading-relaxed">
                As you use our technology solutions and other services from
                Backbone Technology Solutions, you have the power to control and
                protect your personal information and usage history. The Service
                Privacy Guide can help you find information about how to manage
                some of the privacy features built into our services.
              </p>
              <a
                className="text-sm sm:text-base text-info hover:text-info-700 font-medium"
                href="#service-guide"
              >
                Learn about our Service Privacy Guide
              </a>
            </div>
          </div>
        </Card> */}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
