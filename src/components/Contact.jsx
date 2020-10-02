import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone}. email ${data.email}, my message is ${data.message}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto ">
            <form action="" onSubmit={formSubmit}>
              <form>
                <div className="form-group gy-5">
                  <label for="exampleFormControlInput1">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter Full Name"
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label for="exampleFormControlInput1">Phone </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Enter your mobile no"
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="form-group mt-2">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                    placeholder="name@example.com"
                  ></textarea>
                </div>
                <div className="col-12 mt-3 mb-5">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
