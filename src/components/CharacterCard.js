import React from "react";
import {Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from 'reactstrap';


export default function CharacterCard(props) {

  const {character} = props;

  return (

    <Card style={{margin: '3%', width: '24%' }} >
      <CardBody>
        <CardTitle>{character.name}</CardTitle>
        <CardSubtitle>{character.species}</CardSubtitle>
      </CardBody>
      <CardImg width="100%" src={character.image} alt="Card image cap" />

      <CardBody>
        <CardText>Origin: {character.origin.name}</CardText>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Link</CardLink>
      </CardBody>
    </Card>
      



  );
};
