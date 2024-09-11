"use client";

import { Button, Navbar, NavbarCollapse} from "flowbite-react";
import Link from "next/link";
import "./Navbar.css";

export function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="./img/logo.png" className="mr-3 h-6 sm:h-16" alt="ISACA Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Contact Us</Button>
        <Navbar.Toggle />
      </div>
      <div className="navbar-link-group">
        <NavbarCollapse>
        <Link href="#"  className="navbar-link">
          Home
        </Link>
        <Link href="#" className="navbar-link">About</Link>
        <Link href="#"  className="navbar-link">Members</Link>
        <Link href="#"  className="navbar-link">Blog</Link>
        <Link href="#"  className="navbar-link">Projects</Link>
        </NavbarCollapse>
        </div>
    </Navbar>
  );
}
