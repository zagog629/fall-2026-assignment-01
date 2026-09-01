export type UserAccount = {
  id: string;
  createdAt: Date;
  email: string;
  passwordHash: string;
  profile: {
    bio: string;
    avatarUrl: string;
  };
};

export class UserRegistry {
  private users: Map<string, UserAccount> = new Map();
  private nextId = 1;

  public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    const user: UserAccount = {
      id: String(this.nextId++),
      createdAt: new Date(),
      ...data,
    };

    this.users.set(user.id, user);
    return user;
  }

  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    const user = this.users.get(id);
    if (!user) {
      return undefined;
    }

    return Object.freeze({
      id: user.id,
      email: user.email,
      profile: user.profile,
    });
  }
}