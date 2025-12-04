export interface PlanetData {
  id: string;
  name: string;
  color: string;
  size: number;
  distance: number; // Distance from sun
  speed: number; // Orbit speed
  description: string;
  ring?: {
    innerRadius: number;
    outerRadius: number;
    color: string;
  };
}

export interface PlanetProps {
  data: PlanetData;
  isSelected: boolean;
  onSelect: (planet: PlanetData) => void;
}

export interface GeminiResponse {
  fact: string;
}
