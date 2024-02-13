// import {useState} from "react";
// import { Button, Modal } from 'antd';

// function Edit() {

//     const [loading, setLoading] = useState(false);
//     const [open, setOpen] = useState(false);

//     const showModal = () => {
//         setOpen(true);
//     };

//     const handleOk = () => {
//         setLoading(true);
//         setTimeout(() => {
//             setLoading(false);
//             setOpen(false);
//         }, 3000);
//     };
//     const handleCancel = () => {
//         setOpen(false);
//     };

//     return (
//         <div>
//             <Button type="primary" onClick={showModal}>
//                 Open Modal with customized footer
//             </Button>
//             <Modal
//                 open={open}
//                 title="Edit post"
//                 onOk={handleOk}
//                 onCancel={handleCancel}
//                 footer={[
//                     <Button key="back" onClick={handleCancel}>
//                         Cancel
//                     </Button>,
//                     <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
//                         Edit post
//                     </Button>,
//                 ]}
//             >
//                 <form id="postForm">

//                     {/*<Input placeholder="Title" {...register("title")}/>*/}

//                     {/*<Input placeholder="Body" {...register("body")}/>*/}

//                     <input type="text"/>
//                     <input type="text"/>

//                     {/*<Button type="primary" htmlType='submit' >Ok</Button>*/}

//                 </form>
//             </Modal>
//         </div>
//     )
// }

// export default Edit;