import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import CustomerReview from "../components/home/CustomerReview";
import Contact from "../components/home/Contact";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner />
      <Products data={data} />
      <CustomerReview/>
      <Contact/>
    </div>
  );
};

export default Home;
