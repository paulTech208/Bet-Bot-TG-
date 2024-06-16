import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import GifImage from "./GifImage"

const Card = ({ data }) => (
  <FadeInWhenVisible className="w-fit">
    <div className="flex flex-col w-[300px] md:w-[400px] h-[280px] md:h-[400px] mx-auto bg-dark_green p-10 rounded-[15px]">
      <GifImage source={data.image} />
      <p className="text-white text-lg md:text-3xl font-fixedsys md:my-3">{data.title}</p>
      <p className="text-white mt-3 md:mt-4 font-seoge text-xs md:text-base tracking-[2px]">
        {data.content}
      </p>
    </div>
  </FadeInWhenVisible>
)

export default Card
