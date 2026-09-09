```javascript
document.getElementById("riskForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values from the form

    const age =
        Number(document.getElementById("age").value);

    const partners =
        Number(document.getElementById("partners").value);

    const firstIntercourse =
        Number(document.getElementById("first_intercourse").value);

    const pregnancies =
        Number(document.getElementById("pregnancies").value);


    const hormonalContraceptives =
        document.getElementById("hormonal_contraceptives").value === "yes"
            ? 1
            : 0;

    const hormonalContraceptivesYears =
        Number(document.getElementById(
            "hormonal_contraceptives_years"
        ).value);


    const iud =
        document.getElementById("iud").value === "yes"
            ? 1
            : 0;

    const iudYears =
        Number(document.getElementById("iud_years").value);


    const smokes =
        document.getElementById("smokes").value === "yes"
            ? 1
            : 0;

    const smokesYears =
        Number(document.getElementById("smokes_years").value);


    const stds =
        document.getElementById("stds").value === "yes"
            ? 1
            : 0;

    const stdsNumber =
        Number(document.getElementById("stds_number").value);

    const stdsDiagnoses =
        Number(document.getElementById("stds_diagnoses").value);


    // Create feature vector

    const features = [
        age,
        partners,
        firstIntercourse,
        pregnancies,

        hormonalContraceptives,
        hormonalContraceptivesYears,

        iud,
        iudYears,

        smokes,
        smokesYears,

        stds,
        stdsNumber,
        stdsDiagnoses
    ];


    console.log("Features:", features);


    /*
     * TEMPORARY PREDICTION
     *
     * This is only to make sure the website works.
     * Later we will replace this with your actual
     * trained ML model.
     */

    const probability = calculateDemoRisk(features);


    const higherRisk = probability >= 0.5;


    // Show result

    const result =
        document.getElementById("result");

    const prediction =
        document.getElementById("prediction");

    const probabilityText =
        document.getElementById("probability");


    prediction.textContent =
        higherRisk
            ? "Higher risk indicated"
            : "Lower risk indicated";


    probabilityText.textContent =
        (probability * 100).toFixed(1);


    result.classList.remove("hidden");

});


// DEMO ONLY
// This is NOT your trained medical model.

function calculateDemoRisk(features) {

    let score = 0;


    // Age
    if (features[0] > 40) {
        score += 0.10;
    }


    // Number of partners
    if (features[1] > 2) {
        score += 0.10;
    }


    // Smoking
    if (features[8] === 1) {
        score += 0.10;
    }


    // STD history
    if (features[10] === 1) {
        score += 0.15;
    }


    // Pregnancies
    if (features[3] > 3) {
        score += 0.10;
    }


    // Keep between 0 and 1

    return Math.min(score, 1);
}
```
