import { NewPost } from "./NewPost";

export const PostModal = ({ oldPost, setOldPost, setShowModal }) => {
  return (
    <div className="fixed top-0 left-0 bg-slate-400 h-full w-full bg-black/50 z-10">
      <main className="absolute top-1/2 left-1/2 bg-white z-20 -translate-x-1/2 -translate-y-1/2 w-1/3">
        <NewPost oldPost={oldPost} setShowModal={setShowModal} />
      </main>
    </div>
  );
};
