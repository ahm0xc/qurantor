import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      HomePage
      <Link href="/docs" className="text-orange-600">Docs</Link>
    </div>
  );
}
