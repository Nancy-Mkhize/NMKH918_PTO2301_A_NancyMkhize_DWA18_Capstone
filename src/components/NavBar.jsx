import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import UserSettings from "./UserSettings"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <header className="h-16 w-full fixed bg-black bg-opacity-50 backdrop-blur-sm">
      <nav className="flex justify-between px-4 mt-4 items-center">
        <NavLink to={"/home"} className="text-gray-300">
          The Curious<span className="font-bold text-gray-100">CAST</span>
        </NavLink>

        <div className="w-1/4 flex justify-around">
          <NavLink to={"/home/favourites"}>
            <FontAwesomeIcon icon={faHeart} className="h-4 min-[300px]:h-6 text-gray-100" />
          </NavLink>
          <button
            onClick={toggleModal}
            className="active:animate-ping"
          >
            <FontAwesomeIcon icon={faCircleUser} className="h-4 min-[300px]:h-6 text-gray-100" />
          </button>
          <UserSettings active={isOpen} setter={toggleModal} />
        </div>
      </nav>
    </header>
  )
}
