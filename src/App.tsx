import React, { useState } from "react";
import "./App.css"
import Sidebar from './componentes/sidebar/Sidebar'
import PersonalProfile from './componentes/personalProfile/PersonalProfile'
import ProfessionalExperience from './componentes/professionalExperience/ProfessionalExperience'
import { DadosDoUsuario } from './types';


function App() {

  const fakeAPI:DadosDoUsuario =
    {
      nome: 'Karina Guizelli',
      ocupacao: 'Future Frontend Dev',
      resumo: 'Studying to become a FrontEnd developer focused on JavaScript and React.Js ',
      perfilProfissional: 'Besides my lack of professional experience as developer, I am studying to migrated from my current career on networks/telecom area. Also advanced speaker of English and Spanish - not mentioning Portuguese(Brazil) native. ',
      contatos: [
        {
          id: 1,
          tipo: 'Cellphone',
          contato: '(19) 997174411'
        },
        {
          id: 2,
          tipo: 'E-mail',
          contato: 'karina.guizelli@gmail.com'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: ' POLICAMP - Faculdade Politécnica de Campinas ',
          curso: 'Direito'
        },
        {
          id: 2,
          instituicao: 'Pearson UK',
          curso: 'BTEC Management'
        },
        {
          id: 3,
          instituicao: 'Campinas Tech Talents',
          curso: 'FrontEnd programming bootcamp using JavaScript and React.JS '
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Duty Manager',
          periodo: 'Novembro 2019 - Nowdays',
          empresa: 'British Telecom',
          local: 'Hortolândia, São Paulo',
          conteudo: 'Critical incidents, crisis, high profile management. ITSM focused professional who ensures that the hired SLA is being accomplished.'
        },
        {
          id: 2,
          cargo: 'Access Development Manager',
          periodo: 'Nov 2017 - Nov 2019',
          empresa: 'British Telecom',
          local: 'Hortolândia, São Paulo',
          conteudo: 'Market analysis (regarding prices, coverage and some technical aspects) in order to define who would be the best key players for delivering the accesses on BT’s behalf and perform a benchmarking analysis.'
        },
        {
          id: 3,
          cargo: 'Delivery Manager',
          periodo: 'Dec 2015 - Nov 2017',
          empresa: 'British Telecom',
          local: 'Hortolândia, São Paulo',
          conteudo: 'Delivery and quality assurance of the deliveries to the end customer, by allocating the correct BT infrastructure to meet customer request, which included: port allocation at BT’s network, access equipment supply (normally Cisco), equipment configuration (test and turn up) and order request to the access providers (stakeholders for BT)'
        },
        {
          id: 4,
          cargo: 'Network Analyst',
          periodo: 'Jul 2014 - Nov 2015',
          empresa: 'GlobalHitss (Embratel allocated)',
          local: 'Campinas, São Paulo',
          conteudo: 'Developing and applying network scripts based on customer requirement in order to enable network at their work sites. Coordinating and assisting field technicians during the network equipment installation in order to fully activate their WAN service (access and equipment) to the end customer.'
        }
      ]
  }


const [respostaAPI] = useState<DadosDoUsuario>(fakeAPI)


const {nome, ocupacao, resumo, perfilProfissional, contatos, educacao, experiencia} = respostaAPI

  return (
    <main>
{/* Aqui entra um novo componente que irá mostrar a foto, nome/sobrenome, o título e o que eu faço. Componente nomeado de 'PersonalProfile'  */}
      < PersonalProfile nome={nome} ocupacao={ocupacao} resumo={resumo} perfilProfissional={perfilProfissional} />

{/* Aqui entra o main componente de barra lateral que define Contatos e Educação que eu nomeei 'sidebar'*/}
        <Sidebar contatos={contatos} educacao={educacao}/>

{/* Aqio emtra um novo componente chamado ProfessionalExperience que vai definir toda a experiência profissioanl */}
        < ProfessionalExperience experienceList={experiencia} />
    </main>
  );
}

export default App;