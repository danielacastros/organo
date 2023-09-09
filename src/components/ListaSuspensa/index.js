import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.currentTarget.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map((item, index) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;