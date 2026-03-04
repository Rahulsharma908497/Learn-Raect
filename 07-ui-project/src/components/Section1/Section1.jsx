
import Navbar from './Navbar'
import Page1content from './Page1content'

const Section1 = (props) => {
  const user = [
    {
      img: 'https://i.pinimg.com/1200x/0a/3f/31/0a3f31f8fcc5b754e7ca855673697650.jpg',
      intro: 'This specialist designs advanced artificial intelligence models to solve complex business problems and drive growth',
      tag: 'Satisfied',
      color: 'lightseagreen'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661699736273-6bc9cb33174d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Dedicated professional building scalable machine learning systems that transform raw data into powerful, actionable insights',
      tag: 'Underserved',
      color: 'lightpink'
    },
    {
      img: 'https://i.pinimg.com/736x/82/28/84/82288486b5da113403ded5a4f886fc63.jpg',
      intro: 'Expert in developing cutting-edge AI solutions to automate workflows and enhance digital efficiency across industries',
      tag: 'Underbanked',
      color: 'orange'
    },
    {
      img: 'https://i.pinimg.com/736x/38/bd/10/38bd10063fd5a79dadde2d5d1d3a0590.jpg',
      intro: 'Focused on crafting intelligent algorithms that improve decision-making and provide a competitive edge through AI',
      tag: 'Underanked',
      color: 'lightblue'
    }
  ]

  return (
    <div className='h-screen w-full'>
      <Navbar title={props.title} />
      <Page1content user={user}/>
    </div>
  )
}

export default Section1
