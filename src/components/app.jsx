import React, { Component, useState, useEffect } from "react";

import useLocation from "./UseLocation.jsx";
import Weather from "./weather.jsx";
import Spinner from "./spinner.jsx";

// Functional-based component
const App = () => {
  const [latitude, longitude, errorMessage] = useLocation();
  // const [latitude, setLatitude] = useState(null); // default value: lat === null
  // const [longitude, setLongitude] = useState(null); // default value: lat === null
  // const [errorMessage, setErrorMessage] = useState(""); // default value: errorMessage === ""

  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     position => { setLatitude(position.coords.latitude), setLongitude(position.coords.longitude) } ,
  //     error => setErrorMessage(error.message)
  //   );
  // }, []);

  let content;
  if (errorMessage) {
    content = <Weather errorMessage={errorMessage} />
  } else if (latitude && longitude) {
    content = <Weather latitude={latitude} longitude={longitude} />
  } else {
    content = <Spinner message="Please accept location request" />
  };

  return content;
};

export default App;

// Class-based component
// class App extends Component {
//   state = { latitude: null, longitude: null, errorMessage: "" }

//   // Geolocation API - initialised when component is mounted
  // componentDidMount() {
  //   window.navigator.geolocation.getCurrentPosition(
  //     position => setLatitude(position.coords.latitude),
  //     error => setErrorMessage(error.message)
  //   );
//   };

//   render() {
//     if (this.state.errorMessage && !this.state.latitude) {
//       return <Weather errorMessage={this.state.errorMessage} />
//     } else if (!this.state.errorMessage && this.state.latitude && this.state.longitude) {
//       return <Weather latitude={this.state.latitude} longitude={this.state.longitude} />
//     } else {
//       return <Spinner message="Please accept location request" />
//     };
//   };
// };

// export default App;
