import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Welcome to the homepage. Sign up or login to view daily image
        <Link to={"/login"}>
          <button className="">Click here to log in or sign up</button>
        </Link>
      </h1>
    </div>
  );
};

export default Homepage;
