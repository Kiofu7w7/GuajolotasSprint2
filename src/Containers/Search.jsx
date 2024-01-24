import React, { useRef, useState } from 'react';
import { BotonAgregarCarrito, CarouselWrapper, ComboName, ComboPriceP, DivBotonAgregarCarrito, DivContadorCart, DivSabores, ImagenProducto, SearchDiv, SearchInput } from '../Helpers/styledComponets';
import { MinusCircleOutlined, PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import useProducts from '../Hooks/useProducts';
import { Carousel, Checkbox } from 'antd';

function Search() {
  const carouselRef = useRef();
  const {
    data,
    categoriaData,
    dataSelectProduct,
    handleCambiarC,
    handleCambiarP,
  } = useProducts();

  const [contCarrito, setContCarrito] = useState(1);
  const handlePlusCarrito = () => {
    setContCarrito(contCarrito + 1)
  }

  const handleMinusCarrito = () => {
    if(contCarrito !== 1){
      setContCarrito(contCarrito - 1);
    }
  };
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

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleCategoria = (categoria) => {
    if (categoria === "guajalotas") {
      handleCambiarC(0)
    }else if (categoria === "bebidas") {
      handleCambiarC(1)
    }else{
      handleCambiarC(2)
    }
  }

  const handleBuscador = (e) => {
    setSearchTerm(e.target.value);
  
    if (e.target.value.trim() === '') { // Check for empty search term (including whitespace)
      setResults(data.flatMap(categoria => categoria.contenido)); // Retrieve all products directly
    } else {
      const newResults = [];
      data.forEach(categoria => {
        categoria.contenido.forEach(producto => {
          if (producto.nombre_completo.toLowerCase().includes(e.target.value.toLowerCase())) {
            newResults.push(producto);
          }
        });
      });
      setResults(newResults);
    }
  };

  return (
    <div>
        <SearchDiv style={{ marginBottom: 20 }}>
          <SearchOutlined />
          <SearchInput onChange={handleBuscador} placeholder="Sabor de guajolota, bebida..." />
        </SearchDiv>
        {results.map((producto, index) => (
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
            handleCategoria(producto.categoria)
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
              src={producto.imagen}
              style={{ backgroundImage: `url(${producto.plato})` }}
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
              {producto.nombre_completo}
            </h4>
            <p
              style={{
                fontSize: 14,
                margin: 0,
                padding: 0,
                color: "#FA4A0C",
              }}
            >
              ${producto.precio} MXN
            </p>
          </div>
        </div>
        ))}
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
  )
}

export default Search;
