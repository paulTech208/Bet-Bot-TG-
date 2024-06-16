import Container from "@/components/Container"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const HeroSection = () => (
  <Container>
    <div className="relative mt-[100px] md:mt-[200px]">
      <FadeInWhenVisible className="flex flex-col jusitify-center items-center w-full relative">
        <p className="font-fixedsys font-bold text-green text-2xl md:text-4xl">The world’s first</p>
        <p className="font-seoge font-bold text-green text-center mt-4 text-4xl md:text-[56px]">
          AI POWERED TRADING BOT
        </p>
      </FadeInWhenVisible>
    </div>
  </Container>
)

export default HeroSection
