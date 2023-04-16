// import strapi from '@strapi/strapi';

export class TweetsService {
  fetchTweets() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + import.meta.env.VITE_API_TOKEN
      }
    };

    const params = `
      ?populate[users_permissions_user][fields][0]=username
      &populate[users_permissions_user][fields][1]=tweet_name
      &populate[users_permissions_user][populate][2]=avatar
      &sort=createdAt:desc
    `.replace(/\s+/g, '');


    return fetch(`http://localhost:1337/api/tweets${params}`, options)
      .then(response => response.json());
  }

  
  async getTweets() {
    const tweets = await this.fetchTweets();
    return tweets;
  }
}