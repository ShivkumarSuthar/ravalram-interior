"use client";
import styled, { keyframes, css } from "styled-components";

export default function FooterSkeleton() {
  return (
    <FooterSkeletonWrapper>
      <FooterContainer>
        <FooterTop>
          <FooterLeft>
            <SkeletonLogo />
            <SkeletonLine width="60%" height="20px" />
            <SkeletonLine width="90%" height="14px" />
            <SkeletonLine width="80%" height="14px" />
            <SkeletonGrid>
              {[...Array(4)].map((_, i) => (
                <SkeletonBox key={i}>
                  <SkeletonLine width="60%" height="16px" />
                  <SkeletonLine width="90%" height="12px" />
                </SkeletonBox>
              ))}
            </SkeletonGrid>
          </FooterLeft>

          <FooterRight>
            {[...Array(2)].map((_, i) => (
              <SkeletonList key={i}>
                <SkeletonLine width="50%" height="16px" />
                {[...Array(5)].map((_, j) => (
                  <SkeletonLine key={j} width="80%" height="12px" />
                ))}
              </SkeletonList>
            ))}

            <SkeletonContact>
              <SkeletonLine width="40%" height="16px" />
              {[...Array(3)].map((_, i) => (
                <SkeletonLine key={i} width="100%" height="14px" />
              ))}
              <SkeletonButton />
            </SkeletonContact>
          </FooterRight>
        </FooterTop>

        <FooterBottom>
          <SkeletonSocialIcons>
            {[...Array(4)].map((_, i) => (
              <SkeletonCircle key={i} />
            ))}
          </SkeletonSocialIcons>
          <SkeletonLine width="50%" height="12px" />
        </FooterBottom>
      </FooterContainer>
    </FooterSkeletonWrapper>
  );
}

/* =============== STYLED SKELETONS =============== */

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const skeletonBase = css`
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.6s infinite linear;
  border-radius: 6px;
`;


const FooterSkeletonWrapper = styled.div`
  background: #14100a;
  color: transparent;
  overflow: hidden;
`;

const FooterContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 5% 40px;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1.2fr;
  gap: 80px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLeft = styled.div``;

const SkeletonLogo = styled.div`
  width: 180px;
  height: 60px;
  ${skeletonBase}
  margin-bottom: 20px;
`;

const SkeletonLine = styled.div`
  ${({ width, height }) => `
    width: ${width || "100%"};
    height: ${height || "14px"};
  `}
  ${skeletonBase}
  margin-bottom: 12px;
`;

const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const SkeletonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterRight = styled.div`
  display: grid;
  grid-template-columns: 100px 150px auto;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkeletonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkeletonContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkeletonButton = styled.div`
  width: 140px;
  height: 36px;
  margin-top: 12px;
  ${skeletonBase}
  border-radius: 50px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SkeletonSocialIcons = styled.div`
  display: flex;
  gap: 16px;
`;

const SkeletonCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${skeletonBase}
`;
