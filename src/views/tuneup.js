import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import TuneupS1 from "../components/tuneup-s1";
import TuneupS2 from "../components/tuneup-s2";
import TuneupS3 from "../components/tuneup-s3";
import TuneupS4 from "../components/tuneup-s4";


class Tuneup extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <TuneupS1/>
                <TuneupS2/>
                <TuneupS3/>
                <TuneupS4/>
            </Container>    
        );
    }
}

export default Tuneup;