import { getInfo } from "~/helpers/info";

export default function Home() {
  const info = getInfo();

  return (
    <main>
      <div>
        {info.chapters.map((chapter, idx) => {
          return <div key={`home-chapter-${idx}`}>{chapter.englishname}</div>;
        })}
      </div>
    </main>
  );
}
