import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Group,
  Input,
  InputWrapper,
  LoadingOverlay,
  Modal,
  Textarea,
} from "@mantine/core";

const UrlChangeWarnModal = ({ opened, onClose, url }) => {
  return (
    <Modal opened={opened} onClose={() => onClose()} centered>
      <div>
        <p>
          You wanted to go to an address other than the Non Fungible Minutes
          website. <br /> <br />
          <b>URL: </b> {url}
        </p>
      </div>
      <Group position="center">
        <Button color="red" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button onClick={() => window.open(url, "_blank")}>Confirm</Button>
      </Group>
    </Modal>
  );
};

export default UrlChangeWarnModal;
