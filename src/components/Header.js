const Title = () => {
  return (
    <a href="/" className="logo-a">
      <img
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  return (
    <header className="main-header">
      <Title />
      <ul className="main-nav">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </header>
  );
};

export default Header;