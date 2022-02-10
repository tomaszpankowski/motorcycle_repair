import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import RepaintS1 from "../components/repaint-s1";
import RepaintS2 from "../components/repaint-s2";
import RepaintS3 from "../components/repaint-s3";

class Repaint extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <RepaintS1/>
                <RepaintS2/>
                <RepaintS3/>
            </Container>    
        );
    }
}

export default Repaint;