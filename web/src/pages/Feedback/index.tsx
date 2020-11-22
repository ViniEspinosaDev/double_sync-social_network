import React, { ChangeEvent, useState } from 'react';

export const Feedback = () => {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    });

    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        const nome = event.target.value;
        setFormData({ ...formData, nome });
    }

    return (
        <div>
            <h1>Tela de feedback :)</h1>
            <p>Saudações! Essa é uma tela que criamos para receber de nossos usuários
            os feedbacks, relatos de bugs/erros, críticas e sugestões de melhorias para aperfeiçoarmos
                e atendermos cada vez mais as espectatívas dos nossos usuários.</p>
            <br />
            <form id="form-feedback">
                <p>Nome: </p>
                <input type="text" name="nome" placeholder="nome" onChange={handleNome} />
                <br />
                <p>E-mail:</p>
                <input type="text" name="email" placeholder="email" />
                <br />
                <p>Assunto:</p>
                <input type="text" name="assunto" placeholder="assunto" />
                <br />
                <p>Mensagem:</p>
                <textarea id="msg"></textarea>
                {/* <input type="text" name="mensagem" placeholder="digite aqui sua mensagem" /> */}
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
};

export default Feedback;