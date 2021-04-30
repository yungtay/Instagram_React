import Sugestao from "./Sugestao"
import Usuario from "./Usuario"

export default function Siderbar() {
    return (
      <div class="sidebar">

        <Usuario usuario="catanacomics" nome="Catana"/>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {listaSugestoes.map((p) => (
            <Sugestao imagem={p.nome} nome={p.nome} razao={p.razao} />
          ))}
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    );
}

const listaSugestoes = [
  { nome: "bad.vibes.memes", razao: "Segue você" },
  { nome: "chibirdart", razao: "Segue você" },
  { nome: "razoesparaacreditar", razao: "Novo no Instagram" },
  { nome: "adorable_animals", razao: "Segue você" },
  { nome: "smallcutecats", razao: "Segue você" },
];