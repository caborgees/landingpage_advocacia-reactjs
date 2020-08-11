import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <navbar> 
          <ul> 
            <li> Sobre</li>
            <li> Advogados</li>
            <li> Contato</li>


          </ul>
        </navbar>
      <img src={require('./images/banner.png')} className="Banner"></img> 
      <img src={require('./images/banner2.png')} className="Banner"></img>
       </header>

<div classname="container"> 
       <img src={require('./images/law.png')} className="Banner3"></img>
       <div className="Sobre">
        <h2> Sobre a Martines</h2>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
         <button> Leia Mais</button>
      </div>
</div>

<div className="Servicos"> 
<h2> Nós lutamos pela sua causa</h2>

<div className="blocos" >
  <div className="bloco1"> 
  <img src={require('./images/icon.ico')} className="icon"></img>

  <h6> Direito Empresarial</h6>
  <p> It is a long established fact that a reader will be distracted . </p>
  
  </div>

  <div className="bloco2"> 
  <img src={require('./images/icon.ico')} className="icon"></img>

  <h6> Direito de Familia</h6>
  <p> It is a long established fact that a reader will be distracted . </p>
  
  </div>
  <div className="bloco3"> 
  <img src={require('./images/icon.ico')} className="icon"></img>

  <h6> Direito Criminal</h6>
  <p> It is a long established fact that a reader will be distracted . </p>
  
  </div>

  <div className="bloco3">
  <img src={require('./images/icon.ico')} className="icon"></img>

  <h6> Direito Trabalhista</h6>
  <p> It is a long established fact that a reader will be distracted . </p>
  
  </div>


  
   </div>
<div className="Imagem">
<img src={require('./images/foto.png')} ></img></div>

   </div>
<div className="Profissionais"> 
<h2> Conheça nossos Profissionais</h2>
<p> Nossa equipe com advogados extremamente qualificados.</p>
<div className="Advogados">
<img src={require('./images/adv1.png')} ></img>
<img src={require('./images/adv2.png')} ></img>
<img src={require('./images/adv3.png')} ></img>


</div>

</div>
<footer> 
<h2>Estamos esperando seu contato!</h2>
<p> It is a long established fact that. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
<h4> +55 61 3309-2391</h4>
<h4> lowadvogadosassociados@gmail.com</h4>

</footer>

    </div>

  );
}

export default App;

/*Nesta pagina eu ja estou exportand o App e chamando na outra page,
 o estilo esta com App.Css */
