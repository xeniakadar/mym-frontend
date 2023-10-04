import React from "react";
import { useEffect, useState } from "react";

const NasaPage = () => {
  const [imageData, setImageData] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isHighResImageLoaded, setHighResImageLoaded] = useState(false);

  useEffect(() => {
    async function fetchBlogposts() {
      try {
        const response = await fetch(
          "https://mym-backend-lgot0fken-xeniakadars-projects.vercel.app/api/nasa-daily-image",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();

        if (response.ok) {
          setImageData(data.url);
          setExplanation(data.explanation);
        } else {
          console.error("failed to fetch blogposts", data);
        }
      } catch (error) {
        console.error("an error occured:", error);
      }
    }

    fetchBlogposts();
  }, []);
  return (
    <div
      className="flex flex-col justify-center min-h-screen bg-no-repeat bg-cover p-4"
      style={{
        backgroundImage:
          "url(https://images-assets.nasa.gov/image/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o/hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o~orig.jpg)",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center font-bold text-white mb-4 backdrop-blur-md p-2 rounded">
          Nasa Daily Image
        </h1>

        <div className="mx-auto mb-4 w-full max-w-2xl rounded-lg overflow-hidden shadow-lg backdrop-blur-lg bg-opacity-30 bg-gray-800 p-4">
          <div className="relative" style={{ minHeight: "400px" }}>
            <img
              src={imageData + "?w=100"}
              style={{
                filter: !isHighResImageLoaded ? "blur(20px)" : "none",
                transition: "filter 0.3s ease",
              }}
              alt="NASA"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <img
              src={imageData}
              onLoad={() => setHighResImageLoaded(true)}
              style={{
                opacity: isHighResImageLoaded ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
              alt="NASA High Res"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div
            className="px-6 py-4 overflow-auto"
            style={{ maxHeight: "50vh" }}
          >
            <p className="text-white font-light">{explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NasaPage;
