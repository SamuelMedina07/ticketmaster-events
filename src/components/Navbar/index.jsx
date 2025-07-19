import {useState} from "react"

const Navbar = ({onSearch}) => {
    const [search,setSearch] = useState('');

    const handleInputChange =(evt) =>{
        setSearch(evt.target.value)
    };
    

    const handleInputKeyDown =(evt) =>{
        if (evt.key === ']') {
            onSearch(search)
            console.log(search)
        } 
    }

    return(
        <div>
        <p>Mi Boletera</p>
        <input placeholder="Buscar Evento" 
        onChange={handleInputChange} 
        onKeyDown={handleInputKeyDown}
        value={search}
        />
        </div>

    );

};

export default Navbar;