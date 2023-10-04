import React from "react";
import { useEffect, useState } from "react";

const NasaPage = () => {
  const [imageData, setImageData] = useState("");
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
    <div>
      <h1>Welcome to the Nasa Daily Image Page</h1>
      <img src={imageData} alt="space image" />
    </div>
  );
};

export default NasaPage;
