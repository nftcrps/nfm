import { useContractKit } from "@celo-tools/use-contractkit";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Group,
  LoadingOverlay,
  Text,
} from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { contractAbi, contractAddress } from "../../../utils/contract";

const UtilityCards = () => {
  const [nftAmount, setNftAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { address, kit } = useContractKit();

  let instance = new kit.web3.eth.Contract(contractAbi, contractAddress);

  useEffect(() => {
    (async () => {
      if (address) {
        setLoading(true);
        const nfmBalance = await instance.methods.balanceOf(address).call();
        setNftAmount(nfmBalance);
        console.log(nfmBalance);
        setLoading(false);
      }
    })();
  }, [address]);

  return (
    <div className="py-2 py-lg-5">
      <div className="container px-3 py-3 py-lg-5">
        <LoadingOverlay visible={loading} />
        {!loading && (
          <div className="row m-0">
            <div className="col-12 col-lg-4 ps-0 d-flex align-items-center mb-3 mb-lg-3">
              <Card shadow="xl" p="lg">
                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: 5 }}
                >
                  <Text weight={500}>ADS</Text>
                  <Badge color="pink" variant="light">
                    1 NFM
                  </Badge>
                </Group>

                <Text
                  size="sm"
                  style={{ color: "rgb(73, 80, 87)", lineHeight: 1.5 }}
                >
                  The content you add to the "Minute" NFTs you purchase will
                  also be active on the platform where we publish Solidity
                  lessons. You don't need to take any action for this utility.
                </Text>

                <Accordion>
                  <Accordion.Item label="When will the utility be active?">
                    When the Solidity lessons utility is active.
                  </Accordion.Item>
                  <Accordion.Item label="Will there be other platforms?">
                    Not anytime soon, but it will be.
                  </Accordion.Item>
                </Accordion>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ marginTop: 14 }}
                  disabled
                >
                  NO NEED TO ACTION
                </Button>
              </Card>
            </div>
            <div className="col-12 col-lg-4 ps-0 d-flex align-items-center mb-3 mb-lg-3">
              <Card shadow="xl" p="lg">
                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: 5 }}
                >
                  <Text weight={500}>SOURCE CODE</Text>
                  <Badge color="pink" variant="light">
                    3 NFM
                  </Badge>
                </Group>

                <Text
                  size="sm"
                  style={{ color: "rgb(73, 80, 87)", lineHeight: 1.5 }}
                >
                  Investors who mint 3 NFTs can access the source codes of the
                  project. You can access both smart contracts written in
                  solidity and front-end code developed with Next.JS.
                </Text>

                <Accordion>
                  <Accordion.Item label="When will the utility be active?">
                    Immediately. If your wallet meets the minimum NFT
                    requirements, you can access the source codes immediately.
                  </Accordion.Item>
                  <Accordion.Item label="Will the code be updated?">
                    Yes, you will be able to access all versions through the
                    changelog page that will be created when improvements are
                    made on the front-end.
                  </Accordion.Item>
                </Accordion>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ marginTop: 14 }}
                  disabled={nftAmount < 3}
                  onClick={() => router.push("/16db233d.zip")}
                >
                  {nftAmount >= 3 ? "DOWNLOAD" : "NEED 3 NFTs"}
                </Button>
              </Card>
            </div>

            <div className="col-12 col-lg-4 ps-0 d-flex align-items-center mb-3 mb-lg-3">
              <Card shadow="xl" p="lg">
                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: 5 }}
                >
                  <Text weight={500}>MOBILE APP SOURCE CODE</Text>
                  <Badge color="pink" variant="light">
                    5 NFM
                  </Badge>
                </Group>

                <Text
                  size="sm"
                  style={{ color: "rgb(73, 80, 87)", lineHeight: 1.5 }}
                >
                  A mobile application of the same project will be made with
                  React Native. Investors who have 5 NFTs in their wallet will
                  have access to the source codes.
                </Text>

                <Accordion>
                  <Accordion.Item label="When will the utility be active?">
                    Before 1 July 2022.
                  </Accordion.Item>
                  <Accordion.Item label="Will the code be updated?">
                    No. It will be a mobile application prepared with the
                    features of a working version of the website. It will not be
                    updated again.
                  </Accordion.Item>
                </Accordion>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ marginTop: 14 }}
                  disabled
                >
                  NOT AVAILABLE YET
                </Button>
              </Card>
            </div>

            <div className="col-12 col-lg-4 ps-0 d-flex align-items-center mb-3 mb-lg-3">
              <Card shadow="xl" p="lg">
                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: 5 }}
                >
                  <Text weight={500}>SOLIDITY LESSONS</Text>
                  <Badge color="pink" variant="light">
                    7 NFM
                  </Badge>
                </Group>

                <Text
                  size="sm"
                  style={{ color: "rgb(73, 80, 87)", lineHeight: 1.5 }}
                >
                  Users with a sufficient number of NFTs will be able to access
                  the Solidity lessons we have prepared. New lessons will be
                  available on a weekly basis.
                </Text>

                <Accordion>
                  <Accordion.Item label="When will the utility be active?">
                    17 July 2022. Initially, 5 lessons will be available. A
                    total of 34 lessons will be reached in weekly periods.
                  </Accordion.Item>
                  <Accordion.Item label="What if there is not enough demand?">
                    Lessons will continue to be published.
                  </Accordion.Item>
                </Accordion>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ marginTop: 14 }}
                  disabled
                >
                  NOT AVAILABLE YET
                </Button>
              </Card>
            </div>

            <div className="col-12 col-lg-4 ps-0 d-flex align-items-center mb-3 mb-lg-3">
              <Card shadow="xl" p="lg">
                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: 5 }}
                >
                  <Text weight={500}>HIRE ME FOR ERC-20 CONTRACT</Text>
                  <Badge color="pink" variant="light">
                    25 NFM
                  </Badge>
                </Group>

                <Text
                  size="sm"
                  style={{ color: "rgb(73, 80, 87)", lineHeight: 1.5 }}
                >
                  ERC-20 contract development service will be provided for users
                  who meet the minimum NFT requirement. Utility is limited to 1
                  project.
                </Text>

                <Accordion>
                  <Accordion.Item label="When will the utility be active?">
                    Before 14 June 2022.
                  </Accordion.Item>
                  <Accordion.Item label="Will front-end development service also be provided?">
                    No. Details can be discussed upon request.
                  </Accordion.Item>
                </Accordion>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ marginTop: 14 }}
                  disabled
                >
                  NOT AVAILABLE YET
                </Button>
              </Card>
            </div>
            <div className="col-12 col-lg-4 ps-0 d-flex align-items-center mb-3 mb-lg-3">
              <Card shadow="xl" p="lg">
                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: 5 }}
                >
                  <Text weight={500}>HIRE ME FOR ERC-721 CONTRACT</Text>
                  <Badge color="pink" variant="light">
                    30 NFM
                  </Badge>
                </Group>

                <Text
                  size="sm"
                  style={{ color: "rgb(73, 80, 87)", lineHeight: 1.5 }}
                >
                  ERC-721 contract development service will be provided for
                  users who meet the minimum NFT requirement. Utility is limited
                  to 1 project.
                </Text>

                <Accordion>
                  <Accordion.Item label="When will the utility be active?">
                    Before 14 June 2022.
                  </Accordion.Item>
                  <Accordion.Item label="Will front-end development service also be provided?">
                    No. Details can be discussed upon request.
                  </Accordion.Item>
                </Accordion>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ marginTop: 14 }}
                  disabled
                >
                  NOT AVAILABLE YET
                </Button>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UtilityCards;
