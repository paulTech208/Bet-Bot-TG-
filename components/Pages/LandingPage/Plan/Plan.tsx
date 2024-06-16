import Container from "@/components/Container"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"
import PlanButton from "./PlanButton"

const Plan = () => (
  <Container>
    <FadeInWhenVisible className="flex flex-col justify-center items-center pt-[100px]">
      <div className="w-full flex">
        <Media
          link="/images/logo/logo.webp"
          blurLink="/images/logo/logo.webp"
          containerClasses="w-[142px] md:w-[142px] aspect-[142/65] rounded-full mx-auto"
        />
      </div>
      <div className="w-full pt-5 pb-1 mx-auto">
        <p className="font-seoge text-green font-bold text-4xl md:text-6xl text-center leading-[130%]">
          Instantly smart,
          <br />
          well planned
        </p>
        <p
          className="font-seoge max-w-[650px] text-black_3 font-300 text-base md:text-xl text-center mx-auto
                    py-4 leading-[150%] tracking-[3px]"
        >
          {` Boost your crypto trading with the ultimate AI \n
          assistant. Get real-time data, deep technical \n
          analysis, and effortless execution. This AI companion
          \n
          makes advanced trading accessible beyond Wall Street.`}
        </p>
      </div>
      <PlanButton />
    </FadeInWhenVisible>
  </Container>
)

export default Plan
