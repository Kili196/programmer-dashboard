import { NavLink, Link } from "react-router";

export default function Sidebar() {
  const navLinkStyling = `
  font-medium
  text-white
  text-xl
  rounded-xl
  px-4
  py-2
  hover:bg-white/20
  transition
  duration-200
  focus:outline-none
  focus:ring-2  
  focus:ring-blue-300

`;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "json-converter", label: "JSON Converter" },
    { to: "cmd-cheatsheet", label: "CMD Cheatsheet" },
    { to: "color-picker", label: "Color Picker" },
  ];

  return (
    <>
      <div className="bg-blue-500 xl:w-96 shadow-[6px_0_10px_-2px_rgba(0,0,0,0.2)]">
        {" "}
        <ul className="flex flex-col gap-4 p-5">
          {navLinks.map((element) => (
            <NavLink
              to={element.to}
              className={({ isActive }) =>
                isActive ? `bg-blue-400 ${navLinkStyling}` : navLinkStyling
              }
            >
              {" "}
              {element.label}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
}
