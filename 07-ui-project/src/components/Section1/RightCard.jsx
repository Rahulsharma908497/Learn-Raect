import Rightcardcontent from './Rightcardcontent'

const RightCard = (props) => {
  
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
     <img className='h-full w-full object-cover' src={props.img} alt="" />
     <Rightcardcontent idx={props.idx} tag={props.tag} intro={props.intro} color={props.color}/>
    </div>
  )
}

export default RightCard
