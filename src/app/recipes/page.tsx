import { Suspense } from 'react'
import ContentWrapper from '@/components/ContentWrapper'
import RecipesGrid from './_components/RecipesGrid'
import SearchInput from '@/components/SearchInput'

type SearchParams = {
  page?: number
  perPage?: number
  query?: string
}
interface RecipesPageProps {
  searchParams: Promise<SearchParams>
}

export default async function RecipesPage(props: Readonly<RecipesPageProps>) {
  const { page, query } = await props.searchParams

  return (
    <ContentWrapper>
      <h1>Recipes</h1>

      <section>
        <SearchInput placeholder="Search recipes" />
      </section>

      <Suspense fallback={<div>Loading recipes...</div>}>
        <RecipesGrid page={page ?? 1} query={query ?? ''} />
      </Suspense>
    </ContentWrapper>
  )
}
