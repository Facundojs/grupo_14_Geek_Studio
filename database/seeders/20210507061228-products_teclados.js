"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "TECLADO GAMER GX GAMING GENIUS SCORPION K215",
        price: 1400.0,
        discount: 0,
        category_id: 2,
        image: "teclado-gamer-gx-gaming-genius-scorpion-k215-0.jpg",
        features:
          "Retroiluminación del teclado 7 colores, Interfaz USB. Peso 720g",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TECLADO TRUST THURA SEMIMECANICO ESPAÑOL RGB GXT860",
        price: 5922.0,
        discount: 0,
        category_id: 2,
        image: "teclado-trust-thura-semimecanico-espaol-rgb-gxt860-0.jpg",
        features:
          "Retroiluminación del teclado 7 colores, Interfaz USB. Peso 720g",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "TECLADO LOGITECH G213 PRODIGY GAMING",
        price: 6765.0,
        discount: 0,
        category_id: 2,
        image: "teclado-logitech-g213-prodigy-gaming-0.jpg",
        features:
          "Retroiluminación del teclado 7 colores, Interfaz USB. Peso 720g",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TECLADO HYPERX ALLOY ORIGINS MECANICO CORE RED",
        price: 9680.0,
        discount: 0,
        category_id: 2,
        image: "teclado-hyperx-alloy-origins-mecanico-core-red-0.jpg",
        features:
          "Retroiluminación del teclado 7 colores, Interfaz USB. Peso 720g",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "TECLADO TRUST ZIVA MULTIMEDIA ESPAÑOL",
        price: 1640,
        discount: 0,
        category_id: 2,
        image: "teclado-trust-ziva-multimedia-espaol-0.jpg",
        features:
          "Teclado de tamaño normal con teclas para juegos de color rojo.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "TECLADO MECANICO GAMING NOGA NKB-HYBRID SEMI MECANICO",
        price: 4266,
        discount: 5,
        category_id: 2,
        image: "teclado-mecanico-gaming-noga-nkbhybrid-semi-mecanico-0.jpg",
        features:
          "Teclado de tamaño normal con teclas para juegos de color rojo.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "TECLADO COOLER MASTER MS111",
        price: 5912,
        discount: 10,
        category_id: 2,
        image: "teclado-cooler-master-ms111-0.jpg",
        features:
          "El MS111 es un conjunto combinado con todas las funciones diseñado para el éxito en los juegos. El teclado tiene las características distintivas de Cooler Master, con exclusivos interruptores Mem-chanical lineales para una mayor capacidad de respuesta que las teclas de membrana normales",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "TECLADO LOGITECH G413 CARBON GAMER MECANICO",
        price: 10661,
        discount: 8,
        category_id: 2,
        image: "teclado-logitech-g413-carbon-gamer-mecanico-1.jpg",
        features:
          "  Tipo de conexión: USB tipo A (con cable). Protocolo USB: USB 2.0.   Velocidad USB: Máxima. Indicadores luminosos (LED): 2 Puertos USB (integrados): 1, USB 2.0  Retroiluminación: Sí  ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "TECLADO GENIUS SLIMSTAR 230 BLACK USB",
        price: 1144,
        discount: 0,
        category_id: 2,
        image: "teclado-genius-slimstar-230-black-usb-0.jpg",
        features:
          " Tipo de Teclado: Multimedia. Diseño del Teclado: Estándar. Interfaz: USB  - Distribución de Teclado: Español - Compatibilidad: Windows 7 /8 / 10 / Vista / XP / Mac OS X 10.8 o superior  - Dimensiones: 435 x 141 x 21,5 mm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "TECLADO GENIUS SLIMSTAR 230 WHITE USB",
        price: 1120,
        discount: 0,
        category_id: 2,
        image: "teclado-genius-slimstar-230-white-usb-0.jpg",
        features:
          "Arquitectura: Membrana.  Tipo de conector: USB.  Es gamer: Sí  ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "TECLADO LOGITECH K120 USB",
        price: 1429,
        discount: 0,
        category_id: 2,
        image: "teclado-logitech-k120-usb-0.jpg",
        features: "Marca Logitech. Modelo K120. Color Negro. Layout QWERTY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:
          "Teclado Mecanico Redragon K550 YAMA White Retroiluminado RGB Español",
        price: 7800,
        discount: 0,
        category_id: 2,
        image: "Redragon_K550_YAMA_White_Retroiluminado_RGB_Espa.jpg",
        features: "USB. Material plastico. Anti Salpicaduras",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Teclado Logitech K600 Touch Wireless Smart TV HTPC",
        price: 4470,
        discount: 0,
        category_id: 2,
        image: "Logitech_K600_Touch_Wireless_Smart_TV_HTPC.jpg",
        features: "USB. Conexion blueetooth. Idioma: Español. Compacto 60%",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Teclado Redragon K585RGB Diti Mecanico RGB",
        price: 3199,
        discount: 0,
        category_id: 2,
        image: "Teclado_Redragon_K585RGB_Diti_Mecanico_RGB.jpg",
        features: "Teclado mecanico. Material: Plastico. Polling Rate: 1000 hz",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Teclado Logitech K480 Multidispositivo Esp Black ",
        price: 5120,
        discount: 0,
        category_id: 2,
        image: "Teclado_Logitech_K480_Multidispositivo_Esp_Black.jpg",
        features:
          "Tipo De Teclado: Compacto sin pad númerico. Material: Plastico. Mecanismo membrana",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Teclado Mecanico Nisuta NSKBGZ61W White RGB ",
        price: 5120,
        discount: 0,
        category_id: 2,
        image: "Nisuta_NSKBGZ61W_White_RGB.jpg",
        features:
          "Tipo De Teclado: Compacto al 60%. Material: Plastico. Mecanismo: mecánico",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "ASUS ROG STRIX Flare US Cherry MX ",
        price: 16840,
        discount: 0,
        category_id: 2,
        image: "ASUS_ROG_STRIX_Flare_US_Cherry_MX.jpg",
        features:
          "Tipo De Teclado: Completo. Material: Aluminio y Plastico. Mecanismo: mecánico",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
