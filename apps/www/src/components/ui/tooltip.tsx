import * as React from "react";
import { Tooltip as T } from "@lemonsqueezy/wedges";

interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof T.Content> {}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  asChild = false,
  ...props
}) => {
  return (
    <T.Provider>
      <T.Root>
        <T.Trigger asChild={asChild}>{children}</T.Trigger>
        <T.Portal>
          <T.Content content={content} {...props}>
            {content}
          </T.Content>
        </T.Portal>
      </T.Root>
    </T.Provider>
  );
};

export default Tooltip;
