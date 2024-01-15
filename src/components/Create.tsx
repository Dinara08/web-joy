// import { useState } from 'react';
import { useState} from "preact/hooks";
import {Button, Modal} from 'antd';
import {useForm,} from 'react-hook-form';
import {useAppDispatch} from "../hook.ts";
import {createPost} from "../store/postSlice.ts";


const Create:React.FC = () => {

    const dispatch = useAppDispatch();

    //modal
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

    //form
    interface FormValues {
        id: number,
        title: string,
        body: string
    }


   // const onFinish = (values: any) => {
   //     console.log('Success:', values);
   // }
   // const onFinishFailed = (errorInfo: any) => {
   //     console.log('Failed:', errorInfo);
   // }

   //react-hook-form
    const {register,  handleSubmit} = useForm<FormValues>(
        {
            defaultValues: {
                id: 0,
                title: "",
                body: ""
            }
        }
    );

    // const onSubmit:SubmitHandler<FormValues> = (data) => {
    //     console.log('data',data);
    //    dispatch(createPost(data));
    // }

    const onSubmit = ({...values}: FormValues) => {
        dispatch(createPost(values));
        setIsModalOpen(false);
    }


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