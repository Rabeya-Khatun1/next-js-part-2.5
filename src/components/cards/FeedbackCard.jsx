export default function FeedbackCard({ fd }) {
  return (
    <div className="w-full rounded-xl border bg-white p-4 shadow-sm">
      {/* Date */}
      <p className="text-xs text-gray-500 mb-2">
        {new Date(fd.date).toLocaleString()} 
      </p>

      {/* Message */}
      <p className="text-gray-800 mb-4">
        {fd.message}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="px-3 py-1 rounded-md text-sm border hover:bg-gray-100">
          👍 Like
        </button>

        <button className="px-3 py-1 rounded-md text-sm border hover:bg-gray-100">
          💬 Reply
        </button>

        <button className="px-3 py-1 rounded-md text-sm border text-red-600 hover:bg-red-50">
          🗑 Delete
        </button>
      </div>
    </div>
  );
}
