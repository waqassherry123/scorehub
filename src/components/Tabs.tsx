import filter from "../assets/filter.png";

type Props = {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
};

export default function Tabs({ tabs, active, onChange }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              tab === active
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter */}
      <div className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full cursor-pointer self-start sm:self-auto">
        <img src={filter} className="w-4 h-4 object-contain" />
        <p className="text-sm">Filter</p>
      </div>
    </div>
  );
}
