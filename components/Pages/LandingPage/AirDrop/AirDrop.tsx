import Container from "@/components/Container"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const AirDrop = () => (
  <Container>
    <FadeInWhenVisible>
      <div className="w-full flex flex-col justify-center items-center mt-[200px]">
        <Media
          link="/images/logo/logo.webp"
          blurLink="/images/logo/logo.webp"
          containerClasses="w-[100px] md:w-[142px] aspect-[142/65] rounded-full mx-auto"
        />
      </div>
      <div className="w-full py-2 md:py-6 mx-auto">
        <p className="font-seoge text-green font-bold text-4xl md:text-5xl text-center leading-[130%] tracking-[3px]">
          Airdrop
        </p>
        <p
          className="font-fixedsys text-black_3 font-300 text-base md:text-xl text-center text-white 
                      py-5 md:py-[50px] leading-[150%] tracking-[1px] md:tracking-[3px]"
        >
          {`Join our mailing list to \n win $100K Airdrop!`}
        </p>
        <div className="w-full flex justify-center items-center py-5">
          <button
            type="button"
            className="bg-gradient_purple w-[260px] md:w-[320px] h-[48px] text-center rounded-[15px] bg-black
                border border-black_3 font-bold
                transition duration-[300ms] hover:scale-[1.01]"
          >
            Join Now
          </button>
        </div>
        <p
          className="max-w-[250px] md:max-w-[580px] mx-auto font-seoge text-black_2 font-300 text-xs md:text-sm text-center text-black_4 
                      mt-10 leading-[150%] tracking-[3px]"
        >
          {`I accept that Bitbot can contact me via digital \n
            communication. Unsubscribing is possible at any time \n
            Details on how personal data is processed: privacy policy.`}
        </p>
      </div>
    </FadeInWhenVisible>
  </Container>
)

export default AirDrop
