import Image from "next/image"

const HeroMobile = ({ title, overview }) => {
    return (
        <div className="flex flex-col items-center absolute bottom-20 lg:hidden sm:hidden w-full  z-11">
            <div className="flex flex-col text-white  gap-2 p-5  ">
                <div>
                    <h1 className=" text-3xl font-bold mb-5 ">
                        {title}
                    </h1>
                    <h1 className="text-sm font-italic mb-5 ">
                        {overview}
                    </h1>
                </div>
            </div>
            <h1 className="text-sm/relaxed text-white/70 font-semibold p-2 z-11 -bottom-2 absolute rounded-md w-full justify-center text-center">
                Scroll for information
            </h1>
        </div>
    )
}

export default HeroMobile