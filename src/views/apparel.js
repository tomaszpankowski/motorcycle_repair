import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ApparelS1 from "../components/apparel-s1";
import ApparelS2 from "../components/apparel-s2";
import ApparelS3 from "../components/apparel-s3";
import ApparelS4 from "../components/apparel-s4";

class Apparel extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ApparelS1/>
                <ApparelS2/>
                <ApparelS3/>
                <ApparelS4/>
            </Container>    
        );
    }
}

export default Apparel;