import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex justify-between p-6 items-center sticky top-0 flex-row gap-3 z-50"
        style={{
            backgroundColor: `#0f000f`
        }}>
            <Link className="md:text-3xl sm:text-2xl text-xl font-bold text-white " href={'/'}>NONTOWN</Link>
            <div>
                <input
                    type="text"
                    placeholder="Cari..."
                    className="border rounded-md px-3 py-2 bg-white text-sm"
                />
            </div>
        </div>
    )
}

export default Navbar