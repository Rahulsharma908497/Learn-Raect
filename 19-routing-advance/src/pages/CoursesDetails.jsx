import { useParams } from 'react-router-dom'

const CoursesDetails = () => {
  const param = useParams();
  console.log(param.CourseId);
  

  return (
    <div>
        <h1>{param.CourseId} Courses Detail</h1>
    </div>
  )
}

export default CoursesDetails