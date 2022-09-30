import React, { useState } from "react";
import TinderCard from 'react-tinder-card'
import './PetCards.css';

function PetCards() {
    const [pet, setPet] = useState([
        {
            name: 'Bub, 2y: I might be 2 years old in dog years but Im 9 in human! love walks in the park',
            url: 'https://www.yourpurebredpuppy.com/dogbreeds/photos2-G/german-shepherd-05.jpg'
        },
        {
            name: 'Spots, 2y: I might be 2 years old in dog years but Im 9 in human! love walks in the park',
            url: 'https://static.onecms.io/wp-content/uploads/sites/47/2020/06/28/Catahoula-Leopard-Dog-lying-down-627457592-2000.jpg'
        }
    ]);

    return (
        <div>
            

            <div className ="petCard_Container">

            {pet.map((pet) => (
                <TinderCard
                    className="swipe"
                    key={pet.name}
                    preventSwipe={['up', 'down']}
                >
                    <div
                        style={{ backgroundImage: `url(${pet.url})` }}
                        className="card"
                    >
                        <h3>{pet.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default PetCards;