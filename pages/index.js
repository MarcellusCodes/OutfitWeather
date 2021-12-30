import {
  Navbar,
  NavItem,
  Footer,
  Newsletter,
  Feature,
  Wave,
  Header,
} from "../src/components/index";



export default function Home() {
  return (
    <>
      <Navbar>
        <NavItem href="try-it-out">🔥 Try it out</NavItem>
        <NavItem href="https://buymeacoffee.com/marcelluscodes">
          Support
        </NavItem>
        <NavItem href="/register">Create Account</NavItem>
        <NavItem href="/login">Login</NavItem>
        <NavItem href="/about">About</NavItem>
      </Navbar>
      <Header />
      <main>
        <Wave
          light_classname="header-wave-light"
          dark_classname="header-wave-dark"
        />
        <Feature />
        <Wave
          light_classname="feature-wave-light"
          dark_classname="feature-wave-dark"
        />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
