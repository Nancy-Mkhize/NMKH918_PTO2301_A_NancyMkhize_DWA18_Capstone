import { useContext, useEffect } from "react"
import { Outlet, Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../hooks/AuthContext"

function AnonRoute() {
  const [auth] = useContext(AuthContext)

  const navigate = useNavigate();
  useEffect(()=>{
    if(auth) {
      navigate('../home', {replace: true})
    }
  }, [auth])


  return <Outlet />
}

export default AnonRoute