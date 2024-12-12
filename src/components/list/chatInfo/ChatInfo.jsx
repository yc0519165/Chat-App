import { useEffect, useState } from "react";
import { AddUser } from "./addUser/AddUser";
import useStore from "../../../lib/useStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

export const ChatInfo = () => {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userChats", currentUser.id), (res) => {
      // setChats(doc.data());
      const items = res.data().chats;

      const promises = items.map(async (item) => {
        const userDocRef = doc(db, "users", item.receiverId);
        const userDocSnap = await getDoc(userDocRef);
        const user = userDocSnap.data();
        return { ...item, user };
      });
      const chatData = Promise.all(promises);
      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
    });
    return () => {
      unSub();
    };
  }, [currentUser.id]);
  console.log(chats);

  return (
    <>
      <div className="flex-1 overflow-scroll scrollbar-hide">
        <div className="flex items-center gap-5 p-5">
          <div className="flex-1 flex items-center gap-5 rounded-xl bg-[#111928bf] p-3">
            <img className="h-5 w-5" src="./search.png" />
            <input
              className="bg-transparent outline-none"
              type="text"
              placeholder="search here..."
            />
          </div>
          <img
            className="h-10 w-10 bg-[#111928bf] p-3 rounded-xl cursor-pointer"
            src={addMode ? "./minus.png" : "./plus.png"}
            onClick={() => setAddMode((prev) => !prev)}
          />
        </div>
        {chats?.map((chat) => {
          <div
            key={chat.chatId}
            className="flex items-center p-5 gap-5 chat-user"
          >
            <img className="h-12 w-12 rounded-full" src="./avatar.png" />
            <div>
              <span>Yuvraj Chavhan</span>
              <p>{chat.lastMessage}</p>
            </div>
          </div>;
        })}
        {/* <div className="flex items-center p-5 gap-5 chat-user">
          <img className="h-12 w-12 rounded-full" src="./avatar.png" />
          <div>
            <span>Yuvraj Chavhan</span>
            <p>how are you</p>
          </div>
        </div> */}
        ;{addMode && <AddUser />}
      </div>
    </>
  );
};
