import { useEffect } from "react";
import "./App.css";
import { Chat } from "./components/chat/Chat";
import { Details } from "./components/details/Details";
import { List } from "./components/list/List";
import { Login } from "./components/login/Login";
import { Notification } from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import useStore from "./lib/useStore";

function App() {
  const { currentUser, isLoading, fetchUserInfo } = useStore();

  useEffect(() => {
    const onSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      onSub();
    };
  }, [fetchUserInfo]);

  if (isLoading)
    return <div className="p-10 text-xl bg-[#000c] rounded-lg">Loading...</div>;
  return (
    <>
      <div className="flex container">
        {currentUser ? (
          <>
            <List />
            <Chat />
            <Details />
          </>
        ) : (
          <Login />
        )}
        <Notification />
      </div>
    </>
  );
}

export default App;
