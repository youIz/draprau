import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./Home";
import Country from "./Country";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "Country",
            element: <Country />
        }
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App;