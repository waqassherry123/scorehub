import { useState } from "react";
import type { Prediction } from "../types/prediction";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import indianFlag from "../assets/flag.png";

export default function PredictionCard({ prediction }: { prediction: Prediction }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(prediction.likes);
  const [bookmarked, setBookmarked] = useState(false);

  const toggleLike = () => {
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };

  const toggleBookmark = () => {
    setBookmarked((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 mb-6">
      {/* Top row: User info */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
        {/* Left: Avatar + Name + Badges */}
        <div className="flex flex-wrap gap-2">
          <img src={prediction.user.avatar} alt="" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col">
            <span className="font-semibold text-sm">{prediction.user.name}</span>
            <span className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
              <div className="w-4 h-4 rounded-full overflow-hidden">
                <img src={indianFlag} alt="India" className="w-full h-full object-cover" />
              </div>
              {prediction.user.country}
            </span>
          </div>
          <div className="flex flex-wrap items-start gap-2">
            {prediction.user.badges?.map((badge) => (
              <div
                key={badge.label}
                className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded
                 ${badge.label === "Top 1% Predictor" ? "bg-purple-100 text-purple-700" : ""}
                 ${badge.label === "10-Match Result" ? "bg-[#FF800026] text-orange-700" : ""}
               `}
              >
                <img src={badge.icon} alt={badge.label} className="w-4 h-4 object-contain" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Follow button */}
        <button className="border border-red-500 text-red-500 text-xs sm:text-sm px-3 py-1 rounded-md hover:bg-red-50">
          + Follow
        </button>
      </div>

      {/* Match + Thumbnail */}
      <div className="flex flex-col lg:flex-row gap-3">
        {/* Left: Match info */}
        <div className="w-full lg:flex-1 border rounded-lg p-1 border-gray-200">
          <div className="p-3 rounded-md bg-[#EDF0F7] flex items-start gap-3">
            <img
              src={prediction.teamLogo}
              alt="team logo"
              className="w-10 h-12 object-cover rounded-md"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <p className="font-bold text-sm">
                  {prediction.match.home} vs {prediction.match.away}
                </p>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
                  {prediction.match.league}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(prediction.match.date)
                  .toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })
                  .replace(",", " |")}
              </p>
            </div>
          </div>
          <div className="text-sm p-2 pt-3">
            <p className="font-semibold text-[#28282899]">Prediction:</p>
            {prediction.text.split("\n").map((line, i) => (
              <p key={i} className={i === 0 ? "" : "mt-3"}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Right: Thumbnail */}
        <div className="w-full lg:flex-1 relative rounded-lg overflow-hidden aspect-video lg:aspect-auto">
          <img
            src={prediction.thumbnail}
            alt="thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between mt-3 gap-3">
        <div className="flex items-center gap-4 text-gray-600 text-sm flex-wrap">
          <button onClick={toggleLike} className="flex items-center gap-1 focus:outline-none">
            <Heart
              size={16}
              className={liked ? "text-red-500 fill-red-500" : "text-gray-500"}
            />
            {likesCount} likes
          </button>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} />
            {prediction.comments} comments
          </div>
          <div className="flex items-center gap-1">
            <Share2 size={16} />
            {prediction.shares} share
          </div>
        </div>
        <button onClick={toggleBookmark} className="focus:outline-none">
          <Bookmark
            size={18}
            className={
              bookmarked
                ? "text-black fill-black" // selected
                : "text-gray-400 hover:text-black" // unselected
            }
          />
        </button>
      </div>

      {/* Prediction Result */}
      <div className="mt-3">
        <p className="font-semibold text-sm">
          Prediction Correct — <span className="text-green-600">+120 Points Earned</span>
        </p>
        <div className="flex items-center gap-2 mt-2">
          <img src={prediction.comment.avatar} alt="" className="w-6 h-6 rounded-full" />
          <p className="text-sm text-gray-700">
            <span className="font-semibold">{prediction.comment.name}</span>{" "}
            {prediction.comment.text}
          </p>
        </div>
        <button className="text-xs text-gray-400 font-semibold mt-2 underline">
          View all comments
        </button>
      </div>
    </div>
  );
}
