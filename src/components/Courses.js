import "../styles.css";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const courseContent = {
  'Unit 1': {
    'How to make cream puffs': { type: 'article', video: 'https://www.youtube.com/embed/ptW7zemegL8', 
    text: <>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus in metus vulputate. Nulla aliquet enim tortor at auctor urna nunc id. Aliquet porttitor lacus luctus accumsan. Lorem ipsum dolor sit amet consectetur. Dignissim convallis aenean et tortor at. Blandit massa enim nec dui nunc mattis enim ut tellus. A condimentum vitae sapien pellentesque habitant morbi tristique. Suspendisse in est ante in nibh mauris. Sed arcu non odio euismod lacinia at. Id leo in vitae turpis. Sed tempus urna et pharetra. Amet dictum sit amet justo donec enim diam vulputate ut. </p>
    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
    </>
    },
    'We love spongebob': { type: 'article', video: 'https://www.youtube.com/embed/oWqAf4eex14', 
    text: <>
    <p> Jellyfish jam is so cool!!!!!!!!!!!!!!!!!! </p>
    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
    </>
    },
    'infinte articles': { type: 'article', video: 'https://www.youtube.com/embed/oWqAf4eex14', 
    text: <>
    <p> i!!!!!!!!!!! </p>
    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
    </>
    }
  },
  'Unit 2': {
    'We love spongebob part 2': { type: 'article', video: 'https://www.youtube.com/embed/PofM_EfBqtg', 
    text: <>
    <p> Hoopla!!!!!!!!!!!!!!!!!! </p>
    </>
    }
  },
  'Unit 3': {
    'filler 3': { type: 'article', video: 'https://www.youtube.com/embed/PofM_EfBqtg', 
    text: <>
    <p> Hoopla!!!!!!!!!!!!!!!!!! </p>
    </>
    }
  },
  'Unit 4': {
    'filler 4': { type: 'article', video: 'https://www.youtube.com/embed/PofM_EfBqtg', 
    text: <>
    <p> Hoopla!!!!!!!!!!!!!!!!!! </p>
    </>
    }
  },
  'Unit 5': {
    'filler 5': { type: 'article', video: 'https://www.youtube.com/embed/PofM_EfBqtg', 
    text: <>
    <p> Hoopla!!!!!!!!!!!!!!!!!! </p>
    </>
    }
  },
  'Unit 6': {
    'filler 6': { type: 'article', video: 'https://www.youtube.com/embed/PofM_EfBqtg', 
    text: <>
    <p> Hoopla!!!!!!!!!!!!!!!!!! </p>
    </>
    }
  },
  'Unit 7': {
    'filler 7': { type: 'article', video: 'https://www.youtube.com/embed/PofM_EfBqtg', 
    text: <>
    <p> Hoopla!!!!!!!!!!!!!!!!!! </p>
    </>
    }
  },
  'Unit 8': {
    'filler 8': { type: 'article', video: 'https://www.youtube.com/embed/PofM_EfBqtg', 
    text: <>
    <p> Hoopla!!!!!!!!!!!!!!!!!! </p>
    </>
    }
  },
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="carouselarrow"
      style ={{left: "-5%", display: 'flex', alignItems: 'center', top: "15px"}}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon/>
    </button>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="carouselarrow"
      style ={{right: "-5%", display: 'flex', alignItems: 'center', top: "15px"}}
      onClick={onClick}
    >
      <ArrowForwardIosIcon/>
    </button>
  );
}

export default function Courses() {
    const [selectedUnit, setSelectedUnit] = useState("Unit 1");
    const [selectedChapter, setSelectedChapter] = useState(Object.keys(courseContent[selectedUnit])[0]);

    function UnitCard({ title }) {
        return (
          <div className="FAQ clickable" onClick={() => {setSelectedChapter(Object.keys(courseContent[title])[0]); setSelectedUnit(title);}} style={{padding: "10px 0 10px 0", margin: "15px 35px 15px 35px", "borderRadius": "20px", backgroundColor: "white"}}>
            <p style={{ fontSize: "24px", margin: "auto" }}> {title} </p>
          </div>
        );
    }

    function CustomCarousel(props) {
        const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 2,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />
        };

        return (
          <div style={{backgroundColor: "#8BAFC8", padding: "0 10% 0 10%"}}>
            <Slider {...settings}>
                {props.children}
            </Slider>
          </div>
        );
    }

    function ChapterContent({chapterName, chapterData}) {
      if (chapterData.type === "article") {
        return (
          <>
            <div id="video" style={{aspectRatio: '16 / 9', backgroundColor: "#8BAFC8", boxShadow:"10px 10px 20px 0px rgba(0,0,0,0.1)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <iframe width="95%" height="95%" src={chapterData.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div style={{marginTop: "40px", backgroundColor: "white", boxShadow:"10px 10px 20px 0px rgba(0,0,0,0.1)", borderRadius: "20px", padding:"20px"}}>
              <h1 class="title heading"> {chapterName} </h1>
              {chapterData.text}
            </div>
          </>
        );
      }
      return (
        <p> 404 not found </p>
      );
    }

    return (
        <>
        <div style={{paddingTop: "100px"}}>
            <CustomCarousel>
                <UnitCard title="Unit 1"/>
                <UnitCard title="Unit 2"/>
                <UnitCard title="Unit 3"/>
                <UnitCard title="Unit 4"/>
                <UnitCard title="Unit 5"/>
                <UnitCard title="Unit 6"/>
                <UnitCard title="Unit 7"/>
                <UnitCard title="Unit 8"/>
            </CustomCarousel>
            <div className="table" style={{"gridTemplateColumns":"20% 80%", margin: "50px 0 80px 0"}}>
                <div style={{height: "min-content", backgroundColor: "white", borderRadius: "10px", textAlign: "center", boxShadow:"10px 10px 20px 0px rgba(0,0,0,0.1)"}}>
                    <div style={{backgroundColor: "#8BAFC8", padding: "5px 0 5px 0", borderRadius: "10px 10px 0 0"}}>
                        <UnitCard title={selectedUnit} />
                    </div>
                    {Object.keys(courseContent[selectedUnit]).map((chapterName) => (
                      <div className="clickable" onClick={() => setSelectedChapter(chapterName)} style={{backgroundColor: "white", padding: "10px 0 10px 0", borderTop: "solid 2px black", borderRadius: "0 0 10px 10px"}}>
                          <p> {chapterName} </p> 
                      </div>
                    ))}
                </div>

                <div style={{margin: "0 40px 0 40px"}}>
                    <ChapterContent chapterName={selectedChapter} chapterData={courseContent[selectedUnit][selectedChapter]} />
                </div>
            </div>
        </div>
        </>
    );
}