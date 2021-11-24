import './Footer.css';

const Footer = (props) => {

  const icons = (<div class='flex row'>Icons will go here</div>);
  const info = (<div class='footnote'></div>)
  return (
    <footer>
      {icons}
      {info}
    </footer>
  );
}

export default Footer;