export default function SkeletonCard() {
  return (
    <div className="bg-gray-800 rounded-xl p-5 animate-pulse">
      <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-700 rounded w-full"></div>
        <div className="h-3 bg-gray-700 rounded w-5/6"></div>
        <div className="h-3 bg-gray-700 rounded w-4/6"></div>
      </div>
    </div>
  )
}
