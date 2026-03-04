import Pages from './Pages'

const App = () => {

  

  const user1 = [
    {
      marketvalue: 'Target Audience'
    },
    {
      marketvalue: 'Market Trends'
    },
    {
      marketvalue: 'Market Opportunity'
    }
  ]
  
  
  
  return (
    <div>
      <Pages user1={user1}/>
    </div>
  )
}

export default App
