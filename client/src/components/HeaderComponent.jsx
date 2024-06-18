import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Button, Navbar, TextInput } from "flowbite-react";
import SiteLogo from "./SiteLogo";
import { Link, useLocation } from "react-router-dom";

export default function HeaderComponent() {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2 sticky top-0 left-0 z-10">
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://www.freeiconspng.com/thumbs/logo-design/custom-logo-design-green-orange-png-10.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <SiteLogo />
      </Navbar.Brand>

      {/* <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button> */}
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/legal"} as={"div"}>
          <Link to="/legal">Legal</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
