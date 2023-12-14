import axios from 'axios';
import React, { useEffect } from 'react';

const Home: React.FC = () => {
  // useEffect(() => {
  //   const config = {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
  //   };
  //   axios.get("http://192.168.1.94:3500/api/test", config).then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
