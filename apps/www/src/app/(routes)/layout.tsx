import React from "react";

import Sidebar from "./_components/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <div className="grid md:[grid-template-columns:70px_1fr] h-screen">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
}
