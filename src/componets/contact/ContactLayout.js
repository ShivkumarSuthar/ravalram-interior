import styles from "./contact.module.css";

export default function ContactLayout() {
  return (
    <section className={styles.contactSection}>
      {/* TOP INFO */}
      <div className={styles.topRow}>
        <div className={styles.infoBox}>
          <h4>Address</h4>
          <p>
            5609 E Sprague Ave,<br />
            Spokane Valley, WA 99212,<br />
            USA
          </p>
        </div>

        <div className={styles.infoBox}>
          <h4>Support</h4>
          <p className={styles.phone}>+(084) 456-0789</p>
          <p className={styles.email}>Support@Example.com</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        {/* LEFT IMAGE */}
        <div className={styles.imageWrap}>
          <img src="./images/contact.jpg" alt="Interior" />
        </div>

        {/* RIGHT FORM */}
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Full Name *</label>
              <input type="text" placeholder="Your Name *" />
            </div>

            <div className={styles.field}>
              <label>Phone *</label>
              <input type="text" placeholder="Phone" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Email Address *</label>
              <input type="email" placeholder="Email Address *" />
            </div>

            <div className={styles.field}>
              <label>Subject *</label>
              <input type="text" placeholder="I want to…" />
            </div>
          </div>

          <div className={styles.field}>
            <label>Your Message *</label>
            <textarea placeholder="Your Message…" />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
