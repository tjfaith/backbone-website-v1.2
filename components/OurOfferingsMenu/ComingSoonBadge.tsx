import { Chip } from "@heroui/chip";
import React from "react";
import { Icon } from "@iconify/react";

const ComingSoonBadge = () => {
  return (
    <Chip
      className="text-xs rounded-lg text-foreground-600 bg-background border-foreground-100 dark:bg-background-300 dark:text-foreground-100 dark:border-foreground-200 border-2 py-1 px-2 flex items-center gap-1 border-dashed"
      startContent={
        <Icon
          className="text-foreground-300 dark:text-foreground-400"
          icon="ri:forbid-fill"
        />
      }
    >
      <span>Coming soon</span>
    </Chip>
  );
};

export default ComingSoonBadge;
