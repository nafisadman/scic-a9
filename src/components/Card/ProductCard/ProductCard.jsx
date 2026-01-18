import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div class="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          class="object-cover h-48 w-full"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{product.name}</h2>
        <p class="text-sm text-base-content">{product.description}</p>
        <div class="mt-2 font-semibold text-lg text-primary">
          {product.price}
        </div>
        <div class="card-actions justify-end">
          <Link href={`products/${product.id}`} class="btn btn-primary">View</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
