"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@lemonsqueezy/wedges";
import { usePathname } from "next/navigation";

import {
  BookClosedIcon,
  AlarmClockIcon,
  Logo,
  HandPrayerIcon,
  SettingsIcon,
  LibraryIcon,
} from "~/components/icons";
import { cn } from "~/lib/utils";
import Image from "next/image";
import Tooltip from "~/components/ui/tooltip";

interface SidebarItemType {
  label: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isActive: (path: string) => boolean;
}

const sidebarItems: (SidebarItemType | string)[] = [
  {
    label: "Surah",
    href: "/",
    icon: BookClosedIcon,
    isActive: (path: string) => Array.from({length: 114}).map((_, i) => "/" + (i + 1)).includes(path)
  },
  {
    label: "Prayers",
    href: "/prayers",
    icon: AlarmClockIcon,
    isActive: (path: string) => path === "/prayers" 
  },
  "",
  {
    label: "Doa",
    href: "/doa",
    icon: HandPrayerIcon,
    isActive: (path: string) => path === "/doa" 
  },
  {
    label: "Hadith",
    href: "/hadith",
    icon: LibraryIcon,
    isActive: (path: string) => path === "/hadith" 
  },
];

type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  return (
    <aside className="h-full w-full flex flex-col items-center py-6 bg-surface-50">
      <div>
        <Link href="/" aria-label="logo">
          <Logo className="h-8 w-8" />
        </Link>
      </div>
      {/* sidebar items */}
      <nav className="mt-8">
        <div className="flex flex-col gap-1">
          {sidebarItems.map((item, idx) => {
            if (typeof item === "string")
              return (
                <div>
                  <SidebarGroupSeparator className="my-1 w-[80%]" />
                </div>
              );
            return <SidebarItem key={`sidebar-item-${idx}`} item={item} />;
          })}
        </div>
      </nav>
      {/* sidebar footer */}
      <div className="mt-auto">
        <div className="flex justify-center">
          <button aria-label="user button">
            <Image
              src={"/avatar.jpg"}
              width={60}
              height={60}
              className="h-8 w-8 rounded-full object-cover border border-surface-100"
              alt=""
            />
          </button>
        </div>
        <div className="mt-2">
          <Tooltip content={<p>Settings</p>} color="soft" side="right">
            <Button
              variant="transparent"
              className="h-11 w-11 hover:bg-surface-100"
            >
              <SettingsIcon className="h-6 w-6" />
              <span className="sr-only">settings</span>
            </Button>
          </Tooltip>
        </div>
      </div>
    </aside>
  );
}

interface SidebarItemProps {
  item: SidebarItemType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const pathname = usePathname();

  const isActive = item.isActive(pathname);
  const Icon = item.icon;

  return (
    <Tooltip asChild content={<p>{item.label}</p>} side="right" color="soft">
      <Button
        variant={isActive ? "primary" : "transparent"}
        className={cn("h-11 w-11", !isActive && "hover:bg-surface-100")}
        asChild
      >
        <Link href={item.href}>
          <Icon className="h-6 w-6" />
        </Link>
      </Button>
    </Tooltip>
  );
};

interface SidebarGroupSeparatorProps {
  className?: string;
}

const SidebarGroupSeparator: React.FC<SidebarGroupSeparatorProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "h-1 w-[50%] mx-auto bg-surface-100 rounded-full",
        className
      )}
    />
  );
};
