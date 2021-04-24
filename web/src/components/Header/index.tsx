import React from "react";
import { Link } from "react-router-dom"
import { FiImage, FiUpload, FiLogIn, FiLogOut } from "react-icons/fi"
import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <Link to="/"><FiImage /> Galeria</Link>
                <Link to="/upload"><FiUpload /> Upload</Link>
                <Link to="/upload"><FiLogIn /> Entrar</Link>
                {/* <Link to="/upload"><FiLogOut /> Sair</Link> */}
            </Content>
        </Container>
    )
}