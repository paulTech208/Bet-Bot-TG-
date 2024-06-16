import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Container from "@/components/Container"
import Media from "@/shared/Media"
import Question from "@/components/Pages/LandingPage/FAQ/Question"
import Lists from "./questionLIsts.json"

const FAQ = () => (
  <Container>
    <FadeInWhenVisible className="flex flex-col justify-center items-center pt-[120px] md:pt-[200px]">
      <div className="w-full flex">
        <Media
          link="/images/logo/logo.webp"
          blurLink="/images/logo/logo.webp"
          containerClasses="w-[100px] md:w-[142px] aspect-[142/65] rounded-full mx-auto"
        />
      </div>
      <div className="w-full py-2 md:py-6 mx-auto">
        <p className="font-seoge text-green font-bold text-2xl md:text-5xl text-center leading-[130%] tracking-[3px]">
          Frequently asked <br /> questions
        </p>
      </div>
      {Lists.map((list) => (
        <FadeInWhenVisible key={list.title} className="text-white">
          <Question data={list} />
        </FadeInWhenVisible>
      ))}
    </FadeInWhenVisible>
  </Container>
)

export default FAQ
