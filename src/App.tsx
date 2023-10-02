import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  const { routing } = router();

  return (
    <React.Fragment>
      <RouterProvider router={routing} />
    </React.Fragment>
  );
}

export default App;
