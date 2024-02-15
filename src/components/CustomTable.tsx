import { Table, Space, Button, Modal, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../hook";
import { useEffect} from "preact/hooks";
import {getPosts, removePost} from "../store/postSlice";
import {useState} from "react";
import { Controller, useForm } from "react-hook-form";

interface DataType {
  id: number;
  title: string;
  body: string;
  // loading: boolean;
}
const CustomTable: React.FC = () => {
  const posts = useAppSelector((state) => state.posts.list);

  const dispatch = useAppDispatch();

  // const [loading, setLoading] = useState(false);

  console.log("posts", posts);


  useEffect(() => {
    dispatch(getPosts());

  }, [dispatch]);

  const handleRemovePost = (id: number) => {
      // console.log(id)
      
      //add alert
    dispatch(removePost(id));
    // console.log('remove:')
  }


  //EDIT MODAl
  const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    interface FormEditValues {
      title: string;
      body: string;
  }


    const {handleSubmit, control, watch, reset} = useForm<FormEditValues>(
      {
        defaultValues: {
            title: "",
            body: ""
        }
      }
    )
  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "address",
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
            <Button  onClick={showModal}>Edit</Button>
            <Button danger onClick={() => handleRemovePost(record.id)}>Delete</Button>
          </Space>
      ),
    },
  ];

  // const data: DataType[] = [
  //   {
  //     id: "1",
  //     title: "John Brown",
  //     body: "body",
  //   },
  //   {
  //     id: "2",
  //     title: "Jim Green",
  //     body: "body",
  //   },
  //   {
  //     id: "3",
  //     title: "Joe Black",
  //     body: "body",
  //   },
  // ];

  return (
    <>
      <Table columns={columns} dataSource={posts} />

      <div>
        <Modal
           open={open}
           title="Edit post"
           onOk={handleOk}
           onCancel={handleCancel}
           footer={[
           <Button key="back" onClick={handleCancel}>Cancel</Button>,
           <Button key="submit" type="primary" loading={loading} onClick={handleOk}>Edit</Button>,]}>
              <form id="postForm">

                <Controller control={control}  render={({field}) => (<Input placeholder="Title" {...field} style={{marginBottom: 15}}/>) } name="title"/>
                <Controller control={control} render={({field}) => (<Input placeholder="Body" {...field} /> )} name='body'/>    

                  {/* <input type="text"/>
                  <input type="text"/> */}
              </form>
          </Modal>
      </div>
    </>
  );
};

export default CustomTable;
