import React, { useState } from 'react';
import { SearchDiv, SearchInput } from '../Helpers/styledComponets';
import { SearchOutlined } from "@ant-design/icons";
import useProducts from '../Hooks/useProducts';

function Search() {
  const {
    data, 
    categoriaData,
    dataSelectProduct,
    handleCambiarC,
    handleCambiarP,
  } = useProducts();

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleBuscador = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setResults([]);
    } else {
      const newResults = [];
      data.forEach(categoria => {
        categoria.contenido.forEach(producto => {
          if (producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())) {
            newResults.push(producto);
          }
        });
      });
      setResults(newResults);
    }
  }

  return (
    <div>
        <SearchDiv style={{ marginBottom: 20 }}>
          <SearchOutlined />
          <SearchInput onChange={handleBuscador} placeholder="Sabor de guajolota, bebida..." />
        </SearchDiv>
        {results.map(producto => (
          <div key={producto.id}>{producto.nombre}</div>
        ))}
    </div>
  )
}

export default Search;
