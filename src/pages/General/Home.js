import React from "react";
import { Row, Container } from "react-bootstrap";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import "../../Css/Home.css";

const data = [
  { mes: "Enero", ventas: 2400 },
  { mes: "Febrero", ventas: 700 },
  { mes: "Marzo", ventas: 2200 },
  { mes: "Abril", ventas: 2400 },
  { mes: "Mayo", ventas: 700 },
  { mes: "Junio", ventas: 2200 },
  { mes: "Julio", ventas: 2400 },
  { mes: "Agosto", ventas: 700 },
  { mes: "Septiembre", ventas: 2200 },
  { mes: "Octubre", ventas: 2400 },
  { mes: "Noviembre", ventas: 700 },
  { mes: "Diciembre", ventas: 2200 },
];

export default function Home() {
  return (
    <Container>
      <h3 className="alert alert-info mt-4 mr-auto">Home </h3>
      <div className="box-body col-md-16">
        <div className="col-md-12  derecha alertas">
          <div className="alert alert-secondary col-md-5 derecha" role="alert">
            Ventas este mes $250.000
          </div>
          <div className="alert alert-success col-md-5 izquierda" role="alert">
            Compras este mes $54.320
          </div>
        </div>
        <div className="col-md-12 izquierda alertas">
          <div className="alert alert-warning col-md-5 derecha" role="alert">
            Clientes este mes 20
          </div>
          <div className="alert alert-primary col-md-5 izquierda" role="alert">
            Valor inventario $500.200
          </div>
        </div>
        <div className="col-md-12">
          <p className="text-center"> Grafica de ventas</p>
          <div className="chartdiv">
            <Row className="chart">
              <BarChart
                width={350}
                height={400}
                data={data}
                options="responsive"
              >
                <Bar dataKey="ventas" fill="green" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Legend />
              </BarChart>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
}
