import React, { useState } from 'react';
import Login from './components/login';
import GradeTable from './components/gradeTable';

// 1. Define the type to satisfy ESLint
interface Student {
  id: number;
  username: string;
  subject: string;
  grade: number;
}

const App: React.FC = () => {
  // 2. Use the interface here instead of 'any'
  const [student, setStudent] = useState<Student | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        {!student ? (
          // 3. Ensure the login callback is also typed
          <Login onLogin={(data: Student) => setStudent(data)} />
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-extrabold text-indigo-900">
                  Welcome, {student.username}!
                </h1>
                <p className="text-slate-500">Official Academic Record - Cebu Eastern College</p>
              </div>
              <button 
                onClick={() => setStudent(null)}
                className="text-sm font-bold text-red-500 hover:text-red-700 transition"
              >
                Logout
              </button>
            </div>

            <GradeTable 
              grades={[
                { 
                  id: student.id, 
                  subject: student.subject, 
                  grade: student.grade, 
                  // In the Philippines/CEC, lower grades are better (1.0 is highest)
                  status: student.grade <= 3.0 ? "Passed" : "Failed" 
                }
              ]} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;