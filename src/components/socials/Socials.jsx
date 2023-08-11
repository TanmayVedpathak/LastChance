import "./socials.css";

const Socials = () => {
  return (
    <div className="socialDiv">
      <ul className="socialsList">
        <li className="socialItem">
          <h1 className="socialCount">40K</h1>
          <h3 className="socialInfo">Endangered Species</h3>
        </li>
        <li className="socialItem">
          <h1 className="socialCount">800</h1>
          <h3 className="socialInfo">Volunteers</h3>
        </li>
        <li className="socialItem">
          <h1 className="socialCount">140</h1>
          <h3 className="socialInfo">Conservation Programs</h3>
        </li>
        <li className="socialItem">
          <h1 className="socialCount">1</h1>
          <h3 className="socialInfo">Earth for Us to Protect</h3>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
