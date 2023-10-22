import Link from "next/link";

export default () => {
    return(
        <>
            <nav className="container-fluid bg-dark text-white">
                <div className="row">
                    <div className="col p-3">
                        <code>
                            Rafael Silva
                        </code>
                    </div>
                    <div className="col p-3 text-end align-self-center">
                        <Link href="/" className="link">Home</Link>
                        <Link href="/points" className="link">Points of interest</Link>
                        <Link href="/map" className="link">Map</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}