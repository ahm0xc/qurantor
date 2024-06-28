import React from "react";

import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import { api } from "~/trpc/server";

export default async function TestPage() {
  const data = await api.post.getLatest();

  return (
    <div>
      {/* {data.map((post) => (
        <div key={`hello-${post.id}`}>
          {post.id} - {post.name}
        </div>
      ))} */}
      {data?.name}
    </div>
  );
}
