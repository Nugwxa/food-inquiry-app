import { Recipe } from '@/data/recipe/types'
import Button from '@/components/Button'
import classNames from 'classnames'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import Image from 'next/image'
import Popover from '@/components/Popover'
import styles from './RecipeCard.module.css'

interface RecipeCardProps extends React.ComponentPropsWithoutRef<'div'> {
  recipe: Recipe
  exchangeRate: number
  className?: string
}

/**
 * Displays a card for a given recipe
 *
 * @param {Recipe} props - The recipe object containing details like name, price, and image URL.
 */
export default function RecipeCard(props: Readonly<RecipeCardProps>) {
  const { recipe, className, exchangeRate, ...rest } = props
  return (
    <div className={classNames(className, styles.recipeCard)} {...rest}>
      <div className={styles.recipeImageWrapper}>
        <Image
          priority
          sizes=" "
          className={styles.recipeImage}
          alt={`${recipe.name} Image`}
          src={recipe.imgUrl!}
          fill
        />
      </div>

      <div className={styles.recipeCardContent}>
        <div className={styles.recipeName}>{recipe.name}</div>

        <div>{recipe.calories} cal</div>
        <div className={styles.recipePrice}>
          ₦{formatNumberWithCommas(recipe.price)}
        </div>

        <Popover
          trigger={
            <Button as="div" data-theme="purple">
              SEE PRICE IN USD
            </Button>
          }
        >
          Price in USD: $
          {formatNumberWithCommas(
            Number((recipe.price / exchangeRate).toFixed(2))
          )}
        </Popover>
      </div>
    </div>
  )
}
