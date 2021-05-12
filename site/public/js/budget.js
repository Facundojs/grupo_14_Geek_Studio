budget = document.querySelector("#presupuesto");

budget.addEventListener("click", function (e) {
  const $convertir = document.body;
  html2pdf()
    .set({
      margin: 1,
      filename: "presupuesto-geek-studio.pdf",
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 3,
        letterRendering: true,
      },
      jsPDF: {
        unit: "in",
        format: "a3",
        orientation: "portrait",
      },
    })
    .from($convertir)
    .save()
    .catch((err) => console.log(err))
    .finally()
    .then(() => {
      console.log("Guardado");
    });
});
