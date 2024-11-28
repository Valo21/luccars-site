import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.page";
import RootLayout from "./components/RootLayout.component";
import Sucursales from "./pages/Sucursales.page";
import Modelos from "./pages/Modelos.page";
import Modelo from "./pages/ModeloId.component";
import Styling from "./pages/Styling.page";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/sucursales',
          element: <Sucursales/>
        },
        {
          path: '/modelos',
          element: <Modelos/>
        },
        {
          path: '/modelos/:modelId',
          element: <Modelo/>
        },
        {
          path: '/styling',
          element: <Styling/>
        },
      ]
    },
]);

export default router;