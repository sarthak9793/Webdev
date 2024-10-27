const UserForm = ({ user, onSubmit, onCancel }) => {
    // Use React Hooks to manage the form state
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [phone, setPhone] = useState(user ? user.phone : "");
  
    // Handle the form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validate the input fields
      if (!name || !email || !phone) {
        alert("Please fill in all the fields");
        return;
      }
      // Call the onSubmit function with the form data
      onSubmit({
        id: user ? user.id : Math.floor(Math.random() * 1000),
        name,
        email,
        phone,
      });
      // Reset the form fields
      setName("");
      setEmail("");
      setPhone("");
    };
  
    return (
      <form className="user-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">{user ? "Update" : "Create"}</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    );
  };
  export default UserForm