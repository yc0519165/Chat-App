import useStore from "../../../lib/useStore";

export const UserInfo = () => {
  const { currentUser } = useStore();

  return (
    <>
      <div className="flex p-[20px] items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            className="w-[50px] h-[50px] rounded-full object-cover"
            src={currentUser.avatar || "./avatar.png"}
            alt=""
          />
          <h2>{currentUser.username}</h2>
        </div>
        <div className="flex gap-5">
          <img
            className="w-[20px] h-[20px]  object-cover cursor-pointer"
            src="./more.png"
            alt=""
          />
          <img
            className="w-[20px] h-[20px]  object-cover cursor-pointer"
            src="./video.png"
            alt=""
          />
          <img
            className="w-[20px] h-[20px]  object-cover cursor-pointer"
            src="./edit.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
