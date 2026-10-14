export type TResourceCategory =
  | "Podcasts"
  | "Articles"
  | "Newsletters"
  | "Recipes"
  | "Fitness"
  | "Meditation";

export type TResource = {
  id: string;
  category: TResourceCategory;
  title: string;
  thumbnail: string;
  tags: string[];
  duration: number;
  description: string;
  date_uploaded: string;
};

export type TGroupedResources = Partial<Record<TResourceCategory, TResource[]>>;
