<<<<<<< HEAD
import { applications } from '../../data/mockdata';

function ApplicationTable() {

  const getStatusColor = (status) => {
    switch (status) {
      case 'Applied':
        return 'bg-yellow-600';

      case 'Interview':
        return 'bg-blue-600';

      case 'Offer':
        return 'bg-green-600';

      case 'Rejected':
        return 'bg-red-600';

      default:
        return 'bg-gray-600';
    }
  };
=======
import { FaTrash, FaEdit } from 'react-icons/fa';
>>>>>>> 45a0746 (Implement full CRUD with LocalStorage - Add, Delete, Edit, Interview Date and Update)

function ApplicationTable({ applications, onDelete, onEdit }) {
  return (
<<<<<<< HEAD
    <div className="bg-gray-800 rounded-lg p-6 mt-6">
      
      <h2 className="text-2xl font-bold mb-4 text-white">
        Applications
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-gray-700 text-gray-400">
              <th className="pb-3">Company</th>
              <th className="pb-3">Role</th>
              <th className="pb-3">Applied Date</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Link</th>
=======
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Applications</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-3 text-gray-400">Company</th>
              <th className="text-left p-3 text-gray-400">Role</th>
              <th className="text-left p-3 text-gray-400">Applied Date</th>
              <th className="text-left p-3 text-gray-400">Interview Date</th>
              <th className="text-left p-3 text-gray-400">Status</th>
              <th className="text-left p-3 text-gray-400">Actions</th>
>>>>>>> 45a0746 (Implement full CRUD with LocalStorage - Add, Delete, Edit, Interview Date and Update)
            </tr>
          </thead>
          <tbody>
<<<<<<< HEAD
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b border-gray-700 hover:bg-gray-700 transition"
              >

                <td className="py-3 text-white font-semibold">
                  {app.company}
                </td>

                <td className="py-3 text-gray-300">
                  {app.role}
                </td>

                <td className="py-3 text-gray-400">
                  {app.appliedDate}
                </td>

                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs text-white ${getStatusColor(app.status)}`}
                  >
                    {app.status}
                  </span>
                </td>

                <td className="py-3">
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View
                  </a>
=======
            {applications.length === 0? (
              <tr>
                <td colSpan="6" className="text-center p-8 text-gray-500">
                  No applications yet. Add your first one!
>>>>>>> 45a0746 (Implement full CRUD with LocalStorage - Add, Delete, Edit, Interview Date and Update)
                </td>

              </tr>
            ) : (
              applications.map((app) => (
                <tr key={app.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                  <td className="p-3 text-white font-medium">{app.company}</td>
                  <td className="p-3 text-gray-300">{app.role}</td>
                  <td className="p-3 text-gray-300">{app.appliedDate || '-'}</td>
                  <td className="p-3 text-gray-300">{app.interviewDate || '-'}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      app.status === 'Applied'? 'bg-blue-600' :
                      app.status === 'Interview'? 'bg-yellow-600' :
                      app.status === 'Offer'? 'bg-green-600' : 'bg-red-600'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => onEdit(app)}
                      className="bg-yellow-600 hover:bg-yellow-700 p-2 rounded text-white"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => onDelete(app.id)}
                      className="bg-red-600 hover:bg-red-700 p-2 rounded text-white"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ApplicationTable;