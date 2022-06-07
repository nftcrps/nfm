import React, { useState } from "react";
import Button from "../Button/Button";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useContractKit } from "@celo-tools/use-contractkit";

const Header = () => {
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const { address, connect } = useContractKit();

  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuShown(!mobileMenuShown);
  };

  return (
    <>
      <div className="Header p-3">
        <Link href="/">
          <img src="/nfm-logo.png" alt="" />
        </Link>
        <nav className="ms-auto me-4 d-none d-lg-flex">
          <Link href="/">
            <a className="MenuLink">Home</a>
          </Link>
          <Link href="/utilities">
            <a className="MenuLink ms-4">Utilities</a>
          </Link>
          <a className="MenuLink ms-4" onClick={() => connect()}>
            {address
              ? address.substring(0, 7) +
                "..." +
                address.substring(address.length - 7)
              : "Connect"}
          </a>
        </nav>
        <span className="d-none d-lg-flex">
          <Button text="BUY A MINUTE" click={() => router.push("buy")} />
        </span>
        <div
          className={`Bars${mobileMenuShown ? " Show" : ""}`}
          onClick={() => toggleMobileMenu()}
        >
          <div className="Line1"></div>
          <div className="Line2"></div>
          <div className="Line3"></div>
        </div>
        <nav className={`MobileMenu${mobileMenuShown ? " Show" : ""}`}>
          <Link href="/">
            <a className="MenuLink">Home</a>
          </Link>
          <Link href="/utilities">
            <a className="MenuLink">Utilities</a>
          </Link>
          <Link href="/buy">
            <a className="MenuLink">Buy</a>
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .Header {
          display: flex;
          align-items: center;
          height: 78px;
        }

        img {
          height: 42px;
          cursor: pointer;
        }

        .MenuLink {
          cursor: pointer;
        }

        .MenuLink:hover {
          color: #e84141;
        }

        .MobileMenu {
          position: absolute;
          width: 100%;
          top: 80px;
          left: 0;
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          padding: 1rem;
          visibility: hidden;
          overflow: hidden;
          height: 0;
          transition: all 0.2s linear;
        }

        .MobileMenu .container {
          display: flex;
          flex-direction: column;
        }

        .MobileMenu.Show {
          height: 280px;
          overflow-y: scroll;
          visibility: visible;
          transition: all 0.2s linear;
        }

        .MobileMenu .MenuLink {
          margin-left: 0;
          height: 36px;
        }

        .MobileMenu .MenuLink:after {
          content: "";
          display: block;
          height: 1px;
          margin: 0.5rem 0;
          background: linear-gradient(to left, #ebebeb 0%, transparent 100%);
        }

        .MobileMenu .MenuLink:not(:first-child) {
          margin-top: 1rem;
        }

        .Bars {
          margin-left: auto;
        }

        .Bars .Line1,
        .Bars .Line2,
        .Bars .Line3 {
          width: 24px;
          height: 3px;
          background-color: #000;
          transition: 0.3s ease;
        }

        .Bars .Line2 {
          margin: 4px 0px;
        }

        .Show .Line1 {
          transform: rotate(-45deg) translate(-5px, 5px);
          transition: 0.3s ease;
        }

        .Show .Line2 {
          opacity: 0;
        }

        .Show .Line3 {
          transform: rotate(45deg) translate(-5px, -5px);
          transition: 0.3s ease;
        }

        @media (min-width: 992px) {
          .Bars {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
