import React from 'react'
import * as C from "./styles"
import { PiWebhooksLogoFill } from "react-icons/pi"




export const Page = () => {
  return (
    <>
    <C.Header>
        <C.TitleContainer>
        <C.LogoContainer>
          <PiWebhooksLogoFill size={35} color="red"/>
          <C.Title> 
            Portfólio FTT
          </C.Title>
          </C.LogoContainer>
        </C.TitleContainer>

        <C.NavLinksContainer>
          <C.NavLinks href="#sobre-ftt">Sobre a FTT</C.NavLinks>
          <C.NavLinks href="#quem-somos">Quem Somos</C.NavLinks>
          <C.NavLinks href="#projetos">Projetos</C.NavLinks>
          <C.NavLinks href="#contato" >Contato</C.NavLinks>
        </C.NavLinksContainer> 
    </C.Header> 


    <C.Container>
      <C.Frase>Formando pessoas para transformar o mundo</C.Frase>
      <C.MainImage src="https://i.pinimg.com/564x/42/8a/84/428a842973de218b0e73a00c2ac152d8.jpg"/>
    </C.Container>

    <C.Container>
      <C.Secundaryimg src="https://i.pinimg.com/564x/11/66/a0/1166a0200d1b5a3fe558160d7d205327.jpg"/>
      <C.Text>
        <C.SecondaryFrase id="sobre-ftt">Sobre a FTT</C.SecondaryFrase>
        <C.Secondarytext>
            A Fábrica de Tecnologias Turing (FTT) foi estabelecida em 2006 com o intuito de proporcionar aos discentes a oportunidade de aplicar os conhecimentos teóricos adquiridos durante o processo de formação acadêmica por meio da realização de projetos reais. A empresa também busca preparar e apoiar tanto os discentes quanto os docentes do Centro Universitário UniEVANGÉLICA na realização de pesquisas, bem como intensificar o relacionamento entre empresas e universidades, facilitando o ingresso de futuros profissionais no mercado.	A FTT é constantemente atualizada em técnicas, metodologias e ferramentas por meio do Núcleo de Capacitação. Os docentes dos cursos superiores de computação têm a oportunidade de vivenciar todas as etapas do desenvolvimento de software na empresa, desde a análise de negócio até o teste, implantação e manutenção dos sistemas desenvolvidos. A FTT já realizou diversos projetos importantes nos últimos anos, tais como o Avic, Poseidon e BioCrops, entre outros
        </C.Secondarytext>
      </C.Text>
    </C.Container>
    
    <C.ThirdContainer>
      <C.Text>
        <C.SecondaryFrase id="quem-somos">Quem somos </C.SecondaryFrase>
        <C.Secondarytext>
           A Fábrica de Tecnologias Turing (FTT) tem uma longa história de excelência em proporcionar aos estudantes a oportunidade de aplicar seus conhecimentos em projetos reais. Como uma empresa que está constantemente atualizada em técnicas, metodologias e ferramentas, a FTT está se preparando para uma transformação digital emocionante em 2023.Neste ano, a FTT vai dar um grande passo em direção a um futuro digital mais avançado e vibrante. Com as mais recentes tecnologias e metodologias, a FTT irá modernizar seus processos de desenvolvimento de software para se tornar ainda mais eficiente, eficaz e inovadora.A transformação digital da FTT será uma verdadeira revolução em sua abordagem de negócios, permitindo que ela ofereça soluções tecnológicas ainda mais sofisticadas e eficazes para seus clientes e parceiros. Ao aproveitar as últimas tendências em desenvolvimento de software, a FTT será capaz de expandir ainda mais sua oferta de produtos e serviços, proporcionando aos seus clientes uma vantagem competitiva no mercado.Com essa transformação digital, a FTT estará ainda mais preparada para enfrentar os desafios futuros e ajudar seus clientes a alcançar seus objetivos de negócios. 
        </C.Secondarytext>
      </C.Text>
      <C.Thirdimg src="https://i.pinimg.com/564x/99/f5/17/99f517efee6e65093982a853a4030c5a.jpg"/>
    </C.ThirdContainer>


      
        <C.TextProject id="projetos">Projetos</C.TextProject>
        <C.Projetos>
          <C.Cards> 
            <C.CardImg src="https://github.com/EdwinNRM/Portfolio_FTT/blob/master/static/img/poseidon.jpg?raw=true"/>
            <C.CardsText>
            Poseidon 
            </C.CardsText>
            <C.CardsFrase>
            Software de registro de ocorrencias para o corpo de bombeiros de Anápolis
            </C.CardsFrase>
          </C.Cards>
          <C.Cards>
            <C.CardImg src="https://github.com/EdwinNRM/Portfolio_FTT/blob/master/static/img/avic.jpg?raw=true"/>
            <C.CardsText>
            Avic
            </C.CardsText>
            <C.CardsFrase>
            Sistema de correção de provas automatizado para a UniEVANGÉLICA.
            </C.CardsFrase>
          </C.Cards>
          <C.Cards>
            <C.CardImg src="https://github.com/EdwinNRM/Portfolio_FTT/blob/master/static/img/bcrops.jpg?raw=true"/>
            <C.CardsText>
            Biocrops
            </C.CardsText>
            <C.CardsFrase>
            Software para auxílio na garantia de qualidade de grãos.
            </C.CardsFrase>
          </C.Cards>
        </C.Projetos>

        <C.Contact id="contato">
          <C.ContactH1>
          Contato
          </C.ContactH1>
            <C.Input type='' placeholder='Digite seu nome' required/>
            <C.Input type='email' placeholder='Digite seu Email' required/>
            <C.TextArea type='' placeholder='Digite sua mensagem' required/>
            <C.Button>Enviar</C.Button>
        </C.Contact>
       

    </>
  );  
}
