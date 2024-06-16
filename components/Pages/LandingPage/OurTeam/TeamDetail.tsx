import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const TeamDetail = () => (
  <FadeInWhenVisible className="w-fit">
    <div className="w-full md:grid grid-cols-2 bg-dark_green_2 p-4 md:p-10 rounded-[15px] mt-12">
      <div className="col-span-1 p-2 flex flex-col justify-center px-2 md:px-12 items-center">
        <Media
          link="/images/landing/avatar1.webp"
          blurLink="/images/landing/avatar1.webp"
          containerClasses="w-[90px] md:w-[151px] aspect-[1/1] rounded-full"
        />
        <p className="font-fixedsys font-bold text-2xl md:text-4xl text-green mt-6">
          Andrew Jacobs
        </p>
        <p className="font-george_bold font-bold text-white text-sm md:text-xl mt-5 tracking-[2px]">
          Technical Product Advisor
        </p>
        <p className="font-asm_bold mt-4 text-white text-left text-xs md:text-base tracking-[2px]">
          {`With 7+ years in crypto and a focus on \n
         trading bots, Andrew is a key advisor at \n
          Bitbot. His expertise is vital for \n
          strategic guidance in the complex crypto 
           market, driving Bitbot’s innovative \n
           strides in crypto trading technology.`}
        </p>
      </div>
      <div className="col-span-1 p-2 flex flex-col justify-start mt-10 md:mt-0 md:px-12 items-center">
        <Media
          link="/images/landing/avatar2.webp"
          blurLink="/images/landing/avatar2.webp"
          containerClasses="w-[90px] md:w-[151px] aspect-[1/1] rounded-full"
        />
        <p className="font-fixedsys font-bold text-[22px] md:text-4xl text-green mt-6">
          Unveiling Soon!
        </p>
        <p className="font-george_bold font-bold text-white text-sm md:text-xl mt-5 tracking-[2px]" />
        <p className="font-asm_bold mt-4 text-white text-left text-base tracking-[2px]" />
      </div>
    </div>
  </FadeInWhenVisible>
)

export default TeamDetail
