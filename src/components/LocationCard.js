import React from "react";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import {Link} from 'react-router-dom';




export default function LocationCard(props) {

  const {loc, setLocID} = props;

  return (

  <Card style={{width: "24%", margin: "3%"}}>
    <CardBody>
      <CardTitle>{loc.name}</CardTitle>
      <CardSubtitle>Type: {loc.type}</CardSubtitle>
      <CardText>Dimension: {location.dimension}</CardText>
      <CardLink href="#"onClick={()=>{
              setLocID(loc.id);
          }}><Link to={`/residents/${loc.name}`}>Residents</Link>
      </CardLink>
    </CardBody>
  </Card>
  );
};
