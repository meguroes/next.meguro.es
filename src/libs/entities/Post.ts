export interface Post {
  fields: {
    title: string;
    description: string;
    slug: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    heroImageUrl: string | null;
  };
}
