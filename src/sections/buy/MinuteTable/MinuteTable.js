import React, { useState, useEffect, useContext } from "react";
import { Table, Pagination, LoadingOverlay, Chip } from "@mantine/core";
import dayjs from "dayjs";
import { useContractKit } from "@celo-tools/use-contractkit";
import { contractAbi, contractAddress } from "../../../utils/contract";
import { Button } from "@mantine/core";
import DetailModal from "../../../components/DetailModal/DetailModal";
import { MinuteContext } from "../../../contexts/MinuteContext";

const MinuteTable = () => {
  const [page, setPage] = useState(1);
  const [tokenData, setTokenData] = useState([]);
  const [detailModalOpened, setDetailModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setSelectedMinute } = useContext(MinuteContext);
  const { address, connect, performActions, kit } = useContractKit();

  let instance = new kit.web3.eth.Contract(contractAbi, contractAddress);

  const mint = async (tokenId) => {
    try {
      await performActions(async () => {
        await instance.methods
          .mint(tokenId)
          .send({ from: address, value: kit.web3.utils.toWei("3", "ether") });
        await generateTokensData();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllMinutes = async () => {
    try {
      const minutes = await instance.methods
        .getPaginatedMinutes(page, 40)
        .call();
      return minutes;
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    generateTokensData();
  }, [page]);

  const generateMinute = (tokenId) => {
    const startMinute = dayjs()
      .startOf("d")
      .add(tokenId - 1, "m")
      .format("HH:mm:ss");

    const finishMinute = dayjs()
      .startOf("d")
      .add(tokenId, "m")
      .subtract(1, "s")
      .format("HH:mm:ss");

    return `${startMinute} - ${finishMinute} (UTC)`;
  };

  const openDetailModal = (tokenId) => {
    setSelectedMinute(tokenId);
    setDetailModalOpened(true);
  };

  const generateTokensData = async () => {
    setLoading(true);
    const data = [];
    const startingIndex = (page - 1) * 40;
    const endingIndex = startingIndex + 40;

    const minutes = await getAllMinutes();
    console.log("page: ", page, minutes);

    for (let i = startingIndex + 1; i <= endingIndex; i++) {
      data.push({
        tokenId: i,
        time: generateMinute(i),
        details: "asdadsa",
        available:
          minutes[i <= 40 ? i - 1 : i - 40 * (page - 1) - 1] == 0
            ? true
            : false,
      });
    }

    setTokenData(data);
    setLoading(false);
  };

  const rows = tokenData.map((element) => (
    <tr key={element.tokenId}>
      <td>{element.tokenId}</td>
      <td>{element.time}</td>
      <td>
        <Button
          variant="outline"
          style={{
            color: "black",
            borderColor: "rgb(206, 212, 218)",
          }}
          onClick={() => openDetailModal(element.tokenId)}
        >
          View Details
        </Button>
      </td>
      <td>
        <Button
          style={{
            backgroundColor: element.available ? "#E84141" : "#DCDCDC",
          }}
          onClick={() => {
            if (address) {
              mint(element.tokenId);
            } else {
              connect();
            }
          }}
          disabled={!element.available}
        >
          {element.available ? "Buy" : "Sold"}
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="Table py-2 py-lg-5">
        <div className="container px-3 py-3 py-lg-5">
          <div className="row m-0">
            <h2 onClick={() => openDetailModal(1)}>Buy Your Minute</h2>
            <Chip checked={address ? true : false}>
              {address
                ? address.substring(0, 7) +
                  "..." +
                  address.substring(address.length - 7)
                : "CONNECT"}
            </Chip>
            <div className="mt-3">
              <Table striped>
                <LoadingOverlay visible={loading} />
                <thead>
                  <tr>
                    <th>Token ID</th>
                    <th>Time</th>
                    <th>Associated data</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
              <div className="mt-3">
                <Pagination
                  total={36}
                  siblings={2}
                  onChange={(newPage) => setPage(newPage)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DetailModal
        opened={detailModalOpened}
        onClose={() => setDetailModalOpened(false)}
      />

      <style jsx>{`
        .Table {
          background-color: #fff;
        }
      `}</style>
    </>
  );
};

export default MinuteTable;
