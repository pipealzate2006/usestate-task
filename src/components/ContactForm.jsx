import { useState } from "react";

const ContactForm = () => {
  const [information, setInformation] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    age: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Your data is: 
      ${information.name} ${information.lastname}, 
      your email is: ${information.email}, 
      the password is: ${information.password}, 
      you are: ${information.age}`
    );
    setInformation({
      name: "",
      lastname: "",
      email: "",
      password: "",
      age: "",
    });
  };

  const [password, setPassword] = useState(false);
  const handlePassword = () => {
    setPassword(!password);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800">
      <form
        action=""
        className="flex flex-col justify-center bg-blue-700 p-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-white font-bold text-2xl">
          Register user
        </h1>
        <label htmlFor="" className="font-bold text-sm text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={information.name}
          onChange={handleFormChange}
          className="rounded-lg border-2 bg-gray-100 focus:outline-none p-2"
        />
        <label htmlFor="" className="font-bold text-sm text-white">
          last Name
        </label>
        <input
          type="text"
          name="lastname"
          value={information.lastname}
          onChange={handleFormChange}
          id="lastname"
          className="rounded-lg border-2 bg-gray-100 focus:outline-none p-2"
        />
        <label htmlFor="" className="font-bold text-sm text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={information.email}
          onChange={handleFormChange}
          id="email"
          className="rounded-lg border-2 bg-gray-100 focus:outline-none p-2"
        />
        <label htmlFor="" className="font-bold text-sm text-white">
          Password
        </label>
        <div className="rounded-lg border-2 bg-gray-100 focus:outline-none p-2 space-x-1">
          <input
            type={`${password ? "password" : "text"}`}
            name="password"
            value={information.password}
            onChange={handleFormChange}
            id="password"
            className="rounded-lg bg-gray-100 focus:outline-none"
          />
          <i
            className={`fa-solid ${password ? "fa-eye" : "fa-eye-slash"} w-4`}
            onClick={handlePassword}
          ></i>
        </div>
        <label htmlFor="" className="font-bold text-sm text-white">
          Age
        </label>
        <input
          type="text"
          name="age"
          id=""
          value={information.age}
          onChange={handleFormChange}
          className="rounded-lg border-2 bg-gray-100 focus:outline-none p-2"
        />
        <button
          className="bg-black text-white rounded-lg p-2 mt-3 font-bold hover:bg-gray-800"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
