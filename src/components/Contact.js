import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h3>contact us</h3>
      <div>
        Set user context{" "}
        <input
          type="text"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
      </div>
    </>
  );
};

export default Contact;
