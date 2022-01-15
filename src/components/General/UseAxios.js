import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";


// const { response, error, loading } = UseAxios({
//   method: 'POST',
//   url: '/posts',
//   headers: {
//     accept: '*/*',
//   },
//   data: {
//     userId: 7,
//     id: 777,
//     title: 'New Post',
//     body: 'This is a new post',
//   },
// });

const useAxios = (params) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const res = await axios.request(params);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(params);
  }, []);

  return { response, error, loading };
};

export default useAxios;