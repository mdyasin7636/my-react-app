/* eslint-disable react/prop-types */

import SingleProduct from "../SingleProduct";

const Products = ({ data }) => {
    console.log(data);
  return (
    <div>
      <h1 className="my-12 text-4xl font-bold text-center">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-12 md:ml-16 sm:ml-12">
        {
            data.slice(0, 6).map(shoe=> <SingleProduct key={shoe.id} shoe={shoe} />)
        }
      </div>
    </div>
  );
};

export default Products;
