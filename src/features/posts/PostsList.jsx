import { useSelector } from "react-redux";
import { postsSelector } from "./postsSlice";
import PostForm from "./PostForm";
import PostAuthor from "./PostAuthor";

export default function PostsList() {
  const posts = useSelector(postsSelector);
  const renderedPosts = posts.map((post) => (
    <article
      key={post.id}
      className="border-2 border-blue-800 px-6 py-4 rounded"
    >
      <h3 className="text-lg font-bold border-b border-b-blue-400">
        {post.title}
      </h3>
      <p className="text-sm text-cyan-600 mb-2">
        <PostAuthor author={post.author} />
      </p>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <div className="min-h-screen bg-blue-200 text-cyan-800 flex flex-col items-center gap-4 py-10">
      <h2 className="text-2xl font-bold">Posts Component</h2>
      <PostForm />
      <div className="flex flex-row flex-wrap gap-4">{renderedPosts}</div>
    </div>
  );
}
