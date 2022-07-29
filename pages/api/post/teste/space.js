// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import spacesRio from "./spacesRio";

function handlerSpaces(request, response) {
    const space = spacesRio   

    response.json(
       [
  {
    id: 1,
    nome: "Morro da Urca",
    latitude: -22.95153,
    longitude: -43.16363,
    icones: [
    {imagem: 'https://miro.medium.com/max/1400/1*IXAk2ExN6MHXD3wbGJic9g.jpeg'}],
    texto: `    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
  <style>
      .buttonback {
          width: 100px;
          height: 100px;
          background-color: #c9421c;
          border-radius: 50px;
          flex-direction: row;
          position: fixed;
          right: 55px;
          top: 90%;
      }

      .setaLeft {
          margin: 0 auto;
          width: 50px;
          height: 7px;
          overflow: hidden;
          background-color: #d18671;
          transform: rotate(45deg);
          margin-top: 40px;
          margin-left: 40px;
      }

      .setaRigth {
          margin: 0 auto;
          width: 50px;
          height: 7px;
          overflow: hidden;
          background-color: #d18671;
          transform: rotate(-45deg);
          position: absolute;
          margin-top: 40px;
          margin-left: 10px;
      }

      .slider {
          margin: 0 auto;
          width: 950px;
          height: 530px;
          overflow: hidden;

      }


      .slides {
          width: 400%;
          height: 400px;
          display: flex;
      }

      .slides input {
          display: none;
      }

      .imageMap {
          margin: 0 auto;
          width: 900px;
          height: 900px;
          overflow: hidden;
      }

      .imageMap img {
          width: 900px;
      }



      .slide {
          width: 25%;

          transition: 0.7s;
      }

      .slide img {
          width: 950px;
      }


      .manual-navigation {
          position: absolute;
          width: 950px;
          margin-top: 150px;
          display: flex;
          justify-content: center;
          transition: 1s;
      }

      .manual-btn {
          border: 6px solid #c9421c;
          padding: 13px;
          border-radius: 26px;
          cursor: pointer;
      }

      .manual-btn:not(:last-child) {
          margin-right: 70px;
      }

      #radio1:checked~.first {
          margin-left: 0;
      }

      #radio2:checked~.first {
          margin-left: -25%;
      }

      #radio3:checked~.first {
          margin-left: -50%;
      }

      #radio4:checked~.first {
          margin-left: -75%;
      }
      #radio5:checked~.first {
          margin-left: 0;
      }

      #radio6:checked~.first {
          margin-left: -25%;
      }

      #radio7:checked~.first {
          margin-left: -50%;
      }

      #radio8:checked~.first {
          margin-left: -75%;
      }

      #radio9:checked~.first {
          margin-left: 0;
      }

      #radio10:checked~.first {
          margin-left: -25%;
      }

      #radio11:checked~.first {
          margin-left: -50%;
      }

      #radio12:checked~.first {
          margin-left: -75%;
      }
      #radio13:checked~.first {
          margin-left: 0;
      }

      #radio14:checked~.first {
          margin-left: -25%;
      }

      #radio15:checked~.first {
          margin-left: -50%;
      }

      #radio16:checked~.first {
          margin-left: -75%;
      }
      #radio17:checked~.first {
          margin-left: 0;
      }

      #radio18:checked~.first {
          margin-left: -25%;
      }

      #radio19:checked~.first {
          margin-left: -50%;
      }

      #radio20:checked~.first {
          margin-left: -75%;
      }
      #radio21:checked~.first {
          margin-left: 0;
      }

      #radio22:checked~.first {
          margin-left: -25%;
      }

      #radio23:checked~.first {
          margin-left: -50%;
      }

      #radio24:checked~.first {
          margin-left: -75%;
      }
      #radio25:checked~.first {
        margin-left: 0;
      }

      #radio26:checked~.first {
          margin-left: -25%;
      }

      #radio27:checked~.first {
          margin-left: -50%;
      }

      #radio28:checked~.first {
          margin-left: -75%;
      }

      


      .navigation-auto div {
          border: 6px solid #c9421c;
          padding: 13px;
          border-radius: 26px;
          cursor: pointer;
          transition: 0.5s;
      }

      .navigation-auto {
          position: absolute;
          width: 950px;
          margin-top: 550px;
          display: flex;
          justify-content: center;

      }

      .navigation-auto div:not(:last-child) {
          margin-right: 70px;
      }



      #radio1:checked~.navigation-auto .auto-btn1 {
          background-color: #c9421c;
      }

      #radio2:checked~.navigation-auto .auto-btn2 {
          background-color: #c9421c;
      }

      #radio3:checked~.navigation-auto .auto-btn3 {
          background-color: #c9421c;
      }

      #radio4:checked~.navigation-auto .auto-btn4 {
          background-color: #c9421c;
      }

      #radio5:checked~.navigation-auto .auto-btn5 {
          background-color: #c9421c;
      }

      #radio6:checked~.navigation-auto .auto-btn6 {
          background-color: #c9421c;
      }

      #radio7:checked~.navigation-auto .auto-btn7 {
          background-color: #c9421c;
      }

      #radio8:checked~.navigation-auto .auto-btn8 {
          background-color: #c9421c;
      }
      #radio9:checked~.navigation-auto .auto-btn9 {
          background-color: #c9421c;
      }

      #radio10:checked~.navigation-auto .auto-btn10 {
          background-color: #c9421c;
      }

      #radio11:checked~.navigation-auto .auto-btn11 {
          background-color: #c9421c;
      }

      #radio12:checked~.navigation-auto .auto-btn12 {
          background-color: #c9421c;
      }
      #radio13:checked~.navigation-auto .auto-btn13 {
          background-color: #c9421c;
      }

      #radio14:checked~.navigation-auto .auto-btn14 {
          background-color: #c9421c;
      }

      #radio15:checked~.navigation-auto .auto-btn15 {
          background-color: #c9421c;
      }

      #radio16:checked~.navigation-auto .auto-btn16 {
          background-color: #c9421c;
      }
      #radio17:checked~.navigation-auto .auto-btn17 {
          background-color: #c9421c;
      }

      #radio18:checked~.navigation-auto .auto-btn18 {
          background-color: #c9421c;
      }

      #radio19:checked~.navigation-auto .auto-btn19 {
          background-color: #c9421c;
      }

      #radio20:checked~.navigation-auto .auto-btn20 {
          background-color: #c9421c;
      }
      #radio21:checked~.navigation-auto .auto-btn21 {
          background-color: #c9421c;
      }

      #radio22:checked~.navigation-auto .auto-btn22 {
          background-color: #c9421c;
      }

      #radio23:checked~.navigation-auto .auto-btn23 {
          background-color: #c9421c;
      }

      #radio24:checked~.navigation-auto .auto-btn24 {
          background-color: #c9421c;
      }

      #radio25:checked~.navigation-auto .auto-btn25 {
        background-color: #c9421c;
      }

      #radio26:checked~.navigation-auto .auto-btn26 {
          background-color: #c9421c;
      }

      #radio27:checked~.navigation-auto .auto-btn27 {
          background-color: #c9421c;
      }

      #radio28:checked~.navigation-auto .auto-btn28 {
          background-color: #c9421c;
      }

      .divMain {
          color: #c9421c;
          font-size: 250%;
      }

      .title {
          color: #c9421c;
          font-size: 150%;
          margin-left: 30;
      }

      .textDesc {
          color: #c9421c;
          font-size: 250%;
          margin-top: 40px;
          margin: 50;
          text-align: justify;
      }

      .link {
          color: #c9421c;
          font-size: 250%;
          margin-top: 40px;
          margin-left: 110;
          text-align: justify;
          text-decoration: underline;
      }

      .divitems {
          color: #c9421c;
          font-size: 250%;
          margin-top: 40px;
          margin-left: 50;
         
      }

      .material-icons{
         font-size: 45px;
         margin-left: 25px;
         margin-right: 15px;
      }
  </style>
    
        
        <div class="imageMap" id="mapImage">
        <img src="https://www.google.com/maps/d/u/0/thumbnail?mid=1g86glcpv9X32YOoGrgmmVfnj7X4&hl=en" alt="imageMap">
    </div>
    <div class="divitems">
        
        
         <p style="width: 900px;"> 
            
            <span class="material-icons">
                directions_walk
                </span>
            <a style="width: 400px;">leve à moderada</a>
                
            <span class="material-icons">
                filter_hdr
                </span>
            <a style="width: 400px; ">desnível de 200m</a>
        </p>
        
        <p style="width: 900px;"> 
        
            <span class="material-icons">
                timer
                </span>
            <a style="width: 400px;" >até 1 hora</a> 
            <span class="material-icons" style=" margin-left: 155px;">
                moving
                </span>
            <a style="width: 400px;">3km</a></p>
    </div>
    <a href="#mapImage">
        <div class="buttonback">
            <div class="setaRigth"></div>
            <div class="setaLeft"></div>
        </div>
        <a>

            <div class="link">
                <p><a style="color: #c9421c;" href="#firstSesson">O que você vai ver</a></p>
                <p><a style="color: #c9421c;" href="#secondSesson">Dicas</a></p>
                <p><a style="color: #c9421c;" href="#tirdSesson">Cuidados necessários</a></p>
                <p><a style="color: #c9421c;" href="#fourthSesson">A Geologia</a></p>
                <p><a style="color: #c9421c;" href="#fifthSesson">Caminho Claudio Coutinho</a></p>
                <p><a style="color: #c9421c;" href="#sixthSesson">Trilha do Morro da Urca</a></p>
                <p><a style="color: #c9421c;" href="#seventhSesson">Pão de Açucar</a></p>
                <p><a style="color: #c9421c;" href="#seventhSesson">Créditos</a></p>
            </div>

            <div class="title" id="firstSesson">
                <div class="divMain">O QUE VOCÊ VAI VER</div>
            </div>

            <div class="slider">
                <div class="slides">
                    <input type="radio" name="radio-btn" id="radio1">
                    <input type="radio" name="radio-btn" id="radio2">
                    <div class="slide first">
                        <img onclick="nextImage()"
                            src="https://dicasdacarioca.com.br/images/blog/Urca-Vista-do-Alto.jpg"
                            alt="Imagem 1">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://vejario.abril.com.br/wp-content/uploads/2016/11/718_urca-alexandre-macieira-1.jpeg?quality=70&strip=info&w=620&resize=1200,800"
                            alt="Imagem 2">
                    </div>

                    <div class="navigation-auto">
                        <div class="auto-btn1"></div>
                        <div class="auto-btn2"></div>
                    </div>
                </div>

                <div class="manual-navigation">
                    <label for="radio1" class="manual-btn"></label>
                    <label for="radio2" class="manual-btn"></label>
                </div>

            </div>
            <div class="textDesc">
                <p style="margin-top: 80px;">
                    Bem-vindo ao Monumento Natural dos Morros do Pão de Açúcar e da
                    Urca (MoNa), cuja paisagem, reconhecida internacionalmente,
                    simboliza um dos cartões postais do Rio de Janeiro. De grande
                    apelo turístico, esse sítio geológico reveste-se de importância
                    pela sua geoforma que delineia uma das paisagens marcantes do
                    litoral carioca, os maciços costeiros. Além disso, esse
                    afloramento rochoso representa um importante testemunho da
                    amalgamação e separação do super-continente Gondwana.
                </p>
                <p>
                    Aqui você irá encontrar a mais carioca das rochas: o gnaisse facoidal
                    ou augen gnaisse. Rocha presente nas formas de relevo mais
                    icônicas da cidade, Pão de Açúcar, Morros da Urca e Corcovado, é
                    utilizada em inúmeras fachadas de monumentos históricos da cidade
                    do Rio de Janeiro, como o Museu de Ciências da Terra e a Pedra do
                    Sal, local considerado como o berço do samba carioca.
                </p>
                <p>
                    No trajeto até o topo do Morro da Urca será possível
                    observar rochas e feições que indicam a história geológica desse
                    local que remonta há mais de 500 Milhões de anos quando da
                    formação do super-continente Gondwana. Descubra os processos
                    geológicos que afetaram essa rocha e moldaram a paisagem formando
                    os icônicos Pão de Açúcar e Morro da Urca.
                </p>
                <p>
                    Descoberto pelos portugueses em 1502, o primeiro assentamento dos
                    colonizadores ocorreu entre os morros do Pão de Açúcar e Cara de
                    Cão. A origem do nome Pão de Açúcar vem da similaridade com
                    antigos cones onde os portugueses transportavam o açúcar.
                </p>
                Os morros Pão de Açúcar e Urca são institucionalizados patrimônios
                sob várias esferas administrativas e sob diferentes adjetivações:
                Patrimônio Cultural pelo Instituto do Patrimônio Histórico e
                Artístico Nacional (IPHAN) em 1973 em virtude de sua importância
                na composição da paisagem cultural e importância histórica,
                Patrimônio Natural pela criação de uma Unidade de Conservação
                Municipal, categoria Monumento Natural (MoNa) em 2006 e Patrimônio
                da Humanidade pela UNESCO em 2012.
                </p>
                <p>
                    A altitude em relação ao nível do mar é de 222 metros para o Morro da Urca, 392 metros
                    para o Pão de Açúcar e menos de 100 metros para o Morro Cara de
                    Cão. Para comparação com outro local de grande afluxo de turistas,
                    o Morro do Corcovado ou Cristo Redentor tem aproximadamente 700
                    metros e o ponto mais elevado da cidade do Rio de Janeiro, Pico da
                    Pedra Branca, tem um pouco mais de 1.025 metros.
                </p>
            </div>

            <div class="title">
                <div class="divMain" id="secondSesson">DICAS</div>
            </div>
            <div class="slider">
                <div class="slides">
                    <input type="radio" name="radio-btn2" id="radio5">
                    <input type="radio" name="radio-btn2" id="radio6">
                    <input type="radio" name="radio-btn2" id="radio7">
                    <input type="radio" name="radio-btn2" id="radio8">

                    <div class="slide first">
                        <img onclick="nextImage()"
                            src="http://www.blogviagem.com.br/wp-content/uploads/2015/01/pista-claudio-coutinho-1.jpg"
                            alt="Imagem 1">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://viajarcorrendo.com.br/wp-content/uploads/2016/07/Trilha2Bdo2BMorro2Bda2BUrca2B5.jpg"
                            alt="Imagem 2">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()" src="https://classic.exame.com/wp-content/uploads/2022/03/BONDINHO.jpeg?quality=70&strip=info&w=1024"
                            alt="Imagem 3">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://www.fuiserviajante.com/wp-content/uploads/2019/05/trilha-morro-da-urca-rio-de-janeiro-14-1024x768.jpg"
                            alt="Imagem 4">
                    </div>

                    <div class="navigation-auto">
                        <div class="auto-btn5"></div>
                        <div class="auto-btn6"></div>
                        <div class="auto-btn7"></div>
                        <div class="auto-btn8"></div>
                    </div>
                </div>

                <div class="manual-navigation">
                    <label for="radio5" class="manual-btn"></label>
                    <label for="radio6" class="manual-btn"></label>
                    <label for="radio7" class="manual-btn"></label>
                    <label for="radio8" class="manual-btn"></label>
                </div>

            </div>
            <div class="textDesc">
                <p style="margin-top: 80px;">
                    O percurso se inicia no Caminho Claudio Coutinho, próximo à Praia
                    Vermelha, no bairro da Urca (coordenadas 22.953796° S – 43.163640°
                    W). Segue-se até a entrada da trilha ao topo do Morro da Urca. A
                    trilha possui escadas em trechos mais íngremes ou auxilio de
                    corrimão de corda. O desnível é de aproximadamente 200 metros até
                    o topo do Morro da Urca. Totaliza aproximadamente 3km. O trecho
                    Morro da Urca – Pão de Açúcar deverá ser feito pelo teleférico
                    (bondinho). Verifique os horários de abertura e fechamento da
                    trilha do Morro da Urca bem como dos horários do bondinho (1).
                </p>
                <p>
                    Não são permitidos animais domésticos na Pista Claudio
                    Coutinho nem na trilha do Morro da Urca. Há várias vias de
                    escalada nos Morros da Urca e Pão de Açúcar destinados a
                    praticantes experientes ou acompanhados por guia ou instrutor
                    profissional. Infraestrutura . No Centro de recepção de visitantes
                    na Praia Vermelha bem como no Morro da Urca há totens para compra
                    de bilhetes do bondinho entre Morro da Urca-Pão de Açúcar e
                    retorno Pão de Açúcar - Praia Vermelha. . nos Morros da Urca e Pão
                    de Açúcar há restaurantes, lojas de souvenirs e toaletes.
                    Ambulatório no Morro da Urca. Praças com bancos para descanso e
                    mirantes. . Ao longo da Pista Claudio Coutinho é possível
                    encontrar painéis explicativos sobre a evolução geológica do local
                    (Painel Caminhos Geológicos do Rio de Janeiro (2)) e informações
                    acerca da flora, fauna e aspectos históricos.{" "}
                </p>
            </div>

            <div class="title">
                <div class="divMain" id="tirdSesson">CUIDADOS NECESSÁRIOS</div>
            </div>

            <div class="slider">
                <div class="slides">
                    <input type="radio" name="radio-btn3" id="radio9">
                    <input type="radio" name="radio-btn3" id="radio10">
                    

                    <div class="slide first">
                        <img onclick="nextImage()"
                            src="https://dicasdacarioca.com.br/images/blog/Urca-Vista-do-Alto.jpg"
                            alt="Imagem 1">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://vejario.abril.com.br/wp-content/uploads/2016/11/718_urca-alexandre-macieira-1.jpeg?quality=70&strip=info&w=620&resize=1200,800"
                            alt="Imagem 2">
                    </div>

                    <div class="navigation-auto">
                        <div class="auto-btn9"></div>
                        <div class="auto-btn10"></div>
                        
                    </div>
                </div>

                <div class="manual-navigation">
                    <label for="radio9" class="manual-btn"></label>
                    <label for="radio10" class="manual-btn"></label>
                    
                </div>

            </div>
            <p style="margin-top: 80px;"></p>
            <ul class="textDesc">

                <li>levar água potável</li>
                </p>
                <li>proteção solar</li>
                </p>
                <li>atenção com as crianças próximo ao declive junto ao mar </li>
                </p>
                <li>não alimente os micos</li>
                </p>
                <li>não retire plantas e sementes</li>
                </p>
                <li>atenção com animais peçonhentos</li>
                </p>
                <li>descarte seu lixo corretamente ou leve-o com você</li>
                </p>
            </ul>

            <div class="title">
                <div class="divMain" id="fourthSesson">A GEOLOGIA</div>
            </div>
            <div class="slider">
                <div class="slides">
                    <input type="radio" name="radio-btn4" id="radio13">
                    <input type="radio" name="radio-btn4" id="radio14">
                    <input type="radio" name="radio-btn4" id="radio15">
                    <input type="radio" name="radio-btn4" id="radio16">

                    <div class="slide first">
                        <img onclick="nextImage()"
                            src="https://alemdacurva.com/wp-content/uploads/2019/06/o-que-fazer-na-urca-rj-07.jpg"
                            alt="Imagem 1">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://chicaslokas.com.br/wp-content/uploads/2020/08/praia-vermelha.jpeg"
                            alt="Imagem 2">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()" src="https://i.ytimg.com/vi/yX_sgQ4dnH4/maxresdefault.jpg"
                            alt="Imagem 3">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://www.fuiserviajante.com/wp-content/uploads/2019/05/trilha-morro-da-urca-rio-de-janeiro-14-1024x768.jpg"
                            alt="Imagem 4">
                    </div>

                    <div class="navigation-auto">
                        <div class="auto-btn13"></div>
                        <div class="auto-btn14"></div>
                        <div class="auto-btn15"></div>
                        <div class="auto-btn16"></div>
                    </div>
                </div>

                <div class="manual-navigation">
                    <label for="radio13" class="manual-btn"></label>
                    <label for="radio14" class="manual-btn"></label>
                    <label for="radio15" class="manual-btn"></label>
                    <label for="radio16" class="manual-btn"></label>
                </div>

            </div>
            <div class="textDesc">
                <p style="margin-top: 80px;">
                    Os morros da Urca e Pão de Açúcar são constituídos por rochas
                    metamórficas(1), predominantemente gnaisse facoidal e
                    subordinadamente biotita gnaisse, diques de diabásio e circundados
                    por sedimentos e aterros recentes. Gnaisse facoidal é definido
                    como ortognaisse sin a pós-colisional de idade neoproterozóica
                    pertencente a unidade geológica denominada Suíte Rio de Janeiro. A
                    história da evolução geológica de mais de 500 milhões de anos que
                    culminou na paisagem do MoNa deixou vestígios que poderão ser
                    apreciados ao longo do percurso sugerido a seguir.
                </p>
                <p>
                    Gnaisse facoidal ou augen gnaisse, é uma rocha metamórfica, derivada de
                    granito, que apresenta como característica marcante megacristais
                    de até 7cm com formas amendoadas semelhante a “olhos”(augens). Foi
                    formada devido a processos geodinâmicos que ocorreram no interior
                    da crosta terrestre a uma profundidade de pelo menos 25 km,
                    temperaturas superiores a 600 ºC e pressão 7000 vezes superior a
                    do ambiente. Isso ocorreu há aproximadamente 560 milhões de anos
                    atrás (na idade geológica denominada Neoproterozóico (2)) na costa
                    leste brasileira, devido a colisão entre pequenos continentes que
                    formaram o super-continente Gondwana(3).
                </p>
                <p>
                    Muito depois, há
                    130 milhões de anos atrás (período Juro-Cretáceo(2)), ocorreu a
                    quebra do Gondwana quando o continente sul-americano e o africano
                    começaram a se separar, dando lugar ao Oceano Atlântico Sul. Ao
                    longo da costa desses continentes, formaram-se vales e lagos até a
                    abertura completa para oceano. Desde então, movimentos de
                    soerguimento da crosta terrestre e o intemperismo começaram a
                    atuar, moldando o relevo e expondo essas rochas à superfície,
                    permitindo a observação direta das mesmas. O Morro do Pão de
                    Açúcar, soerguido durante o Cenozóico (2), é classificado como um
                    maciço costeiro com vertentes íngremes e topos arredondados e
                    aguçados do tipo “pão de açúcar” onde predominam processos
                    erosivos.
                </p>
                <p>
                    O mapa da geologia dos Morros da Urca e Pão de
                    Açúcar pode ser consultado diretamente no painel do Projeto
                    Caminhos Geológicos ao longo do caminho Claudio Coutinho.
                </p>
            </div>
            <div class="title">
                <div class="divMain" id="fifthSesson">O CAMINHO CLAUDIO COUTINHO</div>
            </div>

            <div class="slider">
                <div class="slides">
                    <input type="radio" name="radio-btn5" id="radio17">
                    <input type="radio" name="radio-btn5" id="radio18">
                    <input type="radio" name="radio-btn5" id="radio19">
                    <input type="radio" name="radio-btn5" id="radio20">

                    <div class="slide first">
                        <img onclick="nextImage()"
                            src="https://alemdacurva.com/wp-content/uploads/2019/06/o-que-fazer-na-urca-rj-07.jpg"
                            alt="Imagem 1">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://chicaslokas.com.br/wp-content/uploads/2020/08/praia-vermelha.jpeg"
                            alt="Imagem 2">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()" src="https://i.ytimg.com/vi/yX_sgQ4dnH4/maxresdefault.jpg"
                            alt="Imagem 3">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://www.fuiserviajante.com/wp-content/uploads/2019/05/trilha-morro-da-urca-rio-de-janeiro-14-1024x768.jpg"
                            alt="Imagem 4">
                    </div>

                    <div class="navigation-auto">
                        <div class="auto-btn17"></div>
                        <div class="auto-btn18"></div>
                        <div class="auto-btn19"></div>
                        <div class="auto-btn20"></div>
                    </div>
                </div>

                <div class="manual-navigation">
                    <label for="radio17" class="manual-btn"></label>
                    <label for="radio18" class="manual-btn"></label>
                    <label for="radio19" class="manual-btn"></label>
                    <label for="radio20" class="manual-btn"></label>
                </div>
            </div>

            <div class="textDesc">
                <p style="margin-top: 80px;">
                    O roteiro inicia-se no Caminho Claudio Coutinho que circunda os
                    morros da Urca e Pão de Açúcar. Ao longo de todo o Caminho é
                    possível observar bela exposição da rocha predominante no MoNa, o
                    gnaisse facoidal, além de distinguir fraturas e formação de solo.
                </p>
                <p>
                    <a style="font-weight: bold">Ponto de observação 1:</a>
                    Fraturas de alívio e formação de blocos e matacões, dinâmica de
                    queda de blocos e escorregamentos.
                </p>
                <p>
                    Blocos, matacões e
                    lascas de rochas são comuns nos maciços do Morro da Urca e Pão de
                    Açúcar. Enormes blocos de rocha encontram-se nas encostas junto ao
                    mar, provavelmente oriundos do maciço rochoso. Massas ou lascas de
                    rochas com espessuras decimétricas, mas com altura e comprimento
                    métricos, são comuns ao longo da pista Claudio Coutinho, sendo uma
                    das mais intrigantes a localizada no início e em cima da pista. O
                    deslocamento foi recente pois danificou a pista posteriormente
                    consertada, e teve a atuação das raízes das plantas. Essa
                    observação demonstra que os processos de deslocamentos de blocos e
                    massas rochosas são atuantes atualmente.
                </p>
                <p>
                    A formação de blocos e matacões de rocha deve-se a processos de fraturamento
                    (fraturas de alívio e tectônicas) atuantes no maciço rochoso que
                    conjugados ou não a outras estruturas tectônicas promovem a quebra
                    do maciço. Esse processo é devido primeiramente ao soerguimento do
                    substrato rochoso em resposta as acomodações isostáticas na crosta
                    terrestre durante a quebra do continente Gondwana e abertura do
                    Oceano Atlântico. Ao longo dessas estruturas planares, a
                    percolação de água da chuva ou mar inicia o processo de
                    intemperismo físico (desagregação) e/ou químico (decomposição) da
                    rocha, formando blocos ou lascas de rocha individualizados. A
                    presença de grandes blocos rochosos instáveis pode gerar
                    escorregamentos de solo e rocha nas encostas.
                </p>
                <p>
                    A feição singular na face sul do Pão do Açúcar, “nariz do gigante
                    adormecido” formada pela conjunção de planos ortogonais de feições
                    planares é responsável pelo desprendimento de blocos e matacões da
                    vertente do morro até a base, em um processo contínuo.
                </p>
                <p>
                    É um processo natural, intensificado em locais com encostas íngremes
                    com maciços rochosos fraturados, como na cidade do Rio de Janeiro.
                    Apesar das encostas da cidade apresentarem as condições geológicos
                    propícias aos escorregamentos, esses são agravados pela ação
                    antrópica. Por isso merecem grande atenção por parte das
                    organizações de defesa civil dentre outros.
                </p>



                <p>
                    <a style="font-weight: bold">Ponto de observação 2:</a>
                    Descrição macroscópica e composição mineralógica do gnaisse
                    facoidal e pegmatito, e relação temporal entre essas litologias.
                </p>
                <p>
                    No Paredão dos Coloridos é possível verificar os minerais
                    que compõem o gnaisse facoidal ou augen gnaisse. Trata-se de uma
                    rocha metamórfica, ortoderivada, ou seja, derivada de uma rocha
                    magmática, granito. Possui uma textura singular marcada pela
                    presença de megacristais do mineral feldspato(1) (3 a 7 cm)
                    distribuídos em uma matriz mais fina composta por quartzo,
                    feldspato e biotita(1). Os megacristais de feldspato possuem
                    feições em forma de amêndoa semelhante a “olhos” (augens) que
                    podem variar para forma retilínea ou mais alongada.
                </p>
                <p>
                    Em geral, os megacristais de feldspato se destacam na
                    superfície do paredão, auxiliando os montanhistas como apoio para
                    pés e mãos. Esse paredão costuma ser o local de treinamento para
                    os praticantes iniciantes de escalada.
                </p>
                <p>
                    Aqui também, se
                    observa pegmatito(2), rocha magmática formada por minerais que
                    atingem até 10 cm. É possível identificar o feldspato rosado a
                    esbranquiçado e, o quartzo esbranquiçado e, em menor quantidade a
                    biotita, de cor preta. Apresenta-se em formato tabular de largura
                    de alguns centímetros e extensão de alguns metros. Interessante
                    observar o contato retilíneo entre as duas rochas presentes nesse
                    afloramento rochoso. A foliação do gnaisse facoidal (dada pela
                    orientação dos megacristais em uma direção preferencial) é cortada
                    pela estrutura planar do pegmatito. Pode-se interpretar, que a
                    intrusão do pegmatito ocorreu pós ou tardi (posterior ou no final
                    da deformação) metamorfismo e deformação principal do gnaisse
                    facoidal.
                </p>
                <p>
                    Pegmatitos são, em geral, rochas que contem
                    minerais do tipo gema, como água-marinha, esmeralda, topázio
                    dentre outros. O estado de Minas Gerais é um grande produtor de
                    gemas para a indústria de joalheria, sendo a mesma reconhecida
                    mundialmente.
                </p>
            </div>

            <div class="title">
                <div class="divMain" id="sixthSesson">TRILHA DO MORRO DA URCA</div>
            </div>

            <div class="slider">
                <div class="slides">
                    <input type="radio" name="radio-btn6" id="radio21">
                    <input type="radio" name="radio-btn6" id="radio22">
                    <input type="radio" name="radio-btn6" id="radio23">
                    <input type="radio" name="radio-btn6" id="radio24">

                    <div class="slide first">
                        <img onclick="nextImage()"
                            src="https://alemdacurva.com/wp-content/uploads/2019/06/o-que-fazer-na-urca-rj-07.jpg"
                            alt="Imagem 1">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://chicaslokas.com.br/wp-content/uploads/2020/08/praia-vermelha.jpeg"
                            alt="Imagem 2">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()" src="https://i.ytimg.com/vi/yX_sgQ4dnH4/maxresdefault.jpg"
                            alt="Imagem 3">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://www.fuiserviajante.com/wp-content/uploads/2019/05/trilha-morro-da-urca-rio-de-janeiro-14-1024x768.jpg"
                            alt="Imagem 4">
                    </div>

                    <div class="navigation-auto">
                        <div class="auto-btn21"></div>
                        <div class="auto-btn22"></div>
                        <div class="auto-btn23"></div>
                        <div class="auto-btn24"></div>
                    </div>
                </div>

                <div class="manual-navigation">
                    <label for="radio21" class="manual-btn"></label>
                    <label for="radio22" class="manual-btn"></label>
                    <label for="radio23" class="manual-btn"></label>
                    <label for="radio24" class="manual-btn"></label>
                </div>
            </div>

            <div class="textDesc">
                <p style="margin-top: 80px;">
                    <a style="font-weight: bold">Ponto de observação 1:</a>
                    <a style="font-style: italic">
                        Contato geológico, intemperismo diferencial entre rochas /
                        aumento da vegetação em local com maior desenvolvimento do
                        solo.
                    </a>
                </p>
                <p>
                    No início da trilha para o cume do Morro da Urca, nota-se
                    vegetação mais densa além da presença de blocos e matacões de
                    rocha. Nesse local, é possível observar que a ação das ondas
                    esculpiu uma fenda no maciço rochoso. Essa feição parece se
                    estender até o Morro da Babilônia, situado logo a frente.
                <p>
                </p>
                Trata-se da presença de outra rocha denominada diabásio. Essa
                rocha, apresenta uma maior quantidade de minerais que se alteram
                mais facilmente em superfície sob a ação do intemperismo químico,
                gerando um solo mais argiloso e uma topografia mais suave. O que
                contrasta com a maior resistência ao intemperismo do gnaisse
                facoidal, que sustenta o relevo proeminente dos morros da Urca e
                Pão de Açúcar. Será exatamente nesse ponto, e devido a essas
                características, que a trilha se inicia com uma escada em blocos
                de rocha.
                <p>
                </p>
                Nesse ponto de menor declive, que é o divisor
                entre os morros da Urca e Pão de Açúcar, é também o curso d’agua,
                que poderá apresentar volume maior em dias de maior quantidade de
                chuva. Atenção redobrada em dias chuvosos ou pós chuvas intensas.
                </p>

                <p style="margin-top: 80px;">
                    <a style="font-weight: bold">Ponto de observação 2:</a>
                    <a style="font-style: italic">Biodiversidade e erosão de rochas, apreciação da paisagem. </a>
                </p>
                <p>
                    A trilha encontra-se cercada pela exuberante Mata
                    Atlântica. Muitas espécies vegetais são nativas e outras foram
                    plantadas ou são invasoras nesse ecossistema. Nesse último caso,
                    temos a jagueira, com sementes que germinam facilmente, o que pode
                    provocar um desequilíbrio ameaçando as outras espécies. O
                    pau-Brasil, espécie nativa, pode ser apreciada logo ao final da
                    escada de pedra. É notável a presença de bromélias que podem se
                    fixar tanto nos galhos das árvores como nos blocos de rocha.
                <p>
                </p>
                Os saguis são comuns ao longo do Caminho Claudio Coutinho
                como na trilha ao Morro da Urca e até no seu topo. São saguis do
                gênero Callithrix jacchus, o sagui-de-tufo-branco, e Callithrix
                penicillata, o sagui-de-tufo-preto. O primeiro é originário do
                Nordeste do Brasil e provavelmente foram introduzidos na Mata
                Atlantica. Transmitem raiva e são dominantes sobre o sagui de tufo
                preto, que é endêmico do Brasil. Em geral, tem 25 cm de tamanho e
                pesam entre 300-450 g. Alimentam-se de frutas, insetos, ovos,
                pequenos vertebrados, néctar e exsudados de plantas (resinas,
                látex).
                </p>
                <p style="margin-top: 80px;">
                    <a style="font-weight: bold">Ponto de observação 3:</a>
                    <a style="font-style: italic">paisagem urbana e natural. </a>
                </p>

                <p>
                    <a style="font-weight: bold">Mirante 1:</a>
                    Baia Guanabara, ponte Rio-Niterói, aeroporto Santos Dumont, bairro
                    da Urca, Forte da Urca e Morro Cara de Cão. A orla entre o
                    aeroporto Santos Dumont e o bairro da Urca constitui aterramentos
                    realizados entre as décadas de 50 a 60 e 20 respectivamente.
                    Trata-se de aterramento de praias e mangues da Baía de Guanabara
                    que margeavam os morros da Urca e Cara de Cão. Essa orla
                    encontra-se protegida do avanço do mar por grandes blocos de
                    rocha.
                </p>



                <p style="margin-top: 80px;">
                    <a style="font-weight: bold">Ponto de observação 4:</a>
                    <a style="font-style: italic">Biodiversidade e erosão de rochas, apreciação da paisagem. </a>
                </p>
                <p>
                    <a style="font-weight: bold">Mirante 2:</a>
                    <a style="font-style: italic">Ponta do Leme e Forte do Vigia.</a>
                </p>


                <p style="margin-top: 80px;">
                    <a style="font-weight: bold">Ponto de observação 5:</a>
                    <a style="font-style: italic">Biodiversidade e erosão de rochas, apreciação da paisagem. </a>
                </p>
                <p>
                    <a style="font-weight: bold">Mirante 3:</a>
                    É possível observar a Avenida Portugal e seus imponentes
                    prédios históricos, situados entre os Morros da Urca e Babilônia,
                    e cujo traçado foi executado para a exposição mundial de 1920 em
                    comemoração aos 100 anos da chegada da família real portuguesa ao
                    Brasil e a abertura dos portos as nações amigas. Ao longo dessa
                    Avenida, foram construídos pavilhões de exposições, posteriormente
                    transformados nas dependências da Universidade Federal do Rio de
                    Janeiro, Instituto Brasileiro dos Cegos e Museu de Ciências da
                    Terra. Destacam-se também construções mais recentes como as da
                    Universidade Federal do Estado do Rio de Janeiro, Escola da
                    Marinha, Instituto Militar de Engenharia, Escola Superior de
                    Guerra e o Iate Clube do Brasil. A estação base do teleférico do
                    Pão de Açúcar, propriedade da Bondinho Pão de Açúcar, encontra-se
                    próximo à Praça General Tibúrcio. Na praça, destaca-se monumento
                    em homenagem aos heróis da Batalha da Laguna que foi parte da
                    Guerra do Paraguai entre os anos de 1864 e 1870, um dos maiores
                    conflitos ocorridos na América do Sul. O monumento, esculpido em
                    bronze proveniente da fundição dos canhões que foram trazidos de
                    volta ao Brasil, ilustra passagens do retorno dos soldados
                    brasileiros.
                </p>
            </div>

            
            <div class="title">
                <div class="divMain" id="seventhSesson">PÃO DE AÇÚCAR</div>
            </div>

            <div class="slider">
                <div class="slides">
                    <input type="radio" name="radio-btn7" id="radio25">
                    <input type="radio" name="radio-btn7" id="radio26">
                    <input type="radio" name="radio-btn7" id="radio27">
                    <input type="radio" name="radio-btn7" id="radio28">

                    <div class="slide first">
                        <img onclick="nextImage()"
                            src="https://alemdacurva.com/wp-content/uploads/2019/06/o-que-fazer-na-urca-rj-07.jpg"
                            alt="Imagem 1">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://chicaslokas.com.br/wp-content/uploads/2020/08/praia-vermelha.jpeg"
                            alt="Imagem 2">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()" src="https://i.ytimg.com/vi/yX_sgQ4dnH4/maxresdefault.jpg"
                            alt="Imagem 3">
                    </div>
                    <div class="slide">
                        <img onclick="nextImage()"
                            src="https://www.fuiserviajante.com/wp-content/uploads/2019/05/trilha-morro-da-urca-rio-de-janeiro-14-1024x768.jpg"
                            alt="Imagem 4">
                    </div>

                    <div class="navigation-auto">
                        <div class="auto-btn25"></div>
                        <div class="auto-btn26"></div>
                        <div class="auto-btn27"></div>
                        <div class="auto-btn28"></div>
                    </div>
                </div>

                <div class="manual-navigation">
                    <label for="radio25" class="manual-btn"></label>
                    <label for="radio26" class="manual-btn"></label>
                    <label for="radio27" class="manual-btn"></label>
                    <label for="radio28" class="manual-btn"></label>
                </div>
            </div>

            <div class="textDesc">
                <p style="margin-top: 80px;">
                    O roteiro inicia-se no Caminho Claudio Coutinho que circunda os
                    morros da Urca e Pão de Açúcar. Ao longo de todo o Caminho é
                    possível observar bela exposição da rocha predominante no MoNa, o
                    gnaisse facoidal, além de distinguir fraturas e formação de solo.
                <p>
                </p>
                O teleférico que liga o topo do Morro da Urca ao do Pão de
                Açúcar vai a uma velocidade de ... percorrendo uma distância de
                .... metros e um desnível mais pronunciado que o trajeto Praia
                Vermelha-Morro da Urca. O trajeto causa, muitas vezes, suspiros
                dos passageiros, principalmente em dias de muito vento ou chuva.
                Aproveite a vista e observe mais cuidadosamente a face sul do
                imponente Pão de Açúcar com fraturas retilíneas e ortogonais que
                provocaram quedas de grandes blocos e, desenham o “nariz do
                gigante adormecido”.
                <p>
                </p>
                Ao chegar, a paisagem irá surpreender
                qualquer visitante!!! E o difícil será escolher qual o melhor
                local para apreciar o belíssimo pôr do sol.
                </p>
                <p style="margin-top: 80px;">
                    <a style="font-weight: bold">Ponto de observação 1:</a>
                    <a style="font-style: italic">Paisagem urbana e natural. </a>
                </p>
                <p>
                    A visão panorâmica de 360 * da Cidade Maravilhosa nos
                    permite desfrutar dos melhores ângulos dessa cidade: Praia de
                    Copacabana: conhecida mundialmente, denominada “princesinha do
                    mar” pelo poeta Vinícius de Moraes. Possui 4 km de extensão em
                    forma de meia lua, o famoso colar de pérolas ao anoitecer. É
                    protegida por dois montículos de rochas nas suas extremidades:
                    Morro do Forte do Posto Seis e do Forte do Leme. É possível a
                    visitação em ambos, e no primeiro há museu e cafeteria.
                <p>
                </p>
                Ao fundo, o Maciço da Tijuca com a Pedra da Gávea e Pedra Bonita,
                que se estende até a Serra da Carioca com o Cristo Redentor e
                termina na baixada do Centro da Cidade.
                <p>
                </p>
                Não se esqueça de apreciar mais uma vez a Serra do Mar, que em dias de tempo claro é
                possível distinguir o relevo serrilhado dessa escarpa, sendo o
                pico do Dedo de Deus o mais conhecido.{"\n\n"}E assim, em meio ao
                mar de morros, expandiu-se a cidade do Rio de Janeiro.
                <p>
                </p>
                Desfrute o Pôr do Sol .... até breve
                </p>

            </div>


            <script>
                //cada count aqui representa o número da primeira imagem de cada slider.
                let count1 = 1;
                let count2 = 5;
                let count3 = 9;
                let count4 = 13;
                let count5 = 17;
                let count6 = 21;
                let count7 = 25;

                document.getElementById("radio" + count1).checked = true;
                document.getElementById("radio" + count2).checked = true;
                document.getElementById("radio" + count3).checked = true;
                document.getElementById("radio" + count4).checked = true;
                document.getElementById("radio" + count5).checked = true;
                document.getElementById("radio" + count6).checked = true;
                document.getElementById("radio" + count7).checked = true;
                

                setInterval(function () {
                    nextImage();
                }, 3000)


                function nextImage() {
                    // cada "count" representa um slider.  
                    count1++;
                    count2++;
                    count3++;
                    count4++;
                    count5++;
                    count6++;
                    count7++;


                    // cada "count" representa a passagem de um slider. 
                    if (count1 > 2) {
                        count1 = 1;
                    }
                    document.getElementById("radio" + count1).checked = true;
                    
                    if (count2 > 8) {
                        count2 = 5;
                    }
                    document.getElementById("radio" + count2).checked = true;

                    if (count3 > 10) {
                        count3 = 9;
                    }
                    document.getElementById("radio" + count3).checked = true;

                    if (count4 > 16) {
                        count4 = 13;
                    }
                    document.getElementById("radio" + count4).checked = true;

                    if (count5 > 20) {
                        count5 = 17;
                    }
                    document.getElementById("radio" + count5).checked = true;

                    if (count6 > 24) {
                        count6 = 21;
                    }
                    document.getElementById("radio" + count6).checked = true;

                    if (count7 > 28) {
                        count7 = 25;
                    }
                    document.getElementById("radio" + count7).checked = true;
                }
                    
        
                    
            </script>

    
    
`
  }
]
    
    )
  }

export default handlerSpaces;