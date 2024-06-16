import { useState } from "react"
import FadeInWhenVisible from "../FadeInWhenVisible"
import GifImage from "../GifImage"

const ReferModal = () => {
  const [isOpenReferModal, setIsOpenReferModal] = useState(true)
  const onCloseVisible = () => {
    setIsOpenReferModal(false)
  }
  return (
    isOpenReferModal && (
      <div className="relative">
        <FadeInWhenVisible className="fixed bottom-[20px] md:top-[80px] left-[50%]">
          <div className="transform -translate-x-1/2 relative">
            <div
              className="bg-gradient_purple border border-gray_1 
              w-[280px] rounded-[15px] md:rounded-[25px] md:w-[710px] md:h-[70px] md:h-[70px] p-1 md:p-4
              flex justify-between items-center z-50"
            >
              <div className="flex justify-start items-center gap-[5px]">
                <GifImage source="coin.gif" size="60px" />
                <p className="font-fixedsys font-bold text-white text-sm md:text-xl">
                  Invite your friends & Receive a 5% bonus!
                </p>
              </div>
              <button
                type="button"
                className="bg-black rounded-[15px] p-[2px_15px_0px] w-[70px] md:w-[114px] h-[45px] md:h-[48px] 
                  font-seoge text-xs md:text-base text-white 
                  transition duration-[300ms] hover:scale-[1.01] hover:bg-black_1"
                onClick={() => {}}
              >
                Refer Now
              </button>
            </div>
            <div className="absolute top-[0px] right-[0px]">
              <div className="transform -translate-x-[-10px] translate-y-[-5px]">
                <button
                  type="button"
                  className="text-white font-fixedsys text-base
        transition duration-[300ms] hover:scale-[1.1]"
                  onClick={onCloseVisible}
                >
                  X
                </button>
              </div>
            </div>
          </div>
          
        </FadeInWhenVisible>
      </div>
    )
  )
}

export default ReferModal
