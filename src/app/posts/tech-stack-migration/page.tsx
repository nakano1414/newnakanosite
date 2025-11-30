// src/app/posts/tech-stack-migration/page.tsx
import './styles.scss';

export default function TechStackMigrationPost() {
  return (
    <article className="tech-post">
      <header className="tech-post__header">
        <h1 className="tech-post__title">
          技術スタックおよびサーバー環境移行のご報告
        </h1>
        <p className="tech-post__meta">公開日：2025年11月19日</p>
      </header>

      <section className="tech-post__section">
        <p>
          平素より当サイトをご覧いただき、誠にありがとうございます。
          この度、当サイトのパフォーマンス向上および将来的な拡張性・保守性の強化を目的として、
          技術スタックおよびサーバー環境の見直しと移行を実施いたしましたので、ご報告いたします。
        </p>
      </section>

      <section className="tech-post__section">
        <h2 className="tech-post__heading">1. 技術スタックの移行について</h2>
        <p>
          当サイトはこれまで、主に以下の技術スタックを用いて運用しておりました。
        </p>
        <ul>
          <li>当初：WordPress による構築・運用</li>
          <li>その後：React によるフロントエンド実装</li>
        </ul>
        <p>
          今回の移行においては、フレームワークを <strong>Next.js</strong>{' '}
          へ統一いたしました。
          これにより、以下のようなメリットが得られています。
        </p>
        <ul>
          <li>
            サーバーサイドレンダリング（SSR）や静的サイト生成（SSG）による表示速度の向上
          </li>
          <li>
            ルーティングや画像最適化など、Next.js
            標準機能の活用による開発効率の改善
          </li>
          <li>コードベースの一元化による保守性・拡張性の向上</li>
        </ul>
        <p>
          また、React
          単体での運用時と比べ、SEO（検索エンジン最適化）の観点でも、
          より有利な構成へ移行することができました。
        </p>
      </section>

      <section className="tech-post__section">
        <h2 className="tech-post__heading">2. サーバー環境の変更について</h2>
        <p>
          従来はレンタルサーバー上でサイトを運用しておりましたが、
          今回のリニューアルにあわせて、ホスティング環境を
          <strong> Cloudflare（Cloudflare Pages 等）</strong>{' '}
          へ移行いたしました。
        </p>
        <p>これにより、次のような改善が見込まれています。</p>
        <ul>
          <li>
            グローバルなエッジネットワークによる、世界各地からの高速なアクセス
          </li>
          <li>CDN やキャッシュ機能の活用によるレスポンス改善</li>
          <li>インフラ管理の簡略化と、より安定したデプロイ・運用フロー</li>
        </ul>
        <p>
          これらの変更により、利用者の皆さまにとって、より快適かつ安定した閲覧環境を提供できるようになりました。
        </p>
      </section>

      <section className="tech-post__section">
        <h2 className="tech-post__heading">3. 今後について</h2>
        <p>
          今回の技術スタックおよびサーバー環境の移行は、あくまでスタート地点と考えております。
          今後もコンテンツの拡充や機能追加、デザインの改善などを継続的に行い、
          より価値のあるサイト運営を目指してまいります。
        </p>
        <p>
          引き続きご意見・ご要望等がございましたら、お気軽にお知らせいただけますと幸いです。
          今後とも当サイトをどうぞよろしくお願い申し上げます。
        </p>
      </section>
      {/* 以下、残りの文章… */}
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
