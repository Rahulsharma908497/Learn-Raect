import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'

const Pages = (props) => {
    
  return (
    <div>
      {props.user1.map(function(elem,idx){

        if(idx === 0) {
            return <Section1 key={idx} title={elem.marketvalue} />
        }

        if(idx === 1){
            return <Section2 key={idx} title={elem.marketvalue} />
        }

        if(idx === 2){
            return <Section3 key={idx} title={elem.marketvalue} />
        }
      })}
    </div>
  )
}

export default Pages
