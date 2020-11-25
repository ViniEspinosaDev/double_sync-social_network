import React, { ChangeEvent, useState } from 'react';

import './styles.css';
import logo_quadrada from '../../assets/logo-quadrada.svg'


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

            <div className="div-principal">


                <h1>
                    Nos dê seu feedback :)
                </h1>
                <br />





                <p>Saudações! Essa é uma tela que criamos para receber de nossos usuários
                os feedbacks, relatos de bugs/erros, críticas
                <br/> e sugestões de melhorias para aperfeiçoarmos
                e atendermos cada vez mais as espectatívas dos nossos usuários.</p>
                <br />
                <div className="forms">
                <img src={logo_quadrada} alt="Double Sync logo" />
                <form id="form-feedback">
                    
                    <input type="text" name="nome" placeholder="Nome" onChange={handleNome} />
                    <br />
                    
                    <input type="text" name="email" placeholder="Email" />
                    <br />
                    
                    <input type="text" name="assunto" placeholder="Assunto" />
                    <br />
                    
                    <textarea id="msg" placeholder="Mensagem"></textarea>
                    {/* <input type="text" name="mensagem" placeholder="digite aqui sua mensagem" /> */}
                    <br />
                    <button type="submit" className="button">Enviar</button>
                </form>
                </div>
            </div>

        </div>
    )
};

export default Feedback;