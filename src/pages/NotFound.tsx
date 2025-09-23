import { TbError404 } from "react-icons/tb";

export function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center text-center">
      <div className="w-full flex justify-center">
        <TbError404 size={120} className="inline mb-1 text-slate-500 " />
      </div>
      <h1 className="text-5xl font-bold mb-6">Oops!</h1>
      <p>Sorry, the page you're looking for doesn't exist :(</p>
      <p>
        Don't worry. You can go{" "}
        <a href="/" className="link">
          back home
        </a>
        .
      </p>
    </div>
  );
}

export default NotFound;
