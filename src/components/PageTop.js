import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./css/pageTop.css";

const PageTop = () => {
    return (
        <div id="page-top">
           <Row>
               <Col sm={{span:6, offset:3}} className="text-center my-5" id="masthead">Servicio De Asambleas Virtuales Seguro y Confiable</Col>
           </Row>
           <Row>
               <Col sm={{span:6, offset:3}} className="text-center my-3" id="mastbody">Ofrecemos un servicio web para la organizaci&oacute;n y ejecuci&oacute;n de asambleas de forma virtual!</Col>
           </Row>
           <Row>
               <Col sm={{span:4, offset:5}} ><Button variant="secondary">PARA SABER M&Aacute;S</Button></Col>
           </Row>
        </div>
    );
}

export default PageTop;