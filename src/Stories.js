import Story from "./Story"
export default function Stories() {
    return (
      <div class="stories">
        {listaStories.map((p) => (
          <Story imagem={p} usuario={p} />
        ))}

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
}

const listaStories = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"  ]