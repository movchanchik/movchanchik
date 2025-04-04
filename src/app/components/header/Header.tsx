"use client";
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Logo from "../../images/logo.svg";
import Wrapper from "../wrapper/Wrapper";
import NavLinks from "../nav/NavLinks";
import NavLinksMobile from "../nav/mobile/NavLinksMobile";
import useMediaQuery from "../../hooks/useMediaQuery";

function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.headerWrap}>
          <div className={styles.logoWrap}>
            <Image
              priority
              src={Logo}
              alt="Movchanchik"
              className={styles.logo}
            />
            <div className={styles.logoText}>ovchanchik</div>
          </div>
          {!isMobile ? <NavLinks /> : <NavLinksMobile />}
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
