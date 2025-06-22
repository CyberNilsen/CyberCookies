// pages/recipes.js
// This is the recipes page component
// Shows various cookie recipes with ingredients and instructions

import Layout from '../components/Layout'
import styles from '../styles/Recipes.module.css'

export default function Recipes() {
  const recipes = [
    {
      id: 1,
      name: "Classic Chocolate Chip Cookies",
      difficulty: "Easy",
      time: "30 minutes",
      servings: "24 cookies",
      icon: "🍫",
      ingredients: [
        "2¼ cups all-purpose flour",
        "1 tsp baking soda",
        "1 tsp salt",
        "1 cup butter, softened",
        "¾ cup granulated sugar",
        "¾ cup brown sugar",
        "2 large eggs",
        "2 tsp vanilla extract",
        "2 cups chocolate chips"
      ],
      instructions: [
        "Preheat oven to 375°F (190°C)",
        "Mix flour, baking soda, and salt in a bowl",
        "Cream butter and both sugars until fluffy",
        "Beat in eggs and vanilla",
        "Gradually mix in flour mixture",
        "Stir in chocolate chips",
        "Drop rounded tablespoons onto ungreased baking sheets",
        "Bake 9-11 minutes until golden brown"
      ]
    },
    {
      id: 2,
      name: "Soft Sugar Cookies",
      difficulty: "Easy",
      time: "25 minutes",
      servings: "18 cookies",
      icon: "🍪",
      ingredients: [
        "2¾ cups all-purpose flour",
        "1 tsp baking soda",
        "½ tsp baking powder",
        "1 cup butter, softened",
        "1½ cups white sugar",
        "1 egg",
        "1 tsp vanilla extract",
        "Sugar for rolling"
      ],
      instructions: [
        "Preheat oven to 375°F (190°C)",
        "Mix flour, baking soda, and baking powder",
        "Cream together butter and sugar",
        "Beat in egg and vanilla",
        "Gradually blend in dry ingredients",
        "Roll dough into walnut-sized balls",
        "Roll in sugar and place on baking sheet",
        "Bake 8-10 minutes until set"
      ]
    },
    {
      id: 3,
      name: "Chewy Oatmeal Raisin Cookies",
      difficulty: "Medium",
      time: "35 minutes",
      servings: "20 cookies",
      icon: "🥜",
      ingredients: [
        "1 cup butter, softened",
        "1 cup brown sugar",
        "½ cup white sugar",
        "2 eggs",
        "1 tsp vanilla",
        "1½ cups flour",
        "1 tsp baking soda",
        "1 tsp cinnamon",
        "3 cups old-fashioned oats",
        "1 cup raisins"
      ],
      instructions: [
        "Preheat oven to 350°F (175°C)",
        "Cream butter and sugars until light",
        "Beat in eggs and vanilla",
        "Combine flour, baking soda, and cinnamon",
        "Mix dry ingredients into wet ingredients",
        "Stir in oats and raisins",
        "Drop onto ungreased baking sheets",
        "Bake 10-12 minutes until edges are golden"
      ]
    },
    {
      id: 4,
      name: "Gingerbread Cookies",
      difficulty: "Medium",
      time: "45 minutes",
      servings: "30 cookies",
      icon: "🍯",
      ingredients: [
        "3 cups all-purpose flour",
        "1 tsp baking soda",
        "1 tsp ground ginger",
        "1 tsp ground cinnamon",
        "½ tsp ground cloves",
        "½ tsp salt",
        "½ cup butter, softened",
        "½ cup brown sugar",
        "½ cup molasses",
        "1 egg"
      ],
      instructions: [
        "Mix flour, baking soda, spices, and salt",
        "Cream butter and brown sugar",
        "Beat in molasses and egg",
        "Gradually add flour mixture",
        "Wrap dough and chill 2 hours",
        "Roll out on floured surface",
        "Cut with cookie cutters",
        "Bake at 375°F for 8-10 minutes"
      ]
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Cookie Recipes</h1>
          <p className={styles.pageDescription}>
            Discover delicious cookie recipes from classic favorites to creative new treats
          </p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className={styles.recipesSection}>
        <div className={styles.container}>
          <div className={styles.recipesGrid}>
            {recipes.map((recipe) => (
              <div key={recipe.id} className={styles.recipeCard}>
                <div className={styles.recipeHeader}>
                  <div className={styles.recipeIcon}>{recipe.icon}</div>
                  <div className={styles.recipeInfo}>
                    <h3 className={styles.recipeName}>{recipe.name}</h3>
                    <div className={styles.recipeDetails}>
                      <span className={styles.difficulty}>{recipe.difficulty}</span>
                      <span className={styles.time}>⏱️ {recipe.time}</span>
                      <span className={styles.servings}>👥 {recipe.servings}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.recipeContent}>
                  <div className={styles.ingredients}>
                    <h4>Ingredients:</h4>
                    <ul>
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.instructions}>
                    <h4>Instructions:</h4>
                    <ol>
                      {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Baking Tips Section */}
      <section className={styles.tipsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Baking Tips for Perfect Cookies</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🌡️</div>
              <h3>Temperature Matters</h3>
              <p>Always preheat your oven and use an oven thermometer to ensure accurate temperature</p>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🥄</div>
              <h3>Measure Accurately</h3>
              <p>Use measuring cups for dry ingredients and liquid measuring cups for wet ingredients</p>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>❄️</div>
              <h3>Chill Your Dough</h3>
              <p>Chilling dough prevents spreading and helps cookies maintain their shape</p>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>⏰</div>
              <h3>Don't Overbake</h3>
              <p>Cookies continue cooking on the hot pan, so remove them when edges are set</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}