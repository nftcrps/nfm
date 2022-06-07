import Link from "next/link";
import React from "react";

const Guide = () => {
  return (
    <>
      <div className="Guide py-5">
        <img className="Wave" src="/wave.svg" alt="" />
        <div className="container px-3 py-5">
          <div className="row m-0">
            <h2 className="px-0 text-center">
              Get involved in our decentralized ad network <br /> with your
              business.
            </h2>
            <div className="col-12 col-lg-4 px-0 px-lg-2">
              <div className="TitleWrapper">
                <h3>1. Mint a &quot;Minute&quot;</h3>
                <div className="TitleDecoration" />
              </div>
              <p>
                You can mint your "Minute" NFT from the{" "}
                <Link href="/buy">Buy</Link> page.
              </p>
            </div>
            <div className="col-12 col-lg-4 px-0 px-lg-2">
              <div className="TitleWrapper">
                <h3>2. Set up your content</h3>
                <div className="TitleDecoration2" />
              </div>
              <p>
                You can also edit the details of your minute on the buy page.
              </p>
            </div>
            <div className="col-12 col-lg-4 px-0 px-lg-2">
              <div className="TitleWrapper">
                <h3>3. Decentralized your ads</h3>
                <div className="TitleDecoration" />
              </div>
              <p>
                Your content will be displayed on the homepage when the minute
                of your NFT arrives.
              </p>
            </div>
          </div>
          <div className="row mx-0 mt-2 mt-lg-5">
            <div className="col-12 col-lg-10 offset-lg-1 p-0">
              <div className="ImageWrapper">
                <img src="/guide-image-alt.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5"></div>
        <div className="py-4"></div>
      </div>

      <style jsx>{`
        .Guide {
          position: relative;
          background-color: #f5f3ec;
        }

        .Wave {
          position: absolute;
          width: 100%;
          top: 0;
          transform: translateY(-100%);
          z-index: 0;
        }

        h2 {
          line-height: 130%;
          font-size: 2rem;
        }

        .TitleWrapper {
          position: relative;
          min-height: 3rem;
        }

        .TitleDecoration {
          width: 70%;
          height: 40px;
          background-color: white;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          transform: rotate(-2deg);
        }

        .TitleDecoration2 {
          width: 70%;
          height: 40px;
          background-color: #e84141;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          transform: rotate(2deg) translateY(50%);
        }

        h3 {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          font-size: 1.5rem;
        }

        p {
          line-height: 1.4;
          margin-top: 2rem;
        }

        .ImageWrapper {
          background-color: white;
          padding: 3rem;
          border-radius: 3rem;
        }

        img {
          width: 100%;
        }

        @media (max-width: 767px) {
          .TitleDecoration,
          .TitleDecoration2 {
            width: 100%;
          }

          .ImageWrapper {
            background-color: white;
            padding: 1rem;
            border-radius: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Guide;
