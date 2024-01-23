import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonAS, CartItemText, CartPriceText, CartTotalDiv, DivButtonAS, ImagenProducto, NoCartItemsIcon, TextButtonAS, TitlePages } from '../Helpers/styledComponets';
import useUser from '../Hooks/useUser';

function Cart() {

  const { user, cartItems, productNumbers } = useUser();

  let total = 0;
  cartItems.map((a, index) => total += a.precio * productNumbers[index])

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <img
          alt=""
          style={{ cursor: "pointer" }}
          src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1705706634/Guajolota/chevron-left_piq1vb.png"
          onClick={() => {
            navigate("/");
          }}
        ></img>

        <TitlePages>Carrito</TitlePages>
      </div>

      {cartItems ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            {cartItems.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
              >
                <div style={{ display: "flex", marginLeft: "20px" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "56px",
                      height: "56px",
                      marginRight: 20,
                    }}
                    key={item.id}
                  >
                    <ImagenProducto
                      src={item.imagen}
                      style={{
                        backgroundImage: `url(${item.plato})`,
                        objectFit: "contain",
                        backgroundSize: "contain",
                        marginLeft: "8px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      marginLeft: "20px",
                      alignContent: "center",
                    }}
                  >
                    <CartItemText>{item.nombre}</CartItemText>
                    <CartItemText style={{ color: "#FA4A0C" }}>
                      x{productNumbers[index]}
                    </CartItemText>
                  </div>
                </div>
                <CartPriceText
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: 20,
                  }}
                >
                  ${item.precio * productNumbers[index]} MXN
                </CartPriceText>
              </div>
            ))}
            <CartTotalDiv style={{margin: 20}}>
              <TextButtonAS style={{ color: "#0D0D0D" }}>Total</TextButtonAS>
              <TextButtonAS style={{ color: "#FA4A0C" }}>${total} MXN</TextButtonAS>
            </CartTotalDiv>
          </div>

          <DivButtonAS style={{ display: "flex", backdropFilter: 0 }}>
            <ButtonAS>
              <TextButtonAS>Pagar</TextButtonAS>
            </ButtonAS>
          </DivButtonAS>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "113.128px",
              height: "107.986px",
              marginTop: "70%",
              marginBottom: "auto",
            }}
            src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1705961405/Guajolota/Group_66_ughrn8.png"
            alt=""
          ></img>
          <NoCartItemsIcon>No hay productos</NoCartItemsIcon>
          <DivButtonAS style={{ display: "flex" }}>
            <ButtonAS style={{ opacity: "0.5" }}>
              <TextButtonAS>Pagar</TextButtonAS>
            </ButtonAS>
          </DivButtonAS>
        </div>
      )}
    </div>
  );
}

export default Cart