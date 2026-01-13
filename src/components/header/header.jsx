import { Link } from "react-router";
import ThemeSwitcher from "./components/theme-switcher";

const Header = () => {
  return (
    <nav className="bg-element shadow-lg py-5">
      <div className="container flex justify-between items-center">
        <h1 className="text-[18px] lg:text-2xl font-bold"><Link to="/">Where in the world?</Link></h1>
        <ThemeSwitcher/>
      </div>
    </nav>
  );
};

export default Header;
