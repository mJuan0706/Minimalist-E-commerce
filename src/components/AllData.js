import Img1 from "../img/products/1.jpg";
import Img2 from "../img/products/2.jpg";
import Img3 from "../img/products/3.png";
import Img4 from "../img/products/4.jpg";
import Img5 from "../img/products/5.jpg";
import Img6 from "../img/products/6.jpg";
import Img7 from "../img/products/7.jpg";
import Img8 from "../img/products/8.jpg";
import Img9 from "../img/products/9.png";
import Img10 from "../img/products/10.jpg";
import Img11 from "../img/products/11.jpg";
import Img12 from "../img/products/12.png";
import Img13 from "../img/products/13.jpg";
import Img14 from "../img/products/14.png";
import Img15 from "../img/products/15.jpg";
import Img16 from "../img/products/16.jpg";
import Img17 from "../img/products/17.png";
import Img18 from "../img/products/18.png";
import Img19 from "../img/products/19.jpg";
import Img20 from "../img/products/20r.jpg";
import OtherImgs1 from "../img/products/otherProducts/other1.jpg";
import OtherImgs2 from "../img/products/otherProducts/other2.jpg";
import Toster1 from "../img/products/otherProducts/toster1.jpg";
import Toster2 from "../img/products/otherProducts/toster2.jpg";
import LampBlue1 from "../img/products/otherProducts/lampblue1.webp";
import LampBlue2 from "../img/products/otherProducts/lampblue2.webp";
import PulpUnit1 from "../img/products/otherProducts/pulpunit1.jpg";
import PulpUnit2 from "../img/products/otherProducts/pulpunit2.jpg";
import ModernGold1 from "../img/products/otherProducts/moderngold1.webp";
import ModernGold2 from "../img/products/otherProducts/moderngold2.webp";
import CleaningOil1 from "../img/products/otherProducts/cleaningoil1.jpg";
import CleaningOil2 from "../img/products/otherProducts/cleaningoil2.jpg";
import BlackAndWhite1 from "../img/products/otherProducts/blackandwhite1.webp";
import BlackAndWhite2 from "../img/products/otherProducts/blackandwhite2.webp";
import BodyOil1 from "../img/products/otherProducts/bodyoil1.jpg";
import BodyOil2 from "../img/products/otherProducts/bodyoil2.jpg";
import Shelf1 from "../img/products/otherProducts/shelf1.webp";
import Shelf2 from "../img/products/otherProducts/shelf2.webp";
import Vase1 from "../img/products/otherProducts/vase1.webp";
import Vase2 from "../img/products/otherProducts/vase2.webp";
import ChairBoom1 from "../img/products/otherProducts/chairboom1.webp";
import ChairBoom2 from "../img/products/otherProducts/chairboom2.webp";
import BlackLamp1 from "../img/products/otherProducts/blacklamp1.webp";
import BlackLamp2 from "../img/products/otherProducts/blacklamp2.jpg";
import GoldenLamp1 from "../img/products/otherProducts/goldenlamp1.webp";
import GoldenLamp2 from "../img/products/otherProducts/goldenlamp2.webp";
import Cotton1 from "../img/products/otherProducts/cotton1.jpg";
import Cotton2 from "../img/products/otherProducts/cotton2.jpg";
import WoodChair1 from "../img/products/otherProducts/woodchair1.webp";
import WoodChair2 from "../img/products/otherProducts/woodchair2.webp";
import Copenhagen1 from "../img/products/otherProducts/copenhagen1.webp";
import Copenhagen2 from "../img/products/otherProducts/copenhagen2.webp";
import Cam1 from "../img/products/otherProducts/cam1.webp";
import Cam2 from "../img/products/otherProducts/cam2.jpg";
import TableLamp1 from "../img/products/otherProducts/tablelamp1.webp";
import TableLamp2 from "../img/products/otherProducts/tablelamp2.webp";
import MatLamp1 from "../img/products/otherProducts/mat1.webp";
import MatLamp2 from "../img/products/otherProducts/mat2.webp";
import Comfy1 from "../img/products/otherProducts/comfy1.webp";
import Comfy2 from "../img/products/otherProducts/comfy2.webp";

