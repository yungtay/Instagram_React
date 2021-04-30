export default function Story(props) {
    return (
      <div class="story">
        <div class="imagem">
          <img src={`assets/img/${props.imagem}.svg`} />
        </div>
        <div class="usuario">{props.usuario}</div>
      </div>
    );
}

