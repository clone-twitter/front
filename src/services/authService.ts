export class authService {
    private _isAuthenticated: boolean = true;

    public get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    public set isAuthenticated(value: boolean) {
        this._isAuthenticated = value;
    }
}