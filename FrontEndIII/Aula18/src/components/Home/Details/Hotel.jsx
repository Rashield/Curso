import hoteis from "../../../hoteis.json";

import { useNavigate } from "react-router-dom";

function Hotel({ id }) {
  const hotel = hoteis.find(hotel => hotel.id === id);
  const navigate = useNavigate();
  return (
    <>
      <img
        src={hotel.img}
        alt={hotel.name}
        style={
          {
            width: "90%",
            height: "60%",
            borderRadius: "5%",
          }
        }
      />
      <div className="title">{hotel.name}</div>
      <div className="description">{hotel.city}</div>
      <div className="description-stars">{hotel.stars} estrelas</div>
      <p>{hotel.description}</p>
      <p>{hotel.daily_price}</p>
      <p>{hotel.phone}</p>
      <p>{hotel.email}</p>
      <p>{hotel.air_conditioned}</p>
      <button onClick={()=>{navigate(-1)}}>Voltar</button>
    </>
  );
}

export default Hotel;