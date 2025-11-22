import Image from 'next/image';
import Header from './component/Header';
import Home from './component/Home';

function App() {
  return (
    <>
      <div className="site">
        <title>中野翼公式サイト 柔術格闘技数学</title>
        <h1 className="text-center">中野翼公式サイト 柔術格闘技数学</h1>
        <Image src="/images/icon.jpg" alt="ロゴ" width={1000} height={300} />
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
