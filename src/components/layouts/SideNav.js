import { Link } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import SecurityIcon from "../icons/SecurityIcon";
import FacilityIcon from "../icons/FacilityIcon";
import ExternalIcon from "../icons/ExternalIcon";
import DistrictIcon from "../icons/DistrictIcon";
import TicketIcon from "../icons/TicketIcon";
import ReportIcon from "../icons/ReportIcon";
import AuditIcon from "../icons/AuditIcon";
import SettingIcon from "../icons/SettingIcon";
import avatar from "./logo.svg";
import logo from "./logo-insight.png";

const sideNavigation = [
  {
    name: "Overview",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Security",
    path: "/security-risk",
    icon: <SecurityIcon />,
  },
  { name: "Facility", path: "/facility-risk", icon: <FacilityIcon /> },
  { name: "External", path: "/external-risk", icon: <ExternalIcon /> },
  { name: "District", path: "/district-wise", icon: <DistrictIcon /> },
  { name: "Tickets", path: "/tickets", icon: <AuditIcon /> },
  { name: "Reports", path: "/reports", icon: <ReportIcon /> },
  { name: "Audit", path: "/audit" },
  { name: "Settings", path: "/settings", icon: <SettingIcon /> },
];

function SideNav() {
  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/signup" ||
    window.location.pathname === "/forgot-password"
  )
    return null;
  return (
    <div className="flex flex-col flex-shrink flex-grow relative opacity-100">
      <nav
        className="fixed text-gray-100 top-0 left-0 z-10 overflow-visible w-20 border-r border-gray-200 min-h-screen transition duration-300 ease-linear"
        style={{ backgroundColor: "#092852" }}
      >
        {/* Logo */}
        <div className="justify-center flex-row items-center flex pt-4">
          {/* <button className="flex flex-col items-center justify-center cursor-pointer appearance-none relative transform scale-100 p-0 border border-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#007fff"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="text-xs text-blue-600 uppercase font-bold">
              Insight
            </span>
          </button> */}
          <img src={logo} />
        </div>

        {/* Sidebar navigation */}
        <ul className="list-none p-0 mx-2 my-6 justify-center items-center">
          {sideNavigation.map((items) => (
            <li className="flex h-12 items-center mt-4">
              <Link
                to={items.path}
                className="items-center flex-shrink flex-grow w-full h-full text-xs flex flex-col"
              >
                {items.icon}
                <span className="mt-2">{items.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
