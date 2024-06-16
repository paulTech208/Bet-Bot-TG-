import Media from "@/shared/Media"
import lists from "./flowList.json"

const Flow = () => (
  <div className="w-full h-[200px] bg-dark_green z-0 overflow-hidden">
    <div className="w-full h-[20px] bg-green z-10 offset-1" />
    <div className="h-[180px] bg-dark_green py-4 flex justify-start items-center element-class">
      {lists.map((list) => (
        <div
          key={list.title}
          className="!w-[440px] !h-[150px] flex flex-col justify-center items-center gap-[30px]"
        >
          <p className="font-fixedsys text-xl text-green">{list.title}</p>
          <Media
            link={`/images/flow/${list.content}`}
            blurLink={`/images/flow/${list.content}`}
            containerClasses="w-[162px] md:w-[162px] aspect-[162/37]"
          />
        </div>
      ))}
    </div>
  </div>
)

export default Flow
