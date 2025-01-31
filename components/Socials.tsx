import React from "react";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";

import { SocialLayout } from "@/components";
import { InstagramIcon, TikTokIcon } from "@/public/assets";

const Socials = () => {
  return (
    <div className=" relative bottom-0 flex flex-col items-start space-y-3  ">
      <div className="flex items-center  gap-5 md:flex-row md:flex-nowrap flex-wrap justify-center">
        <SocialLayout
          hoverBgColor="bg-background"
          hoverText="mybackbone_io"
          linkTo="https://www.twitter.com/mybackbone_io"
        >
          <Icon icon="ri:twitter-x-line" />
        </SocialLayout>
        <SocialLayout
          hoverBgColor="bg-background"
          hoverBorderColor="border-accent3/50"
          hoverIconColor="bg-accent3"
          hoverText="backbone-finance"
          linkTo="https://www.linkedin.com/company/backbone-finance/?viewAsMember=true"
        >
          <Icon icon="ri:linkedin-box-fill" />
        </SocialLayout>
        <SocialLayout
          hoverBgColor="bg-accent2-100"
          hoverBorderColor="border-accent2"
          hoverChildren={
            <Image
              alt="instagram"
              className="w-5 h-5 p-0"
              src={InstagramIcon.src}
            />
          }
          hoverIconColor="bg-transparent"
          hoverText="mybackbone.io"
          linkTo="https://www.instagram.com/mybackbone.io"
        >
          <Icon icon="ri:instagram-line" />
        </SocialLayout>
        <SocialLayout
          hoverBgColor="bg-accent3-200"
          hoverBorderColor="border-accent3-300"
          hoverChildren={
            <Image alt="tikTok" className="w-5 h-5" src={TikTokIcon.src} />
          }
          hoverIconColor="bg-transparent"
          hoverText="mybackbone.io"
          linkTo="https://www.tiktok.com/@mybackbone.io?_t=8n0PIC0zKfm&_r=1"
        >
          <Icon icon="ri:tiktok-line" />
        </SocialLayout>
        <SocialLayout
          hoverBgColor="bg-red-100"
          hoverBorderColor="border-red-300"
          hoverIconColor="bg-red-500"
          hoverText="mybackbonefi"
          linkTo="https://www.youtube.com/@mybackbonefi"
        >
          <Icon icon="ri:youtube-line" />
        </SocialLayout>
      </div>
    </div>
  );
};

export default Socials;
