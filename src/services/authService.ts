export class AuthService {
    private _isAuthenticated: boolean = true;

    public get isAuthenticated(): boolean {
      return this._isAuthenticated;
    }

    public set isAuthenticated(value: boolean) {
      this._isAuthenticated = value;
    }

    public login(): void {
      this.isAuthenticated = true;
    }

    public logout(): void {
      this.isAuthenticated = false;
    }

}