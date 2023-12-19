import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/PlantPage";
const singlePlantUrl = "https://perenual.com/api/species/details/";
// https://perenual.com/api/species/details/425?key=sk-MiQg63e6c53169ab828&indoor=1
export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(
    `${singlePlantUrl}${id}?key=sk-MiQg63e6c53169ab828&indoor=1`
  );
  console.log("ID:", id, "DATA:", data);
  return { id, data };
};
// const singlePlantUrl =
//   "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const Plant = () => {
  const { id, data } = useLoaderData();

  if (!data) return <Navigate to="/" />;
  //if no data return to home page > might have to move inside await?

  const singlePlant = data;

  console.log("singlePlant", singlePlant);

  const {
    common_name: name,
    cycle: cycle,
    watering: watering,
    sunlight: sun,
    maintenance: maintenance,
    default_image: defaultImg,
    description: description,
    invasive: invasive,
    tropical: tropical,
    care_level: care,
    flowers: flowers,
    medicinal: medicinal,
  } = singlePlant;

  const fullImg = defaultImg ? defaultImg.medium_url : null;

  const invasiveBoolean = invasive ? "yes" : "no";
  const tropicalBoolean = tropical ? "yes" : "no";
  const flowersBoolean = flowers ? "yes" : "no";
  const medicinalBoolean = medicinal ? "yes" : "no";

  return (
    <Wrapper>
      <header>
        <h1 className="h3">{name}</h1>
      </header>
      <div className="drink plant">
        <img src={fullImg} alt="" className="plant-img" />

        <div className="drink-info plant-info">
          <ul>
            {/* <li>
              <span className="drink-data plant-data">name:</span>
              {name}
            </li> */}
            <li>
              <span className="drink-data plant-data">cycle:</span>
              {cycle}
            </li>
            <li>
              <span className="drink-data plant-data">watering:</span>
              {watering}
            </li>
            <li>
              <span className="drink-data plant-data">sun:</span>
              {sun}
            </li>
            <li>
              <span className="drink-data plant-data">maintenance:</span>
              {maintenance}
            </li>
            <li>
              <span className="drink-data plant-data">invasive:</span>
              {invasiveBoolean}
            </li>
            <li>
              <span className="drink-data plant-data">tropical:</span>
              {tropicalBoolean}
            </li>
            <li>
              <span className="drink-data plant-data">care:</span>
              {care}
            </li>
            <li>
              <span className="drink-data plant-data">flowers:</span>
              {flowersBoolean}
            </li>

            <li>
              <span className="drink-data plant-data">medicinal:</span>
              {medicinalBoolean}
            </li>
            {/* <li>
              <span className="drink-data plant-data"></span>
            </li> */}
          </ul>
          {/* <p>
            <span className="drink-data plant-data">maintenance:</span>
            {maintenance}
          </p> */}
        </div>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <section className="newsletter-callout">
        <h2>
          Join our <br />
          newsletter!
        </h2>
        <Link to="/newsletter" className="btn" style={{ marginTop: "2rem" }}>
          Sign up
        </Link>
      </section>
    </Wrapper>
  );
};

export default Plant;
