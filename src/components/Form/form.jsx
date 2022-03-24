import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./form.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart } from "../../store/cart/action";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div>
        <label htmlFor={props.id || props.name}>{label}:</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const textOnly = /[:alpha:]+/;
export const SignupForm = () => {
  const cart = useSelector(({ cart }) => cart);
  const cartTitle = cart.map((cart) => cart.title);
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          delivery: "",
          age: "",
          mobileNumber: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .matches(textOnly, "Name is not valid")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .matches(textOnly, "Last Name is not valid")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          delivery: Yup.string()
            .max(50, "Too long address")
            .required("Required"),
          age: Yup.number().required("Required"),
          mobileNumber: Yup.string()
            .required("required")
            .matches(phoneRegExp, "Phone number is not valid")
            .min(10, "to short")
            .max(10, "to long"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log({
            ...JSON.parse(JSON.stringify(values, null, 2)),
            ...cartTitle,
          });
          setSubmitting(false);
          cart.map((cart) => dispatch(removeCart(cart.id)));
          localStorage.removeItem("cart");
          resetForm();
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput label="Age" name="age" type="number" placeholder="18" />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MyTextInput
            label="Delivery address"
            name="delivery"
            type="text"
            placeholder="30700 Westlake Village"
          />
          <MyTextInput label="Mobile Number" type="text" name="mobileNumber" />

          <button className="submit" type="submit">
            Checkout
          </button>
        </Form>
      </Formik>
    </>
  );
};
