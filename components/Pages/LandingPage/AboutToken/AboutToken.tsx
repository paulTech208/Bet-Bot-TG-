import Container from "@/components/Container"
import Explanation from "./Explanation"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const AboutToken = () => (
  <Container>
    <FadeInWhenVisible className="w-full mt-[250px] flex flex-col justify-center items-center text-white">
      <p className="font-fixedsys font-bold text-green text-lg md:text-3xl">Trade, Earn, Retire</p>
      <p className="font-seoge font-bold text-green text-3xl md:text-[56px] mt-3">$BITBOT Token</p>
      <p
        className="max-w-[650px] font-seoge text-black_3 font-300 text-xs md:text-xl text-center 
                    py-4 leading-[150%] tracking-[3px]"
      >
        {`Receive the best revenue share, enjoy exclusive \n
        perks, early presale access, and steer Bitbot's \n
        strategy alongside top traders.`}
      </p>
    </FadeInWhenVisible>
    <Explanation />
  </Container>
)

export default AboutToken
