import { IAvatar } from "./User";

export interface ITweet {
  data: ITweetData[]
}

interface ITweetData {
  id: number;
  attributes: {
    createdAt: Date;
    publishedAt: Date;
    text_content: string;
    total_likes: number;
    total_retweets: number;
    total_comments: number;
    users_permissions_user: {
      data: {
        id: number;
        attributes: {
          username: string;
          tweet_name: string;
          avatar: IAvatar;
        }
      }
    };
  };
}