function calculateCalories() {
    // Obtiene los valores de los campos de entrada
    const gender = document.getElementById("gender").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;
    const activityLevel = document.getElementById("activity-level").value;
    const goal = document.getElementById("goal").value;

    // Verifica si todos los campos tienen un valor
    if (!gender || !weight || !height || !age || !activityLevel || !goal) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Convierte los valores a los tipos de datos apropiados
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    const ageValue = parseInt(age);
    const activityLevelValue = parseFloat(activityLevel);

    // Cálculo de BMR usando la fórmula de Harris-Benedict
    let bmr;
    if (gender === "male") {
        bmr = 88.362 + (13.397 * weightValue) + (4.799 * heightValue) - (5.677 * ageValue);
    } else {
        bmr = 447.593 + (9.247 * weightValue) + (3.098 * heightValue) - (4.330 * ageValue);
    }

    // Cálculo de calorías según el nivel de actividad y objetivo
    const maintenanceCalories = bmr * activityLevelValue;
    let targetCalories;

    if (goal === "maintain") {
        targetCalories = maintenanceCalories;
    } else if (goal === "lose") {
        targetCalories = maintenanceCalories - 500; // Déficit de 500 kcal
    } else if (goal === "gain") {
        targetCalories = maintenanceCalories + 500; // Exceso de 500 kcal
    }

    // Muestra el resultado
    document.getElementById("result").innerText = 
        `Calorías diarias recomendadas para ${goal === "maintain" ? "mantener tu peso" : goal === "lose" ? "perder peso" : "ganar peso"}: ${targetCalories.toFixed(2)} kcal`;
}