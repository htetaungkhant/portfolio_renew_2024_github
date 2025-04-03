export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export enum EmailType {
  NOTIFICATION = 'notification',
  THANK_YOU = 'thankYou'
}