import React from "react";

import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export default async function TestPage() {
  await db.insert(posts).values({
    name: "Test post",
  });
  const postsData = await db.select().from(posts);

  return (
    <div>
      {postsData.map((post) => (
        <div key={`hello-${post.id}`}>
          {post.id} - {post.name}
        </div>
      ))}
    </div>
  );
}
