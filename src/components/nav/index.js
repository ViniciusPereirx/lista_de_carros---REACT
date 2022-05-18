import React, { Fragment } from "react";

const Nav = () => {
    return (
        <Fragment>
            {/*Usando a biblioteca Bootstrap para definir a página de navegação que está sendo implementada nas funções "Cars" e "Home"*/}
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand" href="/">
                            <img
                                src="https://i.pinimg.com/originals/b5/74/04/b574045f483218530f7f284802a03ec7.png"
                                width="50px"
                                height="40px"
                            ></img>
                        </a>
                        <a
                            style={{ fontSize: "18px" }}
                            className="navbar-brand"
                            href="/"
                        >
                            <strong>Adicionar carros</strong>
                        </a>
                        <a
                            style={{ fontSize: "18px" }}
                            className="navbar-brand"
                            href="/home"
                        >
                            <strong>Lista de carros</strong>
                        </a>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Nav;
