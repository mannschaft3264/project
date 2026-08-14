import { Outlet, useNavigate } from "react-router";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {

    const navigate = useNavigate();

    const moveToList = () => {
        navigate("list");
    };

    const moveToAdd = () => {
        navigate("add");
    };

    return (
        <BasicLayout>
            <div className="flex gap-3 border-b border-gray-200 pb-3 mb-5">
                <div className="px-4 py-2 text-lg font-semibold text-center cursor-pointer hover:text-blue-600" 
                onClick={moveToList}>
                    LIST
                </div>

                <div className="px-4 py-2 text-lg font-semibold text-center cursor-pointer hover:text-blue-600" 
                onClick={moveToAdd}>
                    ADD
                </div>
            </div>

            <div className="w-full min-h-80 p-4 bg-white rounded-lg">
                <Outlet />
            </div>
        </BasicLayout>
    );
};

export default IndexPage;