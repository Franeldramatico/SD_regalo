export enum ThemeColor {
  Black = 'BLACK',
  Red = 'RED',
  White = 'WHITE',
  Gold = 'GOLD',
  Blue = 'BLUE',
  NeonGreen = 'NEON_GREEN',
  UrbanGrey = 'URBAN_GREY',
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  type: 'main' | 'side' | 'date';
}

export interface GeneratedPoem {
  title: string;
  content: string;
}
