import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  
  const [loading, setloading] = useState(false)
  const [Data, setData] = useState("");

  const fetchApi = () => {
    setloading(true);
    axios(url)
      .then((response) => {
        setData(response.data.slip.advice)})
      .catch((err) => console.log(err))
      .finally(()=>setloading(false));
  };

  useEffect(() => {
    fetchApi();
  }, [url]);


  return {Data,loading , fetchApi};
}
