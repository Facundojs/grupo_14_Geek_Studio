"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "MOTHER MSJ A320M A PRO MAX",
        price: 8125.0,
        discount: 0,
        category_id: 1,
        image: "mother-msi-a320m-a-pro-max.jpg",
        features:
          "Basada en el chipset AMD A320, la placa base MSI A320M-A PRO MAX está diseñada para alojar procesadores AMD Ryzen en un socket AMD AM4. La nueva MSI PRO está diseñada para integrar todos los PCs. También están diseñados para proporcionar un rendimiento fiable y soluciones de negocio inteligentes que le facilitarán el trabajo. En resumen, las placas base MSI PRO son sinónimo de estabilidad, eficiencia y longevidad.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MOTHER GIGABYTE GA-A320M-H",
        price: 7200,
        discount: 0,
        category_id: 1,
        image: "mother-gigabyte-gaa320mh-0.jpg",
        features:
          "PU AM4 Socket: Support for AMD Ryzen™ 2nd Generation/ Ryzen™ with Radeon™ Vega Graphics/ Athlon™ with Radeon™ Vega Graphics/ Ryzen™ 1st Generation/ 7th Generation A-series/ Athlon X4 Processors",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MOTHER GIGABYTE B450M DS3H V2 1.0 AM4",
        price: 10200,
        discount: 0,
        category_id: 1,
        image: "mother-gigabyte-b450m-ds3h-v2-10-am4-0.jpg",
        features:
          "Procesador Toma AM4 - Admite AMD Ryzen ™ serie 5000 / 3.ª generación Ryzen ™ / 2.ª generación Ryzen ™ / 1.ª generación Ryzen ™ / 2.ª generación Ryzen ™ con gráficos Radeon ™ Vega / 1.ª generación Ryzen ™ con gráficos Radeon ™ Vega / Athlon ™ con procesadores gráficos Radeon ™ Vega",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MOTHER GIGABYTE A520 AORUS ELITE AM4",
        price: 15000,
        discount: 5,
        category_id: 1,
        image: "mother-gigabyte-a520-aorus-elite-am4-0.jpg",
        features:
          "La Gigabyte Aorus A520 Aorus Elite es una placa base con socket AMD AM4 y Chipset A520.  Características: Admite procesadores AMD Ryzen ™ de tercera generación DDR4 sin búfer ECC / no ECC de doble canal, 4 DIMM Solución VRM digital pura de 5 + 3 fases con MOSFET de bajo RDS (activado) Conector ultrarrápido NVMe PCIe 3.0 x4 M.2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MOTHER MSI X570-A PRO",
        price: 30596,
        discount: 0,
        category_id: 1,
        image: "mother-msi-x570a-pro-0.jpg",
        features:
          "• Marca : Msi  • Modelo : Msi X570-A PRO • Compatibilidad con CPU: Admite procesadores de escritorio AMD Ryzen ™ / Ryzen ™ de 2da y 3ra generación con gráficos Radeon ™ Vega y procesadores de escritorio AMD Ryzen ™ de 2da generación con gráficos Radeon ™ • CPU Socket: Socket AM4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MOTHER GIGABYTE B550 AORUS ELITE AX V",
        price: 31000,
        discount: 0,
        category_id: 1,
        image: "mother-gigabyte--b550-aorus-elite-ax-v-0.jpg",
        features:
          "AMD Socket AM4, compatible con: AMD Ryzen ™ 5000 Series / 3rd Gen Ryzen ™ y 3rd Gen Ryzen ™ con procesadores gráficos Radeon ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MOTHER GIGABYTE X570 AORUS PRO WIFI",
        price: 38805.5,
        discount: 10,
        category_id: 1,
        image: "mother-gigabyte-x570-aorus-pro-wifi-0.jpg",
        features:
          "Procesadores AMD Ryzen ™ de tercera generación: Soporte para DDR4 4400 (OC) / 4300 (OC) / 4266 (OC) / 4133 (OC) / 4000 (OC) / 3866 (OC) / 3800 (OC) / 3733 (OC) / 3600 (OC) / 3466 ( OC) / 3400 (OC) / 3333 (OC) / 3300 (OC) / 3200/2933/2667/2400/2133 MHz módulos de memoria",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MOTHER ASUS CROSSHAIR VIII HERO X570",
        price: 66700,
        discount: 0,
        category_id: 1,
        image: "mother-asus-crosshair-viii-hero-x570-0.jpg",
        features:
          "Tipo de motherboard ATX Socket AMD AM4 Chipset AMD X570 Tipo de memoria DDR4 Puertos DIMM 4 Ram maxima 128GB LAN 10/100/1000 Puertos PCI Express x1 1 Puertos PCI Express x16 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MOTHER GIGABYTE (2066) X299 AORUS GAMING",
        price: 14605,
        discount: 0,
        category_id: 1,
        image: "mother-gigabyte-2066-x299-aorus-gaming-0.jpg",
        features:
          "Tipo de motherboard ATX Socket AMD AM4 Chipset AMD X570 Tipo de memoria DDR4 Puertos DIMM 4 Ram maxima 128GB LAN 10/100/1000 Puertos PCI Express x1 1 Puertos PCI Express x16 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MICRO AMD RYZEN 3 2200G VEGA 8 Raven Ridge",
        price: 11543,
        discount: 0,
        category_id: 1,
        image: "micro-amd-ryzen-3-2200g-vega-8-raven-ridge-0.jpg",
        features: "Modelo de gráficos: gráficos del procesador Radeon ™ Vega 8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MICRO AMD RYZEN 5 5600X",
        price: 40366,
        discount: 0,
        category_id: 1,
        image: "micro-amd-ryzen-5-5600x-0.jpg",
        features:
          "Microprocesador Ryzen 5 5600X 4.6GHz. Juega con lo mejor. Seis núcleos increíbles para quienes simplemente desean jugar.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MICRO AMD RYZEN 7 5800X 5GEN S/VIDEO Y S/COOLER",
        price: 59333,
        discount: 0,
        category_id: 1,
        image: "micro-amd-ryzen-7-5800x-5gen-svideo-y-scooler-0.jpg",
        features: "Sin descripcion",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MICRO AMD RYZEN 9 3900XT",
        price: 66500,
        discount: 0,
        category_id: 1,
        image: "micro-amd-ryzen-9-3900xt-0.jpg",
        features: "Línea de productos - AMD Ryzen™ 9 Desktop Processors",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MICRO INTEL CORE I5 9400 9TH GEN",
        price: 22264,
        discount: 0,
        category_id: 1,
        image: "micro-intel-core-i5-9400-9th-gen-0.jpg",
        features:
          "Experimente un rendimiento potente y una computación sin dificultades para realizar sus tareas diarias. Esto incluye productividad mejorada, transmisión fluida y entretenimiento fenomenal en HD con una visualización envolvente en 4K y 360 grados en pantalla completa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "MICRO INTEL CORE I7 9700KF S/COOLER 3.6 GH",
        price: 36967,
        discount: 0,
        category_id: 1,
        image: "micro-intel-core-i7-9700kf-scooler-36-gh-0.jpg",
        features: "Procesadores Intel® Core ™ i7 de 9ª generación",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "MICRO INTEL CORE I9 10900",
        price: 56475,
        discount: 0,
        category_id: 1,
        image: "micro-intel-core-i9-10900-0.jpg",
        features: "Número de procesador: i9-10900",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "TECLADO Y MOUSE GAMER TRUST AZOR ES GXT 838",
        price: 3800,
        discount: 0,
        category_id: 2,
        image: "teclado-y-mouse-gamer-trust-azor-es-gxt-838-2.jpg",
        features: "-",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "TECLADO Y MOUSE LOGITECH G213 + G203",
        price: 10408,
        discount: 0,
        category_id: 2,
        image: "teclado-y-mouse-logitech-g213--g203-0.jpg",
        features: "-",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "TECLADO Y MOUSE CORSAIR K55 + HARPOON RGB",
        price: 13140,
        discount: 0,
        category_id: 2,
        image: "teclado-y-mouse-corsair-k55--harpoon-rgb-0.jpg",
        features: "-",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "GABINETE AEROCOOL TOMAHAWK-A",
        price: 5307,
        discount: 0,
        category_id: 3,
        image: "gabinete-aerocool-tomahawka-0.jpg",
        features:
          "Estuche de media torre asequible con malla en el panel frontal para aumentar la ventilación del aire y permite ver los ventiladores LED frontales",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "GABINETE CORSAIR CARBIDE SPEC DELTA RGB 3 FUN",
        price: 9380,
        discount: 0,
        category_id: 3,
        image: "gabinete-corsair-carbide-spec-delta-rgb-3-fun-0.jpg",
        features: "GABINETE CORSAIR CARBIDE SPEC DELTA RGB",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "GABINETE MSI VAMPIRIC 010",
        price: 10742,
        discount: 0,
        category_id: 1,
        image: "gabinete-msi-vampiric-010-0.jpg",
        features:
          "Inspirada en el duque de Dark Knight: Drácula. Con una combinación de negro y gris, es tan tranquilo y misterioso",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("products");
  },
};
