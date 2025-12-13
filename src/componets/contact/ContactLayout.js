import styles from "./contact.module.css";

export default function ContactLayout() {
  return (
    <section className={styles.contactSection}>
      
      {/* HEADER SECTION */}
      <div className={styles.header}>
        <h2>Get In Touch</h2>
        <p>We're excited to start a new project with you. Fill out the form below or use our direct contact info, and we'll get back to you within 24 hours.</p>
      </div>

      {/* TOP INFO (Now includes Service Area) */}
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
          <p className={styles.phone}>+(91) 9004538149</p>
          <p className={styles.email}>hello@sutharinteriorstudio.in</p>
        </div>

        {/* NEW SERVICE AREA BOX */}
        <div className={styles.infoBox}>
          <h4>Service Area</h4>
          <p>
            **Mumbai**<br />
            **Karnataka**<br />
            **Goa**
          </p>
        </div>
      </div>

      {/* CONTENT: IMAGE AND FORM */}
      <div className={styles.content}>
        <div className={styles.imageWrap}>
          <img src="./images/contact.jpg" alt="Modern interior design example" />
        </div>

        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="fullName">Full Name *</label>
              <input 
                id="fullName" 
                type="text" 
                placeholder="Your Name *" 
                required 
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone *</label>
              <input 
                id="phone" 
                type="tel" 
                placeholder="Phone" 
                required 
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="emailAddress">Email Address *</label>
              <input 
                id="emailAddress" 
                type="email" 
                placeholder="Email Address *" 
                required 
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject *</label>
              <input 
                id="subject" 
                type="text" 
                placeholder="I want to…" 
                required 
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Your Message *</label>
            <textarea 
              id="message" 
              placeholder="Your Message…" 
              required 
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}