import React from "react";
import { Formik, Form } from "formik";
import { TextInput, PrimaryButton } from "../index";
const NewsletterForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="flex flex-col items-center justify-center sm:flex-row w-full space-y-0 sm:space-x-2 sm:space-y-0 sm:-mt-0">
        <TextInput
          input_recognizer={"email"}
          type="email"
          placeholder="Your Email"
          styles={"w-full sm:w-1/2 text-base sm:text-xl py-1 sm:py-2"}
        />
        <PrimaryButton
          styles={
            "text-2xl w-full sm:w-auto text-lg sm:text-xl py-1 sm:py-2 hidden sm:block"
          }
          type="submit"
        >
          🖖 Sign Up
        </PrimaryButton>
      </Form>
    </Formik>
  );
};

export default NewsletterForm;
