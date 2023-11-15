import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ModalQuote from "../Components/ModalQuote";

export const ServicesTabs = [
  {
    id: 0,
    title: "Basic general services",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            Limpieza de rutina de áreas comunes, que incluye quitar el polvo,
            pasar la aspiradora y trapear para mantener la limpieza general.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Limpieza de dormitorios, sala y salon
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Limpiar el polvo</li>
                <li className="paragraph">
                  Manijas de puertas e interruptores de luz
                </li>
                <li className="paragraph">
                  Limpie/desempolve las rejillas de ventilación, frontales de
                  aire acondicionado (superficiales)
                </li>
                <li className="paragraph">
                  Vidrios interiores: Puertas y espejos
                </li>
                <li className="paragraph">
                  Alféizares/rieles y zócalos de ventanas.
                </li>
                <li className="paragraph">
                  Barrer y trapear pisos de superficie dura
                </li>
                <li className="paragraph">Aspirar alfrombra y tapetes</li>
                <li className="paragraph">
                  1-2 puertas corredizas de entrada/salida incluidas
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Limpieza de baño:</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Superficies</li>
                <li className="paragraph">
                  Manijas de puertas e interruptores de luz
                </li>
                <li className="paragraph">Duchas y bañeras</li>
                <li className="paragraph">Baños</li>
                <li className="paragraph">
                  Vidrio interior: ventanas, puertas, espejos
                </li>
                <li className="paragraph">Trabajos de recorte y moldura</li>
                <li className="paragraph">
                  Rejillas de entrada de polvo y rejillas de retorno de aire
                </li>
                <li className="paragraph">
                  Vidrio interior: ventanas, puertas, espejos
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Limpieza de cocina:</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Encimeras</li>
                <li className="paragraph">
                  Superficies: todos los gabinetes, estufa, refrigerador
                </li>
                <li className="paragraph">Microondas por dentro y por fuera</li>
                <li className="paragraph">Fregaderos y accesorios</li>
                <li className="paragraph">
                  Limpie el exterior de gabinetes y cajones
                </li>
                <li className="paragraph">
                  Cubiertas para interruptores de luz y tomacorrientes
                </li>
                <li className="paragraph">
                  Barrer y trapear pisos de superficie dura
                </li>
                <li className="paragraph">Aspirar alfombras y tapetes</li>
                <li className="paragraph">Limpieza de campanas de cocina</li>
                <li className="paragraph">
                  Alféizares/rieles de ventanas y zócalos
                </li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>
        <p className="paragraph__bold">
          NOTA:
          <span className="paragraph">
            Cabe mencionar que el servicio de limpieza puede incluir su propio
            paquete personalizado por tal motivo recomendamos preguntar o
            ponerse en contacto para una mejor atención.
          </span>
        </p>
        {/* EXTRAS */}
        <div className="service__extras">
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#e1e3e6" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">EXTRAS/ADICIONALES</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph__bold">
                  Limpieza interior de electrodomésticos:
                  <span className="paragraph">
                    Limpieza y desinfección del interior de electrodomésticos de
                    cocina como refrigeradores.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Limpieza de persianas y cortinas:
                  <span className="paragraph">
                    Limpieza de persianas, cortinas y cortinas para eliminar
                    polvo y alérgenos.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Limpieza de cristales:
                  <span className="paragraph">
                    Limpieza de cristales interiores y exteriores para una
                    visión clara y sin rayas.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Limpieza del garaje:
                  <span className="paragraph">
                    Limpieza y organización del garaje, incluido barrer y
                    ordenar.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Limpieza de patios y exteriores:
                  <span className="paragraph">
                    Limpieza de espacios exteriores, Incluidos patios, terrazas
                    y muebles.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Lavado de vajillas:
                  <span className="paragraph">
                    Lavado de manos o carga y descarga del lavavajillas.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Servicios de Lavandería:
                  <span className="paragraph">
                    Lavado, secado, doblado y planchado de ropa y mantelería.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Organización y orden:
                  <span className="paragraph">
                    Ordenar y organizar espacios, incluidos armarios, gabinetes
                    y despensas. eliminación de moho y hongos, limpieza
                    posterior a la construcción o eliminación de pelo de
                    mascotas.
                  </span>
                </li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 1,
    title: "Deep Cleaning",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            Limpieza a fondo de todas las superficies, electrodomésticos y
            rincones ocultos, centrándose en la suciedad y la mugre acumuladas.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Lista de verificación de la cocina de la casa profunda
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Limpiar y desinfectar el bote de basura
                </li>
                <li className="paragraph">
                  Limpiar el microondas. (dentro y fuera)
                </li>
                <li className="paragraph">
                  Limpiar profundamente el lavavajillas.
                </li>
                <li className="paragraph">
                  Limpiar el interior del frigorífico y organizar
                </li>
                <li className="paragraph">Limpiar y organizar el congelador</li>
                <li className="paragraph">Bobinas de refrigerador al vacío</li>
                <li className="paragraph">
                  Limpiar el horno (dentro del horno)
                </li>
                <li className="paragraph">
                  Limpie la ventilación del capó y cambie el filtro si es
                  necesario
                </li>
                <li className="paragraph">
                  Limpie los quemadores de la estufa
                </li>
                <li className="paragraph">
                  Limpiar y desinfectar el triturador de basura
                </li>
                <li className="paragraph">
                  Limpiar y organizar utensilios de plástico y contenedores de
                  almacenamiento.
                </li>
                <li className="paragraph">
                  Reorganizar gabinetes y cajones de cocina. (gabinetes
                  interiores y exteriores)
                </li>
                <li className="paragraph">
                  Limpiar y organizar los cajones de la cocina
                </li>
                <li className="paragraph">Limpiar y desinfectar la cafetera</li>
                <li className="paragraph">
                  Limpiar y desinfectar pequeños electrodomésticos
                </li>
                <li className="paragraph">
                  Limpia debajo del fregadero y elimina lo innecesario
                </li>
                <li className="paragraph">
                  Puertas de gabinetes limpias profundamente
                </li>
                <li className="paragraph">Pisos de limpieza profunda</li>
                <li className="paragraph">
                  Molduras de techo antipolvo, esquinas de paredes y molduras de
                  piso
                </li>
                <li className="paragraph">Fregar paredes</li>
                <li className="paragraph">
                  Limpiar y desinfectar interruptores y enchufes de luz
                </li>
                <li className="paragraph">
                  Retire todo el polvo de arriba a abajo
                </li>
                <li className="paragraph">Lavar cojines de mesa</li>
                <li className="paragraph">Artefactos de iluminación limpios</li>
                <li className="paragraph">
                  Desinfecte la mesa y limpie todas las sillas, incluidas las
                  patas y debajo
                </li>
                <li className="paragraph">
                  Retire la alfombra, sacúdala, aspire y limpie el piso antes de
                  reemplazar la alfombra.
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Lista de verificación del comedor para la limpieza profunda de
                  la casa
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Eliminar elementos innecesarios</li>
                <li className="paragraph">
                  Manijas de puertas e interruptores de luz
                </li>
                <li className="paragraph">Duchas y bañeras</li>
                <li className="paragraph">Baños</li>
                <li className="paragraph">
                  Vidrio interior: ventanas, puertas, espejos
                </li>
                <li className="paragraph">Trabajos de recorte y moldura</li>
                <li className="paragraph">
                  Rejillas de entrada de polvo y rejillas de retorno de aire
                </li>
                <li className="paragraph">
                  Vidrio interior: ventanas, puertas, espejos
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Limpieza profunda de la casa para baños:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Recuerde siempre limpiar de arriba a abajo
                </li>
                <li className="paragraph">
                  Limpie las salidas de aire del techo
                </li>
                <li className="paragraph">
                  Limpiar y desinfectar interruptores y accesorios de luz
                </li>
                <li className="paragraph">
                  Limpiar y desinfectar los portacepillos de dientes
                </li>
                <li className="paragraph">
                  Limpie y rellene la jabonera y/o la bomba
                </li>
                <li className="paragraph">Limpiar artefactos de iluminación</li>
                <li className="paragraph">Espejo limpio</li>
                <li className="paragraph">
                  Limpiar la cortina y el forro de la ducha
                </li>
                <li className="paragraph">
                  Limpiar el marco de la puerta de la ducha
                </li>
                <li className="paragraph">
                  Limpiar la tira de plástico en la parte inferior de una puerta
                  de ducha de vidrio
                </li>
                <li className="paragraph">Desinfectar encimeras</li>
                <li className="paragraph">
                  Quite el polvo y limpie las ventanas, por dentro y por fuera
                </li>
                <li className="paragraph">Trapear y fregar pisos</li>
                <li className="paragraph">
                  Friegue y desinfecte el inodoro, incluso alrededor de la base,
                  debajo del asiento y alrededor de las bisagras
                </li>
                <li className="paragraph">Frote la bañera y/o la ducha</li>
                <li className="paragraph">
                  Friega las paredes. (algunas manchas)
                </li>
                <li className="paragraph">Lavar el inodoro</li>
                <li className="paragraph">
                  Lavar el bote de basura (por dentro y por fuera)
                </li>
                <li className="paragraph">
                  Limpiar gabinetes, perillas, toalleros y portarrollos
                </li>
                <li className="paragraph">
                  Limpiar el extractor de aire del baño
                </li>
                <li className="paragraph">Cabezal de ducha limpio</li>
                <li className="paragraph">
                  Limpia, organiza y ordena armarios y cajones
                </li>
                <li className="paragraph">
                  Limpia, organiza y ordena el armario del baño
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Lista de verificación de limpieza profunda para salas de
                  estar/áreas familiares:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Toma cualquier cosa que no pertenezca a la sala de estar.
                </li>
                <li className="paragraph">
                  Molduras de techo antipolvo, esquinas de paredes y molduras de
                  piso
                </li>
                <li className="paragraph">
                  Aspire toda el área de la alfombra
                </li>
                <li className="paragraph">
                  Aspire debajo de los muebles y entre los cojines
                </li>
                <li className="paragraph">Ventiladores de techo de polvo</li>
                <li className="paragraph">
                  Limpie las luces y lave los globos de luz
                </li>
                <li className="paragraph">Lámparas de polvo</li>
                <li className="paragraph">
                  Bordes de polvo de tapices, espejos y cuadros
                </li>
                <li className="paragraph">Limpiar ventanas y alféizares</li>
                <li className="paragraph">
                  Eliminar las marcas de desgaste de puertas y molduras
                </li>
                <li className="paragraph">Electrónica de polvo</li>
                <li className="paragraph">
                  Desinfectar mandos a distancia y dispositivos electrónicos
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Lista de verificación de limpieza profunda para dormitorios:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Toma cualquier cosa que no pertenezca al dormitorio.
                </li>
                <li className="paragraph">
                  Polvo del techo, las esquinas y las molduras de techo
                  superiores e inferiores
                </li>
                <li className="paragraph">
                  Quitar el polvo de los zócalos y los alféizares de las
                  ventanas
                </li>
                <li className="paragraph">
                  Quitar el polvo y pulir los muebles
                </li>
                <li className="paragraph">
                  Bordes de polvo de tapices, espejos y cuadros
                </li>
                <li className="paragraph">Limpiar cristales y espejos</li>
                <li className="paragraph">Lámparas de polvo</li>
                <li className="paragraph">Pantallas de lámparas de vacío</li>
                <li className="paragraph">
                  Recogemos, doblamos la ropa sucia y retiramos todo lo que no
                  corresponde
                </li>
                <li className="paragraph">Artefactos de iluminación limpios</li>
                <li className="paragraph">Organizar el armario</li>
                <li className="paragraph">Colchón limpio</li>
                <li className="paragraph">Limpiar debajo de tu cama</li>
                <li className="paragraph">Lavar las sábanas</li>
                <li className="paragraph">Lavar almohadas</li>
                <li className="paragraph">Limpiar ventanas y alféizares</li>
                <li className="paragraph">
                  Aspirar la alfombra, incluidos los bordes y debajo de los
                  muebles
                </li>
                <li className="paragraph">
                  Desinfectar las perillas de las puertas y las placas de los
                  interruptores de luz
                </li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>
        <p className="paragraph__bold">
          NOTA:
          <span className="paragraph">
            Cabe mencionar que el servicio de limpieza puede incluir su propio
            paquete personalizado por tal motivo recomendamos preguntar o
            ponerse en contacto para una mejor atención.
          </span>
        </p>
        {/* EXTRAS */}
        <div className="service__extras">
          <Accordion defaultExpanded className="accordion__container">
            <AccordionSummary
              sx={{ backgroundColor: "#e1e3e6" }}
              expandIcon={<ExpandMore fontSize="large" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className="paragraph__bold">EXTRAS/ADICIONALES</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="paragraph__bold">
                Lista de verificación adicional de limpieza profunda de la casa:
              </p>
              <li className="paragraph">
                Limpieza de alfombras/eliminación de manchas más allá de pasar
                la aspiradora
              </li>
              <li className="paragraph">
                Desobstrucción de desagúes y tuberías
              </li>
              <li className="paragraph">Lavado de cristales</li>
              <li className="paragraph">Limpieza de porches y patios</li>
              <li className="paragraph">
                Reparación o limpieza de pequeños electrodomésticos
              </li>
              <li className="paragraph">
                Restauración de daños por incendio y agua
              </li>
              <li className="paragraph">
                Reparación de rayones o daños en la madera
              </li>
              <li className="paragraph">Saneamiento del cubo de basura</li>
              <li className="paragraph">Descalcificación de grifos</li>
              <li className="paragraph">
                Limpieza de cubiertas de ventilación
              </li>
              <li className="paragraph">
                Descongelación y limpieza de congeladores
              </li>
              <li className="paragraph">Limpieza de lavavajillas</li>
              <li className="paragraph">Lavado de platos, ollas y sartenes</li>
              <li className="paragraph">Limpieza de cortinas de baño</li>
              <li className="paragraph">Limpieza de aireadores</li>
              <li className="paragraph">Campana de cocina decreciente</li>
              <li className="paragraph">Recogiendo el desorden</li>
              <li className="paragraph">Lechada para azulejos</li>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
    ),
  },
  {
    id: 2,
    title: "Office Cleaning",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            Limpieza y mantenimiento periódico de los espacios de oficinas,
            quitando el polvo, limpiar superficies, retirar la basura, incluidos
            escritorios, pisos, baños y áreas comunes.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Esto incluye</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Limpieza y saneamiento que cubren una amplia gama de
                  instalaciones, incluidas oficinas de escuelas, empresas
                  pequeñas medianas o grandes y edificios.
                </li>
                <li className="paragraph__bold">
                  Limpieza de baños:
                  <span className="paragraph">
                    Limpieza y desinfección minuciosa de los baños para
                    garantizar la higiene y prevenir la propagación de gérmenes.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Retiro de basura:
                  <span className="paragraph">
                    Vaciar y reemplazar bolsas de basura en contenedores
                    comerciales y áreas de eliminación de desechos.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Quitar el polvo y limpiar las superficies:
                  <span className="paragraph">
                    Quitar el polvo regularmente de superficies como
                    escritorios, estantes y equipos para mantener un espacio de
                    trabajo limpio y ordenado.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Limpieza con mucho polvo:
                  <span className="paragraph">
                    Eliminación de polvo y telarañas de áreas altas y de difícil
                    acceso, como lámparas y esquinas del techo.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Limpieza de persianas y cortinas:
                  <span className="paragraph">
                    Limpieza y mantenimiento de persianas y cortinas para
                    eliminar polvo y alérgenos.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Planes de limpieza personalizados:
                  <span className="paragraph">
                    Planes de limpieza personalizados para satisfacer las
                    necesidades específicas de cada instalación.
                  </span>
                </li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>

        <p className="paragraph__bold">
          NOTA:
          <span className="paragraph">
            Cabe mencionar que el servicio de limpieza puede incluir su propio
            paquete personalizado por tal motivo recomendamos preguntar o
            ponerse en contacto para una mejor atención.
          </span>
        </p>
      </section>
    ),
  },
  {
    id: 3,
    title: "Recurring Cleaning",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            Es una limpieza de rutina, puede ser cada semana, 15 dias o
            mensualmente. Dentro de este tipo se encuentra la general, la
            profunda o la de oficina.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Limpieza de dormitorios, sala y salon
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Limpiar el polvo</li>
                <li className="paragraph">
                  Manijas de puertas e interruptores de luz
                </li>
                <li className="paragraph">
                  Limpie/desempolve las rejillas de ventilación, frontales de
                  aire acondicionado (superficiales)
                </li>
                <li className="paragraph">
                  Vidrios interiores: Puertas y espejos
                </li>
                <li className="paragraph">
                  Alféizares/rieles y zócalos de ventanas.
                </li>
                <li className="paragraph">
                  Barrer y trapear pisos de superficie dura
                </li>
                <li className="paragraph">Aspirar alfrombra y tapetes</li>
                <li className="paragraph">
                  1-2 puertas corredizas de entrada/salida incluidas
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Limpieza de baño:</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Superficies</li>
                <li className="paragraph">
                  Manijas de puertas e interruptores de luz
                </li>
                <li className="paragraph">Duchas y bañeras</li>
                <li className="paragraph">Baños</li>
                <li className="paragraph">
                  Vidrio interior: ventanas, puertas, espejos
                </li>
                <li className="paragraph">Trabajos de recorte y moldura</li>
                <li className="paragraph">
                  Rejillas de entrada de polvo y rejillas de retorno de aire
                </li>
                <li className="paragraph">
                  Vidrio interior: ventanas, puertas, espejos
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Limpieza de cocina:</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Encimeras</li>
                <li className="paragraph">
                  Superficies: todos los gabinetes, estufa, refrigerador
                </li>
                <li className="paragraph">Microondas por dentro y por fuera</li>
                <li className="paragraph">Fregaderos y accesorios</li>
                <li className="paragraph">
                  Limpie el exterior de gabinetes y cajones
                </li>
                <li className="paragraph">
                  Cubiertas para interruptores de luz y tomacorrientes
                </li>
                <li className="paragraph">
                  Barrer y trapear pisos de superficie dura
                </li>
                <li className="paragraph">Aspirar alfombras y tapetes</li>
                <li className="paragraph">Limpieza de campanas de cocina</li>
                <li className="paragraph">
                  Alféizares/rieles de ventanas y zócalos
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Lista de verificación de la cocina de la casa profunda
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Limpiar y desinfectar el bote de basura
                </li>
                <li className="paragraph">
                  Limpiar el microondas. (dentro y fuera)
                </li>
                <li className="paragraph">
                  Limpiar profundamente el lavavajillas.
                </li>
                <li className="paragraph">
                  Limpiar el interior del frigorífico y organizar
                </li>
                <li className="paragraph">Limpiar y organizar el congelador</li>
                <li className="paragraph">Bobinas de refrigerador al vacío</li>
                <li className="paragraph">
                  Limpiar el horno (dentro del horno)
                </li>
                <li className="paragraph">
                  Limpie la ventilación del capó y cambie el filtro si es
                  necesario
                </li>
                <li className="paragraph">
                  Limpie los quemadores de la estufa
                </li>
                <li className="paragraph">
                  Limpiar y desinfectar el triturador de basura
                </li>
                <li className="paragraph">
                  Limpiar y organizar utensilios de plástico y contenedores de
                  almacenamiento.
                </li>
                <li className="paragraph">
                  Reorganizar gabinetes y cajones de cocina. (gabinetes
                  interiores y exteriores)
                </li>
                <li className="paragraph">
                  Limpiar y organizar los cajones de la cocina
                </li>
                <li className="paragraph">Limpiar y desinfectar la cafetera</li>
                <li className="paragraph">
                  Limpiar y desinfectar pequeños electrodomésticos
                </li>
                <li className="paragraph">
                  Limpia debajo del fregadero y elimina lo innecesario
                </li>
                <li className="paragraph">
                  Puertas de gabinetes limpias profundamente
                </li>
                <li className="paragraph">Pisos de limpieza profunda</li>
                <li className="paragraph">
                  Molduras de techo antipolvo, esquinas de paredes y molduras de
                  piso
                </li>
                <li className="paragraph">Fregar paredes</li>
                <li className="paragraph">
                  Limpiar y desinfectar interruptores y enchufes de luz
                </li>
                <li className="paragraph">
                  Retire todo el polvo de arriba a abajo
                </li>
                <li className="paragraph">Lavar cojines de mesa</li>
                <li className="paragraph">Artefactos de iluminación limpios</li>
                <li className="paragraph">
                  Desinfecte la mesa y limpie todas las sillas, incluidas las
                  patas y debajo
                </li>
                <li className="paragraph">
                  Retire la alfombra, sacúdala, aspire y limpie el piso antes de
                  reemplazar la alfombra.
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Lista de verificación del comedor para la limpieza profunda de
                  la casa
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Eliminar elementos innecesarios</li>
                <li className="paragraph">
                  Manijas de puertas e interruptores de luz
                </li>
                <li className="paragraph">Duchas y bañeras</li>
                <li className="paragraph">Baños</li>
                <li className="paragraph">
                  Vidrio interior: ventanas, puertas, espejos
                </li>
                <li className="paragraph">Trabajos de recorte y moldura</li>
                <li className="paragraph">
                  Rejillas de entrada de polvo y rejillas de retorno de aire
                </li>
                <li className="paragraph">
                  Vidrio interior: ventanas, puertas, espejos
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Limpieza profunda de la casa para baños:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Recuerde siempre limpiar de arriba a abajo
                </li>
                <li className="paragraph">
                  Limpie las salidas de aire del techo
                </li>
                <li className="paragraph">
                  Limpiar y desinfectar interruptores y accesorios de luz
                </li>
                <li className="paragraph">
                  Limpiar y desinfectar los portacepillos de dientes
                </li>
                <li className="paragraph">
                  Limpie y rellene la jabonera y/o la bomba
                </li>
                <li className="paragraph">Limpiar artefactos de iluminación</li>
                <li className="paragraph">Espejo limpio</li>
                <li className="paragraph">
                  Limpiar la cortina y el forro de la ducha
                </li>
                <li className="paragraph">
                  Limpiar el marco de la puerta de la ducha
                </li>
                <li className="paragraph">
                  Limpiar la tira de plástico en la parte inferior de una puerta
                  de ducha de vidrio
                </li>
                <li className="paragraph">Desinfectar encimeras</li>
                <li className="paragraph">
                  Quite el polvo y limpie las ventanas, por dentro y por fuera
                </li>
                <li className="paragraph">Trapear y fregar pisos</li>
                <li className="paragraph">
                  Friegue y desinfecte el inodoro, incluso alrededor de la base,
                  debajo del asiento y alrededor de las bisagras
                </li>
                <li className="paragraph">Frote la bañera y/o la ducha</li>
                <li className="paragraph">
                  Friega las paredes. (algunas manchas)
                </li>
                <li className="paragraph">Lavar el inodoro</li>
                <li className="paragraph">
                  Lavar el bote de basura (por dentro y por fuera)
                </li>
                <li className="paragraph">
                  Limpiar gabinetes, perillas, toalleros y portarrollos
                </li>
                <li className="paragraph">
                  Limpiar el extractor de aire del baño
                </li>
                <li className="paragraph">Cabezal de ducha limpio</li>
                <li className="paragraph">
                  Limpia, organiza y ordena armarios y cajones
                </li>
                <li className="paragraph">
                  Limpia, organiza y ordena el armario del baño
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Lista de verificación de limpieza profunda para salas de
                  estar/áreas familiares:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Toma cualquier cosa que no pertenezca a la sala de estar.
                </li>
                <li className="paragraph">
                  Molduras de techo antipolvo, esquinas de paredes y molduras de
                  piso
                </li>
                <li className="paragraph">
                  Aspire toda el área de la alfombra
                </li>
                <li className="paragraph">
                  Aspire debajo de los muebles y entre los cojines
                </li>
                <li className="paragraph">Ventiladores de techo de polvo</li>
                <li className="paragraph">
                  Limpie las luces y lave los globos de luz
                </li>
                <li className="paragraph">Lámparas de polvo</li>
                <li className="paragraph">
                  Bordes de polvo de tapices, espejos y cuadros
                </li>
                <li className="paragraph">Limpiar ventanas y alféizares</li>
                <li className="paragraph">
                  Eliminar las marcas de desgaste de puertas y molduras
                </li>
                <li className="paragraph">Electrónica de polvo</li>
                <li className="paragraph">
                  Desinfectar mandos a distancia y dispositivos electrónicos
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Lista de verificación de limpieza profunda para dormitorios:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Toma cualquier cosa que no pertenezca al dormitorio.
                </li>
                <li className="paragraph">
                  Polvo del techo, las esquinas y las molduras de techo
                  superiores e inferiores
                </li>
                <li className="paragraph">
                  Quitar el polvo de los zócalos y los alféizares de las
                  ventanas
                </li>
                <li className="paragraph">
                  Quitar el polvo y pulir los muebles
                </li>
                <li className="paragraph">
                  Bordes de polvo de tapices, espejos y cuadros
                </li>
                <li className="paragraph">Limpiar cristales y espejos</li>
                <li className="paragraph">Lámparas de polvo</li>
                <li className="paragraph">Pantallas de lámparas de vacío</li>
                <li className="paragraph">
                  Recogemos, doblamos la ropa sucia y retiramos todo lo que no
                  corresponde
                </li>
                <li className="paragraph">Artefactos de iluminación limpios</li>
                <li className="paragraph">Organizar el armario</li>
                <li className="paragraph">Colchón limpio</li>
                <li className="paragraph">Limpiar debajo de tu cama</li>
                <li className="paragraph">Lavar las sábanas</li>
                <li className="paragraph">Lavar almohadas</li>
                <li className="paragraph">Limpiar ventanas y alféizares</li>
                <li className="paragraph">
                  Aspirar la alfombra, incluidos los bordes y debajo de los
                  muebles
                </li>
                <li className="paragraph">
                  Desinfectar las perillas de las puertas y las placas de los
                  interruptores de luz
                </li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>
        <p className="paragraph__bold">
          NOTA:
          <span className="paragraph">
            Cabe mencionar que el servicio de limpieza puede incluir su propio
            paquete personalizado por tal motivo recomendamos preguntar o
            ponerse en contacto para una mejor atención.
          </span>
        </p>
      </section>
    ),
  },
  {
    id: 4,
    title: "Removal Cleaning",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            Limpieza de entrada y salida exhaustiva para nuevos ocupantes que se
            mudan a una propiedad o la desalojan.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Servicio de limpieza para mudanza (Salida)
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="paragraph">
                  Al salir de su residencia actual, es esencial dejarla en
                  perfectas condiciones para los próximos ocupantes o asegurarse
                  de recibir su depósito de seguridad. Nuestro servicios de
                  limpieza para mudanzas están meticulosamente diseñados para
                  cumplir con los más altos estándares de limpieza. Nuestro
                  experimentado equipo de limpieza:{" "}
                </p>
                <ul>
                  <li className="paragraph__bold">
                    Limpieza a fondo todas las habitaciones:
                    <span className="paragraph">
                      no dejamos ningún rincón sin tocar, limpiamos
                      profundamente cada habitación para asegurarnos de que esté
                      lista par los siguientes habitantes.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Limpieza de electrodomésticos:
                    <span className="paragraph">
                      limpiamos y desinfectamos electrodomésticos com hornos,
                      refrigeradores y microondas, dejándolos impecables para
                      los nuevos residentes.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Limpieza de piso a techo:
                    <span className="paragraph">
                      nuestro equipo limpiará e higienizará pisos, paredes y
                      techos para eliminar cualquier rastro de suciedad, polvo o
                      manchas.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Detalles de baño:
                    <span className="paragraph">
                      limpiamos y desinfectamos meticulosamente los baños,
                      asegurando que los accesorios, azulejos y las superficies
                      brillen.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Servicios personalizados:
                    <span className="paragraph">
                      adaptamos nuestros servicios a sus necesidades específicas
                      y los requisitos de su contrato de arrendamiento,
                      garantizando el cumplimiento de los estándares de limpieza
                      al mudarse.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Programación flexible:
                    <span className="paragraph">
                      trabajamos con su cronograma de mudanzas, asegurando que
                      su espacio este limpio y listo para los próximos ocupantes
                      según sea necesario.
                    </span>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Servicio de limpieza para mudanza (Entrada)
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="paragraph">
                  Mudarse a una nueva casa es una aventura emocionante, pero es
                  esencial comenzar de nuevo en un ambiente limpio y saludable.
                  Nuestros servicios de limpieza para mudanzas están diseñados
                  para brindarle borrón y cuenta nueva, haciendo que su nuevo
                  espacio se sienta como en casa desde el primer día. Esto es lo
                  que ofrecemos:
                </p>
                <ul>
                  <li className="paragraph__bold">
                    Limpieza a fondo:
                    <span className="paragraph">
                      nos aseguramos de que se limpien todos los rincones,
                      eliminando cualquier residuo o polvo dejado por los
                      ocupantes anteriores.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Desinfección:
                    <span className="paragraph">
                      desinfectamos baños, cocinas y áreas de alto contacto para
                      brindarle un espacio habitable limpio e higiénico.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Limpieza personalizada:
                    <span className="paragraph">
                      nuestros servicios pueden adaptarse a sus preferencias y
                      prioridades, centrándose en las áreas que más le importan.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Eficiencia:
                    <span className="paragraph">
                      trabajamos con rapidez y eficiencia para adaptarnos a su
                      cronograma de mudanza, asegurando que su nueva casa esté
                      lista para mudarse cuando la necesite.
                    </span>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>
        <p className="paragraph__bold">
          NOTA:
          <span className="paragraph">
            Cabe mencionar que el servicio de limpieza puede incluir su propio
            paquete personalizado por tal motivo recomendamos preguntar o
            ponerse en contacto para una mejor atención.
          </span>
        </p>
      </section>
    ),
  },
  {
    id: 5,
    title: "Post-construction cleaning",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            Limpieza exhaustiva de espacios comerciales después de la
            construcción o renovaciones para eliminar el polvo y los escombros.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Esto incluye</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Quitar cintas, pegatinas</li>
                <li className="paragraph">
                  Polvo, techo (de fácil acceso), lámparas, etc
                </li>
                <li className="paragraph">
                  Barrer y aspirar todos los pisos y alféizares de ventanas
                </li>
                <li className="paragraph">
                  Fregar y azulejos, fregaderos, pulir acero inoxidable, limpiar
                  paredes
                </li>
                <li className="paragraph">
                  Barra todo el interior y exterior de la unidad
                </li>
                <li className="paragraph">Raspar y barrer el piso</li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>
        <p className="paragraph__bold">
          NOTA:
          <span className="paragraph">
            Cabe mencionar que el servicio de limpieza puede incluir su propio
            paquete personalizado por tal motivo recomendamos preguntar o
            ponerse en contacto para una mejor atención.
          </span>
        </p>
      </section>
    ),
  },
];
