import React, { useState } from 'react';

interface FormProps {
  onAddGrade: (subject: string, grade: number) => void;
}

const GradeForm: React.FC<FormProps> = ({ onAddGrade }) => {
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddGrade(subject, parseFloat(grade));
    setSubject('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-xs font-bold text-indigo-900 uppercase mb-1">Subject Name</label>
        <input 
          type="text" 
          required
          className="w-full p-2 rounded border border-indigo-200 outline-none focus:ring-2 focus:ring-indigo-500"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-indigo-900 uppercase mb-1">Grade</label>
        <input 
          type="number" 
          step="0.1"
          required
          className="w-full p-2 rounded border border-indigo-200 outline-none focus:ring-2 focus:ring-indigo-500"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </div>
      <div className="flex items-end">
        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700 transition shadow-lg">
          Save Entry
        </button>
      </div>
    </form>
  );
};

export default GradeForm;