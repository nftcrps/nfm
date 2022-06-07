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
  const [minute, setMinute] = useState(null);
  const [loading, setLoading] = useState(true);
  const [remains, setRemains] = useState();
  const [openWarnModal, setOpenWarnModal] = useState(false);
  const { kit } = useContractKit();

  let instance = new kit.web3.eth.Contract(contractAbi, contractAddress);

  function repeatEvery(func, interval) {
    // Check current time and calculate the delay until next interval
    var now = new Date(),
      delay = interval - (now % interval);

    function start() {
      // Execute function now...
      func();
      // ... and every interval
      setInterval(func, interval);
    }

    // Delay execution until it's an even interval
    setTimeout(start, delay);
  }

  useEffect(() => {
    (async () => {
      await getAndSetMinuteData();
    })();
  }, []);

  useEffect(() => {
    repeatEvery(async () => {
      try {
        await getAndSetMinuteData();
      } catch (e) {
        console.log(e);
      }
    }, 60000);
  }, []);

  useEffect(() => {
    const remainsInterval = setInterval(() => {
      setRemains(dayjs().second());
    }, 1000);

    return () => {
      clearInterval(remainsInterval);
    };
  }, []);

  const getAndSetMinuteData = async () => {
    setLoading(true);
    try {
      const tokenId = dayjs().utc().hour() * 60 + dayjs().minute() + 1;
      const minute = await instance.methods.getMinute(tokenId).call();
      setMinute(minute);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoadingOverlay visible={loading} />
      {!loading && (
        <div className="Hero py-2 py-lg-5">
          <div className="container px-3 py-3 py-lg-5">
            <div className="row m-0">
              <div className="col-12 col-lg-6 ps-0 d-flex align-items-center mb-3 mb-lg-0">
                <div>
                  <h1>
                    {minute["tokenId"] == 0 ? (
                      <>Your magnificent business title</>
                    ) : (
                      minute["title"]
                    )}
                  </h1>
                  <p className="mb-4">
                    {minute["tokenId"] == 0 ? (
                      <>
                        A great description of the special side of your
                        business. You can tell what your team focuses on, what
                        kind of innovation you are trying to bring, what
                        problems you focus on.
                      </>
                    ) : (
                      minute["description"]
                    )}
                  </p>

                  <Button
                    text="Visit URL"
                    click={() =>
                      window.open(
                        minute["tokenId"] == 0 ? "#" : setOpenWarnModal(true),
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6 pe-0 mt-5 mt-lg-0">
                <img
                  src={
                    minute["tokenId"] == 0 ? "/hero.svg" : minute["imageUrl"]
                  }
                  alt=""
                />
              </div>
            </div>

            <div className="row mx-0 mt-5 Skip">
              <p className="px-0">
                Skip to next content in {60 - remains} seconds...
              </p>
            </div>

            <div className="py-5"></div>
            <div className="py-5"></div>
          </div>
          <UrlChangeWarnModal
            opened={openWarnModal}
            onClose={() => setOpenWarnModal(false)}
            url={minute["ctaUrl"] && minute["ctaUrl"]}
          />
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

        .Skip {
          position: absolute;
          z-index: 2;
        }
      `}</style>
    </>
  );
};

export default Hero;
