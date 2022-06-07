import React from "react";
import { MdPublic } from "react-icons/md";

const Network = () => {
  return (
    <>
      <div className="Network py-5">
        <img className="Wave" src="/wave2.svg" alt="" />
        <div className="container px-3 py-5">
          <div className="row m-0">
            <h2 className="px-0 text-center">
              Join our ever-expanding ad network
            </h2>
            <p className="text-center">
              The metadata you add to the &quot;minutes&quot; you purchase will
              be available not only on this website but also in many other
              applications we plan. <br />
              Our applications that we will publish in order are as follows:
            </p>
          </div>
          <div className="row mx-0 mt-5">
            <div className="col-12 col-lg-5 offset-lg-1 d-flex flex-column justify-content-center">
              <div className="mt-3 d-flex align-items-center">
                <MdPublic size={64} color="#E84141" />{" "}
                <p className="ms-3">
                  Your content will be included not only on our homepage, but
                  also in the content detailed on the Utilities page.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 mt-4 mt-lg-0">
              <img src="/network.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .Network {
          position: relative;
          background-color: #f9f9f9;
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

        p {
          line-height: 1.4;
        }

        img {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Network;
