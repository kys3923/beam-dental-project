const Intro = (props) => {
  return (
    <section className="intro_container">
      <div className="grad_background" style={{ backgroundImage: "url(/img/GradientBG.png)" }}>
        {/* <svg viewBox="0 0 1440 357" preserveAspectRatio="none">
          <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"></path>
        </svg> */}
      </div>
      <div className="intro_textbox">
        <h1>Dental benefits that reward you for brushing your teeth.</h1>
      </div>
      <iframe src="https://player.vimeo.com/video/327864855?app_id=122963" width="710" height="401" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="Beam: Smarter Dental Care"></iframe>
    </section>
  );
}
export default Intro