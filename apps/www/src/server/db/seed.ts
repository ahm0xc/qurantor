import { posts } from "./schema";
import { db } from ".";

async function main() {
  const d = await db.insert(posts).values({
    name: `Test ${Date.now().toString()}`,
  });
  console.log("🚀 ~ d ~ d:", );
}

main();
