import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export default function App() {
  return (
    <div>
      <Logo/>
      <ListOfCategories/>
      <ListOfPhotoCards/>
    </div>
  )
}