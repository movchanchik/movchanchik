"use client";
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Logo from "../../images/logo.svg";
import Wrapper from "../wrapper/Wrapper";
import NavLinks from "../nav/NavLinks";
import NavLinksMobile from "../nav/mobile/NavLinksMobile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useMediaQuery from "@/app/hooks/useMediaQuery";

function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.headerWrap}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            <div className={styles.logoWrap}>
              <Image
                priority
                src={Logo}
                alt="Movchanchik"
                className={styles.logo}
              />
              <div className={styles.logoText}>ovchanchik</div>
            </div>
          </Link>
          {!isMobile ? <NavLinks /> : <NavLinksMobile />}
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
