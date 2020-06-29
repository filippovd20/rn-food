import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      console.log("Hi there");
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm, //term alternatively
          location: "New York",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Somethign went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
