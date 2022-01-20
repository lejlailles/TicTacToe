const { test } = QUnit;
let tomb = [];

QUnit.module("Vizszintes Teszt", function (hook) {
  hook.before(() => {
    this.modell = new Kiertekeles();
  });
  test("létezik e a függvény", (assert) => {
    assert.ok(this.modell.getVizszintes, "létezik");
  });

  test("függvény-e?", (assert) => {
    assert.ok(
      typeof this.modell.getVizszintes === "function",
      "igen, függvény"
    );
  });

  test("üres tictactoe", (assert) => {
    let tomb = [
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getVizszintes(), "$$$&$$$&$$$&");
  });

  test("első sor x", (assert) => {
    let tomb = [
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getVizszintes(), "XXX&$$$&$$$&");
  });
  test("Véletlenszerű, nincs nyerő", (assert) => {
    let tomb = [
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "O" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getVizszintes(), "XOX&OOX&XXO&");
  });
  test("Második sor x", (assert) => {
    let tomb = [
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getVizszintes(), "$$$&XXX&$$$&");
  });
  test("Harmadik sor x", (assert) => {
    let tomb = [
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getVizszintes(), "$$$&$$$&XXX&");
  });
  test("Első sor 3. X, második sor 1. és 2. X", (assert) => {
    let tomb = [
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getVizszintes(), "$$X&XX$&$$$&");
  });
});

QUnit.module("Függőleges teszt", function (hook) {
  hook.before(() => {
    this.modell = new Kiertekeles();
  });
  test("létezik e a függvény", (assert) => {
    assert.ok(this.modell.getFuggoleges, "létezik");
  });

  test("függvény-e?", (assert) => {
    assert.ok(
      typeof this.modell.getFuggoleges === "function",
      "igen, függvény"
    );
  });

  test("üres tictactoe", (assert) => {
    let tomb = [
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getFuggoleges(), "$$$&$$$&$$$&");
  });

  test("első oszlop x", (assert) => {
    let tomb = [
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getFuggoleges(), "XXX&$$$&$$$&");
  });
  test("Véletlenszerű, nincs nyerő", (assert) => {
    let tomb = [
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "X" },
      { ertek: "O" },
      { ertek: "O" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "X" },
      { ertek: "O" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getFuggoleges(), "XOX&OOX&XXO&");
  });
  test("Második oszlop x", (assert) => {
    let tomb = [
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getFuggoleges(), "$$$&XXX&$$$&");
  });
  test("Harmadik oszlop x", (assert) => {
    let tomb = [
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getFuggoleges(), "$$$&$$$&XXX&");
  });

  test("1. oszlop 1.és 3. X, 2. oszlop 2. X, 2. oszlop 3. X ", (assert) => {
    let tomb = [
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "X" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getFuggoleges(), "X$X&$X$&$$X&");
  });


 
});







QUnit.module("Átló Teszt", function (hook) {
  hook.before(() => {
    this.modell = new Kiertekeles();
  });
  test("létezik e a függvény", (assert) => {
    assert.ok(this.modell.getAtlo, "létezik");
  });

  test("függvény-e?", (assert) => {
    assert.ok(
      typeof this.modell.getAtlo === "function",
      "igen, függvény"
    );
  });
  test("üres tictactoe", (assert) => {
    let tomb = [
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getAtlo(), "$$$&$$$");
  });
  test("1. átló csak X", (assert) => {
    let tomb = [
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getAtlo(), "XXX&$X$");
  });

  test("2. átló csak X", (assert) => {
    let tomb = [
      { ertek: "$" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "$" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getAtlo(), "$X$&XXX");
  });

  test("Véletnlenszerű, egyik sem nyerő", (assert) => {
    let tomb = [
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "O" },
      { ertek: "$" },
      { ertek: "O" },
      { ertek: "$" },
      { ertek: "X" },
      { ertek: "$" },
      { ertek: "X" },
    ];
    let modell = new Kiertekeles(tomb);
    assert.equal(modell.getAtlo(), "XOX&OOX");
  });
  

});

QUnit.module("Ellenőrzés teszt", function (hook) {
  hook.before(() => {
    this.modell = new Kiertekeles();
  });
  test("létezik e a függvény", (assert) => {
    assert.ok(this.modell.ellenorzes, "létezik");
  });

  test("függvény-e?", (assert) => {
    assert.ok(
      typeof this.modell.ellenorzes === "function",
      "igen, függvény"
    );
  });

  

 
});
