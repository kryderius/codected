import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import scrollToSection from "../../../hooks/sctollTo";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 15px;
  z-index: 100;

  @media (min-width: 992px) {
    padding: 0 8%;
  }

  @media (min-width: 1200px) {
    height: 130px;
  }

  @media (min-width: 2000px) {
    padding: 0 25%;
  }
`;

const StyledLogo = styled(Link)`
  position: relative;
  z-index: 100;
  width: 150px;

  svg {
    width: 100%;
  }
`;

const Hamburger = styled.button`
  position: relative;
  width: 30px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const HamburgerInner = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.violet};

  &.active {
    &::before {
      transform: rotate(90deg);
      top: 50%;
    }
    &::after {
      display: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.violet};
    transition: all 0.2s ease-out;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.violet};
  }
`;

const NavMobile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  transform: translateY(-100%);
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);

  &.active {
    transform: translateY(0%);
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const NavListItem = styled.li`
  display: flex;
  width: auto;
  position: relative;
  overflow: hidden;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
    font-family: ${({ theme }) => theme.fontFamilyText};
    font-size: ${({ theme }) => theme.headingL};
    font-weight: ${({ theme }) => theme.regular};
  }

  &:hover .bottomLine {
    transform: translateX(0%);
  }

  @media (min-width: 992px) {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`;

const BottomLine = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.black};
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.33, 1, 0.68, 1);
`;

const NavDesktop = styled.nav`
  display: none;
  background-color: #fff;
  box-shadow: 0 28px 50px rgba(17, 12, 46, 0.2);
  padding: 25px;
  border-radius: 20px;

  @media (min-width: 1200px) {
    display: flex;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  bottom: -30px;
  left: 56%;
  width: 300px;
  height: 0px;
  border-radius: 20px;
  transform: translate(-50%, 100%);
  background-color: #fff;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0px 48px 100px rgba(17, 12, 46, 0.15);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: 50% 0;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const NavDesktopListItem = styled(Link)`
  color: #1e1e20;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &:last-child {
    text-decoration: underline;
  }

  &.no-margin {
    margin-right: 0 !important;
  }
`;

const NavDesktopListItemHover = styled.div`
  margin-right: 40px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 30px;
    bottom: -30px;
    left: 0;
    background-color: transparent;
  }
  &:hover ${Dropdown} {
    opacity: 1;
    pointer-events: all;
    height: 290px;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

const DropdownItem = styled(Link)`
  color: #1e1e20;
  text-decoration: none;
  font-size: 20;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const DevelopmentInfo = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 180px;
  padding: 15px;
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.violet};
  border-radius: 10px;
  transform: translate(-50%, 30%);
  opacity: 0;
  pointer-events: none;
  transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  &.active {
    opacity: 1;
    pointer-events: all;
    transform: translate(-50%, -50%);

    @media (min-width: 992px) {
      /* transform: translate(0); */
    }
  }

  @media (min-width: 992px) {
    /* transform: translate(0, 30%); */
    max-width: 500px;
    height: 160px;
    padding: 30px;
  }
`;

const DevelopmentInfoText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.bodyXS};
  font-family: ${({ theme }) => theme.fontFamilyText};
  line-height: 140%;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.black};
