import React from "react";
import "./App.css";

const App = () => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [city, setCity] = React.useState("");

  const [users, setUsers] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      age,
      salary,
      city,
    };
    setUsers([...users, newUser]);

    // Clear the input fields after submission
    setName("");
    setAge("" );
    setSalary("");
    setCity("");  
  };

  return (
    <>
      <div
        id="formSection"
        className="h-[65vh] flex flex-col items-center justify-center"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4 p-4 w-[30%] border-2 border-gray-300 rounded-2xl shadow-md"
        >
          <h1 className="text-2xl font-bold mb-4">User Form</h1>
          <input
            type="text"
            id="nameInput"
            placeholder="Name"
            className="border border-gray-300 rounded-2xl outline-none w-70 py-2 px-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            id="ageInput"
            placeholder="Age"
            className="border border-gray-300 rounded-2xl outline-none w-70 py-2 px-4"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            id="salaryInput"
            placeholder="Salary"
            className="border border-gray-300 rounded-2xl outline-none w-70 py-2 px-4"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <input
            type="text"
            id="cityInput"
            placeholder="City"
            className="border border-gray-300 rounded-2xl outline-none w-70 py-2 px-4"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            id="submitBtn"
            className="bg-blue-500 text-white py-2 px-8 rounded-2xl shadow-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <div
        id="userSection"
        className=" flex flex-col items-center justify-center flex-wrap gap-4 p-4"
      >
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        {users.length === 0 ? (
          "Add some users to see them here"
        ) : (
          <div className="allUsers flex flex-wrap gap-4 justify-space-evenly">
            {users.map((user, index) => (
              <div
                key={index}
                className="userCard w-[220px] h-[150px] text-white  bg-[#5f8ae8] p-4 rounded-2xl shadow-md"
              >
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Salary: {user.salary}</p>
                <p>City: {user.city}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
