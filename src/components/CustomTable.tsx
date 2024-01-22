import { Table, Space, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../hook";
import { useEffect} from "preact/hooks";
import {getPosts, removePost} from "../store/postSlice";

interface DataType {
  id: string;
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

  const handleRemovePost = () => {
    removePost();
    console.log('remove:')
  }

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
      render: (_, ) => (
          <Space size="middle">
            <Button type="primary">Edit</Button>
            <Button type="primary" danger onClick={handleRemovePost()}>Delete</Button>
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

  return <Table columns={columns} dataSource={posts} />;
};

export default CustomTable;
