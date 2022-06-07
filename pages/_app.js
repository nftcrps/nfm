import {
  ContractKitProvider,
  Alfajores,
  Mainnet,
  NetworkNames,
} from "@celo-tools/use-contractkit";
import { MantineProvider } from "@mantine/core";
import { MinuteProvider } from "../src/contexts/MinuteContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <ContractKitProvider
        dapp={{
          name: "Non Fungible Minutes",
        }}
        networks={[Mainnet]}
        network={{
          name: NetworkNames.Mainnet,
          rpcUrl: "https://forno.celo.org",
          graphQl: "https://explorer.celo.org/graphiql",
          explorer: "https://explorer.celo.org/",
          chainId: 42220,
        }}
      >
        <MinuteProvider>
          <Component {...pageProps} />
        </MinuteProvider>
      </ContractKitProvider>
    </MantineProvider>
  );
}

export default MyApp;
