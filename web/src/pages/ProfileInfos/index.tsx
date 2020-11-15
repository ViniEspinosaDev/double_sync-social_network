import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

import './styles.css';

import logo from '../../assets/logo-horizontal.svg';
import logo_quadrada from '../../assets/logo-quadrada.svg';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

/* Essa tela será aberta após a realização do cadastro para 
    que o usuário informe as seguintes informações
    - Nome:
    - Data nascimento:
    - Gênero sexual:
    - Biografia:
    - Pais
    - Uf:
    - Cidade:

    FUTURAMENTE ATRIBUIR PARA O USUÁRIO ESCOLHER JÁ UMA FOTO DE PERFIL E UMA FOTO DE CAPA PARA SEU PERFIL :)
*/

const history = useHistory();

interface IBGEUFResponse {
    sigla: string
}

interface IBGECityResponse {
    nome: string
}

function getCountriesName() {
    const countries = [
        "Afeganistão",
        "África do Sul",
        "Akrotiri",
        "Albânia",
        "Alemanha",
        "Andorra",
        "Angola",
        "Anguila",
        "Antárctida",
        "Antígua e Barbuda",
        "Arábia Saudita",
        "Arctic Ocean",
        "Argélia",
        "Argentina",
        "Arménia",
        "Aruba",
        "Ashmore and Cartier Islands",
        "Atlantic Ocean",
        "Austrália",
        "Áustria",
        "Azerbaijão",
        "Baamas",
        "Bangladeche",
        "Barbados",
        "Barém",
        "Bélgica",
        "Belize",
        "Benim",
        "Bermudas",
        "Bielorrússia",
        "Birmânia",
        "Bolívia",
        "Bósnia e Herzegovina",
        "Botsuana",
        "Brasil",
        "Brunei",
        "Bulgária",
        "Burquina Faso",
        "Burúndi",
        "Butão",
        "Cabo Verde",
        "Camarões",
        "Camboja",
        "Canadá",
        "Catar",
        "Cazaquistão",
        "Chade",
        "Chile",
        "China",
        "Chipre",
        "Clipperton Island",
        "Colômbia",
        "Comores",
        "Congo-Brazzaville",
        "Congo-Kinshasa",
        "Coral Sea Islands",
        "Coreia do Norte",
        "Coreia do Sul",
        "Costa do Marfim",
        "Costa Rica",
        "Croácia",
        "Cuba",
        "Curacao",
        "Dhekelia",
        "Dinamarca",
        "Domínica",
        "Egipto",
        "Emiratos Árabes Unidos",
        "Equador",
        "Eritreia",
        "Eslováquia",
        "Eslovénia",
        "Espanha",
        "Estados Unidos",
        "Estónia",
        "Etiópia",
        "Faroé",
        "Fiji",
        "Filipinas",
        "Finlândia",
        "França",
        "Gabão",
        "Gâmbia",
        "Gana",
        "Gaza Strip",
        "Geórgia",
        "Geórgia do Sul e Sandwich do Sul",
        "Gibraltar",
        "Granada",
        "Grécia",
        "Gronelândia",
        "Guame",
        "Guatemala",
        "Guernsey",
        "Guiana",
        "Guiné",
        "Guiné Equatorial",
        "Guiné-Bissau",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungria",
        "Iémen",
        "Ilha Bouvet",
        "Ilha do Natal",
        "Ilha Norfolk",
        "Ilhas Cook",
        "Ilhas dos Cocos",
        "Ilhas Falkland",
        "Ilhas Heard e McDonald",
        "Ilhas Marshall",
        "Ilhas Salomão",
        "Ilhas Turcas e Caicos",
        "Ilhas Virgens Americanas",
        "Ilhas Virgens Britânicas",
        "Índia",
        "Indian Ocean",
        "Indonésia",
        "Irão",
        "Iraque",
        "Irlanda",
        "Islândia",
        "Israel",
        "Itália",
        "Jamaica",
        "Jan Mayen",
        "Japão",
        "Jersey",
        "Jibuti",
        "Jordânia",
        "Kosovo",
        "Kuwait",
        "Laos",
        "Lesoto",
        "Letónia",
        "Líbano",
        "Libéria",
        "Líbia",
        "Listenstaine",
        "Lituânia",
        "Luxemburgo",
        "Macau",
        "Macedónia",
        "Madagáscar",
        "Malásia",
        "Malávi",
        "Maldivas",
        "Mali",
        "Malta",
        "Man, Isle of",
        "Marianas do Norte",
        "Marrocos",
        "Maurícia",
        "Mauritânia",
        "México",
        "Micronésia",
        "Moçambique",
        "Moldávia",
        "Mónaco",
        'Mongólia',
        "Monserrate",
        "Montenegro",
        "Mundo",
        'Namíbia',
        "Nauru",
        "Navassa Island",
        "Nepal",
        "Nicarágua",
        "Níger",
        "Nigéria",
        "Niue",
        "Noruega",
        "Nova Caledónia",
        "Nova Zelândia",
        "Omã",
        "Pacific Ocean",
        'Países Baixos',
        'Palau',
        "Panamá",
        "Papua-Nova Guiné",
        "Paquistão",
        "Paracel Islands",
        "Paraguai",
        "Peru",
        'Pitcairn',
        "Polinésia Francesa",
        "Polónia",
        "Porto Rico",
        "Portugal",
        "Quénia",
        "Quirguizistão",
        "Quiribáti",
        "Reino Unido",
        "República Centro-Africana",
        "República Dominicana",
        "Roménia",
        "Ruanda",
        "Rússia",
        "Salvador",
        "Samoa",
        "Samoa Americana",
        "Santa Helena",
        "Santa Lúcia",
        "São Bartolomeu",
        "São Cristóvão e Neves",
        "São Marinho",
        "São Martinho",
        "São Pedro e Miquelon",
        "São Tomé e Príncipe",
        "São Vicente e Granadinas",
        "Sara Ocidental",
        "Seicheles",
        "Senegal",
        "Serra Leoa",
        "Sérvia",
        "Singapura",
        "Sint Maarten",
        "Síria",
        "Somália",
        "Southern Ocean",
        "Spratly Islands",
        "Sri Lanca",
        "Suazilândia",
        "Sudão",
        "Sudão do Sul",
        "Suécia",
        "Suíça",
        "Suriname",
        "Svalbard e Jan Mayen",
        "Tailândia",
        "Taiwan",
        "Tajiquistão",
        "Tanzânia",
        "Território Britânico do Oceano Índico",
        "Territórios Austrais Franceses",
        "Timor Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trindade e Tobago",
        "Tunísia",
        "Turquemenistão",
        "Turquia",
        "Tuvalu",
        "Ucrânia",
        "Uganda",
        "União Europeia",
        "Uruguai",
        "Usbequistão",
        "Vanuatu",
        "Vaticano",
        "Venezuela",
        "Vietname",
        "Wake Island",
        "Wallis e Futuna",
        "West Bank",
        "Zâmbia",
        "Zimbabué"
    ];

    return countries;
}

