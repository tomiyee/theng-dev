import './Banner.css';

/**
 * Banner is the banner on the home page of my portfolio. It has the flocking simulator.
 */
function Banner() {
  return (
    <section className='banner'>
      <canvas className='banner-bg-canvas' width='100%' height='100%' />
      <div class='banner-text'>Hello, I'm <span className='highlight'>Tommy Heng</span>.</div>
    </section>
  );
}

export default Banner;
