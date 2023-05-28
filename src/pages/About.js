import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Our menu features an array of signature dishes that are sure to delight your taste buds. From succulent kebabs and biryanis to rich curries and delectable desserts, every dish is made using only the finest ingredients and authentic spices, ensuring that you always receive a top-notch experience. Every item in our thalis is prepared with care and attention to detail.<br/> 
At Mughlai Palate we understand the importance of convenience in today's fast-paced corporate world. That's why we've made ordering from us as easy as possible. Our online ordering system allows you to place an order for pickup or delivery with just a few clicks, and we offer contactless delivery to ensure the safety of our customers and delivery drivers.<br/>
Whether you're looking to satisfy a craving for something rich and flavourful or want to treat your team to a special meal, we've got you covered. 
Our experts are committed to providing exceptional customer service and ensuring that every dish is prepared with care and attention to detail
Thank you for choosing our Mughlai cuisine cloud kitchen for your culinary needs. We look forward to serving you soon and sharing the delicious flavours of this royal cuisine with you.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
