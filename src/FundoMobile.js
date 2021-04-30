export default function FundoMobile() {
    return (
      <div class="fundo-mobile">
        {listaIon.map((p) => (
          <ion-icon name={p}></ion-icon>
        ))}
      </div>
    );
}

const listaIon = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]