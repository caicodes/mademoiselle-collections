import Overlay from "./components/Overlay"
import Header from "./components/app/Header"
import Content from "./components/Content"
export const App = () => {
  return (
    <>
      <Overlay />
      <main>
        <Header />
        <Content />
      </main>
    </>
  )
}

export default App
