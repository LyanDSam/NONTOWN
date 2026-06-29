import Image from "next/image"

const HeroMobile = ({ title, overview }) => {
    return (
        <div className="flex flex-row text-white max-w-2xl absolute z-11 gap-2 p-5 bottom-20 lg:hidden sm:hidden">
            <div>
                <h1 className=" text-3xl font-bold mb-5 ">
                    {title}
                </h1>
                <h1 className="text-sm font-italic mb-5 ">
                    {overview}
                </h1>
            </div>
        </div>
    )
}

export default HeroMobile