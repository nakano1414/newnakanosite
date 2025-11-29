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

      <pre className="formula">{`z_{n+1} = z_n^2 + c`}</pre>

      <p>
        ここで <strong>c は複素数の定数</strong>、<strong>z₀ は初期値</strong>
        です。 ある点 z₀ をスタートとして繰り返し計算したとき、
        <strong>発散せずにとどまり続ける点の集合</strong>
        がジュリア集合になります。
      </p>

      {/* ↓ ここに図を追加 */}
      <h2>ジュリア集合の例（c = -0.8 + 0.156i）</h2>
      <JuliaCanvas />

      {/* 以下、残りの文章… */}
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
      {/* 以下、残りの文章… */}
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
