// import { useState } from 'react';
import { useState} from "preact/hooks";
import {Button, Modal} from 'antd';
import {useForm, SubmitHandler} from 'react-hook-form';


const Create:React.FC = () => {

    //modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleOk = () => {
        setIsModalOpen(false);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }


    //form
    type FormValues = {
        title?: string,
        body?: string
    }


   // const onFinish = (values: any) => {
   //     console.log('Success:', values);
   // }
   // const onFinishFailed = (errorInfo: any) => {
   //     console.log('Failed:', errorInfo);
   // }

   //react-hook-form
    const {register, handleSubmit} = useForm();

    const onSubmit:SubmitHandler<FormValues> = (data) => {
        console.log('data',data);
    }


    return (
        <div className="create-block">
            <Button type="primary" onClick={showModal}>
                Create
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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