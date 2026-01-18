import React from "react";

const SpecialOfferSection = () => {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-semibold">Special Offers</h2>
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="card bg-secondary shadow-lg rounded-lg">
            <figure className="px-10 pt-10">
              <img src={`https://via.placeholder.com/150?text=Offer+${index + 1}`} alt={`Special Offer ${index + 1}`} className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title">Offer {index + 1}</h3>
              <p className="text-lg font-bold">Save 20%</p>
              <div className="card-actions">
                <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOfferSection;
