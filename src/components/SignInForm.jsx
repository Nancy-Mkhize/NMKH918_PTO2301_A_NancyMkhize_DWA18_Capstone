import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { AuthContext } from "../hooks/AuthContext";

const SignInForm = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      navigate("/", { replace: true });
      setAuth(data);
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
      <input
        className="border border-solid border-gray-700 p-2 m-2 w-[95%] text-gray-300"
        type="email"
        name="email"
        placeholder="email"
        autoComplete="on"
        required
        onChange={handleChange}
      />

      <input
        className="border border-solid border-gray-700 p-2 m-2 w-[95%] text-gray-300"
        type="password"
        name="password"
        placeholder="password"
        autoComplete="on"
        required
        onChange={handleChange}
      />

      <button className="bg-gray-700 text-2xl text-gray-300 w-[95%] p-2 m-2" type="submit">
        Sign In
      </button>
      <p className="text-gray-300">
        Don't have an account?{" "}
        <Link to={"/signup"} className="underline decoration-solid text-gray-300">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
