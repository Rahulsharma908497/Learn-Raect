const App = () => {

  function inputChanging(val){
    console.log(val);
    
  }

  return (
    <div>
      <input onChange={function(elem){
        inputChanging(elem.target.value)
  
      }} type="text" placeholder="Enter Name"/>
    </div>
  )
}

export default App
