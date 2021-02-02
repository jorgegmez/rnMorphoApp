interface UserStateModel extends ReduxStateModel {
  data: {
    name: string;
    lastName: string;
    phone_number: number;
    email: string;
    gender: string;
    birthday: Date | string;
    profile_picture?: string;
  };
}

interface UpdateUserStateModel {
  name?: string;
  lastName?: string;
  phone_number?: number;
  email?: string;
  gender?: string;
  birthday?: Date | string;
  profile_picture?: string;
}
