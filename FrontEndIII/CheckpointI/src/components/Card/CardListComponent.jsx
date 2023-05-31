import style from "./CardListComponent.module.css"

function CardListComponent({ children }) {
    return (<div className={style.cardlist}>
        {children}
    </div>);
}

export default CardListComponent;