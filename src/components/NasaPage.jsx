import React from "react";
import { useEffect, useState } from "react";

const NasaPage = () => {
  const [imageData, setImageData] = useState("");
  useEffect(() => {
    async function fetchBlogposts() {
      try {
        const response = await fetch("ADD LINK HERE");
        const data = await response.json();

        if (response.ok) {
          setImageData(data);
          console.log(data);
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
      {/* <h1>{imageData}</h1> */}
    </div>
  );
};

export default NasaPage;
