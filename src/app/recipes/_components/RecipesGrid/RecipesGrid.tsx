'use server'
import getNairaToDollarRate from '@/data/getNairaToDollarRate'
import getRecipes from '@/data/recipe/getRecipes'
import RecipeCard from '../RecipeCard'
import styles from './RecipesGrid.module.css'
import Pagination from '@/components/Pagination'

interface RecipesGridProps {
  page: number
  perPage?: number
  query: string
}

export default async function RecipesGrid(props: Readonly<RecipesGridProps>) {
  const { page = 1, perPage = 10, query = '' } = props

  const response = await getRecipes({ page, perPage, query })
  const exchangeRage = await getNairaToDollarRate()
  return (
    <section className={styles.recipeSection}>
      <div className={styles.recipesGrid}>
        {response.recipes.length > 0 ? (
          response.recipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                exchangeRate={exchangeRage}
                recipe={recipe}
              />
            )
          })
        ) : (
          <div>No recipe found</div>
        )}
        {}
      </div>

      <Pagination totalPages={Math.ceil(response.total / 10)} />
    </section>
  )
}
