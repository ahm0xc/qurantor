import * as React from "react";

import { ARABIC_FONT, AyatNumberStyle12Font } from "~/lib/fonts";
import { cn } from "~/lib/utils";

interface AyahBlockProps {
  ayahNumber: number;
  arabicText: string;
  arabicLaText: string;
  englishText: string;
}

const AyahBlock: React.FC<AyahBlockProps> = ({
  ayahNumber,
  arabicText,
  arabicLaText,
  englishText,
}) => {
  return (
    <div className="border-t first:border-none pt-16 first:pt-0">
      <div className="flex items-start">
        <div className="px-4">
          <p>.</p>
          <p>.</p>
        </div>
        <div className="w-full px-6 space-y-3">
          {/* arabic text */}
          <div>
            <p
              className={cn(
                "text-4xl leading-[1.7] font-medium",
                ARABIC_FONT.className
              )}
              dir="rtl"
            >
              {arabicText}{" "}
              <span
                className={cn(
                  "text-blue-500 font-medium text-[45px] mr-2",
                  AyatNumberStyle12Font.className
                )}
              >
                {ayahNumber}
              </span>
            </p>
          </div>
          {/* arabic la text */}
          <div>
            <p className="text-base font-medium text-[15px] text-blue-500">
              {arabicLaText}
            </p>
          </div>
          {/* english text */}
          <div>
            <p className="text-base font-medium text-[15px] text-gray-900">
              {englishText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyahBlock;
