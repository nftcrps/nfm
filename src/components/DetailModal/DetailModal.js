import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Input,
  InputWrapper,
  LoadingOverlay,
  Modal,
  Textarea,
} from "@mantine/core";
import { MinuteContext } from "../../contexts/MinuteContext";
import { useContractKit } from "@celo-tools/use-contractkit";
import { contractAbi, contractAddress } from "../../utils/contract";

const DetailModal = ({ opened, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [owner, setOwner] = useState(false);
  const [title, setTitle] = useState();
  const [ctaUrl, setCtaUrl] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [description, setDescription] = useState();
  const { selectedMinute } = useContext(MinuteContext);

  const { address, connect, performActions, kit } = useContractKit();

  let instance = new kit.web3.eth.Contract(contractAbi, contractAddress);

  useEffect(() => {
    (async () => {
      if (!selectedMinute) {
        return;
      }
      setLoading(true);

      try {
        const minute = await instance.methods.getMinute(selectedMinute).call();
        console.log(minute);
        setTitle(minute["title"]);
        setCtaUrl(minute["ctaUrl"]);
        setImageUrl(minute["imageUrl"]);
        setDescription(minute["description"]);
        const isOwner = await instance.methods.ownerOf(selectedMinute).call();
        isOwner === address && setOwner(true);
      } catch (e) {
        setOwner(false);
      } finally {
        setLoading(false);
      }
    })();
  }, [selectedMinute]);

  const updateTokenData = async (tokenId) => {
    await performActions(async () => {
      onClose();
      await instance.methods
        .updateMinute(tokenId, title, description, ctaUrl, imageUrl)
        .send({ from: address });
    });
  };

  return (
    <Modal opened={opened} onClose={() => onClose()} centered>
      {loading ? (
        <LoadingOverlay visible={true} />
      ) : (
        <>
          <h3>Minute</h3>
          <InputWrapper label="Title">
            <Input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Title"
              disabled={!owner}
            />
          </InputWrapper>

          <InputWrapper label="Call To Action URL" className="mt-3">
            <Input
              value={ctaUrl}
              onChange={(event) => setCtaUrl(event.target.value)}
              placeholder="Call To Action URL"
              disabled={!owner}
            />
          </InputWrapper>

          <InputWrapper label="Image URL" className="mt-3">
            <Input
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
              placeholder="Image URL"
              disabled={!owner}
            />
          </InputWrapper>

          <InputWrapper label="Description" className="mt-3">
            <Textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Description"
              disabled={!owner}
            />
          </InputWrapper>

          <Button
            className="mt-3 w-100"
            disabled={!owner}
            onClick={() => updateTokenData(selectedMinute)}
          >
            Update
          </Button>
        </>
      )}
    </Modal>
  );
};

export default DetailModal;
