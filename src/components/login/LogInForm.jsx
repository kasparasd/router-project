import { useState } from "react";
import { Navigate } from "react-router-dom";

export function LogInForm({logIn, isLogedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if(isLogedIn){
    return <Navigate to="/profile" />
  }

  function handleLogin(event){
    event.preventDefault();
    logIn({
      email: email,
      password: password
    })
  }

    return (
      <section className="vh-100" style={{backgroundColor: "white"}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
              <div className="card-body p-5 text-center">
    
                <h3 className="mb-5">Sign in</h3>

              <form onSubmit={handleLogin}>
                <div className="form-outline mb-4">
                  <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                </div>
    
                <div className="form-outline mb-4">
                  <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                </div>
    
                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
              </form>

    
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}