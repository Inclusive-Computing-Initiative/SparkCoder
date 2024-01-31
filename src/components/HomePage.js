import "./Homestyles.css";
import Carousel from "./Carousel";
import { Button } from "@mui/material/";

export default function HomePage() {
  function Card({ title, content }) {
    return (
      <div className="card">
        <p style={{ fontSize: "26px", fontWeight: "700" }}> {title} </p>
        <p style={{ fontSize: "25px" }}> {content} </p>
      </div>
    );
  }

  function FAQ({ title, content }) {
    return (
      <div className="FAQ">
        <p style={{ fontSize: "26px", fontWeight: "700" }}> {title} </p>
        <p style={{ fontSize: "25px" }}> {content} </p>
      </div>
    );
  }

  function Quote({ imageurl, quote }) {
    return (
      <div
        style={{
          position: "relative",
          borderRadius: "100px",
          backgroundColor: "#8BAFC8",
          width: "30vw",
          margin: "auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={imageurl}
          alt="Your Image"
          style={{ width: "80%", height: "auto", padding: "10%" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            background: "rgb(255, 255, 255)",
            borderRadius: "100px",
            fontSize: "36px",
            margin: "auto",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "1.5vw", padding: "5%" }}>
            &quot;{quote}&quot;
          </p>
        </div>
      </div>
    );
  }


  return (
      <>
      <div className="page">
        <img
          src="../../sparkcoder.png"
          style={{
            width: "422px",
            position: "absolute",
            opacity: "0.25",
            transform: "translate(345px,-70px)",
          }}
          alt="A vibrant yellow starburst logo"
        />
        <h1 className="title"> SparkCoder </h1>
        <p style={{ transform: "translate(95px,-45px)", fontSize: "21px" }}>
          An Inclusive Computing Initiative Service
        </p>
        <p className="slogan">
          Free, quality lessons in STEM designed for neurodivergent children{" "}
        </p>
        <Button
          variant="contained"
          sx={{
            borderRadius: 3,
            fontFamily: "Poppins",
            marginTop: "20px",
            fontSize: "24px",
            color: "black",
            backgroundColor: "white",
          }}
        >
          Get Started
        </Button>
        <p className="heading" style={{ marginTop: "300px" }}>
          Techniques <span style={{ fontWeight: "700" }}> proven </span> to
          work...
        </p>
        <div className="table">
          <Card
            title="AI powered learning"
            content="We use custom AI algorithms to recognize learning patters and create exercises optimized for understanding."
          />
          <Card
            title="Science backed"
            content="Our methods of teaching are based upon established research on learning and development."
          />
          <Card
            title="People with experience"
            content="Our instructors have experience teaching kids with special needs - it’s their goal to ensure a quality education."
          />
        </div>
        <div className="table" style={{ marginTop: "200px" }}>
          <div
            style={{
              borderRadius: "200px",
              margin: "auto",
              backgroundColor: "#f5fbff",
            }}
          >
            <img
              src="../../quote.png"
              style={{
                width: "33vw",
                opacity: "0.5",
              }}
              alt="People working on a computer with gears and icons, symbolizing collaboration and technology."
            />
          </div>
          <div>
            <p
              className="heading"
              style={{
                textAlign: "center",
                margin: "auto",
                paddingBottom: "5%",
              }}
            >
              Learning has <span style={{ fontWeight: "700" }}> impacted</span>
              ...
            </p>
            <Quote
              imageurl="https://i0.wp.com/codakid.com/wp-content/uploads/2021/07/image2.jpg"
              quote="A journey of a thousand miles begins with a single step"
            />
          </div>
        </div>
        <div style={{ marginTop: "200px" }} />
        <Carousel>
          <FAQ
              title="FAQ 1"
              content="FAQ Answer "
            />
            <FAQ
              title="FAQ 2"
              content="FAQ Answer "
            />
            <FAQ
              title="FAQ 3"
              content="FAQ Answer "
            />
            <FAQ
              title="FAQ 4"
              content="FAQ Answer "
            />
            <FAQ
              title="FAQ 5"
              content="FAQ Answer "
            />
            <FAQ
              title="FAQ 6"
              content="FAQ Answer "
            />
            <FAQ
              title="FAQ 7"
              content="FAQ Answer "
            />
        </Carousel>
        <p className="heading" style={{ marginTop: "200px", textAlign: "center" }}>
          Let us help you find your spark
        </p>
        <div style={{textAlign: "center"}}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 3,
              fontFamily: "Poppins",
              marginTop: "40px",
              fontSize: "24px",
              color: "black",
              backgroundColor: "white",
            }}
          >
            Browse Courses
          </Button>
        </div>
      </div>
    </>
  );
}
