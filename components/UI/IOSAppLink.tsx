import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import React from "react";

const IOSAppLink = () => {
  return (
    <Button
      className="p-3 bg-background-200"
      endContent={<Icon icon="grommet-icons:apple-app-store" />}
    >
      Get our app
    </Button>
  );
};

export default IOSAppLink;
