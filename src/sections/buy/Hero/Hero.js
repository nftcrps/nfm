import React from "react";
import Button from "../../../components/Button/Button";

const Hero = () => {
  return (
    <>
      <div className="Hero py-2 py-lg-5">
        <div className="container px-3 py-3 py-lg-5">
          <div className="row m-0">
            <div className="col-12 col-lg-6 ps-0 d-flex align-items-center mb-3 mb-lg-0">
              <div>
                <h1>Buy Your Minute in a few Seconds</h1>
                <p className="mb-4">
                  You can buy NFT per minute using the table below. You can also
                  edit the minute you purchased using the same table. When it's
                  your turn, your NFT's information will be displayed on the
                  homepage.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 pe-0 mt-5 mt-lg-0">
              <img src="/time.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .Hero {
          background-color: #f9f9f9;
        }

        h1 {
          color: #404349;
          font-weight: 600;
          font-size: 2.75rem;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.3;
        }

        img {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Hero;
