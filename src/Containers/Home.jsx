import React, { useRef, useState } from "react";
import NavBar from "../Components/NavBar";
import { MinusCircleOutlined, PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import {
  SearchDiv,
  SearchInput,
  ImagenProducto,
  CarouselWrapper,
  DivBotonAgregarCarrito,
  BotonAgregarCarrito,
  ComboPriceP,
  ComboName,
  DivSabores,
  DivContadorCart,
} from "../Helpers/styledComponets";
import { Carousel, Checkbox, Menu } from "antd";
import "../Styles/StyleMenu.css"
import useProducts from "../Hooks/useProducts";
import { useNavigate } from "react-router-dom";

function Home() {

  const carouselRef = useRef();
  const {
    data,
    categoriaData,
    dataSelectProduct,
    handleCambiarC,
    handleCambiarP,
  } = useProducts();

  //CUANTOS TAMALES COMPRAR
  const [contCarrito, setContCarrito] = useState(1);

  const handlePlusCarrito = () => {
    setContCarrito(contCarrito + 1)
  }

  const handleMinusCarrito = () => {
    if(contCarrito !== 1){
      setContCarrito(contCarrito - 1);
    }
  };

  // POP UP
  const [isVisible, setIsVisible] = useState(false);

  const popUpHandleClick = () => {
    setIsVisible(!isVisible);
    const popup = document.querySelector(".DivPopUp");
    popup.style.right = isVisible ? "-100vw" : "0";
  };

  //CARUSEL
  const goToSlide = (slideNumber) => {
    carouselRef.current.goTo(slideNumber);
  };

  //CHECKBOX
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  //SEARCH NAVIGATE

  const navigate = useNavigate();
  const navegarSerach = () => {
    navigate("/search")
  }

  //RETURN

  return (
    <div>
      <NavBar /> 
      <div style={{ padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{
              width: "max-content",
              minWidth: "250px",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            Nada como una Guajolota para empezar el día
          </h1>
        </div>
        <SearchDiv onClick={() => {navegarSerach()}} style={{ marginBottom: 20 }}>
          <SearchOutlined />
          <SearchInput placeholder="Sabor de guajolota, bebida..." />
        </SearchDiv>
      </div>
      <section name="popUp"></section>
      <section>
        <Menu
          mode="horizontal"
          style={{
            background: "transparent",
            border: "none",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
            padding: 0,
          }}
          defaultSelectedKeys="1"
        >
          {data &&
            data.map((item, index) => (
              <Menu.Item
                style={{ color: "#9A9A9D", fontWeight: 500, fontSize: "large" }}
                onClick={() => {
                  handleCambiarC(index);
                }}
                key={item.id}
              >
                {item.nombre.charAt(0).toUpperCase() + item.nombre.slice(1)}
              </Menu.Item>
            ))}
        </Menu>
      </section>
      <section>
        <div>
          {categoriaData?.contenido?.map((item, index) => (
            <div
              style={{
                display: "flex",
                backgroundColor: "white",
                margin: 10,
                padding: 16,
                borderRadius: 20,
                cursor: "pointer",
              }}
              onClick={() => {
                popUpHandleClick();
                handleCambiarP(index);
                goToSlide(index);
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "80px",
                  height: "80px",
                  marginRight: 20,
                }}
              >
                <ImagenProducto
                  src={item.imagen}
                  style={{ backgroundImage: `url(${item.plato})` }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h4 style={{ margin: 0, padding: 0, marginBottom: 5 }}>
                  {item.nombre}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    margin: 0,
                    padding: 0,
                    color: "#FA4A0C",
                  }}
                >
                  ${item.precio} MXN
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="DivPopUp">
          <img
            alt=""
            style={{ cursor: "pointer" }}
            src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1705706634/Guajolota/chevron-left_piq1vb.png"
            onClick={() => {
              popUpHandleClick();
            }}
          ></img>
          <CarouselWrapper style={{ zIndex: 3 }}>
            <Carousel
              ref={carouselRef}
              activeIndex={dataSelectProduct}
              direction="horizontal"
              touchable
              initialSlide={dataSelectProduct}
              afterChange={(newIndex) => handleCambiarP(newIndex)}
            >
              {categoriaData?.contenido?.map((item) => (
                <div>
                  <ImagenProducto
                    src={item.imagen}
                    key={item.id}
                    style={{ backgroundImage: `url(${item.plato})` }}
                    className="imagenCarucel"
                  />
                  
                </div>
              ))}
            </Carousel>
          </CarouselWrapper>
          <div>
            <h1>Guajolota de Tamal {dataSelectProduct?.nombre}</h1>{" "}
            {/*PONER EN EL JSON UN NOMBRE LARGO PARA TAMAL "DE" MOLE*/}
            <h3>${dataSelectProduct?.precio} MXN</h3>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DivContadorCart>
                <MinusCircleOutlined onClick={() => handleMinusCarrito()} />
                <h3 style={{ margin: 0 }}>{contCarrito}</h3>
                <PlusCircleOutlined onClick={() => handlePlusCarrito()} />
              </DivContadorCart>
            </div>
            <div>
              <h3>Sabor</h3>
              <DivSabores>
                {categoriaData?.contenido?.map((item, index) =>
                  item.nombre === dataSelectProduct?.nombre ? (
                    <img
                      style={{ width: 64, height: 69 }}
                      alt=""
                      src={item.sabor_imagen}
                      key={index}
                      onClick={() => {
                        handleCambiarP(index);
                        goToSlide(index);
                      }}
                    ></img>
                  ) : (
                    <img
                      style={{ width: 64, height: 69, opacity: "0.2" }}
                      alt=""
                      src={item.sabor_imagen}
                      key={index}
                      onClick={() => {
                        handleCambiarP(index);
                        goToSlide(index);
                      }}
                    ></img>
                  )
                )}
              </DivSabores>
            </div>
            <section>
              <h3>Guajolocombo</h3>
                <p>
                  Selecciona la bebida que más te guste y disfruta de tu desayuno.
                </p>
              <div style={{ display: "flex", marginBottom: 100 }}>
                {data &&
                data.length > 0 &&
                categoriaData?.nombre !== "bebidas" ? (
                  <div style={{ display: "flex" }}>
                    {data[1]?.contenido?.map((item) => (
                      <div>
                        <img
                          style={{
                            width: 64,
                            height: 64,
                            objectFit: "cover",
                          }}
                          alt=""
                          src={item.imagen}
                        ></img>
                        <ComboName>{item.nombre}</ComboName>
                        <ComboPriceP>+ ${item.precio} MXN</ComboPriceP>
                        <img
                          alt=""
                          src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1705788000/Guajolota/square_zy5mzl.png"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {data?.length > 0 && (
                      <div style={{ display: "flex" }}>
                        {data[0]?.contenido?.map((item) => (
                          <div>
                            <img
                              style={{
                                width: 64,
                                height: 64,
                                objectFit: "cover",
                              }}
                              alt=""
                              src={item.imagen}
                            ></img>
                            <h3>{item.nombre}</h3>
                            <p>{item.precio}</p>
                            <Checkbox>Checkbox</Checkbox>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <DivBotonAgregarCarrito>
                <BotonAgregarCarrito>
                  <p style={{ margin: 0 }}>Agregar {contCarrito} al carrito</p>
                  <p style={{ margin: 0 }}>
                    ${dataSelectProduct?.precio * contCarrito}.00
                  </p>
                </BotonAgregarCarrito>
              </DivBotonAgregarCarrito>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
