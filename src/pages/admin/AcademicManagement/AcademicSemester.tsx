import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemister"


const AcademicSemester = () => {

  const { data } = useGetAllSemestersQuery(undefined)

  console.log(data)

  return (
    <div>
      <h1>Academic Samester</h1>
    </div>
  )
}

export default AcademicSemester
