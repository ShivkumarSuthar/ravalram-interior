"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import Swal from "sweetalert2";

export default function ContactLayout() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.full_name.trim()) newErrors.full_name = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      full_name: e.target.fullName.value,
      phone: e.target.phone.value,
      email: e.target.emailAddress.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    setErrors({}); // clear previous errors

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
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

        e.target.reset();
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

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.imageWrap}>
          <img
            src="./images/contact.jpg"
            alt="Modern interior design example"
          />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="fullName">Full Name *</label>
              <input id="fullName" name="fullName" autoComplete="name" />
              {errors.full_name && (
                <p className={styles.helperText}>{errors.full_name}</p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone *</label>
              <input id="phone" name="phone" autoComplete="tel" />
              {errors.phone && (
                <p className={styles.helperText}>{errors.phone}</p>
              )}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="emailAddress">Email Address *</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                autoComplete="email"
              />
              {errors.email && (
                <p className={styles.helperText}>{errors.email}</p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject *</label>
              <select id="subject" name="subject">
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
              </select>
              {errors.subject && (
                <p className={styles.helperText}>{errors.subject}</p>
              )}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Your Message *</label>
            <textarea id="message" name="message" autoComplete="off" />
            {errors.message && (
              <p className={styles.helperText}>{errors.message}</p>
            )}
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
