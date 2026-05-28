import sophiapic from "../assets/sophiapic.png";

function ShareMe() {
  return (
    <div className="lg:mt-15 justify-items-center">
      <img
        src={sophiapic}
        alt="A picture of me."
        className="lg:w-60 max-w-sm rounded-full object-cover"
      />
    </div>
  );
}

export default ShareMe;
