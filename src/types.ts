export interface Anime {
  mal_id: number;
  title: string;
  synopsis?: string;
  score?: number;
  rank?: number;
  episodes?: number;
  status?: string;
  rating?: string;
  year?: number;
  images: { jpg: { image_url: string; large_image_url?: string } };
  genres?: { name: string }[];
  themes?: { name: string }[];
}

export interface Section {
  label: string;
  url: string;
}
