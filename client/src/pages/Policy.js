import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Fisrt privacy policy</p>
          <p>Second privacy policy</p>
          <p>Third privacy policy</p>
          <p>Fourth privacy policy</p>
          <p>Fifth privacy policy</p>
          <p>Sixth privacy policy</p>
          <p>Seventh privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
