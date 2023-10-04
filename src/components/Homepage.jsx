import { Link } from "react-router-dom";
import Authenticate from "../components/Authenticate";
const Homepage = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-screen">
        <div
          className="flex-grow relative bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url(https://images-assets.nasa.gov/image/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o~orig.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col md:flex-row items-center justify-between p-8">
            <div className="text flex flex-col justify-center md:w-1/2">
              <h1 className="text-6xl font-bold font-secondary text-white mb-4">
                A place in <span className="text-slate-400">time</span> and{" "}
                <span className="text-slate-400">space</span>
              </h1>
              <p className="text-white text-lg font-secondary">
                Sign up and log in to view NASA&apos;s daily image
              </p>
            </div>
            <div className="login flex-1 flex justify-center items-center">
              <Authenticate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
