import { useActions } from "hooks/useActions";
import React, { FC } from "react";

const Login: FC = () => {
  const { setIsAuth } = useActions();
  return (
    <div>
      <button onClick={() => setIsAuth(true)}>Login</button>
    </div>
  );
};

export default Login;
