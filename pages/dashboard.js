import {
  Navbar,
  NavItem,
  PrimaryTitle,
  Wave,
  Newsletter,
  Footer,
  TextInput,
  PrimaryButton,
} from "../src/components/index";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import Image from "next/image";

export default function Dashboard() {
  return (
    <>
      <Navbar>
        <NavItem href="https://buymeacoffee.com/marcelluscodes">
          Support
        </NavItem>
        <NavItem href="/login">Logout</NavItem>
      </Navbar>
      <main>
        <motion.section className="bg-slate-100 dark:bg-dark-secondary text-center py-20 relative transition-colors duration-300">
          <div className="container mx-auto px-4">
            <PrimaryTitle styles={"mb-32"}>Dashboard</PrimaryTitle>
            <Formik
              initialValues={{
                place: "",
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form className="flex flex-col sm:flex-row items-center space-y-3 space-x-0 sm:space-y-0 sm:space-x-2 w-full mb-2">
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 1 }}
                  className="w-full"
                >
                  <TextInput
                    input_recognizer="place"
                    type="text"
                    placeholder="Type in your place"
                    styles={"w-full text-xl py-1 sm:py-2"}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.5,
                  }}
                  className="w-full sm:w-auto"
                >
                  <PrimaryButton
                    styles={"text-xl w-full sm:w-auto py-1 sm:py-2"}
                  >
                    Search
                  </PrimaryButton>
                </motion.div>
              </Form>
            </Formik>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 560, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.7,
              }}
              className=" w-full bg-transparent border-2 border-light-primary dark:border-dark-primary rounded-md p-4 transition-colors duration-300"
            >
              <div className="w-full h-full flex-col items-center space-y-10">
                <motion.div className="w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] mx-auto">
                  <Image
                    src={"/images/dashboard_empty_place.svg"}
                    alt={"Empty Illustration"}
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                  />
                </motion.div>
                <motion.p className="text-xl font-paragraph text-light-tertiary">
                  We got no information to display the weather for a certain
                  place
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.section>
        <Wave
          light_classname="header-wave-light"
          dark_classname="header-wave-dark"
        />

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
