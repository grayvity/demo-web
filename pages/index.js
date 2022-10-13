import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" bg-blue-400 w-screen h-screen flex justify-center items-center">
      <div className=" w-1/3 h-5/6 bg-yellow-400 shadow-2xl flex flex-col items-center">
        <div className="bg-yellow-400 shadow-2xl w-44 h-44 rounded-full mt-8 flex justify-center items-center">
          <img src="./images/user.png" alt="user" className="w-1/2 h-1/2" />
        </div>
        <div className="flex justify-center my-8 gap-4">
          <img src="./icons/twitter.png" alt="twitter" className="w-8 h-8" />
          <img src="./icons/github.png" alt="github" className="w-8 h-8" />
          <img
            src="./icons/pinterest.png"
            alt="pinterest"
            className="w-8 h-8"
          />
          <img src="./icons/facebook.png" alt="facebook" className="w-8 h-8" />
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div className="text-center text-xl">
            <div className="font-bold ">51</div>
            <div>Upvoted</div>
          </div>
          <div className="text-center text-xl">
            <div className="font-bold ">51</div>
            <div>Upvoted</div>
          </div>
          <div className="text-center text-xl">
            <div className="font-bold ">51</div>
            <div>Upvoted</div>
          </div>
          <div className="text-center text-xl">
            <div className="font-bold ">51</div>
            <div>Upvoted</div>
          </div>
          <div className="text-center text-xl">
            <div className="font-bold ">51</div>
            <div>Upvoted</div>
          </div>
          <div className="text-center text-xl">
            <div className="font-bold ">51</div>
            <div>Upvoted</div>
          </div>
        </div>
      </div>
    </div>
  );
}
