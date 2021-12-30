import React from "react";
import { Formik, Form } from "formik";
import { PrimaryButton, TextInput } from "../index";

const PasswordForm = () => {
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
      <Form className="flex flex-col items-center space-y-5 w-full">
        <TextInput
          input_recognizer="email"
          type="email"
          placeholder="type in your email"
          styles={"w-full sm:w-1/2 text-xl py-1 sm:py-2"}
        />
        <PrimaryButton styles={"text-xl w-full sm:w-1/2 py-1 sm:py-2"}>
          🤟 Reset Password
        </PrimaryButton>
      </Form>
    </Formik>
  );
};

export default PasswordForm;
