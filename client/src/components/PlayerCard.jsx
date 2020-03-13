import React from 'react';
import {
    Card,  CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import styled from 'styled-components';

  const Cbdy= styled(CardBody)`
  border: 1px solid black;
  width: 35%;
  margin: 0 auto;
  `
  const PlayerCard = (props) => {

    return (
      <div>
          {props.players.map((item)=>{
              console.log('item', item)
              return (
                <Card key={item.id}>
               
                <Cbdy>
                  <CardTitle>Player: {item.name}</CardTitle>
                  <CardSubtitle>Country: {item.country}</CardSubtitle>
                  <CardText>Searches: {item.searches}</CardText>
                  
                </Cbdy>
              </Card>
              )
           })
           }
        </div>
      
    );
  };
  
  export default PlayerCard;