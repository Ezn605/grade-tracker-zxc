import React from 'react';

interface Grade {
  id: number;
  subject: string;
  grade: number;
  status: 'Passed' | 'Failed' | 'Incomplete';
}

interface TableProps {
  grades: Grade[];
}

const GradeTable: React.FC<TableProps> = ({ grades }) => {
  return (
    <main className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Subject</th>
            <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wider text-center">Final Grade</th>
            <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wider text-right">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {grades.length > 0 ? grades.map((item) => (
            <tr key={item.id} className="hover:bg-indigo-50/30 transition-colors">
              <td className="p-5 font-semibold text-slate-800">{item.subject}</td>
              <td className="p-5 text-center font-mono font-medium text-indigo-600">{item.grade.toFixed(2)}</td>
              <td className="p-5 text-right">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  item.status === 'Passed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {item.status}
                </span>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan={3} className="p-10 text-center text-slate-400 italic">No subjects found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};

export default GradeTable;