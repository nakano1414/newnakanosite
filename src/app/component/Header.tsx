function Header() {
  return (
    <>
      <div className="sitetitle">
        <div className="Search">
          <input type="search" placeholder="検索" />
        </div>
        <div className="articles">
          <h2>記事一覧</h2>
        </div>
      </div>
    </>
  );
}

export default Header;
