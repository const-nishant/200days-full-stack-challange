import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./routes/App.jsx";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";

const router = createBrowserRouter([
  {
    Patth: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