const ProfileInfos = () => {

    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [formData, setFormData] = useState({
        name: '',
        birth: '',
        biography: ''
    });

    const [selectedSex, setSelectedSex] = useState('0');
    const [selectedCountry, setSelectedCountry] = useState('0');
    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');

    useEffect(() => {
        if (selectedCountry === 'Brasil') {
            axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
                const ufInitials = response.data.map(uf => uf.sigla);
                setUfs(ufInitials);
            })
        } else {
            setSelectedUf('0');
            setUfs([]);
            setSelectedCity('0');
        };
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedUf === '0') {
            return;
        }

        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
            const citiesName = response.data.map(city => city.nome);
            setCities(citiesName);
        })
    }, [selectedUf]);

    function handleSelectCountry(event: ChangeEvent<HTMLSelectElement>) {
        const country = event.target.value;
        setSelectedCountry(country);
    }

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;
        setSelectedUf(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;
        setSelectedCity(city);
    }

    function handleSelectSex(event: ChangeEvent<HTMLSelectElement>) {
        const sex = event.target.value;
        setSelectedSex(sex);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { name, birth, biography } = formData;
        const country = selectedCountry;
        const uf = selectedUf;
        const city = selectedCity;
        const sex = selectedSex;

        const data = {
            name,
            birth,
            biography,
            country,
            uf,
            city,
            sex
        };

        // Aqui deve atualizar o cadastro que já foi feito anteriormente com o email e a senha
        // Pesquisar como atualiza um registro em react/node
        // Pesquiser como passar o ID para um formulário, pois esse formulário precisa do ID do cadastro
    
        console.log(data);
        //const id = await api.put('', data);

        // if (id) {
        //     alert('Cadastro atualizado com sucesso.');
        // }
        // else{
        //     alert('Ops... Algo deu errado na atualização do cadastro :(');
        // }

        // Colocar a rota da tela de perfil ou feed de noticias :)
        //history.push('/')
    }

    return (
        <div className="page-profileInfos" >
            <header>
                <img src={logo} alt="Double Sync Logo"></img>
            </header>
            <form onSubmit={handleSubmit}>
                <img src={logo_quadrada} alt="Double Sync Logo"></img>
                <h1>Bem vindo(a)! Está na hora de criar seu perfil</h1>
                <p>Preencha os seguintes campos e depois clique em continuar</p>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="sex">Sexo</label>
                            <select name="sex" id="sex" value={selectedSex} onChange={handleSelectSex}>
                                <option value="0">Selecione um sexo</option>
                                <option value="male">Masculino</option>
                                <option value="female">Feminino</option>
                                <option value="none">Prefiro não informar</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="birth">Nascimento</label>
                            <input
                                type="date"
                                name="birth"
                                id="birth"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="biography">Biografia</label>
                        <input
                            type="text"
                            name="biography"
                            id="biography"
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="country">Pais</label>
                        <select
                            name="country"
                            id="country"
                            value={selectedCountry}
                            onChange={handleSelectCountry}>

                            <option value="0">Selecione um pais</option>
                            {getCountriesName().map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf" value={selectedUf} onChange={handleSelectUf}>
                                <option value="0">Selecione uma UF</option>
                                {ufs.map(uf => (
                                    <option key={uf} value={uf}>{uf}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city" value={selectedCity} onChange={handleSelectCity}>
                                <option value="0">Selecione uma cidade</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>


                </fieldset>

                <button type="submit">Continuar</button>
            </form>
        </div>
    );
};

export default ProfileInfos;