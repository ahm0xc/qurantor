import fs from "node:fs";

function createFile(path, content) {
  try {
    fs.writeFileSync(path, content);
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

function toTitleCase(str, replacer = " ") {
  // 1. Convert to lowercase and split into words
  const words = str.toLowerCase().split(/[- ]/);

  // 2. Capitalize the first letter of each word (excluding minor words)
  const titleCasedWords = words.map((word, index) => {
    const minorWords = [
      "a",
      "an",
      "the",
      "but",
      "or",
      "nor",
      "for",
      "and",
      "on",
      "to",
      "at",
      "by",
      "of",
    ];
    return index === 0 || !minorWords.includes(word)
      ? word.charAt(0).toUpperCase() + word.slice(1)
      : word;
  });

  // 3. Join the words back with spaces or hyphens
  return titleCasedWords.join(replacer); // Use " " for spaces, "-" for hyphens
}

async function getEditionList() {
  try {
    const data = await fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json"
    ).then((r) => r.json());

    createFile("./editions/index.json", JSON.stringify(data));

    return data;
  } catch (error) {
    console.log("🚀 ~ getEditionList ~ error:", error);
  }
}

async function getEditions() {
  try {
    const editions = await getEditionList();
    const editionList = Object.values(editions);
    editionList.forEach(async (edition) => {
      const data = await fetch(edition.linkmin).then((r) => r.json());
      createFile(`./editions/${edition.name}.json`, JSON.stringify(data));
      console.log(`✅ Created editions/${edition.name}.json`);
    });
  } catch (error) {
    console.log("🚀 ~ getEditions ~ error:", error);
  }
}

function getImportStatements() {
  const files = fs.readdirSync("./editions");
  files.forEach((fileName) => {
    console.log(
      `import ${toTitleCase(fileName.split(".")[0], "")} from "@qurantor/data/editions/${fileName}"`
    );
  });
}

function getExportStatements() {
  const files = fs.readdirSync("./editions");
  files.forEach((fileName) => {
    // const titleName = toTitleCase(fileName.split(".")[0], "")
    console.log(`"./editions/${fileName}": "./editions/${fileName}",`);
  });
}

function getExportArray() {
  const files = fs.readdirSync("./editions");
  const arr = [];
  files.forEach((fileName) => {
    const titleName = toTitleCase(fileName.split(".")[0], "");
    arr.push(titleName);
  });
}

getExportArray();
