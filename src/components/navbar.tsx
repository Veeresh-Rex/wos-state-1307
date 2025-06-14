import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/navbar';

export const Navbar = () => {
  return (
    <HeroUINavbar isBordered className='frost-glass fixed w-full z-50'>
      <NavbarBrand>
        <div className='hexagon w-10 h-10 flex items-center justify-center mr-3'>
          <span className='text-primary font-bold text-xl glow-text'>
            S1307
          </span>
        </div>
      </NavbarBrand>
      <NavbarContent className='sm:flex gap-4 text-white' justify='center'>
        <NavbarItem>
          <a
            className='text-secondry hover:text-primary transition-colors duration-300'
            href='#overview'>
            Overview
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            className='text-secondry hover:text-primary transition-colors duration-300'
            href='#rules'>
            Rules
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            className='text-secondry hover:text-primary transition-colors duration-300'
            href='#alliances'>
            Alliances
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            className='text-secondry hover:text-primary transition-colors duration-300'
            href='#members'>
            Members
          </a>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
