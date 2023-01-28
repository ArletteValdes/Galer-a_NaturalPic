import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

const Login = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <p>LOGIN</p>
      {
      user? 'true':'false'
      }
      <button> Acceder</button>
    </div>
  );
};

export default Login;
