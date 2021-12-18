import React from "react";

const AddUser = (props) => {
  const aaUserHandler = (event) => {
    event.preventDault();
  };

  return (
    <form onSubmit={aaUserHandler}>
      <label htmlFor="username">User Nmae</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
// import React from "react";

// export const AddUser = () => {
//   return <div>hi</div>;
// };

// export default AddUser;
