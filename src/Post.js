export default function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${props.imagemUsuario}.svg`} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={`assets/img/${props.imagemConteudo}.svg`} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {listaIon.map((p) => <ion-icon name={p}></ion-icon>)}
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={`assets/img/${props.imagemQuemCurtiu}.svg`} />
          <div class="texto">
            Curtido por <strong>{props.quemCurtiu}</strong> e{" "}
            <strong>outras {props.numeroCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

const listaIon = ["heart-outline", "chatbubble-outline", "paper-plane-outline"]
