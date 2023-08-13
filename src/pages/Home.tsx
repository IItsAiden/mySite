export default function Home() {
  return (
    <div>
      <h1 className="text-center mt-5 mb-3">What's up, I'm Aiden</h1>
      <p className="text-center">
        👋 Hello there! I'm Aiden, a passionate and dedicated computer science
        enthusiast. This is my corner of the digital universe where I showcase
        my journey, projects, and the boundless possibilities of technology. As
        a recent graduate in computer science from the University of Nottingham,
        I am excited to share with you a curated collection of my academic and
        personal achievements. From crafting elegant lines of code to unraveling
        intricate algorithms, I've embarked on a journey of exploration and
        growth.
      </p>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{ width: 288 }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                1 Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={{ width: 288 }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                2 Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
