import { NavLink, Link } from "react-router";

export default function Sidebar() {
  const navLinkStyling = "font-medium text-white text-xl p-2 rounded-lg";

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
