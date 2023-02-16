import { useEffect, useState } from "react";

function useFetch(fetchUrl) {
  //console.log(`this is fetch url: ${fetchUrl}`)
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // const [id, setId] = useState("");

  useEffect(() => {
    fetch(fetchUrl, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => setError(err));
  }, [fetchUrl]);

  if (error) {
    console.log(error);
    return <p>Error!</p>;
  }
  console.log("Hey! This app only works in December for obvious reasons and the activities will be shown day-by-day :) Come back and check it out when it's Xmas time!")
  return [data];
}
export default useFetch;
