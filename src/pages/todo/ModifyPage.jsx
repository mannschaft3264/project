import { useParams } from "react-router-dom";

const ModifyPage = () => {

    const { no } = useParams();

    return (
        <div className="p-4 bg-white">
            <div className="text-3xl font-extrabold">
                Todo Modify Page
            </div>

            <div className="mt-4">
                Todo 번호: {no}
            </div>
        </div>
    );
};

export default ModifyPage;