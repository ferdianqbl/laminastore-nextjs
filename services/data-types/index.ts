export interface CategoryTypes {
  _id: string;
  name: string;
}

export interface GameItemTypes {
  _id: string;
  name: string;
  category: CategoryTypes;
  thumbnail: string;
}

export interface GameDetailTypes {
  _id: string;
  name: string;
  category: CategoryTypes;
  thumbnail: string;
}
