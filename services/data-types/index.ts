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

export interface NominalTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface BankTypes {
  _id: string;
  owner: string;
  accountNumber: string;
  bankName: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BankTypes[];
}

export interface UserTypes {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: string;
  phoneNumber: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  exp?: number;
  iat?: number;
}
