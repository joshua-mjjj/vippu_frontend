import React from 'react';
import PetServiceProviderRating from '../components/PetServiceProviderRating'


export default function PetServiceProviderReview(props){
    return(
        <PetServiceProviderRating 
        name={props.name} 
        description={props.description}
        location={props.location}
        id={props.id} />
    );
}

