import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import PredictionCard from "../components/PredictionCard";
import { mockPredictions } from "../services/predictions";
import { ChevronLeft } from "lucide-react";

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState("Predictions");

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex my-4 justify-start items-center">
          <ChevronLeft size={20} className="mr-2" />
          <p className="font-medium">Search</p>
        </div>
        <SearchBar placeholder="Search for teams, matches..." />
        <Tabs
          tabs={["Predictions", "Predictors", "Teams", "Matches"]}
          active={activeTab}
          onChange={setActiveTab}
        />

        <div className="mt-6">
          {mockPredictions.map((p) => (
            <PredictionCard key={p.id} prediction={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
