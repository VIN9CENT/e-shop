import React, { useState } from 'react';
import { useGetAllProductQuery } from '../app/service/dummyData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/features/cartSlice';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductQuery();
  const [expandedId, setExpandedId] = useState(null);
  const dispatch = useDispatch();

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (isError) return <h1>Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {data.map((product) => (
        <article key={product.id} className="border p-4 rounded shadow">
          <Link to={`/product/${product.id}`}>
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="w-40 h-40 object-contain"
            />
          </Link>
          <p className="mt-2">Price: ${product.price}</p>
          <p>Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)</p>
          {expandedId === product.id && (
            <>
              <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="bg-green-600 text-white px-3 py-1 mt-2 rounded hover:bg-green-700"
              >
                +
              </button>
            </>
          )}
          <button
            onClick={() => toggleDescription(product.id)}
            className="mt-2 ml-3 text-blue-600 underline"
          >
            {expandedId === product.id ? 'Show Less' : 'Show More'}
          </button>
        </article>
      ))}
    </div>
  );
};

export default AllProducts;
