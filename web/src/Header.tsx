import React from 'react'

// Atribuir as propriedades do componente
interface HeaderProps {
    title: string;
    //title?: string; Dessa forma com interrogação é para campos Não obrigatórios
}

// Forma mais fácil de construir o componente que recebe parâmetros
// React.FC = React Function Component
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;