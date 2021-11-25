import './Footer.css';

const Footer = (props) => {

  const icons = (<div className='flex row'>Icons will go here</div>);
  const info = (<div className='footnote'></div>)
  return (
    <footer>
      {icons}
      {info}
    </footer>
  );
}

export default Footer;