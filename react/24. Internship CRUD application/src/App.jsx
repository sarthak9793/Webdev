import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import UserDetails from "./UserDetails"
import UserForm from "./UserForm"
import UserList from "./UserForm"
const App = () => {
  // Use React Hooks to manage the app state
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Use React Hooks to fetch the user data from the API
  useEffect(() => {
    // Make a GET request to the JSONPlaceholder API
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Set the users state with the response data
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Set the error state with the error message
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Define a function to handle creating a new user
  const createUser = (user) => {
    // Make a POST request to the JSONPlaceholder API
    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((response) => {
        // Add the new user to the users state
        setUsers([...users, response.data]);
        alert("User created successfully");
      })
      .catch((error) => {
        // Show an error message
        alert(error.message);
      });
  };

  // Define a function to handle updating an existing user
  const updateUser = (user) => {
    // Make a PUT request to the JSONPlaceholder API
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
      .then((response) => {
        // Update the users state with the updated user data
        setUsers(
          users.map((u) => (u.id === user.id ? response.data : u))
        );
        alert("User updated successfully");
        // Reset the editing state
        setEditing(false);
        setCurrentUser(null);
      })
      .catch((error) => {
        // Show an error message
        alert(error.message);
      });
  };

  // Define a function to handle deleting a user
  const deleteUser = (id) => {
    // Make a DELETE request to the JSONPlaceholder API
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        // Remove the deleted user from the users state
        setUsers(users.filter((user) => user.id !== id));
        alert("User deleted successfully");
      })
      .catch((error) => {
        // Show an error message
        alert(error.message);
      });
  };

  // Define a function to handle editing a user
  const editUser = (user) => {
    // Set the editing state and the current user state
    setEditing(true);
    setCurrentUser(user);
  };

  // Define a function to handle canceling editing a user
  const cancelEdit = () => {
    // Reset the editing state and the current user state
    setEditing(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="app">
        <h1>User Management Application</h1>
        <Routes>
          <Route path="/users/:id" element={<UserDetails/>} />
          <Route path="/">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {users && (
              <>
                {editing ? (
                  <UserForm
                    user={currentUser}
                    onSubmit={updateUser}
                    onCancel={cancelEdit}
                  />
                ) : (
                  <UserForm user={null} onSubmit={createUser} onCancel={() => {}} />
                )}
                <UserList users={users} onDelete={deleteUser} onEdit={editUser} />
              </>
            )}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;