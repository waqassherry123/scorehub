import type { Prediction } from "../types/prediction";
import avatar from "../assets/avatar.jpg";
import thumb from "../assets/card2.png";
import thumb2 from "../assets/card1.png";
import soccerKing from "../assets/card2.png";
import badge1 from '../assets/Group.png';
import badge2 from '../assets/fire.png';
import teamLogo from '../assets/badge.png';

export const mockPredictions: Prediction[] = [
  {
    id: 1,
    text: "Arsenal 2-1 Chelsea.\nChelsea’s midfield will struggle against Arsenal’s press.",
    likes: 126,
    comments: 12,
    shares: 3,
    user: {
      name: "Tactical Analyst",
      avatar,
      country: "India",
      badges: [
        { icon: badge1, label: "Top 1% Predictor" },
        { icon: badge2, label: "10-Match Result" },
      ],
    },
    match: {
      home: "Arsenal",
      away: "Chelsea",
      date: "2025-06-20T18:00:00Z",
      league: "Premier League",
    },
    thumbnail: thumb,
    teamLogo: teamLogo,
    comment: {
      name: "Soccer King",
      avatar: soccerKing,
      text: "Solid pick! Arsenal’s form has been 🔥 lately. I’m backing the same scoreline.",
    },
  },
  {
    id: 1,
    text: "Arsenal 2-1 Chelsea.\nChelsea’s midfield will struggle against Arsenal’s press.",
    likes: 126,
    comments: 12,
    shares: 3,
    user: {
      name: "Tactical Analyst",
      avatar,
      country: "India",
      badges: [
        { icon: badge2, label: "10-Match Result" },
      ],
    },
    match: {
      home: "Arsenal",
      away: "Chelsea",
      date: "2025-06-20T18:00:00Z",
      league: "Premier League",
    },
    thumbnail: thumb2,
    teamLogo: teamLogo,
    comment: {
      name: "Soccer King",
      avatar: soccerKing,
      text: "Solid pick! Arsenal’s form has been 🔥 lately. I’m backing the same scoreline.",
    },
  },
];
