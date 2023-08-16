export default function Home() {
  return (
    <div>
      <h1 className="text-center my-5">What's up, I'm Aiden</h1>
      <p className="text-center my-5">
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
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Restaurant AI Chatbot</h5>
              <p className="card-text">content.</p>
              <a href="#" className="btn btn-primary">
                Details
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">AI using Reinforcement Learning</h5>
              <p className="card-text">content.</p>
              <a href="#" className="btn btn-primary">
                Details
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Compiler</h5>
              <p className="card-text">content.</p>
              <a href="#" className="btn btn-primary">
                Details
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Coming Soon</h5>
              <p className="card-text">content.</p>
              <a
                href="#"
                className="btn btn-primary disabled"
                aria-disabled="true"
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
