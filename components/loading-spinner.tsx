export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-4"></div>
        <h2 className="text-2xl font-semibold text-white mb-2">EduSphere</h2>
        <p className="text-purple-200">Loading your learning experience...</p>
      </div>
    </div>
  )
}
