// import { useState } from 'react';
import { useState} from "preact/hooks";
import {Button, Modal} from 'antd';
import {SubmitHandler, useForm,} from 'react-hook-form';
import {useAppDispatch} from "../hook.ts";
import {createPost} from "../store/postSlice.ts";
import { v4 as uuid } from 'uuid';

const Create:React.FC = () => {

    const dispatch = useAppDispatch();

    //MODAL
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    // const handleOk = () => {
    //     setIsModalOpen(false);
    // }

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
    const {register,  handleSubmit, reset} = useForm<FormValues>(
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
    const onSubmit:SubmitHandler<FormValues> = (data) => {
        console.log('data',data);
       dispatch(createPost(data));
       reset({
           title: "",
           body: ""
       });
        setIsModalOpen(false)
    }

    //функция будет типа SubmitHandler формы FormValues, generic
    // const onSubmit:SubmitHandler<FormValues> = ({...values}: FormValues) => {
    //     dispatch(createPost(values));
    //     setIsModalOpen(false);
    // }


    return (
        <div className="create-block">
            <Button type="primary" onClick={showModal}>
                Create
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/*<Input placeholder="Basic usage" {...register("title")}/>*/}
                    {/*<Input placeholder="Basic usage" {...register("body")}/>*/}
                    <input type="text" {...register("title")}/>
                    <input type="text" {...register("body")}/>

                    <input type="submit"/>
                </form>
            </Modal>

        </div>
    )
};

export default Create;