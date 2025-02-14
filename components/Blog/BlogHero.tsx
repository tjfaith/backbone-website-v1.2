"use client";
import React from "react";

import { BlogHeroImg } from "@/public/assets";
import { Subscribe } from "@/components";

const BlogHero = () => {
  return (
    <div
      className=" relative inset-0 bg-cover bg-center h-screen-80 flex items-center  "
      style={{ backgroundImage: `url(${BlogHeroImg.src})` }}
    >
      <div className="h-screen-80 absolute  inset-0 bg-black/40  dark:bg-gradient-to-b from-background via-50% via-transparent to-background-200 pointer-events-none" />
      <div className=" z-10 w-full h-full flex items-center pt-12 bg-[radial-gradient(circle_at_50%_55%,_var(--tw-gradient-stops))] md:bg-[radial-gradient(ellipse_at_0%_52%,_var(--tw-gradient-stops))] from-black via-transparent via-60% to-transparent to-100%  ">
        <div
          className="page-max-width w-full text-background dark:text-primary"
          data-aos="fade-up"
        >
          <div className="text-2xl   sm:text-5xl font-medium clash-display-font mb-5  animate__animated animate__fadeInUp animate__fast">
            Blog
          </div>
          <div className=" text-sm md:text-xl max-w-xl drop-shadow-lg mb-5  animate__animated animate__fadeInUp animate__faster">
            Discover a collection of insightful articles covering finance,
            payments, and digital solutions. Stay informed with expert
            perspectives, industry trends, and practical tips to help you
            navigate the evolving financial landscape.
          </div>
          <div className="max-w-lg  animate__animated animate__fadeInUp animate__fast">
            <div className="mb-2 text-sm">
              Get notifications about blog posts
            </div>
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
