export class AuthService {
    private _isAuthenticated: boolean | null = null;

    public get isAuthenticated(): boolean | null {
      return this._isAuthenticated;
    }

    public set isAuthenticated(value: boolean | null) {
      this._isAuthenticated = value;
    }

    public login(): void {
      this.isAuthenticated = true;
    }

    public logout(): void {
      this.isAuthenticated = false;
    }

}