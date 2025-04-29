import React from 'react';

const AvailableCarCard = ({car}) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={car.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{car.model}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableCarCard;