import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser([...user, { username, password }]);
    setUsername("");
    setPassword("");
  };
  const handleChangeName = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <section className="section-login">
        <div className="row">
          <div
            className="col-100"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <h1 className="text-bold text-primary">Login</h1>
            <form className="box-login" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-25">
                  <label>Username</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChangeName}
                    placeholder="username"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Password</label>
                </div>
                <div className="col-75">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChangePassword}
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-100">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthForm;
