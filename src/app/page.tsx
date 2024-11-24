import Button from '@/components/Button'
import ContentWrapper from '@/components/ContentWrapper'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <ContentWrapper>
        <section className={styles.heroSection}>
          <div className={styles.heroSectionContent}>
            <h1 className={styles.heroText}>
              Get delicious <br /> recipes instantly!
            </h1>
          </div>

          {/* Links to pages */}
          <div data-theme="purple" className={styles.heroNav}>
            <Button
              as={Link}
              href={'/recipes'}
              aria-label={'Browse all recipes'}
              isBold
            >
              Recipes
            </Button>

            <Button
              as={Link}
              href={'/nearby-restaurants'}
              aria-label={'Find restaurants near you'}
              isBold
            >
              Nearby Restaurants
            </Button>
          </div>
        </section>
      </ContentWrapper>
    </main>
  )
}
