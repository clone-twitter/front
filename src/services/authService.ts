export class AuthService {
    private _isAuthenticated: boolean | null = null;

    public get isAuthenticated(): boolean | null {
      return this._isAuthenticated;
    }

    public set isAuthenticated(value: boolean | null) {
      this._isAuthenticated = value;
    }

    private async getLogin(username: string, password: string, cb?: Function): Promise<void> {
      await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + import.meta.env.VITE_API_TOKEN,
        },
        body: JSON.stringify({
          'identifier': username,
          'password': password,
        })
      }).then((response: any) => {
        return response.json();
      })
      .then((data: any) => {
        if (data) {
          data.jwt && localStorage.setItem('_tka', data.jwt);
          cb && cb();
        }
      })
      .catch((error: any) => {
        console.error(error);
      })
    }

    public async login(username: string, password: string, cb: Function): Promise<void> {
      const user = await this.getLogin(username, password, cb);
      return user;
    }

    public logout(): void {
      this.isAuthenticated = false;
    }

}