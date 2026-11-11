// Apni images ke paths yahan import karein

import Heroimg from '../assets/images/Hero/Heroimg.png';
import MoonshotImg  from '../assets/images/main/MoonshotImg.png'

export const swapData = {
  leftSection: {
    subHeading: "Direct Swap",
    heading: "Buy $DOGCOIN",
    image: Heroimg,
    addressLabel: "Solana Contract Address",
    contractAddress: "4S94Bfgd8f235dHklO4JfkXs51tPump",
  },
  rightSection: {
    cardHeader: "Pay and Receive",
    viaText: "Via Raydium",
    youPayLabel: "You pay:",
    payAmount: "1.021",
    payCurrency: "Sol",
    payIcon: MoonshotImg,
    youReceiveLabel: "You Receive:",
    receiveAmount: "2931.21",
    receiveCurrency: "DogCoin",
    receiveIcon: Heroimg,
    details: [
      { label: "Dogcoin price:", value: "$1.16 USD" },
      { label: "solana price:", value: "$155.16 USD" },
      { label: "Network Fee:", value: "0.0005 SOL" },
    ],
    buttonText: "Swap",
  }
};