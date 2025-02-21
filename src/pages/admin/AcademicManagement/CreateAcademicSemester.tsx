/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd"
import PHForm from "../../../components/form/PHForm"

import { FieldValue, SubmitHandler } from "react-hook-form"
import PHSelect from "../../../components/form/PHSelect"
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";


const nameOptions = [
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
const yearOptions = [0, 1, 2,3].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}))

const CreateAcademicSemester = () => {

  const [addAcademicSemester] = useAddAcademicSemesterMutation();




  const onSubmit: SubmitHandler<FieldValue<any>> =async (data) => {
// const toastId = toast.loading("Creating ...")
    const name = nameOptions[Number(data.name) - 1].label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    }
  
    try{
      const res = (await addAcademicSemester(semesterData)) as TResponse<any>;
    if(res.error){
toast.error(res.error.data.message)
    }else{
      toast.success("New Semester Create Successfully ")
    }
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  const academicSemesterSchema = z.object({
    name: z.string({ required_error: "This Field is Required" }),
    year: z.string({ required_error: "This Field is Required" }),
    startMonth: z.string({ required_error: "This Field is Required" }),
    endMonth: z.string({ required_error: "This Field is Required" })
  })

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
          <PHSelect label="Name" name="name" options={nameOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
}

export default CreateAcademicSemester
