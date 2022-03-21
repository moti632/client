import PageHeader from "../common/pageHeader";

const About = () => {
  return (
    <div className="container">
      <PageHeader
        title="About Page"
        subTitle="Here you will find an explanation of how to interface with this Business cards app"
      />

      <div className="row">
        <div className="col-12 col-md-8 center">
          <div className="col-10">
            <p>
              After a short registration you can create a business card for your
              business, publish it in the app, edit or delete it if necessary.
              Other users will be able to see your business details and contact
              you with the details you provide on your business card
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4 center">
          <img className="img-fluid" src="/assets/images/card.jpg" alt="card" />
        </div>
      </div>
    </div>
  );
};

export default About;
