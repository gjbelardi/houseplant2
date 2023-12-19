import { Link, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/wrappers/PlantCard";

const PlantCard = ({ image, name, id, info, sun }) => {
  const data = useOutletContext();
  console.log(data);
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{sun}</h5>
        <p>{info}</p>
        <Link to={`/plant/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};
export default PlantCard;
