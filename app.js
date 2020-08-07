// delgetstei ajillah Controller
var uiController = (function () {})();

// sanhuutei ajillah Controller
var financeController = (function () {})();

// programmin holbogch Controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    console.log("tsrn");
    // 1. Oruulah ugugdliig delgetsees avah.
    // 2. Olj avsan ugugdluudee sanhuugiin controllert damjuulj tend hadgalna.
    // 1. Olj avsan ugugdlvvdee web deeree tohiroh hesegt n gargana.
    // 1. Tusviig tootsoolno.
    // 1. Etssiin ugugdul tootsoog delgetsend gargana.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    ctrlAddItem();
  });
})(uiController, financeController);
