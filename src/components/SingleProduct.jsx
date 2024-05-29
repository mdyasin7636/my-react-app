import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({shoe}) => {

  const {id, title, brand, price, image_url} = shoe;

  return (
    <div className="card w-96 bg-base-100  shadow-lg shadow-black hover:scale-105 duration-500">
      <figure className="">
        <img
          src= {image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-normal">Brand: {brand}</h3>
        <h3 className="text-xl font-normal">Price: ${price}</h3>
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
