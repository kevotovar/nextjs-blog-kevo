export interface IPost {
  type_of: string;
  id: number;
  title: string;
  description: string;
  redeable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  collection_id: number | null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  last_comment_at: string | null;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: string;
    github_username: string;
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
  };
}

export type IPostsRequest = IPost[];
