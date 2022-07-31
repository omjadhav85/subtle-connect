import { NewPost } from "./NewPost";
import { Post } from "./Post";

export const Home = () => {
  return (
    <div className="flex-1 flex flex-col mt-4 gap-4">
      <NewPost />
      <Post />
    </div>
  );
};
