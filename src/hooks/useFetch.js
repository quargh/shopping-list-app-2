import {useEffect, useState} from "react";

//Der Hook erwartet eine url, von wo Daten geladen werden sollen:
export function useFetch(url) {
      //Datenarray anlegen
      const [data, setData] = useState([]);

      useEffect(() => {
            //Innerhalb von useEffect Daten laden
            //Dependency Array ist leer, damit useEffect nur 1x ausgeführt wird
            async function fetchData() {
                  const response = await fetch(url);
                  const newData = await response.json();
                  if (response.status === 200) {
                        // Achtung, es könnte auch 'newData.results' heissen!
                        // Url im Browser aufrufen und Objekt untersuchen
                        setData(newData.data);
                  } else {
                        console.error("Opps, something went wrong!");
                  }
            }

            fetchData();
      }, []);

      return [data];
}

