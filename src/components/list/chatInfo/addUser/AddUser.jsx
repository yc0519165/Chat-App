import { collection, getDoc, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../../lib/firebase";

export const AddUser = () => {
  const [user, setUser] = useState(null);
  const handelSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.value);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));

      const querySnapShot = await getDoc(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-max h-max p-7 bg-[#2d3135c9] rounded-lg absolute top-0 bottom-0 left-0 right-0 m-auto">
        <form className="flex gap-5" onSubmit={handelSearch}>
          <input
            className="p-3 outline-0 text-[#000] rounded-md text-sm font-light"
            type="text"
            placeholder="userName"
            name="username"
          />
          <button className="p-3 bg-[#1a73e8] rounded-md text-[#fff] text-base font-light">
            Search
          </button>
        </form>
        {user && (
          <div className="mt-12 flex justify-between">
            <div className="flex items-center gap-4">
              <img
                className="h-12 w-12 rounded-full"
                src={user.avatar || "./avatar.png"}
                alt=""
              />
              <span>{user.username}</span>
            </div>
            <button className="p-2 bg-[#1a73e8] rounded-md text-[#fff] text-sm font-light">
              Add User
            </button>
          </div>
        )}
      </div>
    </>
  );
};
