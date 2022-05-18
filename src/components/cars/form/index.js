import React, { Fragment, useState } from "react";

//Criada uma viriável para iniciar os "input" vazio. será implementada no "useState" da função criada chamada "Form".
const initialState = {
    marca_nome: "",
    nome_modelo: "",
    ano: "",
    combustivel: "",
    num_portas: "",
    valor_fipe: "",
    cor: "",
    timestamp_cadastro: "",
};

const Form = (props) => {
    const [fields, setFields] = useState(initialState);

    //Criada uma variável para manipular os elementos dos "input".
    const handleFieldsChange = (e) =>
        setFields({
            ...fields,
            [e.currentTarget.name]: e.currentTarget.value.toUpperCase(),
        });
    //Criada uma variável para adicionar novos carros, essa função é implementada em um evento "onSubmit"
    const handleSubmit = (event) => {
        props.addCars(fields);
        event.preventDefault();
        setFields(initialState);
    };

    return (
        <Fragment>
            <br />
            {/*Formulário criado utilizando a biblioteca Bootstrap, chamando as funções nos eventos "onSubmit" e "onChange" para implementar na tabela que foi criada na função "Cars" junto com o evento "value"*/}
            <div className="center">
                <form style={{width: "50%"}} className="container" onSubmit={handleSubmit}>
                    <div>
                        <div className="input-group input-group-sm mb-3">
                            <span
                                htmlFor="marca_nome"
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                            >
                                Marca
                            </span>
                            <input
                                required
                                id="marca_nome"
                                type="text"
                                name="marca_nome"
                                value={fields.marca_nome}
                                onChange={handleFieldsChange}
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                            ></input>
                        </div>
                    </div>
                    <div>
                        <div className="input-group input-group-sm mb-3">
                            <span
                                htmlFor="nome_modelo"
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                            >
                                Modelo
                            </span>
                            <input
                                required
                                id="nome_modelo"
                                type="text"
                                name="nome_modelo"
                                value={fields.nome_modelo}
                                onChange={handleFieldsChange}
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                            ></input>
                        </div>
                    </div>
                    <div>
                        <div className="input-group input-group-sm mb-3">
                            <span
                                htmlFor="ano"
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                            >
                                Ano
                            </span>
                            <input
                                required
                                id="ano"
                                type="text"
                                name="ano"
                                value={fields.ano}
                                onChange={handleFieldsChange}
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                            ></input>
                        </div>
                    </div>
                    <div>
                        <div className="input-group input-group-sm mb-3">
                            <span
                                htmlFor="combustivel"
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                            >
                                Combustivel
                            </span>
                            <input
                                required
                                id="combustivel"
                                type="text"
                                name="combustivel"
                                value={fields.combustivel}
                                onChange={handleFieldsChange}
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                            ></input>
                        </div>
                    </div>
                    <div>
                        <div className="input-group input-group-sm mb-3">
                            <span
                                htmlFor="num_portas"
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                            >
                                Portas
                            </span>
                            <input
                                required
                                id="num_portas"
                                type="text"
                                name="num_portas"
                                value={fields.num_portas}
                                onChange={handleFieldsChange}
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                            ></input>
                        </div>
                    </div>
                    <div>
                        <div className="input-group input-group-sm mb-3">
                            <span
                                htmlFor="valor_fipe"
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                            >
                                Tabela FIPE
                            </span>
                            <input
                                required
                                id="valor_fipe"
                                type="text"
                                name="valor_fipe"
                                value={fields.valor_fipe}
                                onChange={handleFieldsChange}
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                            ></input>
                        </div>
                    </div>
                    <div>
                        <div className="input-group input-group-sm mb-3">
                            <span
                                htmlFor="cor"
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                            >
                                Cor
                            </span>
                            <input
                                required
                                id="cor"
                                type="text"
                                name="cor"
                                value={fields.cor}
                                onChange={handleFieldsChange}
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                            ></input>
                        </div>
                    </div>
                    <div>
                        <div className="input-group input-group-sm mb-3">
                            <span
                                htmlFor="timestamp_cadastro"
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                            >
                                Data Cadastro
                            </span>
                            <input
                                required
                                id="timestamp_cadastro"
                                type="date"
                                name="timestamp_cadastro"
                                value={fields.timestamp_cadastro}
                                onChange={handleFieldsChange}
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                            ></input>
                        </div>
                    </div>
                    <button
                        value="adicionar"
                        className="btn btn-success btn-sm"
                    >
                        Adicionar
                    </button>
                </form>
            </div>
        </Fragment>
    );
};

export default Form;
