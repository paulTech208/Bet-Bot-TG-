import {
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaDiscord,
  FaRedditAlien,
  FaFacebookF,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { SiLinktree } from "react-icons/si"
import Logo from "./Logo"

const Footer = () => (
  <div className="bg-black_4 flex flex-col justify-center items-center px-4">
    <div
      className="w-full h-auto flex flex-col md:flex-row justify-between items-center text-white
        font-poppins text-[16px] text-white_4 pt-[20px]"
    >
      <Logo />
      <div className="flex text-[22px] gap-[15px] md:gap-[30px] mt-[20px]">
        <FaXTwitter />
        <SiLinktree />
        <FaTelegramPlane />
        <FaDiscord />
        <FaInstagram />
        <FaRedditAlien />
        <FaYoutube />
        <FaFacebookF />
      </div>
      <p className="font-fixedsys text-base mt-[20px]">Customer Support</p>
    </div>
    <p className="font-fixedsys text-[16px] md:text-base text-black_3 my-4">
      Bitbot. All right reserved. © 2024
    </p>
  </div>
)

export default Footer
