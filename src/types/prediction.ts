export type Badge = {
  icon: string;
  label: string;
};

export type User = {
  name: string;
  avatar: string;
  country: string;
  badges?: Badge[];
};

export type Match = {
  home: string;
  away: string;
  date: string;
  league: string;
};

export type Comment = {
  name: string;
  avatar: string;
  text: string;
};

export type Prediction = {
  id: number;
  text: string;
  likes: number;
  comments: number;
  shares: number;
  user: User;
  match: Match;
  thumbnail: string;
  teamLogo: string;
  comment: Comment;
};
