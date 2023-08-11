import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="emptyDiv"></div>
      <div>
        <h1 className="heroHeading">PROTECT</h1>
        <h1 className="heroHeading">
          OUR <span className="headingSpan">WILDLIFE</span>
        </h1>
      </div>
      <p className="heroPara">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font
      </p>
      <button className="heroBtn">GET INVOLVED</button>
    </div>
  );
};

export default Hero;
