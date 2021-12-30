import {
  Navbar,
  NavItem,
  Footer,
  Newsletter,
  Wave,
  AuthLayout,
  PasswordForm,
} from "../src/components/index";
import { motion } from "framer-motion";

export default function ForgotPassword() {
  return (
    <>
      <Navbar>
        <NavItem href="https://buymeacoffee.com/marcelluscodes">
          Support
        </NavItem>
        <NavItem href="/login">Login</NavItem>
        <NavItem href="/register">Register</NavItem>
      </Navbar>
      <main>
        <motion.section className="bg-slate-100 dark:bg-dark-secondary text-center py-20 relative">
          <AuthLayout title="Forgot Password" formTitle="Password Form">
            <PasswordForm />
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
