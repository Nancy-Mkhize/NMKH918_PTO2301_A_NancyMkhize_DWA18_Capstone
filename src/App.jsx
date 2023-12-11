import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// Restricted routes
import AnonRoute from "./layouts/AnonRoute"
import AuthRoute, { showsLoader }from "./layouts/AuthRoute"

// pages
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Favourites from "./pages/Favourites"
import ShowPage, { showDetailsLoader } from "./pages/ShowPage"
import SignUp from "./pages/SignUp"
import SignIn from './pages/SignIn'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" exact element={<AnonRoute />}>
        <Route index element={<Landing />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
      <Route path="/home" exact element={<AuthRoute />}>
        <Route path="show/:id" exact element={<ShowPage />} loader={showDetailsLoader} />
        <Route />
        <Route path="favourites" exact element={<Favourites />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
