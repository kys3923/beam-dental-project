const Mission = (props) => {
  return (
    <section className="mission_container">
      <div className="mission_background_1" style={{ backgroundImage: "url(/img/BrushImage.png)" }}></div>
      {/* <img src='/img/Brush Image.png' alt='brush' /> */}
      <div className="mission_textbox">
        <h1>Our Mission & Vision</h1>
        <div className="rect"></div>
        <p>Beam Dental was founded on the idea that everyone deserves access to dental care, centering our mission around closing the gap of the 100 million Americans who don't. By blending innovative technology with traditional insurance policies, we've been able to bring incredible value to the employee benefits market—both disrupting insurance forever and delivering on our mission.</p>
        <p>Beam’s vision is to deliver a fundamentally unique approach to coverage by incorporating dental hygiene behavior into policy pricing at renewal.</p>
      </div>
      <div className="mission_background_2" style={{ backgroundImage: "url(/img/VisionOverheadGlasses.png)" }}></div>
      {/* <img src='/img/Vision overhead Glasses.png' alt='glasses' /> */}
    </section>
  );
}
export default Mission;