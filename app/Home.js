import Link from "next/link";

export default () => {
    return(
        <>
            <section className="section-one">
                <div className="container">
                    <div className="row">
                        <div className="col py-5">
                            <p className="section-one-title">Title Cite</p>
                            <p className="section-one-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum ex vel leo vestibulum rutrum. Ut fermentum eros non cursus posuere. Integer rutrum aliquet ex, sed ultricies ante cursus condimentum. Aenean ut lectus eros. Maecenas eget malesuada nulla. Cras fermentum arcu non feugiat dictum. Mauris lobortis, augue ut pellentesque finibus, velit ligula efficitur nisl, at tristique nunc ante et ante. Quisque pretium interdum pharetra. Nunc malesuada aliquam libero vel egestas. Nulla volutpat lacus lacus, a eleifend tortor porttitor non. Cras non magna risus. Sed id euismod felis. Pellentesque efficitur diam quis leo pellentesque, a aliquet massa egestas. In lobortis leo elit, ut bibendum justo commodo vitae. Quisque finibus dui eget lacus fermentum iaculis. Quisque ac est vitae mi fringilla consectetur at a arcu.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col py-5 text-center">
                            <h4 className="mb-5">Descobre os principais pontos de interesse da cidade</h4>
                            <div className="text-center">
                                <Link className="btn btn-outline-light" href="/points"><h4>Points of interest</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-three">
                <div className="container">
                    <div className="row">
                        <div className="col py-5 text-center">
                            <h4 className="mb-3">Consulta o mapa interativo</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum ex vel leo vestibulum rutrum. Ut fermentum eros non cursus posuere. Integer rutrum aliquet ex, sed ultricies ante cursus condimentum. Aenean ut lectus eros. Maecenas eget malesuada nulla.</p>
                            <div className="text-center">
                                <Link className="btn btn-outline-dark" href="/points"><h4>Consulta o Mapa</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}