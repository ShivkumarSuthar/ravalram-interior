'use client';
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),1000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <LoaderWrapper>
        <Spinner />
      </LoaderWrapper>
    );
  }

  return <>{children}</>;
}

/* ---------------- Styled Components ---------------- */
const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: #111; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const spin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 8px solid rgba(255,255,255,0.2);
  border-top-color: #d4a053;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