export const items = [
  {
    id: 1,
    category: "chair",
    img: Img1,
    description: "Sillón Pequeño Piel De Oveja",
    price: 185.368,
    otherImgs: [OtherImgs1, OtherImgs2],
    specs:
      "Tradition Little Petra VB1 Sillón Piel de oveja Moonlight/ Nogal/ Latón Edición limitada | Te hacemos un descuento especial cuando pones este producto en el carrito",
    texture: "Piel de oveja",
    weight: "15kg",
    size: "150cm x 70cm",
  },
  {
    id: 2,
    category: "kitchen",
    img: Img2,
    description: "Tostadora emergente",
    price: 8.461,
    otherImgs: [Toster1, Toster2],
    specs:
      " El diseño cuadrado redondeado de la tostadora permite que encaje perfectamente contra una pared o dentro de una esquina. Excelente para descongelar y con la distancia perfecta entre el pan y el calentador para brindar tostadas crujientes con un centro suave y esponjoso.",
    texture: "Plástico",
    weight: "3.5kg",
    size: "20xm x 10cm",
  },
  {
    id: 3,
    category: "lamp",
    img: Img3,
    description: "Lámpara Azul Claro",
    price: 14.852,
    otherImgs: [LampBlue1, LampBlue2],
    specs:
      "La Maceta Verner Panton, diseñada en 1968, fue originalmente pensada para la industria de restaurantes y exposiciones de Verner Panton.",
    texture: "Plástico",
    weight: "2kg",
    size: "15cm x 15cm",
  },
  {
    id: 4,
    category: "furniture",
    img: Img4,
    description: "Unidad de Pulpa - 5 Compartimentos",
    price: 47.752,
    otherImgs: [PulpUnit1, PulpUnit2],
    specs:
      "Las unidades de pulpa son livianas y duraderas, y se pueden usar horizontal o verticalmente. Diseñados con papel A4 en mente, los archivadores angulares y las carpetas de anillas MUJI encajan perfectamente en el interior.",
    texture: "Madera",
    weight: "45kg",
    size: "250cm x 60cm",
  },
  {
    id: 5,
    category: "lamp",
    img: Img5,
    description: "Luz moderna dorada",
    price: 35.532,
    otherImgs: [ModernGold1, ModernGold2],
    specs:
      "Tom Dixon y FRONT han creado un colgante increíblemente hermoso, con un diseño completamente único. La lámpara está fabricada con una tecnología de metalización especial que hace que el aspecto sea completamente único. El primero de su tipo. la lámpara es transparente cuando está encendida y puedes ver el emocionante juego de colores.",
    texture: "Plástico",
    weight: "3kg",
    size: "20cm x 20cm",
  },
  {
    id: 6,
    category: "skin-care",
    img: Img6,
    description: "Aceite Corporal 200ml",
    price: 12.596,
    otherImgs: [CleaningOil1, CleaningOil2],
    specs:
      "Elaborado con aceites 100 % de origen vegetal con aceite de oliva como ingrediente principal, este aceite limpiador es suave para la piel. Libre de fragancias, colorantes y aceites minerales, sin parabenos, sin alcohol, probado para alergias (no podemos garantizar que no cause alergias en ningún usuario) * Modo de uso: tome una pequeña cantidad en la palma de su mano y masajee en el rostro para eliminar el maquillaje y la suciedad. Enjuague bien con agua fría o tibia",
    texture: "Líquido",
    weight: "200ml",
    size: "10cm x 5cm",
  },
  {
    id: 7,
    category: "lamp",
    img: Img7,
    description: "Lámpara en blanco y negro",
    price: 41.361,
    otherImgs: [BlackAndWhite1, BlackAndWhite2],
    specs:
      "Concepto: Dot está inspirado en el metal perforado y los patrones que crea la luz cuando brilla a través de los pequeños agujeros. El contraste entre el metal tosco perforado y el cristal opalino liso convierte al Dot en un colgante sencillo y lleno de significado. Con su expresión elegante, Shine, ya sea que la luz esté encendida o apagada.",
    texture: "Plástico",
    weight: "6kg",
    size: "20cm x 20cm",
  },
  {
    id: 8,
    category: "furniture",
    img: Img8,
    description: "Estantería Gejst A Fresno negro/Negro",
    price: 21.621,
    otherImgs: [Shelf1, Shelf2],
    specs:
      "Diseñado por Böttcher & Kayser, Nivo es un estante de pared minimalista diseñado teniendo en cuenta la funcionalidad y la estética. Sin detalles innecesarios y líneas limpias, esta colección se cuelga con facilidad y elegancia en la pared, creando calma y una visión general de las cosas que desea colocar en el estante.",
    texture: "Madera",
    weight: "10kg",
    size: "60cm x 20cm",
  },
  {
    id: 9,
    category: "furniture",
    img: Img9,
    description: "Jarrón Cube Lolo Negro",
    price: 30.268,
    otherImgs: [Vase1, Vase2],
    specs:
      "Kubus Vase Lolo fue diseñado originalmente por Søren Lassen en 2014, pero se lanzó en relación con el décimo aniversario de Lassens en 2018. El jarrón es una extensión natural y codiciada de la serie, que ya cuenta con los candelabros Kubus y el Kubus Bowl Bowl. Colóquelo solo o en un bodegón, llénelo con flores coloridas y aireadas para un look femenino o déjelo solo en toda su simplicidad y precisión.",
    texture: "Cerámica",
    weight: "12kg",
    size: "45cm x 15cm",
  },
  {
    id: 10,
    category: "chair",
    img: Img10,
    description: "Sillón Tradicional",
    price: 16.732,
    otherImgs: [ChairBoom1, ChairBoom2],
    specs:
      "Concepto: El sillón Boomerang de &Tradition es un diseño danés clásico con una expresión moderna y minimalista. La silla fue diseñada por Hvidt & Mølgaard en 1956, y con sus elegantes cojines y estructura de madera pulida a mano, es un diseño nórdico ideal que le da un toque personal al hogar.",
    texture: "Madera",
    weight: "8kg",
    size: "60cm x 40cm",
  },
  {
    id: 11,
    category: "lamp",
    img: Img11,
    description: "Colgante El Sol Negro",
    price: 30.081,
    otherImgs: [BlackLamp1, BlackLamp2],
    specs:
      "La lámpara colgante Here Comes The Sun diseñada por Bertrand Balas es una lámpara de calidad con un aspecto único y mágico. La serie Here Comes The Sun tiene una expresión fantástica y, especialmente cuando se enciende, crea una atmósfera muy especial en la habitación en la que cuelga. La lámpara encaja perfectamente tanto sobre la mesa del comedor, la encimera de la cocina y como iluminación de la sala de estar. ",
    texture: "Plástico",
    weight: "4kg",
    size: "20cm x 20cm",
  },
  {
    id: 12,
    category: "lamp",
    img: Img12,
    description: "Lámpara dorada sencilla",
    price: 41.361,
    otherImgs: [GoldenLamp1, GoldenLamp2],
    specs:
      "La maceta Verner Panton, diseñada en 1968, se diseñó originalmente para la industria hotelera y las exhibiciones y salas de exhibición de Verner Panton. Luego, la lámpara se hizo popular en los hogares privados y, debido a su diseño elegante y muchas opciones de color, ha tenido un gran regreso en los últimos años.",
    texture: "Plástico",
    weight: "4kg",
    size: "15cm x 15cm",
  },
  {
    id: 13,
    category: "skin-care",
    img: Img13,
    description: "Almohadillas De Algodón Sin Blanquear 180",
    price: 6.204,
    otherImgs: [Cotton1, Cotton2],
    specs:
      "Almohadillas de algodón hechas de algodón suave sin blanquear. Estos están hechos en Japón y están hechos de 100% algodón.",
    texture: "Algodón",
    weight: "180g",
    size: "20cm x 10cm",
  },
  {
    id: 14,
    category: "chair",
    img: Img14,
    description: "Silla española de roble",
    price: 97.761,
    otherImgs: [WoodChair1, WoodChair2],
    specs:
      "Cuando se habla de Børge Mogensen, The Spanish Chair es probablemente uno de los primeros diseños en los que pensaría, lo cual tiene sentido ya que también es uno de sus productos más reconocidos en todo el mundo.",
    texture: "Madera",
    weight: "15kg",
    size: "60cm x 30cm",
  },
  {
    id: 15,
    category: "chair",
    img: Img15,
    description: "Sillón Copenhague",
    price: 62.041,
    otherImgs: [Copenhagen1, Copenhagen2],
    specs:
      "Concepto: La serie Hyg del danés Normann Copenhagen es una serie de sillas basada en la palabra danesa Hygge. El diseñador Simon Legald ha tratado de plasmar el significado de la palabra seguridad, calidez y comodidad en una serie de muebles. Esta es la expresión en las finas formas orgánicas y las abundantes curvas que proporcionan un alto grado de comodidad y bienestar al sentarse en las sillas. ",
    texture: "Madera",
    weight: "14kg",
    size: "65cm x 35cm",
  },
  {
    id: 16,
    category: "electronic",
    img: Img16,
    description: "Luz contra la oscuridad",
    price: 22.561,
    otherImgs: [Cam1, Cam2],
    specs:
      "Easy Mini W75 de Antidark hace honor a su nombre. Diseño simple, luz cómoda, fácil de ajustar. Easy Wall Light ha hecho que sea fácil para el usuario manejar, bueno, ¡todo! La lámpara Easy puede girar 360 grados y volcarse. Una lámpara ideal que se puede colocar en conexión con otras lámparas para conseguir luz en todos los rincones de la estancia. Además, la lámpara puede funcionar como aplique o plafón",
    texture: "Metal",
    weight: "2kg",
    size: "15cm x 10cm",
  },
  {
    id: 17,
    category: "lamp",
    img: Img17,
    description: "Lámpara de mesa",
    price: 14.101,
    otherImgs: [TableLamp1, TableLamp2],
    specs:
      "La lámpara también se ha hecho popular en casas particulares y ha vuelto especialmente en los últimos años. This is not least due to the lamp's stylish design and the many color options that make it fit everywhere.",
    texture: "Metal",
    weight: "5kg",
    size: "25cm x 15cm",
  },
  {
    id: 18,
    category: "lamp",
    img: Img18,
    description: "Lámpara negra mate",
    price: 32.901,
    otherImgs: [MatLamp1, MatLamp2],
    specs:
      "Oferta única Te damos un descuento especial al poner este producto en la cesta. *Solo aplica para productos específicos.",
    texture: "Metal",
    weight: "6kg",
    size: "20cm x 15cm",
  },
  {
    id: 19,
    category: "chair",
    img: Img19,
    description: "Silla cómoda",
    price: 22.372,
    otherImgs: [Comfy1, Comfy2],
    specs:
      "Sum es una serie diseñada por el diseñador danés Simon Legald, quien es el epítome de la elegancia moderna. Elegantes y resueltos como la punta de un ala, los reposabrazos se extienden tentadoramente, como si quisieran abrazarte en el espacio suave y hogareño del sillón.",
    texture: "Material cómodo",
    weight: "25kg",
    size: "60cm x 30cm",
  },
  {
    id: 20,
    category: "skin-care",
    img: Img20,
    description: "Aceite Corporal 50ml",
    price: 8.461,
    otherImgs: [BodyOil1, BodyOil2],
    specs:
      "Elaborado con aceites 100 % de origen vegetal con aceite de oliva como ingrediente principal, este aceite limpiador es suave para la piel. Libre de fragancias, colorantes y aceites minerales, sin parabenos, sin alcohol, probado para alergias (no podemos garantizar que no cause alergias en ningún usuario) * Modo de uso: tome una pequeña cantidad en la palma de su mano y masajee en el rostro para eliminar el maquillaje y la suciedad. Enjuague bien con agua fría o tibia.",
    texture: "Líquido",
    weight: "50ml",
    size: "10cm x 5cm",
  },
];
