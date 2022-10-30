import { Category } from "./Category"
import { categories } from "../../../api/db.json"

export const ListOfCategories = () => {
  return (
    <ul className="flex w-full overflow-scroll">
        {
            categories.map(category => <li key={category.id} className="px-2"><Category {...category}/></li>)
        }
    </ul>
  )
}
