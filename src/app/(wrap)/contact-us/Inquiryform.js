"use client";
import React, { useState } from "react";
import styles from "./contacts.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Inquiryform = () => {
  const [submitted, setsubmitted] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    designation: "",
    message: "",
    query_type: "Inquiry",
  };

  const loginSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .matches(
        /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
        "Email is invalid"
      )
      .required("Email is Required"),
    mobile: Yup.string()
      .required("Mobile number is required"),
    designation: Yup.string().required("Designation is required"),
    message: Yup.string().max(
      300,
      "Message should not exceed 300 characters"
    ),

  });
  const mobileValidation = (e) => {
    if (e.key === "Backspace" || e.key === "Delete" || e.key === "Tab" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
      return; // Allow the keypress
    }
    if (e.target.value.length >= 10) {
      e.preventDefault();
    }
    if (e.key >= 0 && e.key <= 9) {
      return;
    } else e.preventDefault();
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values,{ resetForm }) => {
      let formData = new FormData();

      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });
      try {
        const response = await fetch("/api/admin/queries", {
          method: "POST",
          body: formData,
        });

        const res = await response.json();

        if (res.code === 201) {
          resetForm();
          setsubmitted(true);
        }
      } catch (error) {
        // Handle login error
      }
    },
  });


  return (
    <div className={styles.inquiry}>
      <form
        className={styles.loginForm}
        onSubmit={formik.handleSubmit}
      >
        <div className={styles.formUpper}>
          <div className={styles.inputField}>
            <label htmlFor='email'>
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className={styles.input}
              type='text'
              name='name'
              id='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // placeholder='Enter your name'
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={styles.error}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className={styles.inputField}>
            <label htmlFor='email'>
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className={styles.input}
              type='email'
              name='email'
              id='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // placeholder='Enter your email'
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.error}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={styles.inputField}>
            <label htmlFor='email'>
              Mobile <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className={styles.input}
              type='tel'
              name='mobile'
              id='mobile'
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onKeyDown={mobileValidation}
              onBlur={formik.handleBlur}
              // placeholder='Enter your mobile'
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <div className={styles.error}>{formik.errors.mobile}</div>
            ) : null}
          </div>
          <div className={styles.inputField}>
            <label htmlFor='email'>
              Designation <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className={styles.input}
              type='text'
              name='designation'
              id='designation'
              value={formik.values.designation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // placeholder='Enter your designation'
            />
            {formik.touched.designation && formik.errors.designation ? (
              <div className={styles.error}>{formik.errors.designation}</div>
            ) : null}
          </div>
          <div
            className={styles.inputField}
            style={{ width: "100%", padding: "0% 5%" }}
          >
            <label htmlFor='message'>
              Message <span style={{ color: "red" }}>*</span>
            </label>
            <textarea
            maxLength={301}
              type='text'
              id='message'
              className={styles.contactusQuery}
              placeholder='Share your queries*'
              rows={2}
              name='message'
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.message && formik.touched.message ? (
              <div className={styles.error}>
                {formik.errors.message}
              </div>
            ) : null}
          </div>
        </div>
        <button
          type='submit'
          id="send"
          className={styles.btn}
        >
          Send
        </button>
        {submitted && (
          <span style={{ color: "green", marginLeft: "5%" }}>
            Sent Successfully!
          </span>
        )}
      </form>
    </div>
  );
};

export default Inquiryform;
