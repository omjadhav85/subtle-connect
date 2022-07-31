export const SideBarItem = ({ icon, text, route }) => {
  return (
    <li className="flex gap-2 items-center py-2 text-xl cursor-pointer">
      <i>{icon}</i>
      <p>{text}</p>
    </li>
  );
};
