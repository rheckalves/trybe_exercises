import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
    render() {
        const { id } = this.props;
        const { name, type, averageWeight, image } = this.props.pokemon;
        const { value, measurementUnit } = averageWeight;
        return (
            <div id={id} className="pokemon-container">
                <div className="info-container">
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>{`Average weight: ${value}${measurementUnit}`}</p>
                </div>
                <div className="image-container">
                    <img src={image} alt={`Pokemon ${name}`} />
                </div>
            </div>
        )
    }
}

export default Pokemon;