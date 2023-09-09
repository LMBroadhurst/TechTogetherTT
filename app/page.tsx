import { Select, MenuItem, Slider } from '@mui/material'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      hiiiii
      <Select >
        <MenuItem value={1}>One</MenuItem>
      </Select>
      <Slider />
    </main>
  )
}
