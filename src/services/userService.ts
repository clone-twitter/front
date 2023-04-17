export class UserService {
  private fetchAuthUser() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.getItem('_tka'),
      }
    };

    const params = `
      
    `.replace(/\s+/g, '');


    return fetch(`http://localhost:1337/api/users/me${params}`, options)
      .then(response => response.json());
  }

  
  public async getAuthUser() {
    const user = await this.fetchAuthUser();
    return user;
  }
}