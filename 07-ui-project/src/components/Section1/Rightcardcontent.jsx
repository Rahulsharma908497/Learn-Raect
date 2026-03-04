const Rightcardcontent = (props) => {
 
  
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
        <h2 className='bg-white rounded-full text-xl font-semibold h-12 w-12 flex items-center justify-center'>{props.idx+1}</h2>
        <div>
            <p className='text-xl leading-relaxed text-white mb-14'>{props.intro}</p> 
            <div className='flex justify-between '>
                <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Rightcardcontent
