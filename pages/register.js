import {
  Navbar,
  NavItem,
  Footer,
  Newsletter,
  Wave,
  PrimaryTitle,
  TextInput,
  PrimaryButton,
  AnimatedPath,
  AuthBg,
  RegisterForm,
  AuthLayout,
} from "../src/components/index";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import { PathMotion } from "../src/constants/index";
import { useState } from "react";

export default function Register() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      <Navbar>
        <NavItem href="https://buymeacoffee.com/marcelluscodes">
          Support
        </NavItem>
        <NavItem href="/login">Login</NavItem>
        <NavItem href="/forgot-password">Forgot Password</NavItem>
      </Navbar>
      <main>
        <motion.section className="bg-slate-100 dark:bg-dark-secondary text-center py-20 relative">
          <AuthLayout title="Register" formTitle="Sign Up Form">
            <RegisterForm />
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
