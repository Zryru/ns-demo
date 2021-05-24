export class User {
  email: string;
  id: string;
  private _token: string;
  private _tokenExpirationDate: Date;

  constructor(
    email: string,
    id: string,
    token: string,
    tokenExpirationDate: Date,
  ) {
    this.email = email;
    this.id = id;
    (this._token = token), (this._tokenExpirationDate = tokenExpirationDate);
  }

  get isAuth() {
    return !!this.token;
  }

  get token() {
    if (
      !this._token ||
      !this._tokenExpirationDate ||
      new Date() > this._tokenExpirationDate
    ) {
      return null;
    }
    return this._token;
  }

  get tokenExpirationDate() {
    return this._tokenExpirationDate;
  }

  get tokenExpiry(){
    return this._tokenExpirationDate.getTime() - new Date().getTime();
  }
}
