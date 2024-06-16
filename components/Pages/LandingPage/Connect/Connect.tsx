import Container from "@/components/Container"
import CurrentPrice from "./CurrentPrice"
import Pay from "./Pay"
import Receive from "./Receive"
import ConnectButton from "./ConnectButton"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const Connect = () => (
  <Container>
    <FadeInWhenVisible
      className="flex flex-col justify-center items-center 
      w-full md:w-[460px] h-[505px] gap-[15px] bg-white_0 p-3 mx-auto rounded-[15px] mt-[50px]
        center text-white"
    >
      <CurrentPrice />
      <Pay />
      <Receive />
      <ConnectButton />
    </FadeInWhenVisible>
  </Container>
)

export default Connect
