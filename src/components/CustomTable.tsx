import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../hook";
import { useEffect } from "preact/hooks";
import { fetchPosts } from "../store/postSlice";

interface DataType {
  id: string;
  title: string;
  body: string;
}
const CustomTable: React.FC = () => {
  const posts = useAppSelector((state) => state.posts.list);

  const dispatch = useAppDispatch();

  console.log("posts", posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
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

  return <Table columns={columns} dataSource={data} />;
};

export default CustomTable;
