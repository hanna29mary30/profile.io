

const Contact = () => {
  return (
    <div className="container py-4 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Contact</h2>
          <form id="contactForm">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" id="name" type="text" placeholder="Name" />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="emailAddress">
                Email Address
              </label>
              <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                type="text"
                placeholder="Message"
                style={{ height: '10rem' }}
              ></textarea>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary btn-lg" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
