import { useEffect } from "react";

const loadFacebookSDK = () => {
  return new Promise((resolve) => {
    console.log("🚀 Inside loadFacebookSDK");
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: "483661720850575",
        cookie: true,
        xfbml: true,
        version: "v20.0",
      });
      resolve();
    };

    ((d, s, id) => {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
};

export default loadFacebookSDK;
