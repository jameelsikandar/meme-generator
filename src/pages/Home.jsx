import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";

import { getMemes } from "../api/memes.js";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <>
      <div className="row">
        {data.map((el) => (
          <MemeCard key={el.id} image={el.url} title={el.name} />
        ))}
      </div>
    </>
  );
};

export default Home;
