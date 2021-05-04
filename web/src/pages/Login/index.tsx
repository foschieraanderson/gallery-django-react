import React from "react";
import { Header } from "../../components/Header";

import { Container, Content } from "./styles";

export function Login() {
    return (
        <>
        <Header />
        <Container>
            <Content>
                <form>
                    <h2>Login</h2>
                    <ul id="error">
                        <li>Senha inválida</li>
                    </ul>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Senha"
                    />
                    <button type="submit">Entrar</button>
                </form>
            </Content>
        </Container>
        </>
    );
}