const Card = ({title, content}) => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
       
            <div style={{width: 391, height: 343, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.67)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', backdropFilter: 'blur(4px)'}} />
            <div style={{left: 39, top: 30, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 26, fontFamily: 'Merriweather Sans', fontWeight: '700', letterSpacing: 2.60, wordWrap: 'break-word'}}> {title} </div>
            <div style={{width: 307, height: 237, left: 43, top: 106, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 25, fontFamily: 'Merriweather Sans', fontWeight: '400', letterSpacing: 2.50, wordWrap: 'break-word'}}> {content} </div>
        
        </div>
    )
}

export default Card;
