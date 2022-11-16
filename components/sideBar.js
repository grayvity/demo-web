import Button from "./button";
import Menu from "./menu";

export default function SideBar() {
  const submitPremium = () => {
    console.log("Submitted!!!!!!");
  };

  return (
    <>
      <div className="text-[#1F7171] w-96 bg-white backdrop-blur-md  bg-opacity-[83%] h-full flex flex-col items-center justify-between py-8 ">
        <div>
          <img
            alt="profile image"
            src="./images/profile_400x400.jpg"
            className=" w-24 h-24 rounded-full"
          />
          <div className=" font-bold ">Your name</div>
          <div className=" text-xs">UI/UX designer</div>
        </div>

        <Menu />
        <Button onClick={() => submitPremium()}>Upgrade to premium</Button>
      </div>
    </>
  );
}
