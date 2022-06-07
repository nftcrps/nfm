import { useContractKit } from "@celo-tools/use-contractkit";
import { LoadingOverlay, Tooltip } from "@mantine/core";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import UrlChangeWarnModal from "../../../components/UrlChangeWarnModal/UrlChangeWarnModal";
import { contractAbi, contractAddress } from "../../../utils/contract";

dayjs.extend(utc);

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const { kit } = useContractKit();

  let instance = new kit.web3.eth.Contract(contractAbi, contractAddress);

  return (
    <>
      <LoadingOverlay visible={loading} />
      {!loading && (
        <div className="Hero py-2 py-lg-5">
          <div className="container px-3 py-3 py-lg-5">
            <div className="row m-0">
              <div className="col-12 col-lg-6 ps-0 d-flex align-items-center mb-3 mb-lg-0">
                <div>
                  <h1>Utilities</h1>
                  <p className="mb-4">
                    One of the biggest problems of the NFT world is to offer
                    utility to the investor. Non Fungible Minutes NFTs have
                    educational utilities #BUIDL
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 pe-0 mt-5 mt-lg-0">
                <img src="/utility.svg" alt="" />
              </div>
            </div>

            <div className="py-5"></div>
            <div className="py-5"></div>
          </div>
        </div>
      )}
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
