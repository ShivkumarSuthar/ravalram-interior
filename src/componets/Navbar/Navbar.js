"use client";
import styled from "styled-components";
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

const menu = data.navbar;

/* ===========================
   STYLED COMPONENTS
=========================== */

const NavbarWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-family: var(--font-hertical);

  /* Mobile view: remove background and shadow */
  @media (max-width: 768px) {
  padding: 0px 16px;
  }
`;

const NavContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoText = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
`;

const DesktopMenu = styled.ul`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  font-size: 0.9rem;
  letter-spacing: 1px;
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: #333;
  transition: 0.2s;
  &:hover {
    color: var(--color-brand);
  }
  ${({ $active }) => $active && `color: var(--color-brand);`}
`;

/* --- Mega Menu --- */
const MegaMenuWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 56px;
  left: 0;
  right: 0;
  display: ${({ $show }) => ($show ? "flex" : "none")};
  justify-content: center;
  z-index: 900;
`;

const MegaMenuContainer = styled.div`
  display: flex;
  background: #34495e;
  border-radius: 6px;
  overflow: hidden;
  min-width: 700px;
`;

const MegaMenuSidebar = styled.div`
  background: #2c3e50;
  min-width: 220px;
`;

const MegaMenuContent = styled.div`
  flex: 1;
  padding: 32px 40px;
  color: #fff;
`;

const SidebarItem = styled(Link)`
  display: block;
  padding: 16px 22px;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  background: ${({ $active }) =>
    $active ? "rgba(212,160,83,0.9)" : "transparent"};
  border-left: 3px solid
    ${({ $active }) => ($active ? "#d4a053" : "transparent")};
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ContentTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ContentDescription = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 16px;
`;

const ContentItem = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
  text-decoration: none;
  padding: 8px 0;
  transition: 0.2s;
  &:hover {
    color: #fff;
    padding-left: 8px;
  }
`;

/* --- Mobile --- */
const MobileToggle = styled.button`
  @media (min-width: 1024px) {
    display: none;
  }
  background: none;
  border: none;
  color: #333;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #f3f3f3;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1500;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  background: #fff;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  z-index: 2000;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.35s ease-in-out;
`;

const MobileCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
`;

const MobileItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const MobileMainLink = styled(Link)`
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 500;
`;

const MobileIconBtn = styled.button`
  color: rgba(0, 0, 0, 0.6);
  padding: 6px;
  border-radius: 6px;
  background: none;
  border: none;
  cursor: pointer;
`;

const MobileDropdown = styled.ul`
  background: #fafafa;
  padding-left: 18px;
  margin: 0;
  padding-bottom: 8px;
`;

const MobileSubDropdown = styled.ul`
  background: #f0f0f0;
  padding-left: 18px;
  margin: 0;
  padding-bottom: 8px;
`;

const MobileDropItem = styled(Link)`
  display: block;
  padding: 10px 12px;
  color: var(--color-gray);
  text-decoration: none;
  &:hover {
    color: var(--color-brand);
  }
`;

const MobilePhoneBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  font-weight: 500;
  color: var(--color-brand);
  text-decoration: none;
`;

const PhoneLink = styled.a`
  color: #333;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;

  /* Hide on mobile devices (below 640px) */
  @media (max-width: 639px) {
    display: none;
  }
`;

