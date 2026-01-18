"use client";
import ProductCard from "@/components/Card/ProductCard/ProductCard";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <header class="py-6 bg-primary text-white text-center text-3xl font-bold">
        Our Products
      </header>

      <section class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        </div>
      </section>
    </div>
  );
}

//
