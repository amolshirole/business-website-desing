import React from "react";
import Sdata from "../data/Sdata";
import Card from "./common/Card";

const Service = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="col-10 mx-auto">
          <div className="row gy-4 gx-5">
            <div className="my-5">
              <h1 className="text-center">Our Services</h1>
            </div>
             
            {Sdata.map((val, ind) => {
              return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
