import ProductNotFound from "./not-found";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const products = [
    {
      id: 1,
      name: "Eco Water Bottle",
      description: "A reusable water bottle made from eco-friendly materials, perfect for daily use.",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1587310972467-27a5c504bfb1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmV1c2FibGUlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      description: "High-quality wireless earbuds with noise-cancellation and long battery life.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Smart LED Lamp",
      description: "Adjustable smart lamp with multiple colors and brightness levels, compatible with voice assistants.",
      price: 29.95,
      image: "https://images.unsplash.com/photo-1711006155490-ec01a0ecf0de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Portable Bluetooth Speaker",
      description: "Compact speaker with powerful sound and waterproof design, ideal for outdoor use.",
      price: 39.5,
      image: "https://images.unsplash.com/photo-1588131153911-a4ea5189fe19?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV0b290aCUyMHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Fitness Tracker Watch",
      description: "Track your daily activity, heart rate, and sleep patterns with this sleek fitness watch.",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const product = products.find((p) => p.id == id);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <>
      <div className="min-h-screen bg-base-200 p-4 md:p-8">
        <div className="max-w-5xl mx-auto bg-base-100 shadow-xl rounded-box overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="bg-neutral flex items-center justify-center min-h-[300px]">
              <img src={product.image} alt="Product" className="object-cover w-full h-full" />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-10 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm breadcrumbs mb-2">
                    <ul>
                      <li>
                        <a>Electronics</a>
                      </li>
                      <li>
                        <a>Accessories</a>
                      </li>
                    </ul>
                  </div>
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                </div>
                <div className="badge badge-secondary">New Arrival</div>
              </div>

              <div className="flex items-center gap-2">
                <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <span className="text-sm opacity-70">(4.0 / 124 reviews)</span>
              </div>

              <div className="text-2xl font-semibold text-primary">{product.price}</div>

              <p className="text-base-content/70 leading-relaxed">{product.description}</p>

              <div className="divider"></div>

              {/* Options */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Select Color</span>
                </label>
                <div className="flex gap-2">
                  <button className="btn btn-circle btn-sm outline outline-2 outline-offset-2 outline-primary bg-black"></button>
                  <button className="btn btn-circle btn-sm bg-slate-400"></button>
                  <button className="btn btn-circle btn-sm bg-amber-800"></button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-6">
                <button className="btn btn-primary flex-1">Add to Cart</button>
                <button className="btn btn-outline btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-xs opacity-50 text-center">Free shipping on orders over $200</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
