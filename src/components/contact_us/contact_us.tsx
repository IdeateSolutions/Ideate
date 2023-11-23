import React, { useState, ChangeEvent, FormEvent } from "react";
import logo from "./icons/Black-Dominated.png";
import { MdArrowOutward } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission
    // console.log(formData);

    // const response = await fetch('http://glenn.com:5000/contact', {
    //   method: 'POST',
    //   body: JSON.stringify(formData)
    // })

    // if(response.status === 200) {
    //   console.log('successfully added!')
    // } else {
    //   console.log('errror')
    // }
  };

  // JSX remains the same
  return (
    <div className="py-10 bg-image text-white">
      <div className="flex flex-col mx-auto max-w-screen-lg gap-6">
        <div className="w-full mb-1">
          <p className="text-sm font-semibold">SAY HELLO</p>
          <h2 className="text-4xl font-extrabold">CONTACT US</h2>
        </div>

        {/* <div style={{ height: 20, backgroundColor: "black" }}></div> */}

        {/* <div style ={{display: "flex"}}>
          <div  className="text">
            <p className="text-xl font-bold ">hello@idetasolutions.tech</p>
            <p className="text-xl">09999999999 / 09111111111</p>
            <p className="text-xl">(082) 123 1234</p>
          </div>
        <div style ={{width:400, height: 100, backgroundColor: "black"}}></div>

        <div  className="text-xl">
          <p>Davao City, Davao Del Sur 8000 </p>
          <p>Philippines.</p>
        </div>
        </div> */}

        <div className="flex flex-col w-full lg:gap-72 lg:flex-row ">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold ">hello@idetasolutions.tech</p>
            <p className="text-xl">09999999999 / 09111111111</p>
            <p className="text-xl">(082) 123 1234</p>
          </div>

          <div className="flex flex-col lg:mt-0">
            <p className="text-xl">Davao City, Davao Del Sur 8000 </p>
            <p className="text-xl">Philippines.</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mt-12">WORK WITH US</p>
          <h2 className="text-4xl font-extrabold">SEND US A MESSAGE</h2>
        </div>

        <form className="flex-col">
          <div className="flex flex-col lg:flex-row gap-8">
            <input
              name="name"
              type="text"
              required
              className="placeholder-white w-full p-3 border border-gray-300 rounded-full bg-transparent text-white"
              placeholder="Your Name"
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              required
              className="placeholder-white w-full p-3 border border-gray-300 rounded-full bg-transparent text-white"
              placeholder="Your Email"
              onChange={handleChange}
            />
          </div>

          <div className="flex mt-3 lg:flex-row gap-8">
            <div className="w-full p-3 border rounded-full text-white">
              <select
                name="service"
                required
                className=" placeholder-white  w-full bg-transparent rounded-full border-none outline-none "
                onChange={handleChange}
              >
                <option className="bg-transparent">Services</option>
                <option className="text-black" value="web-design">
                  Web Design
                </option>
                <option className="text-black" value="seo">
                  SEO
                </option>
                <option className="text-black" value="marketing">
                  Marketing
                </option>
              </select>
            </div>

            <input
              name="company"
              type="text"
              className="placeholder-white w-full p-3 border border-gray-300 rounded-full bg-transparent text-white"
              placeholder="Company (Optional)"
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            rows={4}
            className="placeholder-white w-full p-3 border border-gray-300 rounded-xl bg-transparent text-white mt-3"
            placeholder="Message"
            onChange={handleChange}
          />

          <button
            type="submit"
            className=" flex p-5 border border-transparent rounded-full mt-3 bg-blue-600 text-white hover:bg-lime-400 gap-2 hover:text-black "
          >
            <p className="text font-bold "> let's get it done </p>
            <MdArrowOutward className="h-5" />
          </button>
        </form>

        {/* <form onSubmit={handleSubmit} className="space-y-6">
          <div style={{ display: "flex" }}>
            <div>
              <input
                style={{ width: "500px" }}
                name="name"
                type="text"
                required
                className=" p-3 border border-gray-300 rounded-full bg-black text-white"
                placeholder="Your Name"
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                style={{ width: "500px" }}
                name="email"
                type="email"
                required
                className="w-full p-3 border border-gray-300 rounded-full bg-black text-white"
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <select
                style={{ width: "500px" }}
                name="service"
                className="w-full p-3 border border-gray-300 rounded-full bg-black text-white"
                onChange={handleChange}
              >
                <option>Services</option>
                <option value="web-design">Web Design</option>
                <option value="seo">SEO</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
            <div style={{ width: 40, backgroundColor: "black" }}></div>
            <div>
              <input
                style={{ width: "500px" }}
                name="company"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-full bg-black text-white"
                placeholder="Company (Optional)"
                onChange={handleChange}
              />
            </div>
          </div>
          <textarea
            name="message"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-xl bg-black text-white"
            placeholder="Message"
            onChange={handleChange}
          />

          <button
            type="submit"
            className=" flex justify-center p-6 border border-transparent rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            <p className="text font-bold "> let's get it done /"</p>
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default ContactForm;
