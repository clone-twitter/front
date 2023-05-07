import { sanitizeUrl } from "../helpers/url";

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

    private fetchAuthUser() {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + localStorage.getItem('_tka'),
        }
      };
  
      const params = sanitizeUrl(`
        ?fields[0]=username
        &fields[1]=email
        &fields[2]=avatar
        &fields[3]=tweet_name
        &fields[4]=biography
        &fields[5]=location
        &fields[6]=website
        &fields[7]=createdAt
        &fields[8]=updatedAt
        &fields[9]=provider
        &fields[10]=confirmed
        &fields[11]=blocked
        &populate[12]=avatar
      `)
  
  
      return fetch(`http://localhost:1337/api/users/me${params}`, options)
        .then(response => {
          if (response.error?.status === 401) return null;
          return response.json();
        })
        .catch((error: any) => {
          console.error(error);
        })
  
    }
  
    
    public async getAuthUser() {
      const user = await this.fetchAuthUser();
      return user;
    }

    public async login(username: string, password: string, cb: Function): Promise<void> {
      const user = await this.getLogin(username, password, cb);
      return user;
    }

    public logout(): void {
      this.isAuthenticated = false;
    }

}