import {
  Navbar,
  NavItem,
  Footer,
  Newsletter,
  Wave,
  AuthLayout,
  LoginForm,
} from "../src/components/index";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <>
      <Navbar>
        <NavItem href="https://buymeacoffee.com/marcelluscodes">
          Support
        </NavItem>
        <NavItem href="/register">Register</NavItem>
        <NavItem href="/forgot-password">Forgot Password</NavItem>
      </Navbar>
      <main>
        <motion.section className="bg-slate-100 dark:bg-dark-secondary text-center py-20 relative">
          <AuthLayout title="Login" formTitle="Sign In Form">
            <LoginForm />
          </AuthLayout>
        </motion.section>
        <Wave
          light_classname="header-wave-light"
          dark_classname="header-wave-dark"
        />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
