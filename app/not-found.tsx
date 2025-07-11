"use client";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Visual Element */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-[12rem] md:text-[16rem] font-bold text-gray-800 leading-none select-none">
              404
            </h1>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Page Not Found
        </h2>

        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          Oops! The page you&apos;re looking for seems to have vanished into the
          digital void. Don&apos;t worry, it happens to the best of us.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            className="bg-white text-black hover:bg-gray-200 px-8"
            size="lg"
          >
            <Link href="/">
              <Icon className="w-4 h-4 mr-2" icon="ri:home" />
              Go Home
            </Link>
          </Button>
          <Button
            className="border-gray-600 text-primary hover:text-white hover:bg-gray-800 px-8 bg-transparent"
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
