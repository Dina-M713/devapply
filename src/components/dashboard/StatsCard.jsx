function StatsCard({ title, value, color }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-xl p-6 hover:scale-105 hover:border-gray-600 transition-all duration-300 cursor-pointer">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-white mt-2">{value}</p>
        </div>
        <div className={'text-3xl ${color}'}>
          
        </div>
      </div>
    </div>
  )
}

export default StatsCard;