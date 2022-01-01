import './Accreditations.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import charter from "../logos/charter.png"
import nrpsi from "../logos/nrpsi.png"

export default function Accreditations() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="Accreditations">
            <h4 className="Section">Accrediations</h4>
            <Slider className="Slider" {...settings}>
            <div className="title">
                <img src={charter} alt="charter of linguists"></img>
                <h5>MCIL</h5>
                <h6>Member Chartered Institute of Linguists</h6>
            </div>
            <div className="title">
                <img src={charter} alt="National Register of Public Serivce Interpreters"></img>
                <h5>DPSI</h5>
                <h6>Diploma in Public Service Interpreting (Law)</h6>
            </div>
            <div className="title">
                <img className="nrpsi" src={nrpsi} alt="National Register of Public Serivce Interpreters"></img>
                <h5>RPSI</h5>
                <h6>Registered Public Service Interpreter (National Register of Public Serivce Interpreters)</h6>
            </div>
            </Slider>   
        </div>
    );
}