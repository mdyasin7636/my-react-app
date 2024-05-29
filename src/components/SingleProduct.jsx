import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({shoe}) => {

  const {id, title, brand, price, image_url} = shoe;

  return (
    <div className="card w-80 bg-base-100 shadow-lg shadow-black hover:scale-105 duration-500">
      <figure className="px-4 py-4">
        <img
          src= {image_url}
          alt="Shoes"
          className="rounded-xl shadow-md shadow-black"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <h3 className="text-xl font-medium">Brand: {brand}</h3>
        <h3 className="text-xl font-medium">Price: ${price}</h3>
        <div className="card-actions justify-end">
          <button className="btn btn-outline">
            <Link to={`/products/${id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
