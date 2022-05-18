import React, { Fragment, useEffect, useState } from "react";
import Nav from "../nav";

//Criada uma função utilizando o método "Fetch" para conseguir ter acesso a API "cars.json".
async function getCars() {
    let response = await fetch("http://localhost:3000/api/cars.json");
    let data = await response.json();

    //Utilizando o método "map" para fazer a conversão da propriedade "timestamp_cadastro" em ano.
    data.map((item) => {
        return (item.timestamp_cadastro = new Date(
            eval(item.timestamp_cadastro)
        ).getFullYear());
    });

    //Criada uma variável para listar os 5 carros mais recentes cadastrados.
    let recentCars = data
        .sort((x, y) => x.timestamp_cadastro - y.timestamp_cadastro)
        .reverse()
        .slice(0, 5);

    //Criada uma variável para listar os carros que tem ano abaixo de 2005.
    const carsOld = data.filter((car) => car.ano < 2005);

    //Criada uma função para listar os 3 carros mais baratos da API.
    const promotion = data
        .sort((x, y) => eval(x.valor_fipe) - eval(y.valor_fipe))
        .slice(0, 3);

    //Criada um objeto para retornar as variáveis "recentCars", "carsOld" e "promotion".
    let retorno = {
        recentCars: recentCars,
        carsOld: carsOld,
        promotion: promotion,
    };
    return retorno;
}

const List = () => {
    const [cars, setList] = useState({
        recentCars: [],
        carsOld: [],
        promotion: [],
    });

    //Criado um método useEffect para ter acesso a API que foi implementada na função getCars.
    useEffect(() => {
        getCars().then((data) => {
            setList(data);
        });
    }, []);

    return (
        <Fragment>
            {/* Chamando a função <Nav/> que foi importada*/}
            <Nav />
            <br />
            {/*Utilizando o método "map" para organizar as propriedades da API de acordo com as determinadas variáveis("recentCars", "carsOld" e "promotion") criadas, sendo utilizada a biblioteca Bootstrap para a criação da tabela*/}
            <table className="table table-striped table-dark container">
                <thead>
                    <tr className="text text-center">
                        <th>Novos carros</th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        {cars.recentCars.map((item, index) => {
                            return (
                                <div>
                                    <tr key={index}>
                                        <td >
                                            <strong>
                                                {item.nome_modelo}:{" "}
                                                {item.timestamp_cadastro}
                                            </strong>
                                        </td>
                                    </tr>
                                </div>
                            );
                        })}
                    </td>
                </tbody>
            </table>
            <table  className="table table-striped table-dark container">
                <thead>
                    <tr className="text text-center">
                        <th>Carros antigos</th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        {cars.carsOld.map((item, index) => {
                            return (
                                <div>
                                    <tr key={index}>
                                        <td>
                                            <strong>
                                                {item.nome_modelo}: {item.ano}
                                            </strong>
                                        </td>
                                    </tr>
                                </div>
                            );
                        })}
                    </td>
                </tbody>
            </table>
            <table className="table table-striped table-dark container">
                <thead>
                    <tr className="text text-center">
                        <th>Carros em promoção</th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        {cars.promotion.map((item, index) => {
                            return (
                                <div>
                                    <tr key={index}>
                                        <td>
                                            <strong>
                                                {item.nome_modelo}:{" "}
                                                {item.valor_fipe} Mil
                                            </strong>
                                        </td>
                                    </tr>
                                </div>
                            );
                        })}
                    </td>
                </tbody>
            </table>
        </Fragment>
    );
};

export default List;
