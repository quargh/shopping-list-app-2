import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const newData = await response.json();
      if (response.status === 200) {
        setData(newData.data);
      } else {
        console.error("Opps, something went wrong!");
      }
    }
    fetchData();
  }, []);
  //Parm Richtig Parent Component
  return [data];
}
