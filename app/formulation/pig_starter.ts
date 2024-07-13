export const pigStarterFormulation = {
    ingredients: [
        { name: 'Corn', quantity: 50, proteinContent: 8 },
        { name: 'Soybean Meal', quantity: 30, proteinContent: 44 },
        { name: 'Fish Meal', quantity: 10, proteinContent: 60 },
        { name: 'Wheat Bran', quantity: 5, proteinContent: 15 },
        { name: 'Premix', quantity: 5, proteinContent: 0 },
    ],

    calculateCrudeProtein: function(){
        const totalQuantity = this.ingredients.reduce((sum, ingredient) => sum + ingredient.quantity, 0);
        const totalProtein = this.ingredients.reduce((sum, ingredient) => sum + (ingredient.quantity * ingredient.proteinContent / 100), 0);
        const crudeProteinPercentage = (totalProtein / totalQuantity) * 100;

        return crudeProteinPercentage.toFixed(2) + '%';
    }

};