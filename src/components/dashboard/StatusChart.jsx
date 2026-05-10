import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

function StatusChart({ applications }) {

  const statusCounts = applications.reduce((acc, app) => {
    acc[app.status] = (acc[app.status] || 0) + 1;
    return acc;
  }, {});

  const data = Object.keys(statusCounts).map(status => ({
    name: status,
    value: statusCounts[status]
  }));

  const COLORS = {
    Applied: '#3B82F6', 
    Interview: '#EAB308',  
    Offer: '#22C55E', 
    Rejected: '#EF4444' 
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Application Status</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={'cell-${index}'} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatusChart;