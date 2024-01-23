import styled from "styled-components";

export const LogoGuajolota = styled.div`
  background-image: url('https://res.cloudinary.com/dlwr6vxib/image/upload/v1705378408/Guajolota/363f139aa7086e67976c63e2eea1fb1c_kn7onm.png');
  width: 60px;
  height: 60px;
  background-size: cover;
  cursor: pointer;
`;

export const CartIcon = styled.div`
  background-image: url('https://res.cloudinary.com/dlwr6vxib/image/upload/v1705378408/Guajolota/shopping-cart_bjwdww.png');
  width: 25px;
  height: 25px;
  background-size: cover;
  cursor: pointer;
  margin: 10px
`;

export const SearchDiv = styled.div`
  width: auto;
  height: 60px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #E7E7E7;
  display: flex;
  aling-content: center;
  padding: 0 28px;
`

export const SearchInput = styled.input`
  background: transparent;
  outline: none;
  border: none;
  width: 100%;
  color: #9A9A9D;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ImagenProducto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 200px;
`;

export const DivBotonAgregarCarrito = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: inline-flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: rgba(242, 242, 242, 0.01);
  backdrop-filter: blur(24px);
`;

export const BotonAgregarCarrito = styled.div`
  display: flex;
  width: 312px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  background: #FA4A0C;
  color: #F6F6F9;
  text-align: right;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  cursor: pointer;
`

export const ComboPriceP = styled.p`
  color: #FA4A0C;
  align-self: stretch;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const ComboName = styled.p`
  color: var(--Black, #0D0D0D);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-self: stretch;
`

export const DivSabores = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  align-items: flex-start;
  gap: 60px;
`

export const DivContadorCart = styled.div`
  display: inline-flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
`

export const TitlePages = styled.h1`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const NoCartItemsIcon = styled.h2`
  color: var(--Black, #0D0D0D);
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`


//div para el boton naranja siempre se ve
export const DivButtonAS = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px 24px;
  gap: 10px;
  background: rgba(242, 242, 242, 0.01);
  backdrop-filter: blur(24px);
  justify-content: center;
`;

export const ButtonAS = styled.div`
  display: flex;
  width: 312px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #FA4A0C;
  color: #F6F6F9;
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  cursor: pointer;
`

export const TextButtonAS = styled.p`
  color: #F6F6F9;
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

export const CartItemText = styled.p`
  color: var(--Black, #0D0D0D);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`

export const CartPriceText = styled.p`
  color: #FA4A0C;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

export const CartTotalDiv = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
`