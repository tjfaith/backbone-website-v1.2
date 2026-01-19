"use client";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 dark:bg-background">
      <div className="text-center max-w-2xl mx-auto">

        {/* SVG Illustration */}
        <div className="mb-6 flex justify-center">
          <svg
            width="260"
            height="200"
            viewBox="0 0 260 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-90"
          >
            <circle cx="130" cy="100" r="80" className="fill-gray-200 dark:fill-background-300" />
            <path
              d="M90 90h80v20H90z"
              className="fill-gray-400 dark:fill-primary-400"
            />
            <circle cx="110" cy="100" r="6" className="fill-gray-600 dark:fill-foreground-50" />
            <circle cx="150" cy="100" r="6" className="fill-gray-600 dark:fill-foreground-50" />
            <path
              d="M110 130c10 10 30 10 40 0"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-gray-500 dark:text-foreground-300"
            />
          </svg>
        </div>

        {/* 404 Visual Element */}
        <div className="mb-8">
          <div className="relative">
            <h1
              className="
                text-3xl md:text-9xl font-bold leading-none select-none
                text-gray-800
                dark:text-primary-400
              "
            >
              404
            </h1>
          </div>
        </div>

        {/* Error Message */}
        <h2
          className="
            text-3xl md:text-5xl font-bold mb-6
            bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent
            dark:from-foreground-50 dark:to-foreground-300
          "
        >
          Page Not Found
        </h2>

        <p
          className="
            text-xl mb-8 leading-relaxed
            text-gray-400
            dark:text-foreground-300
          "
        >
          Oops! The page you&apos;re looking for seems to have vanished into the
          digital void. Don&apos;t worry, it happens to the best of us.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            className="
              bg-white text-black hover:bg-gray-200 px-8
              dark:bg-background-300 dark:text-background dark:hover:bg-background-100
            "
            size="lg"
          >
            <Link href="/">
              <Icon className="w-4 h-4 mr-2" icon="ri:home" />
              Go Home
            </Link>
          </Button>

          <Button
            className="
              border-gray-600 text-primary hover:text-white hover:bg-gray-800 px-8 bg-transparent
              dark:border-primary-700 dark:text-primary-300
              dark:hover:bg-background-300 dark:hover:text-foreground-50
            "
            size="lg"
            variant="flat"
            onPress={() => router.back()}
          >
            <Icon className="w-4 h-4 mr-2" icon="ri:arrow-left-fill" />
            Go Back
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
