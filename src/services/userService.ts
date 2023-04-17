import { sanitizeUrl } from "../helpers/url";

export class UserService {
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
      .then(response => response.json());
  }

  
  public async getAuthUser() {
    const user = await this.fetchAuthUser();
    return user;
  }
}