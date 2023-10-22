export default () => {

    const data = new Date();

    return(
        <>
            <footer className="container-fluid bg-dark mt-auto text-white">
                <div className="row">
                    <div className="col p-3 text-center">
                        {
                            <p>Desenvolvedor Rafael silva &copy; {data.getFullYear()}</p>
                        }
                    </div>
                </div>
            </footer>
        </>
    )
}