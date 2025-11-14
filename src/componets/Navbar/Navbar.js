import Link from "next/link";
import { Phone, PhoneIcon, Menu, X, ChevronDown } from "lucide-react";
import styles from "./navbar.module.css";
import data from "@/app/data.json";

const menu = data.navbar;

export default function Navbar() {
  return (
    <header className={styles.navbarWrapper}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoText}>Ravalram Interior</Link>

        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          {menu.map((item) => (
            <li className={styles.navItem} key={item.name}>
              <Link href={item.href} className={styles.navLink}>
                {item.name} {item.dropdown?.length ? <ChevronDown size={14} /> : null}
              </Link>

              {item.dropdown?.length > 0 && (
                <div className={styles.megaMenuWrapper}>
                  <div className={styles.megaMenuContainer}>
                    <div className={styles.megaMenuSidebar}>
                      {item.dropdown.map((drop) => (
                        <Link key={drop.name} href={drop.href} className={styles.sidebarItem}>
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                    <div className={styles.megaMenuContent}>
                      {item.dropdown.map((drop) => (
                        <div key={drop.name}>
                          <h3 className={styles.contentTitle}>{drop.name}</h3>
                          {drop.description && (
                            <p className={styles.contentDescription}>{drop.description}</p>
                          )}
                          {drop.dropdown?.length > 0 && drop.dropdown.map((sub) => (
                            <Link key={sub.name} href={sub.href} className={styles.contentItem}>
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <a href="tel:+919004538149" className={styles.phoneLink}>
          <PhoneIcon /> +91 90045 38149
        </a>

        {/* Mobile Menu Toggle */}
        <details className={styles.mobileToggle}>
          <summary><Menu size={26} /></summary>
          <div className={styles.mobileMenuWrapper}>
            {menu.map((item) => (
              <details className={styles.mobileMenuDetails} key={item.name}>
                <summary>{item.name} {item.dropdown?.length ? <ChevronDown size={14} /> : null}</summary>
                {item.dropdown?.length > 0 && (
                  <div className={styles.mobileDropdown}>
                    {item.dropdown.map((drop) => (
                      <details key={drop.name}>
                        <summary>{drop.name} {drop.dropdown?.length ? <ChevronDown size={12} /> : null}</summary>
                        {drop.dropdown?.length > 0 && (
                          <div className={styles.mobileSubDropdown}>
                            {drop.dropdown.map((sub) => (
                              <Link key={sub.name} href={sub.href} className={styles.mobileDropItem}>
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </details>
                    ))}
                  </div>
                )}
              </details>
            ))}
            <a href="tel:+919004538149" className={styles.mobilePhoneBtn}>
              <Phone size={18} /> +91 90045 38149
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
