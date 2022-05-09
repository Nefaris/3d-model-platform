export type User = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RegisterResponse = {
  accessToken: string;
  refreshToken: string;
};

export type ProductThumbnail = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type ProductPreview = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  previewImage: string;
};
