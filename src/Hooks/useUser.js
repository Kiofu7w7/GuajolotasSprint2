import { useState, useEffect } from 'react';
import { GetDataUsersCarts } from '../Peticiones/actions';
import { urlCarts, urlUsuarios } from '../Helpers/url';
import { userIdPruebas } from '../Helpers/idUserPruebas';
import useProducts from './useProducts';

function useUser() {
  const [user, setUser] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [productNumbers, setProductNumbers] = useState([]);
  const { data } = useProducts();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const respUser = await GetDataUsersCarts(urlUsuarios, userIdPruebas);
        setUser(respUser);

        const respCarts = await GetDataUsersCarts(urlCarts, respUser.id_carts);
        const productIds = respCarts.id_products.split('|').map(product => product.split(':')[0].toString());

        const productNumbersa = respCarts.id_products
          .split('|')
          .map(product => product.split(':')[1])

        setProductNumbers(productNumbersa)

        if (data) {
          const productsInCartData = data.flatMap(category => category.contenido.filter(product => productIds.includes(product.id.toString())));
          setCartItems(productsInCartData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, [data]); 

  return { user, cartItems, productNumbers };
}

export default useUser;