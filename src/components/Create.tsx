// import { useState } from 'react';
import { useState} from "preact/hooks";
import {SubmitHandler, useForm, Controller} from 'react-hook-form';
import {useAppDispatch} from "../hook.ts";
import {createPost} from "../store/postSlice.ts";
import { v4 as uuid } from 'uuid';
import { Button, Modal, Input } from 'antd';

const Create:React.FC = () => {

    const dispatch = useAppDispatch();

    //MODAL
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

   const handleOk = () => {
        setIsModalOpen(false);
    }

    const handleCancel = () => {
        // dispatch(createPost(data))
        setIsModalOpen(false);

    }

    //FORM
    interface FormValues {
        id: string;
        title: string;
        body: string;
    }


   // const onFinish = (values: any) => {
   //     console.log('Success:', values);
   // }
   // const onFinishFailed = (errorInfo: any) => {
   //     console.log('Failed:', errorInfo);
   // }

   //react-hook-form (в качестве Generic useForm принимает описание структуры нашей формы, которую мы задали - FormValues)
    //+ можем передать дополнительные параметры
    const {handleSubmit, control, watch, reset} = useForm<FormValues>(
        {
            defaultValues: {
                id: uuid(),
                title: "",
                body: ""
            }
        }
    );

    //функция будет типа SubmitHandler формы FormValues, generic
    //принимает данные data
    const onSubmit:SubmitHandler<FormValues> = (data:FormValues) => {
        console.log('data',data);
        dispatch(createPost(data));
       reset({
           title: "",
           body: ""
       });
        setIsModalOpen(false)
    }


    console.log(watch())


    return (
        <div className="create-block">
            <Button type="primary" onClick={showModal}>
                Create
            </Button>
            <Modal title="Create a post" open={isModalOpen}  onCancel={handleCancel} onOk={handleOk}
                   footer={[
                       <Button type="primary" onCancel={handleCancel}>Cancel</Button>,
                       <Button type="primary" htmlType="submit" form="postForm" >Ok</Button>
                   ]}
            >
                <form id="postForm" onSubmit={handleSubmit(onSubmit)}>

                    <Controller control={control} render={({ field, }) => ( <Input placeholder="Title" {...field} style={{marginBottom: 15}}/> )} name='title'/>

                    <Controller control={control} render={({field}) => (<Input placeholder="Body" {...field} /> )} name='body'/>

                  
                    {/* <Input placeholder="Body" {...register("body")}/> */}

                        {/*<input type="text" {...register("title")}/>*/}
                        {/*<input type="text" {...register("body")}/>*/}

                    {/*<Button type="primary" htmlType='submit' >Ok</Button>*/}

                </form>
            </Modal>
        </div>
    )
};

export default Create;