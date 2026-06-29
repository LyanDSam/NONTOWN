import Link from "next/link"

const LinkDirect = ({text,directTo}) => {
    return (
        <Link href={directTo} className="font-semibold underline hover:text-secondary transition-all text-white">{text}</Link>
    )
}
export default LinkDirect