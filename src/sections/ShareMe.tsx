import sophiapic from "../assets/sophiapic.png";

function ShareMe() {
  return (
    <div className="">
    <div className="flex items-center justify-center mt-15">
      <img
        src={sophiapic}
        alt="A picture of me wearing a blue rugby style shirt against a sunset."
        className="w-60 h-60 rounded-full object-cover shadow-xl"
      />
    </div>
     
    </div>
  );
}

export default ShareMe;
