import { useState } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState({ name: "", email: "", age: "" });
  const [confimedProfile, setConfimedProfile] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfimedProfile(profile);
  };

  const reset = () => {
    setProfile({
      name: "",
      email: "",
      age: "",
    });
    setConfimedProfile(null);
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800">
      <button
        className="bg-white font-bold p-2 rounded-lg mb-2"
        onClick={reset}
      >
        Reset
      </button>
      <form
        action=""
        className="flex flex-col justify-center bg-gray-300 p-10 rounded-lg"
      >
        <label htmlFor="" className="font-bold text-sm">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleFormChange}
          className="rounded-lg border-2 bg-gray-100 focus:outline-none p-2"
        />
        <label htmlFor="" className="font-bold text-sm">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleFormChange}
          id=""
          className="rounded-lg border-2 bg-gray-100 focus:outline-none p-2"
        />
        <label htmlFor="" className="font-bold text-sm">
          Age
        </label>
        <input
          type="text"
          name="age"
          value={profile.age}
          onChange={handleFormChange}
          className="rounded-lg border-2 bg-gray-100 focus:outline-none p-2"
        />
        <button
          className="bg-black text-white rounded-lg p-2 mt-3 font-bold hover:bg-gray-800"
          onClick={handleSubmit}
        >
          Update
        </button>
      </form>
      {confimedProfile && (
        <div className="bg-white px-10 py-3 mt-3 rounded-lg">
          <h1 className="text-2xl font-bold text-center">Data Updated!</h1>
          <p>
            <strong>Name: </strong> {confimedProfile.name}
          </p>
          <p>
            <strong>Email: </strong>
            {confimedProfile.email}
          </p>
          <p>
            <strong>Age: </strong>
            {confimedProfile.age}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
