import { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:5000";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = localStorage.getItem("token");

  // ================= LOGIN =================
  const login = async () => {
    const res = await fetch(`${API}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);
    alert("Login Successful 🚀");
    window.location.reload();
  };

  // ================= SIGNUP =================
  const signup = async () => {
    const res = await fetch(`${API}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert("Signup Done ✅ Now Login");
  };

  // ================= GET TASKS =================
  const getTasks = async () => {
    const res = await fetch(`${API}/api/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    if (token) getTasks();
  }, []);

  // ================= ADD TASK =================
  const addTask = async () => {
    if (!title) return;

    await fetch(`${API}/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        status: "todo",
      }),
    });

    setTitle("");
    getTasks();
  };

  // ================= DELETE =================
  const deleteTask = async (id) => {
    await fetch(`${API}/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    getTasks();
  };

  // ================= TOGGLE =================
  const toggleStatus = async (task) => {
    await fetch(`${API}/api/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        status: task.status === "done" ? "todo" : "done",
      }),
    });

    getTasks();
  };

  // ================= LOGOUT =================
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  // ================= UI =================
  if (!token) {
    return (
      <div className="auth">
        <h2>Login / Signup 🔐</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="btns">
          <button onClick={login}>Login</button>
          <button onClick={signup}>Signup</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <h1>🚀 Task Manager</h1>
          <button onClick={logout}>Logout</button>
        </div>

        <div className="input-group">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task..."
          />
          <button onClick={addTask}>Add</button>
        </div>

        <div className="tasks">
          {tasks.map((task) => (
            <div
              className={`task ${task.status}`}
              key={task._id}
            >
              <div className="left">
                <input
                  type="checkbox"
                  checked={task.status === "done"}
                  onChange={() => toggleStatus(task)}
                />
                <span>{task.title}</span>
              </div>

              <button onClick={() => deleteTask(task._id)}>
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;