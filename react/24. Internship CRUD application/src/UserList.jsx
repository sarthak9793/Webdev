import User from "./User"
const UserList = ({ users, onDelete, onEdit }) => {
    return (
      <div className="user-list">
        {users.map((user) => (
          <User key={user.id} user={user} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    );
  };