`;

const DevelopmentInfoButton = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.violet};
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.bodyXS};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  font-weight: ${({ theme }) => theme.regular};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.violet};
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);

  const handleNavClick = (e, target) => {
    scrollToSection(e, target);
    setMenuOpen(false);
  };
  return (
    <StyledHeader>
      <DevelopmentInfo className={isUnavailable && "active"}>
        <DevelopmentInfoText>
          Nie skończyliśmy jeszcze budowy tej podstrony. Wyślij zapytanie za pomocą formularza.
        </DevelopmentInfoText>
        <DevelopmentInfoButton onClick={(e) => setIsUnavailable(false)}>Rozumiem</DevelopmentInfoButton>
      </DevelopmentInfo>
      <StyledLogo to="/">
        <svg width="173" height="30" viewBox="0 0 173 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_239_2)">
            <path
              d="M20.2628 28.5927C18.5063 27.6778 17.0522 26.2862 16.0723 24.5822C15.0244 22.7228 14.4979 20.6216 14.5471 18.4949C14.5002 16.3657 15.0344 14.2632 16.094 12.4075C17.0877 10.693 18.5599 9.29601 20.3354 8.38266C22.1918 7.42939 24.2598 6.94698 26.3525 6.97899C28.4464 6.94744 30.5154 7.4298 32.3733 8.38266C34.1445 9.29978 35.6124 10.6976 36.6038 12.4111C37.6604 14.2678 38.1934 16.3698 38.1471 18.4984C38.1934 20.6298 37.6525 22.7336 36.582 24.5858C35.5742 26.2925 34.0959 27.682 32.3188 28.5927C30.4539 29.5441 28.3794 30.0263 26.2799 29.9964C24.1866 30.0331 22.1175 29.5505 20.2628 28.5927V28.5927ZM29.657 22.62C30.5939 21.6651 31.0612 20.2877 31.0587 18.4877C31.0563 16.6877 30.6024 15.3103 29.697 14.3555C29.2673 13.9006 28.7478 13.5373 28.1704 13.288C27.593 13.0386 26.97 12.9084 26.3396 12.9053C25.7093 12.9023 25.085 13.0266 24.5052 13.2704C23.9253 13.5143 23.4023 13.8725 22.9681 14.3232C22.0724 15.2781 21.6246 16.6615 21.6246 18.4734C21.6246 20.2853 22.0652 21.6627 22.9464 22.6056C23.3597 23.0683 23.8706 23.4362 24.4433 23.6836C25.016 23.931 25.6367 24.052 26.2618 24.038C26.8968 24.049 27.5271 23.9285 28.112 23.6842C28.6968 23.44 29.2232 23.0774 29.657 22.62V22.62Z"
              fill="#530CEB"
            />
            <path
              d="M21.5773 22.645C20.8946 22.2869 20.2046 21.9289 19.5546 21.5708H14.8884C14.2638 23.2824 13.0533 24.137 11.257 24.1346C10.6667 24.1527 10.0806 24.0292 9.54934 23.7747C9.01803 23.5203 8.5573 23.1424 8.20672 22.6737C7.44656 21.6949 7.06769 20.2972 7.07011 18.4805C7.07253 16.6639 7.4514 15.2674 8.20672 14.291C8.55662 13.8218 9.01731 13.4438 9.54885 13.1898C10.0804 12.9359 10.6667 12.8136 11.257 12.8336C11.8204 12.8255 12.3793 12.9328 12.8984 13.1487C13.1645 12.4393 13.4925 11.754 13.8788 11.1005C14.5636 9.92949 15.4327 8.87313 16.4535 7.97088C14.8497 7.28759 13.1163 6.95061 11.3696 6.98257C9.30721 6.94265 7.26901 7.426 5.45054 8.38625C3.75185 9.31113 2.36271 10.7033 1.45245 12.3932C0.452316 14.2679 -0.0475475 16.3628 -8.2858e-05 18.4805C-0.0469088 20.5983 0.452917 22.693 1.45245 24.5679C2.37101 26.2611 3.76889 27.6544 5.47596 28.5784C7.29507 29.537 9.33282 30.0203 11.395 29.9821C14.2081 29.994 16.583 29.2504 18.5197 27.7513C20.0675 26.5384 21.2275 24.9108 21.8605 23.064C21.7516 22.9172 21.6644 22.7883 21.5773 22.645Z"
              fill="#530CEB"
            />
            <path
              d="M40.068 12.3932C40.8607 10.7489 42.1081 9.35872 43.6667 8.38267C45.1899 7.44427 46.9545 6.95706 48.7505 6.97899C50.1681 6.96266 51.5694 7.27805 52.8394 7.89926C54.0136 8.4695 55.0154 9.33385 55.7444 10.4058V0H62.7021V29.6777H55.7444V26.455C55.0718 27.5461 54.1084 28.4341 52.9592 29.0224C51.6605 29.6868 50.2132 30.018 48.7505 29.9857C46.9511 30.0031 45.1851 29.5056 43.6667 28.5534C42.1079 27.5603 40.8616 26.1576 40.068 24.5035C39.1521 22.6037 38.6994 20.5191 38.7462 18.4161C38.7046 16.3343 39.1572 14.2717 40.068 12.3932V12.3932ZM54.3028 14.4378C53.8478 13.971 53.3022 13.5992 52.6985 13.3446C52.0948 13.0899 51.4453 12.9577 50.7887 12.9557C50.1321 12.9537 49.4817 13.082 48.8764 13.3329C48.2711 13.5838 47.7232 13.9523 47.2653 14.4163C46.2969 15.3951 45.8128 16.7391 45.8128 18.4483C45.8128 20.1576 46.2969 21.5147 47.2653 22.5197C47.7177 22.992 48.2632 23.3682 48.8682 23.6253C49.4733 23.8825 50.1252 24.0151 50.7841 24.0151C51.4429 24.0151 52.0948 23.8825 52.6999 23.6253C53.3049 23.3682 53.8504 22.992 54.3028 22.5197C55.2712 21.5314 55.7553 20.1814 55.7553 18.4698C55.7553 16.7582 55.2712 15.4142 54.3028 14.4378V14.4378Z"
              fill="#1E1E20"
            />
            <path
              d="M87.3078 20.1313H71.566C71.675 21.5254 72.1289 22.5889 72.9278 23.3218C73.731 24.0601 74.797 24.4563 75.8946 24.4247C77.6303 24.4247 78.8408 23.7085 79.5259 22.2762H86.9302C86.5545 23.7347 85.8522 25.0916 84.8748 26.2473C83.8548 27.4373 82.5715 28.3805 81.1237 29.0045C79.5492 29.6889 77.8438 30.0308 76.1233 30.0072C74.0543 30.0441 72.0098 29.561 70.1825 28.6035C68.4636 27.6805 67.0514 26.2879 66.1154 24.593C65.1127 22.7192 64.6127 20.6237 64.6629 18.5056C64.6176 16.3881 65.1174 14.2937 66.1154 12.4182C67.036 10.7193 68.4427 9.32466 70.1607 8.40773C71.9935 7.49151 74.0183 7.01077 76.0732 7.00393C78.1281 6.9971 80.1561 7.46435 81.9952 8.36835C83.6783 9.25872 85.0652 10.6089 85.9897 12.2571C86.9847 14.064 87.4853 16.0954 87.4422 18.1511C87.4348 18.8131 87.39 19.4742 87.3078 20.1313V20.1313ZM80.3103 16.3213C80.3327 15.7932 80.2348 15.2668 80.0236 14.781C79.8125 14.2951 79.4935 13.8621 79.0901 13.514C78.2394 12.8059 77.1524 12.4346 76.0398 12.472C74.966 12.4413 73.9176 12.7978 73.0912 13.4746C72.2571 14.2105 71.7282 15.2243 71.606 16.3213H80.3103Z"
              fill="#1E1E20"
            />
            <path
              d="M89.4432 12.3932C90.3597 10.6985 91.7581 9.30463 93.4667 8.38266C95.2852 7.42241 97.3234 6.93906 99.3858 6.97899C102.233 6.97899 104.612 7.71425 106.525 9.18476C108.437 10.6553 109.691 12.7262 110.287 15.3975H102.883C102.258 13.6858 101.048 12.83 99.2514 12.83C98.6605 12.8108 98.0737 12.9342 97.5421 13.1894C97.0106 13.4447 96.5502 13.824 96.2011 14.2946C95.4434 15.2686 95.0645 16.6651 95.0645 18.4841C95.0645 20.3032 95.4531 21.7021 96.2302 22.6808C96.5807 23.1496 97.0415 23.5274 97.5728 23.7819C98.1041 24.0364 98.6901 24.1599 99.2805 24.1418C101.07 24.1418 102.28 23.2872 102.912 21.5779H110.316C109.718 24.2039 108.457 26.2616 106.532 27.7512C104.608 29.2409 102.235 29.9904 99.4148 30C97.3526 30.0382 95.3149 29.5549 93.4958 28.5963C91.7887 27.6724 90.3908 26.279 89.4723 24.5858C88.4727 22.7109 87.9729 20.6162 88.0197 18.4984C87.9602 16.3771 88.4501 14.2759 89.4432 12.3932V12.3932Z"
              fill="#1E1E20"
            />
            <path
              d="M124.918 23.8625V29.6777H121.381C118.86 29.6777 116.895 29.069 115.483 27.8515C114.072 26.634 113.367 24.6491 113.37 21.8966V12.9948H110.61V7.29769H113.377V1.84412H120.331V7.29769H124.885V12.9948H120.331V21.979C120.308 22.2379 120.339 22.4988 120.423 22.7453C120.507 22.9917 120.641 23.2185 120.818 23.4113C121.145 23.7049 121.686 23.8518 122.445 23.8518L124.918 23.8625Z"
              fill="#1E1E20"
            />
            <path
              d="M148.354 20.1313H132.612C132.721 21.5254 133.175 22.5889 133.974 23.3218C134.773 24.0557 135.831 24.4516 136.923 24.4247C138.659 24.4247 139.869 23.7085 140.554 22.2762H147.958C147.583 23.7347 146.88 25.0916 145.903 26.2473C144.888 27.4351 143.611 28.3782 142.17 29.0045C140.596 29.6889 138.89 30.0308 137.17 30.0072C135.101 30.0441 133.056 29.561 131.229 28.6035C129.51 27.6805 128.098 26.2879 127.162 24.593C126.159 22.7192 125.659 20.6237 125.709 18.5056C125.664 16.3881 126.164 14.2937 127.162 12.4182C128.082 10.7193 129.489 9.32466 131.207 8.40773C133.04 7.49151 135.065 7.01077 137.12 7.00393C139.174 6.9971 141.203 7.46435 143.042 8.36835C144.725 9.25872 146.112 10.6089 147.036 12.2571C148.032 14.0637 148.533 16.0953 148.489 18.1511C148.481 18.8131 148.436 19.4742 148.354 20.1313V20.1313ZM141.357 16.3213C141.379 15.7932 141.281 15.2668 141.07 14.781C140.859 14.2951 140.54 13.8621 140.137 13.514C139.286 12.8059 138.199 12.4346 137.086 12.472C136.012 12.4413 134.964 12.7978 134.138 13.4746C133.304 14.2105 132.775 15.2243 132.652 16.3213H141.357Z"
              fill="#1E1E20"
            />
            <path
              d="M150.366 12.3932C151.16 10.7484 152.408 9.3582 153.968 8.38267C155.491 7.44427 157.256 6.95706 159.052 6.97899C160.47 6.96266 161.871 7.27805 163.141 7.89926C164.314 8.47089 165.316 9.33496 166.046 10.4058V0H173V29.6777H166.046V26.455C165.371 27.5455 164.407 28.4333 163.257 29.0224C161.961 29.6911 160.515 30.0273 159.052 30C157.253 30.0174 155.487 29.5199 153.968 28.5677C152.409 27.5746 151.163 26.1719 150.37 24.5178C149.454 22.618 149.001 20.5334 149.048 18.4304C149.003 16.3441 149.454 14.2764 150.366 12.3932V12.3932ZM164.601 14.4378C164.146 13.971 163.6 13.5992 162.996 13.3446C162.393 13.0899 161.743 12.9577 161.087 12.9557C160.43 12.9537 159.78 13.082 159.174 13.3329C158.569 13.5838 158.021 13.9523 157.563 14.4163C156.595 15.3951 156.111 16.7391 156.111 18.4483C156.111 20.1576 156.595 21.5147 157.563 22.5197C158.016 22.992 158.561 23.3682 159.166 23.6253C159.771 23.8825 160.423 24.0151 161.082 24.0151C161.741 24.0151 162.393 23.8825 162.998 23.6253C163.603 23.3682 164.148 22.992 164.601 22.5197C165.569 21.5314 166.053 20.1814 166.053 18.4698C166.053 16.7582 165.569 15.4142 164.601 14.4378Z"
              fill="#1E1E20"
            />
          </g>
          <defs>
            <clipPath id="clip0_239_2">
              <rect width="173" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </StyledLogo>
      <Hamburger onClick={(e) => setMenuOpen(!menuOpen)}>
        <HamburgerInner className={menuOpen && "active"}></HamburgerInner>
      </Hamburger>
      <NavMobile className={menuOpen && "active"}>
        <NavList>
          <NavListItem>
            <Link to="/#" onClick={(e) => handleNavClick(e, "hero")}>
              Home
            </Link>
            <BottomLine className="bottomLine"></BottomLine>
          </NavListItem>
          <NavListItem>
            <Link to="#offer" onClick={(e) => handleNavClick(e, "offer")}>
              Co robimy
            </Link>
            <BottomLine className="bottomLine"></BottomLine>
          </NavListItem>
          <NavListItem>
            <Link to="#portfolio" onClick={(e) => handleNavClick(e, "portfolio")}>
              Realizacje
            </Link>
            <BottomLine className="bottomLine"></BottomLine>
          </NavListItem>
          <NavListItem>
            <Link to="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Darmowa wycena
            </Link>
            <BottomLine className="bottomLine"></BottomLine>
          </NavListItem>
        </NavList>
      </NavMobile>
      <NavDesktop>
        <NavDesktopListItem to="/">Start</NavDesktopListItem>
        <NavDesktopListItemHover>
          <NavDesktopListItem to="#offer" className="no-margin" onClick={(e) => scrollToSection(e, "offer")}>
            Co robimy
          </NavDesktopListItem>
          <Dropdown>
            <DropdownItem to="/oferta/strony-internetowe">Strony internetowe</DropdownItem>
            <DropdownItem to="#" onClick={(e) => setIsUnavailable(true)}>
              Sklepy www
            </DropdownItem>
            <DropdownItem to="#" onClick={(e) => setIsUnavailable(true)}>
              Aplikacje webowe i programowanie
            </DropdownItem>
            <DropdownItem to="#" onClick={(e) => setIsUnavailable(true)}>
              Grafika i branding
            </DropdownItem>
          </Dropdown>
        </NavDesktopListItemHover>

        <NavDesktopListItem to="/realizacje">Realizacje</NavDesktopListItem>
        <NavDesktopListItem to="#contact" onClick={(e) => scrollToSection(e, "contact")}>
          Darmowa wycena
        </NavDesktopListItem>
      </NavDesktop>
    </StyledHeader>
  );
};

export default Header;
