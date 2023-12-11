import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="w-screen h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center p-8 text-center">
      <h1 className="text-5xl font-extrabold mb-4">
        The Curious<span className="text-gray-300">CAST</span>
      </h1>
      <p className="text-xl mb-8">
        Unlock your mind and explore the world with The Curious <span className="text-gray-300">CAST</span>.
      </p>
      <div className="flex flex-col gap-4">
        <Link
          to="/signup"
          className="bg-gray-300 text-gray-900 p-3 w-40 rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-gray-300"
        >
          Sign Up
        </Link>
        <Link
          to="/signin"
          className="bg-gray-300 text-gray-900 p-3 w-40 rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-gray-300"
        >
          Sign In
        </Link>
      </div>
    </section>
  );
}

export default Landing;
