import React, { useState } from 'react';

interface LoginProps {
 onLogin: (userData: Student) => void;
}
interface Student {
  id: number;
  username: string;
  subject: string;
  grade: number;
}
const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // PASTE THE LOGIN CODE HERE
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.length > 0) {
        // Since the SQL query returns a list, we take the first student
        onLogin(data[0]); 
      } else {
        alert("Invalid credentials! Try the SQL hack: ' OR '1'='1");
      }
    } catch (error) {
      console.error("Connection error:", error);
      alert("Make sure IntelliJ is running the backend!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 w-full max-w-md">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Student Login</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Student ID / Username</label>
            <input 
              type="text" 
              className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="e.g. ezona_it"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition shadow-lg mt-4">
            Sign In
          </button>
        </div>
        
        <p className="text-center text-slate-400 text-xs mt-6 uppercase tracking-widest">
          Cebu Eastern College
        </p>
      </form>
    </div>
  );
};

export default Login;