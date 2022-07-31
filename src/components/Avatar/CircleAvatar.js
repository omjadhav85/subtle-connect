export const CircleAvatar = ({ imgSrc }) => {
  return (
    <div className="rounded-full w-16 h-16 overflow-hidden">
      <img src={imgSrc} alt="" className="bg-cover" />
    </div>
  );
};
