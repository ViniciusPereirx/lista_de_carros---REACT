import React, { Fragment, useEffect, useState } from "react";
import Form from "./form";
import Nav from "../nav";

//Criada uma função utilizando o método "Fetch" para conseguir ter acesso a API.
async function getCars() {
    let response = await fetch("http://localhost:3000/api/cars.json");
    let data = await response.json();

    //Criada uma variável com o método "map" para exibir a listagem de carros atráves das marcas e instanciando com o método "push".
    const marcas = [];
    data.map((car) => {
        if (marcas.indexOf(car.marca_nome) === -1) {
            marcas.push(car.marca_nome);
        }
    });

    //Criado um filtro para riquisitar uma propriedade do array e chamando a função "convertaData" com a data convertida.
    const filter = (marca_nome, arr) =>
        arr.filter((car) => {
            if (car.marca_nome === marca_nome) {
                car.data = convertData(car.timestamp_cadastro);
                return car;
            }
        });

    //Criada uma variável com o método "map" buscando o agrupamento de carros da variável "marcas" e agrupando o instanciamento de uma nova marca.
    let marcas_agrup = [];
    marcas.map((car) => {
        let marca = {
            marca_nome: car,
            cars: filter(car, data),
        };

        marcas_agrup.push(marca);
    });

    return marcas_agrup;
}

//Criada uma função para convertar a propriedade "timestamp_cadastro" em data.
const convertData = (timestamp_cadastro) => {
    return new Date(eval(timestamp_cadastro)).toLocaleDateString();
};

const Cars = () => {
    const [cars, setCars] = useState([]);

    //Criado um método useEffect para ter acesso a API que foi implementada na função getCars.
    useEffect(() => {
        getCars().then((data) => {
            setCars(data);
        });
    }, []);

    //Criada uma variável para adicionar novos carros que vai ser inserido atráves do input que está sendo importada <Form/>, com a propriedade "timestamp_cadastro" convertida em data.
    const addCars = (new_cars) => {
        new_cars.timestamp_cadastro = new Date(
            new_cars.timestamp_cadastro
        ).getTime();
        new_cars.data = convertData(new_cars.timestamp_cadastro);

        //Criada uma variável com o método "map" para inserir uma nova marca de carros e atribuir seus elementos inseridos no "input"
        let new_agroup = [...cars];
        let new_marca = true;
        new_agroup.map((item) => {
            if (item.marca_nome === new_cars.marca_nome) {
                item.cars.push(new_cars);
                new_marca = false;
            }
        });
        if (new_marca) {
            let marca = {
                marca_nome: new_cars.marca_nome,
                cars: [new_cars],
            };
            new_agroup.push(marca);
        }
        setCars(new_agroup);
    };

    return (
        <Fragment>
            {/* Chamando a função <Nav/> que foi importada*/}
            <Nav />
            {/* Chamando a função <Form/> que foi importada, e passando a variável "addCars"*/}
            <Form addCars={addCars} />
            <hr />
            {/*Utilizando o método "map" para organizar os elementos inseridos e adicionando em uma tabela, sendo utilizada a biblioteca Bootstrap*/}
            {cars.map((item) => {
                return (
                    <div style={{fontSize: "13px"}} className="container">
                        <div>
                            <div>
                                <h5 className="text text-center">
                                    <strong>{item.marca_nome}</strong>
                                </h5>
                            </div>
                            <table className="table table-striped table-dark table-hover container">
                                <thead>
                                    <tr className="text text-center">
                                        <th>MODELO</th>
                                        <th>ANO</th>
                                        <th>Combustivel</th>
                                        <th>Portas</th>
                                        <th>Tabela FIPE</th>
                                        <th>COR</th>
                                        <th>DATA CADASTRO</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {item.cars.map((car, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className="list-item text text-center"
                                            >
                                                <td>
                                                    <strong>
                                                        {car.nome_modelo}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>{car.ano}</strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {car.combustivel}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {car.num_portas}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {car.valor_fipe} Mil
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>{car.cor}</strong>
                                                </td>
                                                <td>
                                                    <strong>{car.data}</strong>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            })}
        </Fragment>
    );
};

export default Cars;
