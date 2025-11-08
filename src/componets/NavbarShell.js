"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

/* ============================
   REAL NAVBAR SKELETON (GRAY)
============================ */

const Wrap = styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  background: #e7e7e7;  /* soft gray */
  border-bottom: 1px solid #d4d4d4;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Shimmer = styled.div`
  background: linear-gradient(
    90deg,
    #d6d6d6 0%,
    #e2e2e2 50%,
    #d6d6d6 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 6px;

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

const Logo = styled(Shimmer)`
  width: 160px;
  height: 22px;
`;

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    gap: 24px;
    align-items: center;
  }
`;

const Item = styled(Shimmer)`
  width: 70px;
  height: 24px;
`;

const BtnGroup = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    gap: 14px;
    align-items: center;
  }
`;

const Btn = styled(Shimmer)`
  width: 110px;
  height: 32px;
  border-radius: 100vmax;
`;

const MobileHamburger = styled(Shimmer)`
  width: 28px;
  height: 22px;
  border-radius: 4px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

/* ============================
   COMBINED NAVBAR + LOADER
============================ */

export default function NavbarWithSkeleton({ itemCount = 5 }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Delay long enough for styled-components to hydrate
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  if (ready) return <Navbar />;

  return (
    <Wrap>
      <Container>
        <Logo />

        <DesktopMenu>
          {Array.from({ length: itemCount }).map((_, i) => (
            <Item key={i} />
          ))}
        </DesktopMenu>

        <BtnGroup>
          <Btn />
          <Btn />
        </BtnGroup>

        <MobileHamburger />
      </Container>
    </Wrap>
  );
}
