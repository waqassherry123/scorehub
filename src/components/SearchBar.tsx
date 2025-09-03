import { useState } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ placeholder = "Search..." }: { placeholder?: string }) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center w-full border border-gray-200 rounded-full px-3 py-2 bg-white">
      {/* Search Icon */}
      <Search size={18} className="mr-2" />

      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 outline-none text-sm text-gray-700"
      />

      {/* Clear Button */}
      {query && (
        <button onClick={() => setQuery("")} className="ml-2">
          <X size={16} className="text-gray-400 hover:text-black" />
        </button>
      )}
    </div>
  );
}
