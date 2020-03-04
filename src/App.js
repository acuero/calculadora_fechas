import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Container, Card, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import DateTimePicker from 'react-datetime-picker';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/min/locales';

function App() {
    moment.locale('es');

    let fecha_actual = new Date();
    fecha_actual.setHours(0, 0, 0);

    const [fecha1, setFecha1]       = useState(fecha_actual);
    const [fecha2, setFecha2]       = useState(fecha_actual);
    const [operacion, setOperacion] = useState("suma");
    const [anhos, setAnhos]         = useState(0);
    const [meses, setMeses]         = useState(0);
    const [dias, setDias]           = useState(0);
    const [horas, setHoras]         = useState(0);
    const [minutos, setMinutos]     = useState(0);
    const [segundos, setSegundos]   = useState(0);

    const fecha1_onChange    = fecha => {
        setFecha1(fecha);
        setFecha2(fecha);
    }
    
    const operacion_onChange = e => setOperacion(e.target.value);
    const anhos_onChange     = e => setAnhos(e.target.value);
    const meses_onChange     = e => setMeses(e.target.value);
    const dias_onChange      = e => setDias(e.target.value);
    const horas_onChange     = e => setHoras(e.target.value);
    const minutos_onChange   = e => setMinutos(e.target.value);
    const segundos_onChange  = e => setSegundos(e.target.value);

    return (
        <div className={"d-flex justify-content-center"}>
            <Form>
                <Row form>
                    <Col md={10}>
                        <Label style={{"font-size":"25px"}}>Calculadora de fechas</Label>
                    </Col>
                </Row>

                <Row form>
                    <Col md={10}>
                        <FormGroup>
                            <Label>Selecciona una fecha:</Label>
                            <DateTimePicker 
                                className={"form-control"} 
                                format={"MMMM dd y hh:mm a"}
                                onChange={fecha1_onChange}
                                value={fecha1} />
                        </FormGroup>
                    </Col>
                </Row>

                <Row form>
                    <Col md={10}>
                        <FormGroup tag="fieldset">
                            <Label>Operación a aplicar:</Label>
                            <div className={"d-flex justify-content-center"}>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="operacion" onClick={operacion_onChange}
                                                    value="suma" checked={operacion=='suma'?"checked":""} />{' '}
                                                Suma
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="operacion" onClick={operacion_onChange}
                                                    value="resta" checked={operacion=='resta'?"checked":""} />{' '}
                                                Resta
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </FormGroup>
                    </Col>
                </Row>

                <Row form>
                    <Col md={10}>
                        <FormGroup tag="fieldset">
                            <Label>Parámetros:</Label>
                            <Row>
                                <Col md={4}>
                                    <FormGroup check>
                                        <Label>Años</Label>
                                        <Input type="number" name="anhos_param" value={anhos} onChange={anhos_onChange} onKeyUp={anhos_onChange} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup check>
                                        <Label>Meses</Label>
                                        <Input type="number" name="meses_param" value={meses} onChange={meses_onChange} onKeyUp={meses_onChange} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup check>
                                        <Label>Días</Label>
                                        <Input type="number" name="dias_param" value={dias} onChange={dias_onChange} onKeyUp={dias_onChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <FormGroup check>
                                        <Label>Horas</Label>
                                        <Input type="number" name="horas_param" value={horas} onChange={horas_onChange} onKeyUp={horas_onChange} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup check>
                                        <Label>Minutos</Label>
                                        <Input type="number" name="minutos_param" value={minutos} onChange={minutos_onChange} onKeyUp={minutos_onChange} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup check>
                                        <Label>Segundos</Label>
                                        <Input type="number" name="segundos_param" value={segundos} onChange={segundos_onChange} onKeyUp={segundos_onChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Row>

                <Row form className={"d-flex justify-content-center"}>
                    <Label style={{"font-size":"35px"}}>
                        {
                            operacion=="suma"?
                            <Moment format={"MMMM DD YYYY LT"}
                                add={{
                                    years:anhos, 
                                    months:meses, 
                                    days: dias, 
                                    hours:horas, 
                                    minutes:minutos, 
                                    seconds:segundos}}>
                                {fecha2}
                            </Moment>:
                            <Moment format={"MMMM DD YYYY LT"}
                                subtract={{
                                    years:anhos, 
                                    months:meses, 
                                    days: dias, 
                                    hours:horas, 
                                    minutes:minutos, 
                                    seconds:segundos}}>
                                {fecha2}
                            </Moment>
                        }                        
                    </Label>
                    
                </Row>
            </Form>
        </div>
    );
}


export default App;
