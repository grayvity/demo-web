import Button from "./button";
import Menu from "./menu";

export default function SideBar() {
  const submitPremium = () => {
    console.log("Submitted!!!!!!");
  };

  return (
    <>
      <div className=" w-96 bg-slate-300 h-full flex flex-col items-center justify-between py-8 ">
        <div>
          <img
            alt="profile image"
            src="./images/profile_400x400.jpg"
            className=" w-24 h-24 rounded-full"
          />
          <div>Your name</div>
          <div>UI/UX designer</div>
        </div>

        <Menu />
        <Button onClick={() => submitPremium()}>Upgrade to premium</Button>
      </div>
    </>
  );
}
