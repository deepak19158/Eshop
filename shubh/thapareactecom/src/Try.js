import { useEffect } from "react";

const Try = () => {
  // useEffect(() => {
  //   // Fetch the redirection instruction from the backend
  //   fetch("/redirect")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Check if the response contains a redirection instruction
  //       if (data.redirectTo) {
  //         // Perform client-side redirection without a full page reload
  //         window.history.pushState(null, "", data.redirectTo);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  return (
    <>
      <div>hii</div>
    </>
  ); // Render nothing
};

export default Try;
