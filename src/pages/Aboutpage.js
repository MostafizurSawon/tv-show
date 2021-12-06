const Aboutpage = () => {
  return (
    <div className="about">
      <h3 className="about__title">ABOUT THIS WBSITE</h3>
      <div className="about__info">
        <p>TvShow Heaven Search Website</p>
        <div>
          <p>I have used the following:</p>
          <ul>
            <li>React (create-react-app)</li>
            <li>Basic CSS & HTML</li>
            <li>React Bootstrap</li>
            <li>Font Awesome Icon</li>
            <li>Axios AJAX Request</li>
            <li>TVMAZE API </li>
            <li>React Router</li>
            <li>React Context API</li>
            <li>Deploy to Netlify</li>
          </ul>
          <h4>Live Site and github code available</h4>
          <div>
          <button className="custom-btnn live"> <a href="https://github.com/MostafizurSawon/tv-show"><i class="fab fa-github me-2"></i>Github Code</a></button>
          <button className="custom-btnn live ms-4"> <a href="https://affectionate-austin-a19788.netlify.app/">Live Site</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
