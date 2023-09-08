import { createBrowserRouter } from "react-router-dom";
import { Page } from "../pages";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Page/>
    }
])
