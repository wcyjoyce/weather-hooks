import { useState, useEffect } from "react";

const useLocation = () => {
  const [latitude, setLatitude] = useState(null); // default value: lat === null
  const [longitude, setLongitude] = useState(null); // default value: lat === null
  const [errorMessage, setErrorMessage] = useState(""); // default value: errorMessage === ""

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => { setLatitude(position.coords.latitude), setLongitude(position.coords.longitude) } ,
      error => setErrorMessage(error.message)
    );
  }, []);

  // return { latitude: latitude, longitude: longitude, errorMessage: errorMessage };
  return [latitude, longitude, errorMessage];
};

export default useLocation;
