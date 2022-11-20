export interface ResponseType {
    id?: number,
    title?: string,
    completed?: boolean;
}

export interface PriceFormParams {
  UserName?: string,
  Email?: string,
  GroupName?: string,
  PhoneNumber0?: string;
  PhoneNumber1?:string;
  PhoneNumber2?:string;
  CellPhoneNumber0?:string;
  CellPhoneNumber1?:string;
  CountryCode?:string;
}

export interface UserParams{
  userId?: number,
  name?: string,
  email?: string,
}