# MACRO-K

### Description:
MACRO-K is a nutrition tool, a BMR / TDEE calculator that also evaluates your personal recommended daily intake of the 3 main macronutrients.

As a calculator, this project is a static webpage, consisting of an:

- index.html file that includes all the information presented in the webpage, which means:
    - the calculator itself;
    - general information about nutrition that explains useful things to better understand the concepts and what the calculator does;
    - a table with the 3 main macronutrients;
    - the references used;
    - a disclaimer.

- style.css file that includes the style of the html elements.

- script.js file that runs the actual script for the calculation.

### Techs used in this project:
The techs used in this project are Javascript, HTML and CSS.

### Why this project ?
The tool and the information provided in the project can be useful and help people follow a diet plan to achieve their fitness goals.

### How does it work ?
MACRO-K calculates your BMR (Basal Metabolic Rate), which measures the amount of Kcal required to maintain vital body functions while at rest, and your TDEE (Total Daily Energy Expenditure) which is calculated taking the BMR multiplied by an Activity Level, and it's an estimated number of total Kcal you need to maintain your body weight.
Then it let's you choose between focusing on losing weight or building muscle, and depending on your choice it will reduce or increase your TDEE, adapting it to your goals, so that you have a starting point to make a diet plan.
Finally, to be even more personal, MACRO-K calculates the optimal distribution of your macronutrients daily intake (proteins/fat/carbohydrates) depending on your weight and your final Kcal result.

To explain things in detail:
- Kilocalories are units of energy. In nutrition they quantify the energy that a food or drink provides, or the energy burned during exercise.

- Macronutrients are essential nutrients that the body needs in large amounts to remain healthy.
  The 3 main macronutrients are Proteins, Fat, and Carbohydrates, and the recommended daily amounts of each are:
        - Proteins: 1.6 grams per body kg
        - Fat: 0.8 grams per body kg
        - Carbohydrates: the rest of your Kcal intake.

- To choose if you want to focus on weight loss or muscle gain, it's important to know how the body regulates your weight:
        - To lose fat you need to be in a calorie deficit, meaning that you consume less Kcal than you burn.
        - On the other hand, besides regular exercise, the optimal way to build muscle is to be in a calorie surplus, meaning that you consume more calories than you burn.
        - The last point may not affect people at beginner or intermediate level, because when you start to exercise your body is able to build muscle even while in a calorie deficit, it may take longer to gain muscle but it's good to know if you're not in an advanced level and you just want to be fit.