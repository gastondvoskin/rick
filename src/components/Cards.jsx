import React from "react";
import styled from "styled-components";
import Card from './Card';

const CardDiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   
`

export default function Cards({characters}) {
   return (
      <CardDiv>
         {
            characters.map(({name, species, gender, image}, index) => {
               return <Card 
                  // key={index}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}                  
               />
            })
         }
      </CardDiv>
   )
}




// export default function Cards({characters}) {
//    return (
//       <CardDiv>
//          {
//             characters.map(({name, species, gender, image, onClose}, index) => {
//                return <Card 
//                   key={index}
//                   name={name}
//                   species={species}
//                   gender={gender}
//                   image={image}
//                   onClose={() => window.alert('Emulamos que se cierra la card')}
//                />
//             })
//          }
//       </CardDiv>
//    )
// }
