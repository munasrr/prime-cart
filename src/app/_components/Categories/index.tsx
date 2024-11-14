import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import classes from './index.module.scss'
import CategoryCard from './CategoryCard'

const Categories = ({ categories }: { categories: Category[] | null }) => {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop by Categories</h3>
        {/* Remove the <a> tag and use Link directly */}
        <Link href="/products">Show All</Link>
      </div>

      <div className={classes.list}>
        {categories && categories.length > 0 ? (
          categories.map(category => <CategoryCard key={category.id} category={category} />)
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </section>
  )
}

export default Categories
