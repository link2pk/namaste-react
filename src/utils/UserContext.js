import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy name",
    email: "dummyemail@dummy.com",
  },
});

export default UserContext;
