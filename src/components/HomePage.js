import { Button } from "@mui/material/";
import Card from './Card'
import quotepic from './quote.png'

const HomePage = () => {
    return (
    <>
        {/* banner */ }
        
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
                borderRadius: 24,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                fontFamily: "Poppins",
                marginTop: "20px",
                fontSize: "24px",
                color: "black",
                fontWeight: 1000,
                letterSpacing: 2.4,
                backgroundColor: "white",
              }}
            >
              Get Started
            </Button>
        </div> 
       
        {/* techniques */ }
        
        <div className="techniques-wrapper" style={{position:'relative'}}>
            <div className="tech-title" style={{textAlign: 'left', position: 'relative'}}>
<span style={{color: 'black', fontSize: 36, fontFamily: 'Merriweather Sans', fontWeight: '400', letterSpacing: 3.60, wordWrap: 'break-word'}}>Techniques</span>
<span style={{color: 'black', fontSize: 36, fontFamily: 'Merriweather Sans', fontStyle: 'italic', fontWeight: '400', letterSpacing: 3.60, wordWrap: 'break-word'}}> </span>
<span style={{color: 'black', fontSize: 36, fontFamily: 'Merriweather Sans', fontStyle: 'italic', fontWeight: '700', letterSpacing: 3.60, wordWrap: 'break-word'}}>proven</span>
<span style={{color: 'black', fontSize: 36, fontFamily: 'Merriweather Sans', fontStyle: 'italic', fontWeight: '400', letterSpacing: 3.60, wordWrap: 'break-word'}}> </span>
<span style={{color: 'black', fontSize: 36, fontFamily: 'Merriweather Sans', fontWeight: '400', letterSpacing: 3.60, wordWrap: 'break-word'}}>to work... </span>
            </div>
            
            <div className='cards' style = {{
                width: '90vw',
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10vh',
                alignTracks: 'space-between'
                
            }}>
                <Card title='AI powered Learning' content='We use custom AI algorithms to recognize learning patters and create exercises optimized for understanding.' />
                <Card title='AI powered Learning' content='We use custom AI algorithms to recognize learning patters and create exercises optimized for understanding.' />
                <Card title='AI powered Learning' content='We use custom AI algorithms to recognize learning patters and create exercises optimized for understanding.' />
            </div> 
        </div>
    
        {/* quotes */ }

        <div className='quotes-wrapper' style={{
            position: 'relative',
            width: '90vw',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '60vh',
        }}>
            
            <img style={{width: '50vw', height: 'auto', borderRadius: 200}} src={quotepic} />
        
            
            <div className='right' style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{textAlign: 'center', width: '30vw'}}>
                    <span style={{color: 'black', fontSize: 36, fontFamily: 'Merriweather Sans', fontWeight: '400', letterSpacing: 3.60, wordWrap: 'break-word'}}>Learning has </span>
                    <span style={{color: 'black', fontSize: 36, fontFamily: 'Merriweather Sans', fontStyle: 'italic', fontWeight: '700', letterSpacing: 3.60, wordWrap: 'break-word'}}>impacted</span>
                    
                    <span style={{color: 'black', fontSize: 36, fontFamily: 'Merriweather Sans', fontWeight: '400', letterSpacing: 3.60, wordWrap: 'break-word'}}>...</span>
                </div>
                
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '10vh'}}>
                    <div style={{width: '40vw', height: '40vh', background: '#8BAFC8', borderRadius: 100}}/>
                    <div style={{left: '70vw', position: 'absolute', width: '20vw', height: '40vh', background: 'white', borderRadius: 100}}/>
                </div> 
            </div>
        </div> 
</>
    )
}

export default HomePage;
