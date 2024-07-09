import type React from "react";

import SurahSidebar from "./_components/surah-sidebar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <div className="grid [grid-template-columns:300px_1fr] h-screen">
        <div className="">
          <SurahSidebar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
