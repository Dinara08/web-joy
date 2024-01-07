// import { useState } from 'react';
import { useState} from "preact/hooks";
import {Button, Modal, Form, Input} from 'antd';
import {useForm} from 'react-hook-form';

const Create = () => {

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
    type FieldType = {
        title?: string,
        body?: string
    }


   const onFinish = (values: any) => {
       console.log('Success:', values);
   }
   const onFinishFailed = (errorInfo: any) => {
       console.log('Failed:', errorInfo);
   }

   //react-hook-form
    const {register, handleSubmit} = useForm();

    const onSubmit = () => {
        console.log('data')
    }


    return (
        <div className="create-block">
          <Button type="primary" onClick={showModal}>
              Create
          </Button>
            <Modal title="Create post" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Close
                </Button>,
                <Button key="submit" type="primary"  onClick={handleOk}>
                    Submit
                </Button>

            ]}
            >
              <Form
                  name="basic"
                  style={{ maxWidth: 600 }}
                  autoComplete="off"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  handleSubmit={onSubmit}
              >
                  <Form.Item<FieldType> label="Title" name="title">
                      <Input {...register('title')}
                      />
                  </Form.Item>
                  <Form.Item<FieldType> label="Body" name="body">
                      <Input {...register('body')}/>
                  </Form.Item>



              </Form>
            </Modal>
        </div>
    )
};

export default Create;