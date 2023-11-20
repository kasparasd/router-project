export function Profile({profileName}){

    
    return(
        <>
            <section style={{backgroundColor: "#eee" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" style={{margin: "0 auto"}}>
                            <div className="card mb-4">
                            <div className="card-body text-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                className="rounded-circle img-fluid" style={{width: "150px"}}/>
                                <h5 className="my-3">{profileName}</h5>
                                <p className="text-muted mb-1">Full Stack Developer</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}