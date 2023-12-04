import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosData() {
  const [data, setData] = useState([]);

  const getAPIdata = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
    } catch (err) {
      console.log('Error:', err);
    }
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  return (
    <>
      <h1>axios data</h1>
      <div className='flex flex-wrap'>
        {data.map((post, index) => (
          <div key={index} className='bg-blue-200 h-50 w-60 p-2 m-2'>
            <h2>{post.title.slice(1,10).toUpperCase()}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AxiosData;
