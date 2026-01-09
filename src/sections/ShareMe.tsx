import sophiapic from "../assets/sophiapic.png";

function ShareMe() {
  return (
    <div className="lg:mt-15 justify-items-center">
      <img
        src={sophiapic}
        alt="A picture of me wearing a blue rugby style shirt against a sunset at Lake Union."
        className="lg:w-60 max-w-sm rounded-full object-cover shadow-xl"
      />
    </div>
  );
}

export default ShareMe;
