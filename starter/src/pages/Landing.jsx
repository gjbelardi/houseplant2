import { useLoaderData } from "react-router-dom";
import axios from "axios";
import PlantList from "../components/PlantList";
import SearchForm from "../components/SearchForm";

const plantSearchUrl =
  "https://perenual.com/api/species-list?key=sk-MiQg63e6c53169ab828&indoor=1";

// const plantSearchUrl = `https://perenual.com/api/species-list?key=${process.env.REACT_APP_PLANT_API_KEY}&indoor=1`;

export const loader = async ({ request }) => {
  //request to plant DB
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get("search") || "";
  // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`); //fetch drink data
  const response = await axios.get(`${plantSearchUrl}&q=${searchTerm}`); //fetch plant data
  // return { drinks: response.data.drinks, searchTerm }; //drinks

  return { plants: response.data.data, searchTerm }; //plants
};

const Landing = () => {
  const { plants, searchTerm } = useLoaderData();
  return (
    <>
      <h1 className="h3" style={{ textAlign: "center" }}>
        Explore our plants:
      </h1>
      <SearchForm searchTerm={searchTerm} />
      <PlantList plants={plants} />
    </>
  );
};

export default Landing;
