/* eslint-disable react/no-unescaped-entities */


const CustomerReview = () => {
    return (
        <div>
        <h2 className="text-center text-4xl font-bold mt-10">Our Customers Loves Us</h2>
        <p className="text-center text-xl font-bold mt-4 mb-14">Your Satisfaction is Our Priority</p>
        <div className="grid md:grid-cols-3 gap-5 mx-10">
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i.ibb.co/4sCHmNR/cutomer-1.jpg" />
            </div>
          </div>
          <p className="mt-8 font-semibold">"I bought running shoes from Prime, and I'm thrilled! The website was easy to use, and the shoes arrived quickly. They're super comfortable and have improved my running. I'll definitely shop here again!"</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i.ibb.co/wgTmDDx/cutomer-2.jpg" />
            </div>
          </div>
          <p className="mt-8 font-semibold">"Prime has a great selection of sports shoes. My soccer cleats fit perfectly and have excellent grip. Delivery was a bit slow, but customer service was helpful. Overall, I'm satisfied with my purchase."</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i.ibb.co/wRzHjrF/cutomer-3.jpg" />
            </div>
          </div>
          <p className="mt-8 font-semibold">"I got basketball shoes from Prime, and they exceeded my expectations. The site was easy to navigate, and the size guide was accurate. The shoes provide excellent support and look great."</p>
        </div>
      </div>
      </div>
    );
};

export default CustomerReview;