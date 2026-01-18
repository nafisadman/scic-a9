import React from "react";

const FAQSection = () => {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
      <div className="bg-primary p-5 shadow-lg rounded-lg">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="mt-3">
            <h3 className="font-medium">Question {index + 1}?</h3>
            <p>Answer to question {index + 1} goes here.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
