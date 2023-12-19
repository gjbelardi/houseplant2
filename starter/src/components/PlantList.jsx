import Wrapper from "../assets/wrappers/PlantList";
import PlantCard from "./PlantCard";
const PlantList = ({ plants }) => {
  if (!plants) {
    return <h4 style={{ textAlign: "center" }}>No Matching Plants found...</h4>;
  }
  const formattedPlants = plants.map((item) => {
    const { id, common_name, cycle, sunlight, default_image } = item;

    // Extract the thumbnail URL from the default_image object
    const thumbnail = default_image
      ? default_image.thumbnail
      : "/assets/shadow.jpeg";
    // console.log("THUMB", thumbnail);

    return {
      id: id,
      name: common_name,
      image: thumbnail,
      info: cycle,
      sun: sunlight,
    };
  });
  return (
    <Wrapper>
      {formattedPlants.map((item) => {
        return <PlantCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};
export default PlantList;
