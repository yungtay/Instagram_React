import Post from "./Post"
export default function Posts() {
    return (
      <div class="posts">
        {listaPosts.map((p) => (
          <Post
            imagemUsuario={p.imagemUsuario}
            usuario={p.usuario}
            imagemConteudo={p.imagemConteudo}
            imagemQuemCurtiu={p.imagemQuemCurtiu}
            quemCurtiu={p.quemCurtiu}
            numeroCurtidas={p.numeroCurtidas}
          />
        ))}
      </div>
    );  
}

const listaPosts = [
  {
    imagemUsuario: "meowed",
    usuario: "meowed",
    imagemConteudo: "gato-telefone",
    imagemQuemCurtiu: "respondeai",
    quemCurtiu: "respondeai",
    numeroCurtidas: "101.523",
  },
  {
    imagemUsuario: "barked",
    usuario: "barked",
    imagemConteudo: "dog",
    imagemQuemCurtiu: "adorable_animals",
    quemCurtiu: "adorable_animals",
    numeroCurtidas: "99.159",
  },
];