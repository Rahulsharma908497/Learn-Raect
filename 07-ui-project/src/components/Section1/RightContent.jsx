import RightCard from './RightCard'

const RightContent = (props) => {

  return (
    <div id='right' className='h-full rounded-4xl flex overflow-x-auto flex-nowrap gap-8 p-6 w-2/3'>
      {props.user.map(function(elem,idx){
        
        return  <RightCard idx={idx} img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color}/>
      })}
  
    </div>
  )
}

export default RightContent
