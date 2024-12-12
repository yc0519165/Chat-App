import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

export const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  // useRef are using to auto-scrolling effect direct message ---start---
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // ----End -----
  function handelClick(e) {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  }
  return (
    <>
      <div className="chat h-full flex w-full flex-col">
        <div className="user p-5 flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="./avatar.png"
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-xl font-medium">Yuvraj Chavhan</span>
              <p className="text-sm font-normal">
                Lorem ipsum dolor, sit amet consectetu.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <img className="w-5 h-5 cursor-pointer" src="./phone.png" alt="" />
            <img className="w-5 h-5 cursor-pointer" src="./video.png" alt="" />
            <img className="w-5 h-5 cursor-pointer" src="./info.png" alt="" />
          </div>
        </div>
        <div className="p-5 flex-1 overflow-scroll scrollbar-hide flex flex-col gap-5">
          <div className="max-w-[70%] flex gap-2">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="./avatar.png"
              alt=""
            />
            <div className="flex flex-col">
              <p className="bg-[#111928bf] p-3 rounded-md text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid unde quia consectetur sint numquam molestiae officiis
                quae assumenda dicta, libero voluptates quas saepe rerum
                laudantium hic dolore, delectus tempora facilis?
              </p>
              <span>10 min ago</span>
            </div>
          </div>
          <div className="flex max-w-[70%] self-end">
            <div className="flex flex-col gap-1 flex-1">
              <p className="bg-[#5180fe] p-3 text-base rounded-md">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid unde quia consectetur sint numquam molestiae officiis
                quae assumenda dicta, libero voluptates quas saepe rerum
                laudantium hic dolore, delectus tempora facilis?
              </p>
              <span>10 min ago</span>
            </div>
          </div>
          <div className="flex max-w-[70%] self-end">
            <div className="flex flex-col gap-1 flex-1">
              <img className="h-72 object-cover" src="./images.jpg" alt="" />
              <p className="bg-[#5180fe] p-3 text-base rounded-md">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid unde quia consectetur sint numquam molestiae officiis
                quae assumenda dicta, libero voluptates quas saepe rerum
                laudantium hic dolore, delectus tempora facilis?
              </p>
              <span>10 min ago</span>
            </div>
          </div>
          <div className="max-w-[70%] flex gap-2">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="./avatar.png"
              alt=""
            />
            <div className="flex flex-col">
              <p className="bg-[#111928bf] p-3 rounded-md text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid unde quia consectetur sint numquam molestiae officiis
                quae assumenda dicta, libero voluptates quas saepe rerum
                laudantium hic dolore, delectus tempora facilis?
              </p>
              <span>10 min ago</span>
            </div>
          </div>
          <div ref={endRef}></div>
        </div>
        <div className="flex justify-between items-center p-5 gap-5 bottom">
          <div className="flex gap-5">
            <img className="h-5 w-5 cursor-pointer" src="./img.png" alt="" />
            <img
              className="h-5 w-5 cursor-pointer "
              src="./camera.png"
              alt=""
            />
            <img className="h-5 w-5 cursor-pointer" src="./mic.png" alt="" />
          </div>
          <input
            className="flex-1 text-base bg-[#111928bf] p-3 rounded-lg text-[#fff] outline-none border-none"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
          />
          <div className="relative">
            <img
              onClick={() => setOpen((prev) => !prev)}
              className="h-5 w-5 cursor-pointer"
              src="./emoji.png"
              alt=""
            />
            <div className="absolute bottom-12 left-0">
              <EmojiPicker open={open} onEmojiClick={handelClick} />
            </div>
          </div>
          <button className="py-2 px-4 rounded-lg bg-[#5180fe] cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </>
  );
};
