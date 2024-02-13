import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
         {/* <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
        /> */}
        <header>
           <h1>WebJoy</h1>
           <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
            </ul>
           </nav>
        </header>
    </>
  )
}
