import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../hook";
import { useEffect} from "preact/hooks";
import { fetchPosts } from "../store/postSlice";

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

  // console.log("posts", posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
