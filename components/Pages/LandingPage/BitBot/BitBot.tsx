import Container from "@/components/Container"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import GifImage from "@/components/GifImage"
import Media from "@/shared/Media"

const BitBot = () => (
  <>
    <Container>
      <FadeInWhenVisible>
        <div className="w-full flex flex-col justify-center items-center mt-[200px]">
          <Media
            link="/images/logo/logo.webp"
            blurLink="/images/logo/logo.webp"
            containerClasses="w-[100px] md:w-[142px] aspect-[142/65] rounded-full mx-auto"
          />
        </div>
      </FadeInWhenVisible>
    </Container>
    <div className="w-full flex justify-center items-end transition translate-y-[6px] z-0">
      <GifImage source="phone-img.gif" size="500" />
    </div>
  </>
)

export default BitBot
