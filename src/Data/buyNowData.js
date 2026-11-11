import VisaImg from '../assets/images/main/VisaImg.png';
import ApplePayImg from '../assets/images/main/ApplePayImg.png';
import MoonshotImg from '../assets/images/main/MoonshotImg.png';

export const buyNowData = {
  heading: "Buy Now with a",
  subHeading: "Debit Card or Crypto",
  footerText: "moonshot",
  buttonText: "BUY NOW",
  paymentMethods: [
    {
      id: 1,
      name: "Visa",
      image: VisaImg,
    },
    {
      id: 2,
      name: "Custom", 
      image: MoonshotImg, 
    },
    {
      id: 3,
      name: "Apple Pay",
      image: ApplePayImg,
    },
  ],
};

export default buyNowData