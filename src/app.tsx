import "./app.css";
import CustomTable from "./components/CustomTable";
import Create from "./components/Create.tsx";
import Edit from "./components/Edit.tsx";

export function App() {
  return (
    <>
        <Edit/>
        <Create/>
        <CustomTable />
    </>
  );
}
