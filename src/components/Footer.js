import youtube from './youtubelogo.png'
import linkedin from './linkedinlogo.png'
import instagram from './instagramlogo.png'

export default function Footer() {
  return (
    <div className="table"
        style={{
            width: "95%",
            margin: "0 0 1% 2%",
            borderTop: "black solid 1.5px",
            borderBottom: "black solid 1.5px"
        }}
    >
        <div style={{display: "grid"}}>
            <div style={{display: 'flex', alignItems: 'center',  width: "200px", padding: "2% 0 0 1.2%",}}>
                <a style={{display: "inline-block", margin: "auto"}} href="https://www.youtube.com/@InclusiveCompute"><img src={youtube} width="35px"></img></a>
                <span style={{ fontSize: '15px', margin: "10px" }}>•</span>
                <a style={{display: "inline-block", margin: "auto"}} href="https://www.linkedin.com/company/inclusive-computing-initiative"><img src={linkedin} width="35px"></img></a>
                <span style={{ fontSize: '15px', margin: "10px" }}>•</span>
                <a style={{display: "inline-block", margin: "auto"}} href="https://www.instagram.com/cs4sped/"><img src={instagram} width="35px"></img></a>
            </div>
            <div style={{display: 'flex', alignItems: 'center',  width: "300px", padding: "0 0 1% 0"}}>
                <a style={{display: "inline-block", margin: "auto", textDecoration: "none", fontSize: "12px"}} href="https://www.inclusivecompute.org/#/privacy-policy"><p style={{letterSpacing: "1.5px"}}>PRIVACY POLICY</p></a>
                <span style={{fontSize:'15px'}}>•</span>
                <a style={{display: "inline-block", margin: "auto", textDecoration: "none", fontSize: "12px"}} href="https://docs.google.com/forms/d/e/1FAIpQLScKCS9j1I5mUN_eq_LM85EYCaBOVxerIaRwwMQQgkMDbYC6uw/viewform"><p style={{letterSpacing: "1.5px"}}>JOIN OUR TEAM</p></a>
            </div>
        </div>
        <div style={{fontSize:"12px",textAlign: 'right', margin: "2% 0 2% 0"}}>
            <p>Allen, TX</p>
            <a href="mailto:inclusivecompute@gmail.com"><p>inclusivecompute@gmail.com</p></a>
            <p>(586) - 676 - 8033</p>
        </div>
    </div>
  );
}
