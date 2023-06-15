import { useParams } from "react-router-dom";
import hoteis from "../../../hoteis.json";
import Hotel from "./Hotel";

function Details() {
    const param = useParams();
    return ( 
        <>
          <Hotel id={parseInt(param.id)}/>  
        </>
     );
}

export default Details;