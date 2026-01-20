import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // ! OLD WAY
  // const toggleTheme = () => {
  //   const nextTheme = theme === "light" ? "dark" : "light";
  //   setTheme(nextTheme);
  //   localStorage.setItem("theme", nextTheme);
  // };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };


  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      onClick={toggleTheme}
      className="icon-wrapper flex gap-2 items-center cursor-pointer lg:text-[17px]"
    >
      {theme === "light" ? <IoMoon /> : <FaSun />}
      <span className="capitalize select-none">
        {theme === "light" ? "dark" : "light"} mode
      </span>
    </div>
  );
};

export default ThemeSwitcher;
