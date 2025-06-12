import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      isBordered
      className="frost-glass fixed w-full z-50"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <div className="hexagon w-10 h-10 flex items-center justify-center mr-3">
          <span className="text-primary font-bold text-xl glow-text">
            S1307
          </span>
        </div>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4 text-white" justify="center">
        <NavbarItem>
          <Link
            className="text-secondry hover:text-primary transition-colors duration-300"
            href="#overview"
          >
            Overview
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-secondry hover:text-primary transition-colors duration-300"
            href="#alliances"
          >
            Alliances
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-secondry hover:text-primary transition-colors duration-300"
            href="#leaders"
          >
            Leaders
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-secondry hover:text-primary transition-colors duration-300"
            href="#members"
          >
            Members
          </Link>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
