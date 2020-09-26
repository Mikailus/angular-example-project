import { User } from './user.interface';

export type ExtendedUser = User & {
  username: string;
  website: string;
  company: {
    bs: string;
    captchPhrase: string;
    name: string;
  },
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
};
