import { useEffect } from "react";
import loadFacebookSDK from "../lib/facebook";

const Login = ({ setAccessToken, setUserId }) => {
  useEffect(() => {
    loadFacebookSDK();
  }, []);

  const handleLogin = () => {
    console.log("🚀 ~ Inside handleLogin");
    window.FB.login(
      (response) => {
        console.log(
          "🚀 ~ file: Login.jsx:13 ~ handleLogin ~ response:",
          response
        );
        if (response.authResponse) {
          const { accessToken, userID } = response.authResponse;
          setAccessToken(accessToken);
          setUserId(userID);
        } else {
          console.log("🚀 ~ Login failed");
        }
      },
      { scope: "email,public_profile,pages_messaging,pages_show_list" }
    );
  };

  return (
    <div className="p-5">
      <h1 className="text-xl m-5">Login with Facebook</h1>
      <button onClick={handleLogin} className="outline">
        Login
      </button>
    </div>
  );
};

export default Login;
