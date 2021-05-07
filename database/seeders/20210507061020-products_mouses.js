"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "MOUSE LOGITECH WIR MINI M187 BLUE",
        price: 1113.0,
        discount: 0,
        category_id: 2,
        image: "mouse-logitech-wir-mini-m187-blue-0.jpg",
        features: "Línea Color Collection. Modelo M187",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "MOUSE TRUST LOCX GXT133",
        price: 1600,
        discount: 0,
        category_id: 2,
        image: "mouse-trust-locx-gxt133-0.jpg",
        features: "Sensor de alta precisión e iluminación LED RGB completa.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MOUSE LOGITECH G300S GAMING",
        price: 3260,
        discount: 0,
        category_id: 2,
        image: "mouse-logitech-g300s-gaming-0.jpg",
        features:
          "Diseño versátil en una forma compacta. Este ratón se ha creado para ofrecer comodidad y duración. VELOCIDAD DE RESPUESTA DE 1 MILISEGUNDO",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "MOUSE LOGITECH G203",
        price: 2646,
        discount: 0,
        category_id: 2,
        image: "mouse-logitech-g203-0.jpg",
        features: "Diseño clasico. Iluminacion RGB programable. 200-6000 dpi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "MOUSE GENIUS GAMING GX M6-400 BLACK",
        price: 3424,
        discount: 0,
        category_id: 2,
        image: "genius-gaming-gx-m6400-black-5000-dpi-led-color-0.jpg",
        features:
          "Modelo. Scorpion M6-400. Botones resistentes de larga duración. El M6-400 tiene una prolongada vida útil de 20 millones de clics, suficiente para rendir al máximo en las sesiones más intensas de gaming.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "MOUSE CORSAIR M55 RGB PRO AMBIDEXTROUS",
        price: 5831,
        discount: 0,
        category_id: 2,
        image: "mouse-corsair-m55-rgb-pro-ambidextrous-0.jpg",
        features:
          "el diseño ambidiestro ligero y versátil del M55 RGB PRO le permite jugar al máximo nivel con cualquier mano con el agarre más cómodo, ya sea la palma, los dedos o la punta de los dedos. PRECISIÓN PARA GANAR Controle su forma de jugar con un sensor óptico de 12 400 ppp para conseguir un seguimiento de gran precisión. DISEÑO DURADERO El diseño duradero con conmutadores Omron con capacidad para 50 millones de clics y un cable trenzado dota al M55 RGB PRO de la fuerza necesaria para soportar varios años de sesiones de juego intensas.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "MOUSE GAMER MM711 SAKURA PINK COOLER MASTER",
        price: 8059,
        discount: 0,
        category_id: 2,
        image: "mouse-gamer-mm711-sakura-pink-cooler-master-0.jpg",
        features:
          "Lightweight Honeycomb Shell - New perforated housing is engineered to be supremely durable and lightweight, meaning you can play longer without fatigue Ultralight Ultraweave Cable - Innovative ultraweave cable significantly reduces weight and cable pull while swiping. Fight against your enemies, not cable pull.Superior Mouse Feet - PTFE material provides smooth control with a low friction, consistent glide Gaming-Grade Optical Sensor - Adjustable up to 16000 DPI ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "MOUSE GAMER RAZER VIPER AMBIDEXTROUS WIRED",
        price: 8120,
        discount: 0,
        category_id: 2,
        image: "mouse-gamer-razer-viper-ambidextrous-wired-0.jpg",
        features:
          "Sensor óptico avanzado Razer 5G con 16 000 PPP reales. Hasta 450 pulgadas por segundo (IPS)/50 G de aceleración. Tasa de sondeo (ultrapolling) de 1000 Hz. Switches ópticos para ratón Razer™ con un ciclo de vida de 70 millones de clicks Cable Razer™ Speedflex ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
