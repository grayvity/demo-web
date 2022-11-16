export default function Button(props) {
  return (
    <button
      className=" w-56 h-12 border-white border-2 rounded-full bg-gradient-to-r from-white/70"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
