"use client";
import { useState, useRef, useEffect } from "react";
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
const ENABLE_SUBMENU = false; // change to true if you want dropdowns

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [desktopHoverDropdown, setDesktopHoverDropdown] = useState(null);
  const [activeSidebarItem, setActiveSidebarItem] = useState(0);
  const [activeLink, setActiveLink] = useState("/#home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [forceShow, setForceShow] = useState(false); // Force navbar to show on click

  const lastScrollY = useRef(0);
  const navWrapperRef = useRef(null);
  const hoverTimeout = useRef(null);

  // =========================
  // Scroll hide/show with threshold
  // =========================
  useEffect(() => {
    const SCROLL_THRESHOLD = 80;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (forceShow) {
        setShowNavbar(true);
      } else {
        if (currentScroll > lastScrollY.current && currentScroll > SCROLL_THRESHOLD) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      lastScrollY.current = currentScroll;

      // reset forceShow after scroll
      if (forceShow && currentScroll !== 0) setForceShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceShow]);

  // =========================
  // Scrollspy: active link & URL
  // =========================
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section");
            let matchingLink = menu.find(
              (m) => m.href === `/#${sectionId}` || m.href === `/${sectionId}`
            );
            if (!matchingLink) {
              menu.forEach((m) => {
                m.dropdown?.forEach((sub) => {
                  if (sub.href === `/#${sectionId}` || sub.href === `/${sectionId}`) {
                    matchingLink = m;
                  }
                });
              });
            }
            if (matchingLink) {
              setActiveLink(matchingLink.href);
              window.history.replaceState(null, "", `/#${sectionId}`);
            }
          }
        });
      },
      { root: null, rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  // =========================
  // Desktop submenu hover
  // =========================
  const handleNavItemMouseEnter = (idx) => {
    if (!ENABLE_SUBMENU) return;
    clearTimeout(hoverTimeout.current);
    setDesktopHoverDropdown(idx);
    setActiveSidebarItem(0);
  };

  const handleMouseLeaveAll = (e) => {
    if (!ENABLE_SUBMENU) return;
    clearTimeout(hoverTimeout.current);
    const related = e.relatedTarget;
    const wrapper = navWrapperRef.current;
    hoverTimeout.current = setTimeout(() => {
      if (!wrapper || (related && wrapper.contains(related))) return;
      setDesktopHoverDropdown(null);
    }, 200);
  };

  const toggleDropdown = (i) => {
    if (!ENABLE_SUBMENU) return;
    setActiveDropdown(activeDropdown === i ? null : i);
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (i) => {
    if (!ENABLE_SUBMENU) return;
    setActiveSubDropdown(activeSubDropdown === i ? null : i);
  };

  // =========================
  // Scroll to section
  // =========================
  const handleScrollTo = (href) => {
    if (href.startsWith("/#")) {
      const section = href.replace("/#", "");
      const el = document.querySelector(`[data-section="${section}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
        setActiveLink(href);
        setForceShow(true); // navbar stays visible after click
        window.history.replaceState(null, "", href);
      }
    } else {
      setActiveLink(href);
    }
  };

  // =========================
  // Render
  // =========================
  return (
    <header
      ref={navWrapperRef}
      className={styles.navbarWrapper}
      style={{
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <nav className={styles.navContainer}>
        <Link href="/" className={styles.logoText}>
          Ravalram Interior
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          {menu.map((item, idx) => (
            <li
              key={item.name}
              className={styles.navItem}
              onMouseEnter={() => ENABLE_SUBMENU && handleNavItemMouseEnter(idx)}
              onMouseLeave={(e) => ENABLE_SUBMENU && handleMouseLeaveAll(e)}
            >
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  activeLink === item.href ? styles.navLinkActive : ""
                }`}
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault();
                    handleScrollTo(item.href);
                  }
                }}
              >
                {item.name}
                {ENABLE_SUBMENU && item.dropdown?.length > 0 && <ChevronDown size={14} />}
              </Link>

              {/* Mega Menu */}
              {ENABLE_SUBMENU && item.dropdown?.length > 0 && (
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
                            activeLink === drop.href ? styles.sidebarItemActive : ""
                          }`}
                          onClick={(e) => {
                            if (drop.href.startsWith("/#")) {
                              e.preventDefault();
                              handleScrollTo(drop.href);
                            }
                          }}
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
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Phone */}
        <a href="tel:+919004538149" className={styles.phoneLink}>
          <PhoneIcon /> +91 90045 38149
        </a>

        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={() => setOpen(false)}
      />
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        <button className={styles.mobileCloseBtn} onClick={() => setOpen(false)}>
          <X size={26} />
        </button>

        <ul>
          {menu.map((item, idx) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`${styles.mobileMainLink} ${
                  activeLink === item.href ? styles.navLinkActive : ""
                }`}
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault();
                    handleScrollTo(item.href);
                  }
                }}
              >
                {item.name}
              </Link>

              {ENABLE_SUBMENU && item.dropdown?.length > 0 && (
                <button
                  className={styles.mobileIconBtn}
                  onClick={() => toggleDropdown(idx)}
                >
                  {activeDropdown === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              )}

              {item.dropdown?.length > 0 && activeDropdown === idx && (
                <ul className={styles.mobileDropdown}>
                  {item.dropdown.map((drop, dropIdx) => (
                    <li key={drop.name}>
                      <Link
                        href={drop.href}
                        className={`${styles.mobileDropItem} ${
                          activeLink === drop.href ? styles.navLinkActive : ""
                        }`}
                        onClick={(e) => {
                          if (drop.href.startsWith("/#")) {
                            e.preventDefault();
                            handleScrollTo(drop.href);
                          }
                        }}
                      >
                        {drop.name}
                      </Link>

                      {drop.dropdown?.length > 0 && activeSubDropdown === dropIdx && (
                        <ul className={styles.mobileSubDropdown}>
                          {drop.dropdown.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                className={`${styles.mobileSubDropdownItem} ${
                                  activeLink === sub.href ? styles.navLinkActive : ""
                                }`}
                                onClick={(e) => {
                                  if (sub.href.startsWith("/#")) {
                                    e.preventDefault();
                                    handleScrollTo(sub.href);
                                  }
                                }}
                              >
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
          <Phone size={18} /> +91 90045 38149
        </a>
      </div>
    </header>
  );
}
