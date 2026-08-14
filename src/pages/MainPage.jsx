import { Link } from "react-router";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
    return (
      <div>
        <div className="flex">
            <Link to={'./about'}>About</Link>
        </div>
        <BasicLayout>
        <div className="text-3xl">
            <div>Main Page</div>
        </div>
        </BasicLayout>
      </div>
    );
}

export default MainPage;