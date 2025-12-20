"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import Swal from "sweetalert2";

export default function ContactLayout() {
  const [loading, setLoading] = useState(false);

  // Yup validation schema
  const validationSchema = Yup.object({
    full_name: Yup.string().required("Full Name is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    subject: Yup.string().required("Please select a subject"),
    message: Yup.string().required("Message cannot be empty"),
  });

  const handleSubmit = (values, { resetForm }) => {
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        values,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          title: "🎉 Message Sent!",
          html: "Thank you for contacting <strong>Suthar Interior Studio</strong>.<br>We’ll get back to you within 24 hours.",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "swal-theme-popup",
            title: "swal-theme-title",
            content: "swal-theme-content",
            confirmButton: "swal-theme-button",
          },
        });
        resetForm();
      })
      .catch(() => {
        Swal.fire({
          title: "😟 Oops!",
          html: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "Retry",
          customClass: {
            popup: "swal-theme-popup",
            title: "swal-theme-title",
            content: "swal-theme-content",
            confirmButton: "swal-theme-button",
          },
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className={styles.contactSection}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>Get In Touch</h2>
        <p>
          We're excited to start a new project with you. Fill out the form below
          or use our direct contact info, and we'll get back to you within 24
          hours.
        </p>
      </div>

      {/* INFO ROW */}
      <div className={styles.topRow}>
        <div className={styles.infoBox}>
          <h4>Address</h4>
          <p>
            5609 E Sprague Ave,
            <br />
            Spokane Valley, WA 99212,
            <br />
            USA
          </p>
        </div>

        <div className={styles.infoBox}>
          <h4>Support</h4>
          <p className={styles.phone}>+(91) 9004538149</p>
          <p className={styles.email}>hello@sutharinteriorstudio.in</p>
        </div>

        <div className={styles.infoBox}>
          <h4>Service Area</h4>
          <p>
            Mumbai
            <br />
            Karnataka
            <br />
            Goa
          </p>
        </div>
      </div>

      {/* FORM CONTENT */}
      <div className={styles.content}>
        <div className={styles.imageWrap}>
          <img
            src="./images/contact.jpg"
            alt="Modern interior design example"
          />
        </div>

        <Formik
          initialValues={{
            full_name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="full_name">Full Name *</label>
                  <Field id="full_name" name="full_name" autoComplete="name" />
                  <ErrorMessage
                    name="full_name"
                    component="p"
                    className={styles.helperText}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">Phone *</label>
                  <Field id="phone" name="phone" autoComplete="tel" />
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className={styles.helperText}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address *</label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className={styles.helperText}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject">Subject *</label>
                  <Field as="select" id="subject" name="subject">
                    <option value="">-- Select a Subject --</option>
                    <option value="Interior Design Consultation">
                      Interior Design Consultation
                    </option>
                    <option value="Project Quote Request">
                      Project Quote Request
                    </option>
                    <option value="Collaboration / Partnership">
                      Collaboration / Partnership
                    </option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="subject"
                    component="p"
                    className={styles.helperText}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Your Message *</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className={styles.helperText}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
