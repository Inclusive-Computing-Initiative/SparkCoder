import "../styles.css";
import { Button } from "@mui/material/";

export default function Contact() {
    return (
        <>
        <div className="page" style={{paddingTop:"15%",}}>
            <h1 className="title" style={{textAlign:"center", color:"#8BAFC8"}}> CONTACT </h1>
            <h1 className="title" style={{textAlign:"center", transform: "translate(0,-108%)", backgroundColor: "transparent"}}> CONTACT </h1>
            <div style={{marginTop: "-120px", textAlign: "center"}}>
                <p style={{fontSize: "36px",letterSpacing: "3px", fontWeight: "700"}}>Have questions, concerns, or comments?</p>
                <p style={{fontSize: "29px", letterSpacing: "2px", fontWeight: "300", marginTop: "-24px"}}>We'd love to hear your feedback!</p>
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
                    Feedback Form
                </Button>
                <p style={{fontSize: "24px", marginTop: "100px"}}> Visit our website: <a href="https://www.inclusivecompute.org/">https://www.inclusivecompute.org/</a></p>
            </div>
        </div>
        </>
    );
}