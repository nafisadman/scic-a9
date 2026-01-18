import React from "react";

const NewsLetterSection = () => {
  return (
    <div>
      <section className="my-10">
        <h2 className="text-2xl font-semibold">Subscribe to Our Newsletter</h2>
        <input type="email" placeholder="Email address" className="input input-bordered w-full" />
        <button className="btn btn-primary mt-2">Subscribe</button>
      </section>
    </div>
  );
};

export default NewsLetterSection;
