/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd"
import PHForm from "../../../components/form/PHForm"

import { FieldValue, SubmitHandler } from "react-hook-form"
import PHSelect from "../../../components/form/PHSelect"



const nameOptions= [
  {
    value: '01',
    label: 'Autumn',
  },
  {
    value: '02',
    label: 'Summer',
  },
  {
    value: '03',
    label: 'Fall',
  }
];


const currentYear = new Date().getFullYear();
const yearOptions = [0,1,2].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}))

const CreateAcademicSemester = () => {

  const onSubmit: SubmitHandler<FieldValue<any>> = (data) => {
   
    const name = nameOptions[Number(data.name) - 1].label;

    const semesterData = {
      name,

      code: 'Something'
    }
console.log("Data :",data)
    console.log(semesterData);
  }

 

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}>
          <PHSelect label="Name" name="name" options={nameOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={nameOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={nameOptions} />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
}

export default CreateAcademicSemester
