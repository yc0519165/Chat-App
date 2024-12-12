import { useState } from "react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
// import upload from "../../lib/upload";
export const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const [loading, setLoading] = useState(false);

  const handelAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handelRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // uid are works to fetch the id from firebase
      // const imgUrl = await upload(avatar.file);
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        // avatar: imgUrl,
        id: res.user.uid,
        bloked: [],
      });
      await setDoc(doc(db, "userchat", res.user.uid), {
        chats: [],
      });
      toast.success("Account created! You can login now!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="h-full w-full flex items-center gap-24">
        <div className="flex-1 flex flex-col items-center gap-5">
          <h2 className="text-2xl font-normal">Welcome Back</h2>
          <form
            className="flex flex-col items-center justify-center gap-5"
            onSubmit={handelLogin}
          >
            <input
              className="py-4 px-5 text-sm text-[#fff] outline-none bg-[#111928bf]"
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <input
              className="py-4 px-5 text-sm text-[#fff] outline-none bg-[#111928bf]  "
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <button
              className="p-3 bg-[#1f8ef1] hover:bg-[#1f8ff1d7] w-full"
              disabled={loading}
            >
              {loading ? "loading..." : "Sing In"}
            </button>
          </form>
        </div>
        <div className="w-[2px] h-[80%] bg-[#dddddd35]"></div>
        <div className="flex-1 flex flex-col items-center gap-5">
          <h2 className="text-2xl font-normal">Create an account</h2>
          <form
            onSubmit={handelRegister}
            className="flex flex-col items-center justify-center gap-5"
          >
            <label
              htmlFor="file"
              className="w-full flex items-center justify-between cursor-pointer underline"
            >
              <img
                className="w-12 h-12 object-cover rounded-md opacity-70"
                src={avatar.url || "./avatar.png"}
                alt=""
              />
              Upload image
            </label>
            <input
              className="hidden"
              type="file"
              id="file"
              onChange={handelAvatar}
            />
            <input
              type="text"
              className="py-4 px-5 text-sm text-[#fff] outline-none bg-[#111928bf]"
              name="username"
              placeholder="Enter userName"
            />
            <input
              className="py-4 px-5 text-sm text-[#fff] outline-none bg-[#111928bf]"
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <input
              className="py-4 px-5 text-[#fff] text-sm outline-none bg-[#111928bf]"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <button
              className="p-3 bg-[#1f8ef1] hover:bg-[#1f8ff1d7]  w-full"
              disabled={loading}
            >
              {loading ? "loading..." : "Sing Up"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
