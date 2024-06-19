import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signOutSuccess } from "../redux/user/userSlice";

function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/logout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <Navbar
        fluid
        rounded
        className="border-b-2 bg-slate-200 dark:bg-slate-900"
      >
        <div className="flex justify-center">
          <img
            src="/at-personal-logo.png"
            alt="profile"
            className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white p-1 object-cover border-2 border-red-500"
          />
        </div>

        <div className="flex gap-2 md:order-2">
          {/* show profile picture on login */}
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="user" img={currentUser.avatar} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignout}>Log Out</Dropdown.Item>
            </Dropdown>
          ) : null}
          <Button
            className="w-12 h-10"
            color="gray"
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </Button>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/" className="hover:underline underline-offset-4">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/services"} as={"div"}>
            <Link to="/services" className="hover:underline underline-offset-4">
              Services
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects" className="hover:underline underline-offset-4">
              Projects
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/contact"} as={"div"}>
            <Link to="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
