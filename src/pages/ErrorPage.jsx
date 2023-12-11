import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section className="bg-gray-800 w-screen h-screen overflow-y-hidden flex flex-col justify-center items-center text-gray-300">
      <div className="w-[80%] h-[200px] bg-gray-600 border-solid border-2 border-gray-300"></div>
      <h1 className="text-3xl px-4">Oh no!</h1>
      <p className="px-4">It looks like you are alone here. The page you are looking for may have been moved or deleted.</p>
      <button className="border-solid border-2 border-gray-300 px-4 py-2 text-gray-300">Go to Home</button>
    </section>
  );
}
