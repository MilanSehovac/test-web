import React from 'react'
import GoogleLogin from "react-google-login"; 
function Login() {
  function responseGoogle(res){
      console.log(res.tokenId)
    }
  return (
    <div className="login">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
  )
}

export default Login