import React from "react";
import PetCard from "react-pet-card";
import './PetCards.css';

function PetCards() {
    const [pet, setPet] = useState([
        {
            name: 'Bub',
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Bully-dog-2314909-1920.jpg'
        },
        {
            name: 'Spots',
            url: 'https://static.onecms.io/wp-content/uploads/sites/47/2020/06/28/Catahoula-Leopard-Dog-lying-down-627457592-2000.jpg'
        }
    ]);

    return (
        <div>
            <h1>Pet Cards</h1>
            {pet.map((pet) => (
                <PetCard
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
                </PetCard>
            ))}
        </div>
    );
}

export default TinderCards;