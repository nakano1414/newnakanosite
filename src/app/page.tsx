import Image from 'next/image';
import Header from './component/Header';
import Home from './component/Home';

function App() {
  return (
    <>
      <div className="site">
        <title>中野翼公式サイト 柔術格闘技数学</title>

        {/* タイトルにだけアニメーション用クラスを付ける */}
        <h1 className="text-center hero-title">
          中野翼公式サイト 柔術格闘技数学
        </h1>

        {/* 画像にもアニメーション用クラスを付ける */}
        <Image
          src="/images/icon.jpg"
          alt="ロゴ"
          width={1000}
          height={300}
          className="hero-image"
        />

        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
