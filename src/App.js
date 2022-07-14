import { useState } from "react";
const onLogin = (login, password) => console.log(login, password);

const Autorization = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input value={login} onChange={(e) => setLogin(e.target.value)} />
      <br />
      <input
        min={password.length}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        disabled={!(password && login)}
        onClick={() => onLogin(login, password)}
      >
        Send
      </button>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Autorization onLogin={onLogin} />
    </div>
  );
}

export default App;
