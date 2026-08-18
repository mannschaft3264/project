import { useEffect, useState } from "react";

const initState = {
    no: 0,
    title: "",
    writer: "",
    dueDate: "",
    completed: false,
};

const ModifyComponent = ({ no }) => {
    const [todo, setTodo] = useState(initState);

    useEffect(() => {
     // 수정할 Todo 데이터 조회   
    }, [no]);

    return (
        <div className="m-2 mt-10 border-2 border-sky-200 p-4">
            <div className="flex justify-end gap-3 p-4">
                <button type="button"
                className="w-32 rounded-md bg-red-500 px-4 py-3 text-lg font-semibold text-white hover:bg-red-600">
                    Delete
                </button>

                <button type="button"
                className="w-32 rounded-md bg-blue-500 px-4 py-3 text-lg font-semibold text-white hover:bg-blue-600">
                    Modify
                </button>
            </div>
        </div>
    );
};

export default ModifyComponent;