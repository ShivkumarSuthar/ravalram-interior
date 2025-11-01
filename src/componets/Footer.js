import Image from "next/image";
import Link from "next/link";
import data from "@/app/data.json";

export default function Footer() {
  const menu = data.navbar;

  return (
    <footer className="footer relative">
      <div className="footer-container-wrapper py-18 px-6">
        <div className="container footer-content">
          {/* Column 1 */}
          <div className="footer-col">
            <h2 className="footer-logo">Ravalram Interior</h2>
            <p className="footer-desc">
              We Transform Your Vision Into Beautifully Crafted Spaces.
            </p>
            <p className="footer-address">
              5609 E Sprague Ave, Spokane Valley, <br />
              WA 99212, USA
            </p>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <ul>
              {menu.slice(0, 4).map((item, i) => (
                <li key={i}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4 className="footer-title">Resources</h4>
            <ul>
              {menu
                .filter((item) => item.dropdown)
                .flatMap((item) => item.dropdown)
                .map((sub, i) => (
                  <li key={i}>
                    <Link href={sub.href}>{sub.name}</Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h4 className="footer-title">Contact</h4>
            <p>support@example.com</p>
            <div className="footer-socials">
              <Link href="#">Facebook</Link>
              <Link href="#">Instagram</Link>
              <Link href="#">YouTube</Link>
              <Link href="#">Twitter</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-border"></div>
          <p>
            © Copyright 2025 <span>Ravalram Interior</span>. All rights reserved.
          </p>
        </div>

        {/* Faded Background Text */}
        <h1 className="footer-bg-text">Ravalram</h1>
      </div>
    </footer>
  );
}
