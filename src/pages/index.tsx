import Link from "next/link";
import { client } from "@/libs/client";
import { Blog } from "@/types/index";

export default function Home({ blog }: { blog: Blog[] }) {
  return (
    <div>
      <ul>
        {blog.map((blog: Blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};
