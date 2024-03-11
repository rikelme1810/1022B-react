import './App.css'
function App(){
  let nome = "Rikelme Freitas"
  let sobrenome = "Freitas"
  return (
    <>
    <h1 className="nome">
      Nome: {nome}
    </h1>
    <p className="sobrenome">
      {sobrenome}
    </p>
    </>
  )//retorna JSX - Javascript
}

export default App 