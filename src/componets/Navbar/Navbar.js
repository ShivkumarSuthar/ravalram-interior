"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  PhoneIcon,
} from "lucide-react";
import data from "@/app/data.json";
import styles from "./navbar.module.css";

const menu = data.navbar;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [desktopHoverDropdown, setDesktopHoverDropdown] = useState(null);
  const [activeSidebarItem, setActiveSidebarItem] = useState(0);

  const hoverTimeout = useRef(null);
  const navWrapperRef = useRef(null);

  const handleNavItemMouseEnter = (idx) => {
    clearTimeout(hoverTimeout.current);
    setDesktopHoverDropdown(idx);
    setActiveSidebarItem(0);
  };

  const handleMouseLeaveAll = (e) => {
    clearTimeout(hoverTimeout.current);
    const related = e.relatedTarget;
    const wrapper = navWrapperRef.current;
    hoverTimeout.current = setTimeout(() => {
      if (!wrapper || (related && wrapper.contains(related))) return;
      setDesktopHoverDropdown(null);
    }, 200);
  };

  const toggleDropdown = (i) => {
    setActiveDropdown(activeDropdown === i ? null : i);
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (i) => {
    setActiveSubDropdown(activeSubDropdown === i ? null : i);
  };

  return (
    <header className={styles.navbarWrapper} ref={navWrapperRef}>
      <nav className={styles.navContainer}>
        <Link href="/" className={styles.logoText}>
          Ravalram Interior
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          {menu?.length > 0 && menu.map((item, idx) => (
            <li
              key={item.name}
              className={styles.navItem}
              onMouseEnter={() => handleNavItemMouseEnter(idx)}
              onMouseLeave={handleMouseLeaveAll}
            >
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  desktopHoverDropdown === idx ? styles.navLinkActive : ""
                }`}
              >
                {item.name}
                {item.dropdown?.length ? <ChevronDown size={14} /> : ""}
              </Link>

              {item.dropdown?.length >0 && (
                <div
                  className={`${styles.megaMenuWrapper} ${
                    desktopHoverDropdown === idx ? styles.megaMenuWrapperShow : ""
                  }`}
                  onMouseLeave={handleMouseLeaveAll}
                >
                  <div className={styles.megaMenuContainer}>
                    <div className={styles.megaMenuSidebar}>
                      {item.dropdown.map((drop, dropIdx) => (
                        <Link
                          key={drop.name}
                          href={drop.href}
                          className={`${styles.sidebarItem} ${
                            activeSidebarItem === dropIdx
                              ? styles.sidebarItemActive
                              : ""
                          }`}
                          onMouseEnter={() => setActiveSidebarItem(dropIdx)}
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                    <div className={styles.megaMenuContent}>
                      {item.dropdown[activeSidebarItem] && (
                        <>
                          <h3 className={styles.contentTitle}>
                            {item.dropdown[activeSidebarItem].name}
                          </h3>
                          {item.dropdown[activeSidebarItem].description && (
                            <p className={styles.contentDescription}>
                              {item.dropdown[activeSidebarItem].description}
                            </p>
                          )}
                          {item.dropdown[activeSidebarItem].dropdown?.length > 0 &&
                            item.dropdown[activeSidebarItem].dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className={styles.contentItem}
                              >
                                {sub.name}
                              </Link>
                            ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <a
          href="tel:+919004538149"
          className={styles.phoneLink}
          aria-label="Call us at +91 90045 38149"
        >
          <PhoneIcon /> +91 90045 38149
        </a>

        <button
          className={styles.mobileToggle}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={() => setOpen(false)}
      />
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        <button
          className={styles.mobileCloseBtn}
          onClick={() => setOpen(false)}
        >
          <X size={26} />
        </button>

        <ul>
          {menu?.length > 0 && menu.map((item, idx) => (
            <li key={item.name}>
              <div className={styles.mobileItemRow}>
                <Link href={item.href} className={styles.mobileMainLink}>
                  {item.name}
                </Link>
                {item.dropdown.length > 0 && (
                  <button
                    className={styles.mobileIconBtn}
                    onClick={() => toggleDropdown(idx)}
                  >
                    {activeDropdown === idx ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                )}
              </div>

              {item.dropdown?.length > 0 && activeDropdown === idx && (
                <ul className={styles.mobileDropdown}>
                  {item.dropdown.map((drop, dropIdx) => (
                    <li key={drop.name}>
                      <div className={styles.mobileItemRow}>
                        <Link href={drop.href} className={styles.mobileDropItem}>
                          {drop.name}
                        </Link>
                        {drop.dropdown?.length > 0 && (
                          <button
                            className={styles.mobileIconBtn}
                            onClick={() => toggleSubDropdown(dropIdx)}
                          >
                            {activeSubDropdown === dropIdx ? (
                              <ChevronUp size={16} />
                            ) : (
                              <ChevronDown size={16} />
                            )}
                          </button>
                        )}
                      </div>
                      {drop.dropdown?.length > 0 && activeSubDropdown === dropIdx && (
                        <ul className={styles.mobileSubDropdown}>
                          {drop.dropdown.map((sub) => (
                            <li key={sub.name}>
                              <Link href={sub.href} className={styles.mobileSubDropdownItem}>
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <a href="tel:+919004538149" className={styles.mobilePhoneBtn}>
          <Phone size={18} /> +91 9004538149
        </a>
      </div>
    </header>
  );
}
