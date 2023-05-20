function CidadeComponente({id,country,city,population,color}) {
    
    return (
        
        <div>
            <h1>País: {country}</h1>
            <h2>Cidade: {city}</h2>
            <h3>População: {population}</h3>
            <h4>Cor:{color}</h4>
        </div>
    );
}

export default CidadeComponente;