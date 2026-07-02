import Image from "next/image"
import Link from "next/link"

const Card = ({id,imgUrl,title,redirectTo}) => {
    return (
        <Link className=" py-3 px-1 flex flex-col items-center gap-1" href={`${redirectTo}`}>
            <Image src={imgUrl} width={200} height={150} alt={title} />
            <h2 className="text-md text-white">{title}</h2>
        </Link>
    )
}

export default Card