import Link from 'next/link';

type Post = { id: string; title: string; date: string };

const posts: Post[] = [
  { id: 'impersonation', title: '私のなりすましについて', date: '2025-11-06' },
  {
    id: 'julia',
    title: 'ジュリア集合とは？',
    date: '2025-11-05',
  },
  {
    id: 'shooting',
    title: 'なんか適当なシューティングゲーム',
    date: '2025-11-17',
  },
];

export default function Home() {
  return (
    <div>
      {posts.map((p) => (
        <article key={p.id}>
          <Link href={`/posts/${p.id}`} className="sample-article">
            <div className="sample-article__meta">{p.date}</div>
            <h2 className="sample-article__title">{p.title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
}
