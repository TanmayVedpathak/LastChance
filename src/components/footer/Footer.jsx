import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <h1 className="footerHeader">About Last Chance</h1>
        <p className="footerPara">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content.
        </p>
        <button className="footerBtn">Learn More</button>
      </div>
      <div className="imgBg"></div>
      <div className="upcoming">
        <h1 className="footerHeader">Upcoming Projects to Fund</h1>
        <p className="footerPara">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content.
        </p>
        <button className="footerBtn">Support Us</button>
      </div>
    </footer>
  );
};

export default Footer;
