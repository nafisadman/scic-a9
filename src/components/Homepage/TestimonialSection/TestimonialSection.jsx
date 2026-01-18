import React from "react";

const TestimonialSection = () => {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-semibold">Customer Testimonials</h2>
      <div className="carousel">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="carousel-item">
            <blockquote className="bg-primary p-5 shadow-lg rounded-lg">
              <p>This is the best store ever!</p>
              <footer className="mt-2 text-sm">- Customer {index + 1}</footer>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
