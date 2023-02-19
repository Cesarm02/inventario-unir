import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import "../../Css/Home.css";
import { CLIENTES_ENDPOINT, COMPRA_ENDPOINT, PRODUCTOID_ENDPOINT, VENTA_ENDPOINT } from "../../Helpers/endpoints";
import moment from 'moment';

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

  const [ventas, setVentas] = useState();
  const [compras, setCompras] = useState();
  const [valor, setValor] = useState();
  const [clientes, setClientes] = useState();
  const [graficaVent, setGraficaVent] = useState();

  const auxGrafVent = [];

  useEffect( () => {

    axios.get(VENTA_ENDPOINT).then(response => {
      const data = response.data;
      var aux = 0;
      data.forEach(element => {
        aux = aux + element.total;
        var date = new Date(element.fecha)
        auxGrafVent.push({ valor: element.total, fecha: (date.getDate()+1) + "-" + (date.getMonth()+1)})
      });
      setVentas(aux);
      setGraficaVent(auxGrafVent);
    }).catch((e) => console.log(e))

    axios.get(COMPRA_ENDPOINT).then(response => {
      const data = response.data;
      var aux = 0;
      data.forEach(element => {
        aux = aux + element.total;
      });
      setCompras(aux);
    }).catch((e) => console.log(e))

    axios.get(PRODUCTOID_ENDPOINT).then(response => {
      const data = response.data;
      var aux = 0;
      data.forEach(element => {
        aux = aux + element.precio;
      })
      setValor(aux);
    }).catch((e) => console.log(e));

    axios.get(CLIENTES_ENDPOINT).then(response => {
      const data = response.data;
      setClientes(data.length)
    }).catch((e) => console.log(e));

  }, []);

  return (
    <Container>
      <h3 className="alert alert-info mt-4 mr-auto">Home </h3>
      <div className="box-body col-md-16">
        <div className="col-md-12  derecha alertas">
          <div className="alert alert-secondary col-md-5 derecha" role="alert">
            Ventas ${ventas} pesos
          </div>
          <div className="alert alert-success col-md-5 izquierda" role="alert">
            Compras ${compras} pesos
          </div>
        </div>
        <div className="col-md-12 izquierda alertas">
          <div className="alert alert-warning col-md-5 derecha" role="alert">
            Clientes {clientes}
          </div>
          <div className="alert alert-primary col-md-5 izquierda" role="alert">
            Valor inventario ${valor} pesos
          </div>
        </div>
        <div className="col-md-12">
          <p className="text-center"> Grafica de ventas</p>
          <div className="chartdiv">
            <Row className="chart">
              <BarChart
                width={350}
                height={400}
                data={graficaVent}
                options="responsive"
              >
                <Bar dataKey="valor" fill="green" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="fecha" />
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
