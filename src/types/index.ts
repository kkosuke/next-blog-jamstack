type Category = {
  id: string;
  name: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};
export type Blog = {
  id: string;
  body: string;
  title: string;
  category: Category[];
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};
export type Props = {
  blog: Blog;
};
