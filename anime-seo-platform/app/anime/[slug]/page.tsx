
import React from "react";

const animePages = [
  {
    slug: "anime-like-death-note",
    title: "Best Anime Like Death Note (Dark & Psychological)",
    intro: "If you loved Death Note, these anime deliver similar psychological tension and mind games.",
    list: [
      { name: "Monster", affiliate: "REPLACE_WITH_AFFILIATE" },
      { name: "Code Geass", affiliate: "REPLACE_WITH_AFFILIATE" },
      { name: "Psycho-Pass", affiliate: "REPLACE_WITH_AFFILIATE" }
    ]
  }
];

export async function generateStaticParams() {
  return animePages.map(p => ({ slug: p.slug }));
}

export default function Page({ params }) {
  const page = animePages.find(p => p.slug === params.slug);
  if (!page) return null;
  return (
    <main style={{maxWidth: 720, margin: "40px auto", fontFamily: "sans-serif"}}>
      <h1>{page.title}</h1>
      <p>{page.intro}</p>
      <ul>
        {page.list.map(a => (
          <li key={a.name}>
            <strong>{a.name}</strong> — <a href={a.affiliate}>Watch</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
