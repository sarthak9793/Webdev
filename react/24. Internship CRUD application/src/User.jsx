import { Link } from "react-router-dom";
const User = ({ user, onDelete, onEdit }) => {
    return (
      <div className="user">
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <button onClick={() => onEdit(user)}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
        <Link to={`/users/${user.id}`}>View Details</Link>
      </div>
    );
  };