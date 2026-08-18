import { useParams } from "react-router-dom";
import ModifyComponent from "./ModifyComponent";

const ModifyPage = () => {
    const { no } = useParams();

    return (
        <div className="w-full bg-white p-4">
            <div className="text-3xl font-extrabold">
                Todo Modify Page
            </div>

            <div className="mt-4">
                Todo 번호: {no}
            </div>
            <ModifyComponent no={no} />
        </div>
    );
};

export default ModifyPage;