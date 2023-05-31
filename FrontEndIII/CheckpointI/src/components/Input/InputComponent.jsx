import style from "./InputComponent.module.css"

function InputComponent({ title, type, value, fnOnChange }) {
    return (
        <>
            <label>{title ?? undefined}</label>
            <br></br>
            <input
                type={type ?? "text"}
                value={value}
                onChange={fnOnChange} 
            />
            <br></br>
        </>
    );
}

export default InputComponent;