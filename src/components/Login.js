import React from "react";
import { useFormik } from "formik";

const Login = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: 200 }}
      onSubmit={formik.handleSubmit}
    >
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        type="password"
        required={true}
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
