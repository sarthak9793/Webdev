import axios from "axios"
import { Link } from "react-router-dom";
const UserDetails = ({ match }) => {
    // Use React Hooks to fetch the user data from the API
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Get the user id from the URL params
      const id = match.params.id;
      // Make a GET request to the JSONPlaceholder API
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
          // Set the user state with the response data
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          // Set the error state with the error message
          setError(error.message);
          setLoading(false);
        });
    }, [match.params.id]);
  
    // Render the user details or a loading/error message
    return (
      <div className="user-details">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {user && (
          <>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <p>Address: {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
            <Link to="/">Back to Home</Link>
          </>
        )}
      </div>
    );
  };
export default UserDetails