/* ===========================
        COMPONENT LOGIC
=========================== */

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
    <NavbarWrapper ref={navWrapperRef}>
      <NavContainer>
        <LogoText href="/">Ravalram Interior</LogoText>

        {/* === Desktop Menu === */}
        <DesktopMenu>
          {menu.map((item, idx) => (
            <NavItem
              key={item.name}
              onMouseEnter={() => handleNavItemMouseEnter(idx)}
              onMouseLeave={handleMouseLeaveAll}
            >
              <NavLink href={item.href} $active={desktopHoverDropdown === idx}>
                {item.name}
                {item.dropdown?.length ? <ChevronDown size={14} /> : ""}
              </NavLink>

              {item.dropdown?.length ? (
                <MegaMenuWrapper
                  $show={desktopHoverDropdown === idx}
                  onMouseLeave={handleMouseLeaveAll}
                >
                  <MegaMenuContainer>
                    <MegaMenuSidebar>
                      {item.dropdown.map((drop, dropIdx) => (
                        <SidebarItem
                          key={drop.name}
                          href={drop.href}
                          $active={activeSidebarItem === dropIdx}
                          onMouseEnter={() => setActiveSidebarItem(dropIdx)}
                        >
                          {drop.name}
                        </SidebarItem>
                      ))}
                    </MegaMenuSidebar>

                    <MegaMenuContent>
                      {item.dropdown[activeSidebarItem] && (
                        <>
                          <ContentTitle>
                            {item.dropdown[activeSidebarItem].name}
                          </ContentTitle>
                          {item.dropdown[activeSidebarItem].description && (
                            <ContentDescription>
                              {item.dropdown[activeSidebarItem].description}
                            </ContentDescription>
                          )}
                          {item.dropdown[activeSidebarItem].dropdown?.length >
                            0 &&
                            item.dropdown[activeSidebarItem].dropdown.map(
                              (sub) => (
                                <ContentItem key={sub.name} href={sub.href}>
                                  {sub.name}
                                </ContentItem>
                              )
                            )}
                        </>
                      )}
                    </MegaMenuContent>
                  </MegaMenuContainer>
                </MegaMenuWrapper>
              ) : null}
            </NavItem>
          ))}
        </DesktopMenu>

        <PhoneLink
          href="tel:+919004538149"
          aria-label="Call us at +91 90045 38149"
        >
          <PhoneIcon />
          +91 90045 38149
        </PhoneLink>

        {/* === Mobile Toggle === */}
        <MobileToggle onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </MobileToggle>
      </NavContainer>

      {/* === Mobile Menu === */}
      {open && <Overlay $open={open} onClick={() => setOpen(false)} />}
      <MobileMenu $open={open}>
        <MobileCloseBtn onClick={() => setOpen(false)}>
          <X size={26} />
        </MobileCloseBtn>

        <ul>
          {menu.map((item, idx) => (
            <li key={item.name}>
              <MobileItemRow>
                <MobileMainLink href={item.href}>{item.name}</MobileMainLink>
                {item.dropdown && (
                  <MobileIconBtn onClick={() => toggleDropdown(idx)}>
                    {activeDropdown === idx ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </MobileIconBtn>
                )}
              </MobileItemRow>

              {item.dropdown?.length > 0 && activeDropdown === idx && (
                <MobileDropdown>
                  {item.dropdown.map((drop, dropIdx) => (
                    <li key={drop.name}>
                      <MobileItemRow>
                        <MobileDropItem href={drop.href}>
                          {drop.name}
                        </MobileDropItem>
                        {drop.dropdown && (
                          <MobileIconBtn
                            onClick={() => toggleSubDropdown(dropIdx)}
                          >
                            {activeSubDropdown === dropIdx ? (
                              <ChevronUp size={16} />
                            ) : (
                              <ChevronDown size={16} />
                            )}
                          </MobileIconBtn>
                        )}
                      </MobileItemRow>

                      {drop.dropdown && activeSubDropdown === dropIdx && (
                        <MobileSubDropdown>
                          {drop.dropdown.map((sub) => (
                            <li key={sub.name}>
                              <MobileDropItem href={sub.href}>
                                {sub.name}
                              </MobileDropItem>
                            </li>
                          ))}
                        </MobileSubDropdown>
                      )}
                    </li>
                  ))}
                </MobileDropdown>
              )}
            </li>
          ))}
        </ul>

        <MobilePhoneBtn href="tel:+919004538149">
          <Phone size={18} /> +91 9004538149
        </MobilePhoneBtn>
      </MobileMenu>
    </NavbarWrapper>
  );
}
