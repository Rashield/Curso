import style from "./CardComponent.module.css"

function CardComponent({titulo,conteudo}) {
    const urlDefault = "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/dragon-ball-super-1200x900-1.jpg"
        return ( 
        <div className={style.div}>
            <h2 className={style.title}>{titulo ?? "Seu Card Aqui!!!"}</h2>
            <p>{conteudo}</p>
        </div>
     );
}

export default CardComponent;