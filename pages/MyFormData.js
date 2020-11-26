import React, {useState} from 'react'
import {Formik,Form,Field,ErrorMessage,FastField } from 'formik';
import * as Yup from "yup"
import {Box, RadioGroup, Radio, Text, Button, Input,Textarea} from 'viviui'


function MyFormData(){

const [val,setVal] = useState(null);


// 验证信息
  const SignupSchema = Yup.object().shape({
    health: Yup.string()
      .required('Required health'),
      develop: Yup.string()
      .required('Required develop'),
      atSchool: Yup.string()
      .required('Required atSchool'),
      family: Yup.string()
      .required('Required family'),
      ation: Yup.string()
      .required('Required ation'),
      emotion: Yup.string()
      .required('Required emotion'),
      dispose: Yup.string()
      .required('Required dispose'),
      remark: Yup.string()
      .required('Required remark'),
  });


  return (
    <>
      <Box mx="auto" w={960} my="80px" border="2px solid #666" p="80px" outline=" #333 dotted thick;" >
        <Formik 
        // 初始值
        initialValues={{
        }}
        //  配置验证信息
        validationSchema={SignupSchema}
        //  提交表单
        onSubmit={(values) => {
          setTimeout(()=>{
            alert(JSON.stringify(values, null, 2));
            // actions.setSubmitting(false);
            console.log(values)
          },500)
        }}>
       
        {/* 表单信息 */}
   
        {
          props =>(
            <form onSubmit={props.handleSubmit} >
              <Text h='58px' fontSize="24px">轉介原因</Text>
              <Box my={5}>
                <Text>健康</Text>
                <RadioGroup  mt={3} name="health" value={props.values.name} onChange={props.handleChange} >
                  <Radio  variantColor="green" value='身體疾病'>身體疾病</Radio>
                  <Radio  variantColor="green" value='懷疑或以診斷精神病'>懷疑或以診斷精神病</Radio>
                  <Radio  variantColor="green" value="3">
                    <Box d="flex" w={220} lineHeight="22px">
                      <Box w="68px" fontSize="16px" lineHeight="22px">其他：</Box> 
                      <Input variant="flushed" h="28px" onChange={props.values.name} />
                    </Box>
                  </Radio>
                </RadioGroup>
                {props.errors.health && <div id="feedback" color='red'>{props.errors.health}</div>}
              </Box>
              <Box my={6}>
                <Text>發展</Text>
                <RadioGroup name="develop"  value={props.values.name} onChange={props.handleChange} >
                  <Radio variantColor="green" value='懷疑或已診斷語言發展(發音、語言表單)'>懷疑或已診斷語言發展(發音、語言表單)</Radio>
                  <Radio variantColor="green" value='懷疑或以診斷專注力不足'>懷疑或以診斷專注力不足</Radio>
                  <Radio variantColor="green" value='懷疑或已診斷多動活躍症'>懷疑或已診斷多動活躍症</Radio>
                  <Radio variantColor="green" value={'懷疑或已診斷為融合症（主要問題： 其他：'+')'}>
                    <Box d="flex" lineHeight="22px">
                      <Box w="550px" fontSize="16px" lineHeight="22px">懷疑或已診斷為融合症（主要問題： 其他：</Box> 
                      <Input variant="flushed"  onChange={props.values.name}  h="22px"/>
                      <Box>)</Box>
                    </Box>
                  </Radio>
                </RadioGroup>
              </Box>
              {props.errors.develop && <div id="feedback" color='red'>{props.errors.develop}</div>}
              <Box my={6}>
                <Text>在校</Text>
                <RadioGroup name="atSchool" value={props.values.name} onChange={props.handleChange} >
                  <Radio variantColor="green" value='學業成績不理想'>學業成績不理想</Radio>
                  <Radio variantColor="green" value='缺席'>缺席</Radio>
                  <Radio  variantColor="green" value="3">
                    <Box d="flex" w={220} lineHeight="22px" >
                      <Box w="68px" fontSize="16px" lineHeight="22px">其他：</Box> 
                      <Input variant="flushed" h="22px"  onChange={props.values.name} />
                    </Box>
                  </Radio>
                </RadioGroup>
                {props.errors.atSchool && <div id="feedback" color='red'>{props.errors.atSchool}</div>}
              </Box>
              <Box my={6}>
                <Text>家庭</Text>
                <RadioGroup name="family" value={props.values.name} onChange={props.handleChange} >
                  <Radio variantColor="green" value='親子關係不良'>親子關係不良</Radio>
                  <Radio variantColor="green" value='管教問題'>管教問題</Radio>
                  <Radio variantColor="green" value='懷疑家暴'>懷疑家暴</Radio>
                  <Radio variantColor="green" value='喪失親人'>喪失親人</Radio>
                  <Radio  variantColor="green" value="3">
                    <Box d="flex" w={220} lineHeight="22px">
                      <Box w="68px" fontSize="16px" lineHeight="22px">其他：</Box> 
                      <Input variant="flushed" h="28px" onChange={props.values.name} />
                    </Box>
                  </Radio>
                </RadioGroup>
                {props.errors.family && <div id="feedback" color='red'>{props.errors.family}</div>}
              </Box>
              <Box my={6}>
                <Text>行爲</Text>
                <RadioGroup name="ation" value={props.values.name} onChange={props.handleChange} >
                  <Radio variantColor="green" value='秩序問題'>秩序問題</Radio>
                  <Radio variantColor="green" value='社交教問題'>社交教問題</Radio>
                  <Radio variantColor="green" value='逃家'>逃家</Radio>
                  <Radio variantColor="green" value='婚前性行爲'>婚前性行爲</Radio>
                  <Radio  variantColor="green" value="3">
                    <Box d="flex" w={220} lineHeight="22px">
                      <Box w="68px" fontSize="16px" lineHeight="22px">其他：</Box> 
                      <Input variant="flushed" h="28px" onChange={props.values.name} />
                    </Box>
                  </Radio>
                </RadioGroup>
                {props.errors.ation && <div id="feedback" color='red'>{props.errors.ation}</div>}
              </Box>
              <Box my={6}>
                <Text>情緒</Text>
                <RadioGroup name="emotion" value={props.values.name} onChange={props.handleChange} >
                  <Radio variantColor="green" value='情緒持續不穩定'>情緒持續不穩定</Radio>
                  <Radio variantColor="green" value='自傷行爲'>自傷行爲</Radio>
                  <Radio  variantColor="green" value="3">
                    <Box d="flex" w={220} lineHeight="22px">
                      <Box w="68px" fontSize="16px" lineHeight="22px">其他：</Box> 
                      <Input variant="flushed" h="28px" onChange={props.values.name} />
                    </Box>
                  </Radio>
                </RadioGroup>
                {props.errors.emotion && <div id="feedback" color='red'>{props.errors.emotion}</div>}
              </Box>
              <Box mt="60px">
                <Text fontSize={22}>備注</Text>
                <Textarea name="remark" w="780px" h="180px" bg="#CCC" value={props.values.name} m="auto" value={props.values.name} onChange={props.handleChange}>
                </Textarea>
                {props.errors.remark && <div id="feedback" color='red'>{props.errors.remark}</div>}
              </Box>  
              <Box mt="60px">   
                <Text fontSize={22}>老師曾跟進處理方式</Text>
                <Textarea name="dispose" w="780px" h="180px" bg="#CCC"  value={props.values.dispose} onChange={props.handleChange} >
                </Textarea>
                {props.errors.dispose && <div id="feedback" color='red'>{props.errors.dispose}</div>}
              </Box>
              <Button top="30px"  w="280px" h="48px" type="submit">提交</Button>


            </form>
          )
        }
        </Formik>
      </Box>
      
    </>
  )
}
export default MyFormData