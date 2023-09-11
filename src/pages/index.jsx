import React from 'react'
import * as C from "./styles"
import { PiWebhooksLogoFill } from "react-icons/pi"




export const Page = () => {
  return (
    <>
    <C.Header >
        <C.TitleContainer>
        <C.LogoContainer>
          <PiWebhooksLogoFill size={35} color="red"/>
          <C.Title  href="#Portfólio-FTT"> 
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
      <C.Frase id ="Portfólio-FTT">Formando pessoas para transformar o mundo</C.Frase>
      <C.MainImage src="https://i.pinimg.com/564x/42/8a/84/428a842973de218b0e73a00c2ac152d8.jpg"/>
    </C.Container>

    <C.Container>
      <C.Secundaryimg src="https://i.pinimg.com/564x/11/66/a0/1166a0200d1b5a3fe558160d7d205327.jpg"/>
      <C.Text>
        <C.SecondaryFrase id="sobre-ftt">Sobre a FTT</C.SecondaryFrase>
        <C.Secondarytext>
        A Fábrica de Tecnologias Turing (FTT), fundada em 2006, tem como objetivo permitir que os estudantes apliquem seus conhecimentos teóricos em projetos reais. Ela também apoia a pesquisa e o relacionamento entre universidade e empresas, facilitando a entrada de futuros profissionais no mercado. A FTT se mantém atualizada através do Núcleo de Capacitação e oferece aos docentes de cursos de computação a experiência completa no desenvolvimento de software, desde análise de negócios até teste, implantação e manutenção de sistemas. Ao longo dos anos, a FTT concluiu projetos significativos, incluindo Avic, Poseidon e BioCrops, entre outros.
        </C.Secondarytext>
      </C.Text>
    </C.Container>
    
    <C.ThirdContainer>
      <C.Text>
        <C.SecondaryFrase id="quem-somos">Quem somos </C.SecondaryFrase>
        <C.Secondarytext>

              A Fábrica de Tecnologias Turing (FTT) possui uma rica história de envolver estudantes em projetos reais e está se preparando para uma transformação digital em 2023. Com seu compromisso em manter-se atualizada em técnicas e metodologias, a FTT planeja modernizar seus processos de desenvolvimento de software, visando maior eficiência e inovação. Essa transformação promete revolucionar a abordagem de negócios da FTT, permitindo que ofereça soluções tecnológicas mais sofisticadas. Esse passo audacioso impulsionará a FTT em direção a um futuro digital mais avançado, mantendo-se alinhada com as últimas tecnologias e metodologias, beneficiando clientes e parceiros.
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
