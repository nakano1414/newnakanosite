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
    </article>
  );
}
