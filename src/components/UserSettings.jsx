import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from '../supabaseClient'
import { AuthContext } from "../hooks/AuthContext"

function UserSettings(props) {
  const { active, setter } = props
  const [ auth, setAuth ] = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    navigate('/')
    setAuth(undefined)
  }

  return (
    <div>
      {active && (
        <dialog className="bg-mint-cream w-64 h-64 p-4 text-dark-green rounded-sm" open>
          <button onClick={setter} className="relative top-0 left-[85%] border border-dark-green rounded-full w-8 h-8">
            X
          </button>
          <div className="h-[85%] flex flex-col justify-around items-center">
            <h1 className="font-bold">Your Settings</h1>
            <button
            onClick={handleSignOut}
            className="bg-platinum p-2 w-[60%] h-14  drop-shadow-lg active:animate-bounce">
              Sign Out
            </button>{" "}
          
          </div>
        </dialog>
      )}
    </div>
  )
}

export default UserSettings
