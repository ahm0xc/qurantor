export async function GET() {
  return new Response("Hello");
}

// import path from "path";
// import fs from "fs";

// export async function GET() {
//   const langs = ["ben", "ara", "eng"];
//   //   const files = fs.readdirSync(path.join(process.cwd(), "src/data/editions"));

//   //   files.forEach((fileName) => {
//   //     if (langs.includes(fileName.split("-")[0])) {
//   //       copyFile(
//   //         path.join(process.cwd(), `src/data/editions/${fileName}`),
//   //         path.join(process.cwd(), `src/data/editions-min/${fileName}`)
//   //       );
//   //     }
//   //   });

//   // const fileContent = JSON.parse(
//   //   fs.readFileSync(
//   //     path.join(process.cwd(), "src/data/editions/index.json"),
//   //     "utf-8"
//   //   )
//   // );
//   // console.log("🚀 ~ GET ~ fileContent:", fileContent);

//   const s = Object.values(fileContent)
//     .filter((ed: any) => langs.includes(ed.name.split("-")[0]))
//     .map((ed: any) => ({
//       name: ed.name,
//       author: ed.author,
//       language: ed.language,
//       direction: ed.direction,
//       source: ed.source,
//       comments: ed.comments,
//       link: `https://qurantor.vercel.app/api/editions/${ed.name}`,
//     }));

//   fs.writeFileSync(
//     path.join(process.cwd(), "src/data/editions-min/index.json"),
//     JSON.stringify(s)
//   );

//   return new Response("test");
// }

// function copyFile(source: string, destination: string) {
//   return new Promise<void>((resolve, reject) => {
//     // Create the destination directory if it doesn't exist
//     const destinationDir = path.dirname(destination);
//     fs.mkdir(destinationDir, { recursive: true }, (err) => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       // Copy the file
//       fs.copyFile(source, destination, (err) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve();
//         }
//       });
//     });
//   });
// }
