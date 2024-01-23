import { useState, useEffect } from 'react';
import { GetData } from '../Peticiones/actions';
import { urlComidas } from '../Helpers/url';

function useProducts() {
  const [data, setData] = useState();
  const [categoriaData, setCategoriaData] = useState();
  const [dataSelectProduct, setDataSelectProduct] = useState()

  useEffect(() => {
    async function cargarDatos() {
      const resp = await GetData(urlComidas);
      setData(resp); 
      setCategoriaData(resp[0]); 
      setDataSelectProduct(resp[0].contenido[0])
    }
    cargarDatos();
  }, []);

  const handleCambiarC = (index) => {
    setCategoriaData(data[index])
  }
  
  const handleCambiarP = (index) => {
    setDataSelectProduct(categoriaData.contenido[index])
  }

  return { data, categoriaData, dataSelectProduct, handleCambiarC, handleCambiarP};
}

export default useProducts;