import { NavLink, Link } from "react-router";

export default function Sidebar() {
  const navLinkStyling = "font-medium text-white text-xl p-2 rounded-lg";

  return (
    <>
      <div className="bg-blue-500 xl:w-96">
        {" "}
        <ul className="flex flex-col gap-4 p-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? `bg-blue-400 ${navLinkStyling}` : navLinkStyling
            }
            to={"/"}
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `bg-blue-400 ${navLinkStyling}` : navLinkStyling
            }
            to={"json-converter"}
          >
            {" "}
            JSON Converter
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `bg-blue-400 ${navLinkStyling}` : navLinkStyling
            }
            to={"cmd-cheatsheet"}
          >
            {" "}
            CMD Cheatsheet
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `bg-blue-400 ${navLinkStyling}` : navLinkStyling
            }
            to={"color-picker"}
          >
            {" "}
            Color Picker
          </NavLink>
        </ul>
      </div>
    </>
  );
}
