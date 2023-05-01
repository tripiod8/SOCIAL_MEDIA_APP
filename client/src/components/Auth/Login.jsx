import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shareVideo from '../../assets/share.mp4'
import logowhite from '../../assets/logowhite.png'


const Login = () => {
  const navigate = useNavigate()
  console.log(process.env.GOOGLE_CLIENT_ID);

  function handleCredentialResponse(response)
  {
    console.log(response.credential);
    const data = JSON.stringify({
      credential: response.credential
    })

    fetch('/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
    .then(res => {
      if(res.status === 200) res.json()
      // check if 404
    })
    .then(res => navigate('/'))
  }
  
  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id: process.env.GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse
    })

    google.accounts.id.renderButton(document.querySelector('#signInDiv'), 
    {
      theme: 'outline', size: 'large'
    })
  }, [])

  return (
    <>
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video src={shareVideo} type="video/mp4" loop controls={false} muted autoPlay className="w-full h-full object-cover" />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logowhite} alt="logo" width={'130px'} />
            <div className="shadow-2xl py-4">
              <div id="signInDiv"></div>
            </div>
          </div>
        </div>
      </div>      
    </div>
      
    </>
    
  )
}

export default Login