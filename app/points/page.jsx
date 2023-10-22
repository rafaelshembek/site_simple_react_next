
export default () => {


    //#region CODIGO JAVASCRIPT

    const dados = [
        {
            name: "Rafael Silva",
            email: "rafaelsilvagomesreal@gmail.com"
        },
        {
            name: "Angela Vazquez",
            email: "angelavazquez@gmail.com"
        },
        {
            name: "Bruna Sousa",
            email: "brunasousa@gmail.com"
        }
    ]
    
    // const teste = fetch()

    //#endregion
    return(
        <>
            <h1 className="text-center text-secondary mt-5">Colaboradores</h1>
            <div className="container">
                {
                    dados.map((item, index) => {
                        return(
                            <>
                                <div className="alert alert-warning" role="alert" key={index}>
                                    <div className="avatar">
                                        <img src=""/>
                                    </div>
                                    <h4 className="card-title">Nome: {item.name}</h4>
                                    <p className="card-subtitle mb-4">Email: {item.email}</p>
                                    <button className="btn btn-light">site oficial</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}