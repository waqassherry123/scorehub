type Props = {
    label: string;
    active?: boolean;
    onClick?: () => void;
  };
  
  export default function FilterButton({ label, active, onClick }: Props) {
    return (
      <button
        onClick={onClick}
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          active ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {label}
      </button>
    );
  }
  