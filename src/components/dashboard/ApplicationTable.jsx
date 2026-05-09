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

  return (
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
            </tr>
          </thead>

          <tbody>
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
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ApplicationTable;