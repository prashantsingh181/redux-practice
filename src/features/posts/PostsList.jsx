import { useSelector } from "react-redux";
import { postsSelector } from "./postsSlice";
import PostForm from "./PostForm";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";

export default function PostsList() {
  const posts = useSelector(postsSelector);
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  const renderedPosts = orderedPosts.map((post) => (
    <article
      key={post.id}
      className="border-2 border-blue-800 px-6 py-4 rounded"
    >
      <div className="flex flex-row gap-4 border-b border-b-blue-400 justify-between">
        <h3 className="text-xl font-bold">
          {post.title}
        </h3>
        <TimeAgo timeStamp={post.date} />
      </div>
      <p className="text-sm text-cyan-600 mb-2">
        <PostAuthor author={post.author} />
      </p>
      <p>{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
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
