import React from "react";

import { Subscribe } from "@/components";

const BlogSubscribe = () => {
  return (
    <div className="bg-primary dark:bg-background-100 -mb-5">
      <div className=" page-max-width px-6 py-10 mt-8 flex md:flex-row flex-col items-center relative xl:h-screen-55">
        <div className="  text-white md:w-6/12 w-full space-y-6 z-20">
          <div className="text-4xl max-w-sm  font-semibold">
            Subscribe to the Backbone Blog
          </div>
          <div className=" tracking-wider">
            Get notifications about blog posts, company events and
            announcements, products and founder materials.
          </div>
          <Subscribe />
        </div>
        {/* <div>
        <div className=" absolute bottom-0">
          <Image disableSkeleton alt="send email" src={SendEmail.src} />
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default BlogSubscribe;
