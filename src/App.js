import "./styles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@mui/material/";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="banner">
        <img
          src="../../sparkcoder.png"
          style={{
            width: "422px",
            position: "absolute",
            opacity: "0.25",
            transform: "translate(345px,-70px)",
          }}
          alt="logo"
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
          className="start"
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
      </div>
    </BrowserRouter>
  );
}
