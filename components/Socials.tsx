import React from "react";
import { SocialLayout } from "@/components";
import { InstagramIcon, TikTokIcon } from "@/public/assets";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";

const Socials = () => {
  return (
    <div
      className=" relative bottom-0 flex flex-col items-start space-y-3  "

    >
      <div className="flex items-center  gap-5 md:flex-row md:flex-nowrap flex-wrap justify-center">
        <SocialLayout
          hoverText="mybackbone_io"
          linkTo="https://www.twitter.com/mybackbone_io"
          hoverBgColor="bg-background"
        >
          <Icon icon="ri:twitter-x-line" />
        </SocialLayout>
        <SocialLayout
          hoverText="backbone-finance"
          linkTo="https://www.linkedin.com/company/backbone-finance/?viewAsMember=true"
          hoverBgColor="bg-background"
          hoverBorderColor="border-accent3/50"
          hoverIconColor="bg-accent3"
        >
          <Icon icon="ri:linkedin-box-fill" />
        </SocialLayout>
        <SocialLayout
          hoverText="mybackbone.io"
          linkTo="https://www.instagram.com/mybackbone.io"
          hoverBgColor="bg-accent2-100"
          hoverBorderColor="border-accent2"
          hoverIconColor="bg-transparent"
          hoverChildren={
            <Image
              src={InstagramIcon.src}
              className="w-5 h-5 p-0"
              alt="instagram"
            />
          }
        >
          <Icon icon="ri:instagram-line" />
        </SocialLayout>
        <SocialLayout
          hoverText="mybackbone.io"
          linkTo="https://www.tiktok.com/@mybackbone.io?_t=8n0PIC0zKfm&_r=1"
          hoverBgColor="bg-accent3-200"
          hoverBorderColor="border-accent3-300"
          hoverIconColor="bg-transparent"
          hoverChildren={
            <Image src={TikTokIcon.src} alt="tikTok" className="w-5 h-5" />
          }
        >
          <Icon icon="ri:tiktok-line" />
        </SocialLayout>
        <SocialLayout
          hoverText="mybackbonefi"
          linkTo="https://www.youtube.com/@mybackbonefi"
          hoverBgColor="bg-red-100"
          hoverBorderColor="border-red-300"
          hoverIconColor="bg-red-500"
        >
          <Icon icon="ri:youtube-line" />
        </SocialLayout>
      </div>
    </div>
  );
};

export default Socials;
