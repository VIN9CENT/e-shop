import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductQuery } from "../app/service/dummyData";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/features/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetAllProductQuery();
  const dispatch = useDispatch();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Something went wrong.</h1>;

  const product = data.find((item) => item.id === parseInt(id));

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-60 h-60 object-contain mb-4"
      />
      <p className="mb-2 text-gray-700">{product.description}</p>
      <p className="mb-2 font-semibold">Price: ${product.price}</p>
      <p className="mb-4">
        Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
      </p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
