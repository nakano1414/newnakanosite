import './styles.scss';
import JuliaCanvas from './JuliaCanvas';

export default function JuliaPost() {
  return (
    <article>
      <p className="post-date">2025-11-05</p>

      <h1>ジュリア集合とは？</h1>

      <p>
        ジュリア集合（Julia
        set）は、複素力学系の中でも代表的なフラクタル図形で、
        次の漸化式によって生成されます。
      </p>

      {/* ……本文いろいろ…… */}

      <h2>ジュリア集合の例（c = -0.8 + 0.156i）</h2>
      <JuliaCanvas />

      {/* ▼ ここを「普通の広告ブロック」っぽくする */}
      {/* ▼ A8 バナー広告（300x250） */}
      <section className="a8-banner-ad">
        <p className="a8-banner-ad__label">PR</p>
        <a
          href="https://px.a8.net/svt/ejp?a8mat=45ILCV+ANF6CY+4KUG+5ZMCH"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img
            src="https://www22.a8.net/svt/bgt?aid=251130271644&wid=001&eno=01&mid=s00000021364001006000&mc=1"
            alt=""
            width={300}
            height={250}
            style={{ border: 0 }}
          />
        </a>
        <img
          src="https://www11.a8.net/0.gif?a8mat=45ILCV+ANF6CY+4KUG+5ZMCH"
          alt=""
          width={1}
          height={1}
          style={{ border: 0 }}
        />
      </section>

      {/* ここから下は元のバナー広告たち */}
      <a
        href="https://px.a8.net/svt/ejp?a8mat=45IFX7+7VZSC2+0K+116QG1"
        rel="nofollow"
      >
        <img
          style={{ border: 0 }}
          width={234}
          height={60}
          alt=""
          src="https://www29.a8.net/svt/bgt?aid=251123227477&wid=001&eno=01&mid=s00000000002006246000&mc=1"
        />
      </a>
      <img
        style={{ border: 0 }}
        width={1}
        height={1}
        src="https://www13.a8.net/0.gif?a8mat=45IFX7+7VZSC2+0K+116QG1"
        alt=""
      />

      <a
        href="https://px.a8.net/svt/ejp?a8mat=45IFX7+D44RHU+5QU4+5YZ75"
        rel="nofollow"
      >
        <img
          src="https://www20.a8.net/svt/bgt?aid=251123227793&wid=001&eno=01&mid=s00000026806001003000&mc=1"
          alt=""
          width={300}
          height={250}
          style={{ border: 0 }}
        />
      </a>
      <img
        src="https://www15.a8.net/0.gif?a8mat=45IFX7+D44RHU+5QU4+5YZ75"
        alt=""
        width={1}
        height={1}
        style={{ border: 0 }}
      />
    </article>
  );
}
