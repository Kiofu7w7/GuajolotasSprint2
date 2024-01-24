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
  align-items: center;
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

export const DivFondoSVG = styled.div`
  height: 100%;
  background-color: #F2F2F2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='247' height='247' viewBox='0 0 200 200'%3E%3Cg %3E%3Cpolygon fill='%23090909' points='100 57.1 64 93.1 71.5 100.6 100 72.1'/%3E%3Cpolygon fill='%230b0b0b' points='100 57.1 100 72.1 128.6 100.6 136.1 93.1'/%3E%3Cpolygon fill='%23090909' points='100 163.2 100 178.2 170.7 107.5 170.8 92.4'/%3E%3Cpolygon fill='%230b0b0b' points='100 163.2 29.2 92.5 29.2 107.5 100 178.2'/%3E%3Cpath fill='%230D0D0D' d='M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z'/%3E%3Cpolygon fill='%23c10100' points='0 157.1 0 172.1 28.6 200.6 36.1 193.1'/%3E%3Cpolygon fill='%23dd2e00' points='70.7 200 70.8 192.4 63.2 200'/%3E%3Cpolygon fill='%23FA4A0C' points='27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5'/%3E%3Cpolygon fill='%23dd2e00' points='200 157.1 164 193.1 171.5 200.6 200 172.1'/%3E%3Cpolygon fill='%23c10100' points='136.7 200 129.2 192.5 129.2 200'/%3E%3Cpolygon fill='%23FA4A0C' points='172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200'/%3E%3Cpolygon fill='%23c10100' points='129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0'/%3E%3Cpolygon fill='%23FA4A0C' points='200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2'/%3E%3Cpolygon fill='%23dd2e00' points='63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0'/%3E%3Cpolygon fill='%23FA4A0C' points='0 63.2 63.2 0 27.8 0 0 27.8'/%3E%3C/g%3E%3C/svg%3E");
`
export const DivFondoDifumi = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`