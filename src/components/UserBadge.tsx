type Props = {
    name: string;
    avatar: string;
    country: string;
    badge?: string;
  };
  
  export default function UserBadge({ name, avatar, country, badge }: Props) {
    return (
      <div className="flex items-center gap-2">
        <img src={avatar} alt={name} className="w-8 h-8 rounded-full" />
        <span className="font-semibold">{name}</span>
        {badge && (
          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
        <span className="text-sm text-gray-500">{country}</span>
      </div>
    );
  }
  