import useThemeStorage from './UseLocalStorage'
import "./styles.css"

const Home = () => {
const [theme, setTheme] = useThemeStorage("theme", 'light')

const handleToggleTheme =()=>{
    setTheme(theme === 'dark' ? "light" : "dark")
}

console.log(theme)

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Themev</button>
        <h1>{theme}</h1>
      </div>
    </div>
  )
}

export default Home
