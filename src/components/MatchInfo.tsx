import { Match } from "../types/prediction";
import formatDate from "../utils/formatDate";

export default function MatchInfo({ match }: { match: Match }) {
  return (
    <div className="border rounded-lg p-3 mb-2 bg-gray-50">
      <p className="font-bold">{match.home} vs {match.away}</p>
      <p className="text-sm text-gray-600">{formatDate(match.date)}</p>
      <span className="text-xs bg-red-200 text-red-700 px-2 py-0.5 rounded">
        {match.league}
      </span>
    </div>
  );
}
