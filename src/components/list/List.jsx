import { ChatInfo } from "./chatInfo/ChatInfo";
import { UserInfo } from "./userInfo/UserInfo";

export const List = () => {
  return (
    <>
      <div className="flex-1 flex flex-col">
        <UserInfo />
        <ChatInfo />
      </div>
    </>
  );
};
