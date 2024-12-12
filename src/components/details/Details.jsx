import { auth } from "../../lib/firebase";

export const Details = () => {
  return (
    <>
      <div className="flex-1">
        <div className="flex flex-col px-5 py-7 items-center gap-3 user">
          <img
            className="h-24 w-24 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <h1>Yuvraj Chavhan</h1>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-3 h-[350px] overflow-scroll scrollbar-hide">
          <div>
            <div className="flex items-center justify-between">
              <span>Chat Settings</span>
              <img
                className="h-9 w-9 bg-[#111928bf] p-3 rounded-full"
                src="./arrowUp.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span>Chat Settings</span>
              <img
                className="h-9 w-9 bg-[#111928bf] p-3 rounded-full"
                src="./arrowUp.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span>Privacy & help</span>
              <img
                className="h-9 w-9 bg-[#111928bf] p-3 rounded-full"
                src="./arrowUp.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span>Shares photos</span>
              <img
                className="h-9 w-9 bg-[#111928bf] p-3 rounded-full"
                src="./arrowDown.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-md"
                    src="./images.jpg"
                    alt=""
                  />
                  <span className="text-gray-300 text-sm font-light">
                    photo_2024_2.png
                  </span>
                </div>
                <img
                  className="h-9 w-9 bg-[#111928bf] p-3 rounded-full"
                  src="./download.png"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-md"
                    src="./images.jpg"
                    alt=""
                  />
                  <span className="text-gray-300 text-sm font-light">
                    photo_2024_2.png
                  </span>
                </div>
                <img
                  className="h-9 w-9 bg-[#111928bf] p-3 rounded-full"
                  src="./download.png"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 object-cover rounded-md"
                    src="./images.jpg"
                    alt=""
                  />
                  <span className="text-gray-300 text-sm font-light">
                    photo_2024_2.png
                  </span>
                </div>
                <img
                  className="h-9 w-9 bg-[#111928bf] p-3 object-cover rounded-full"
                  src="./download.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span>Chat Settings</span>
              <img
                className="h-9 w-9 bg-[#111928bf] p-3 rounded-full"
                src="./arrowUp.png"
                alt=""
              />
            </div>
          </div>
          <button className="px-5 py-2 bg-red-400 rounded-md cursor-pointer transition-[0.5s] hover:bg-red-600">
            Block User
          </button>
          <button
            onClick={() => auth.signOut()}
            className="px-5 py-1 bg-[#5180fe] rounded-md"
          >
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};
