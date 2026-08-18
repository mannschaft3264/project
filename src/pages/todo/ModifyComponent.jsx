import { useEffect, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/todoApi";

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
        getOne(no).then((data) => {
            setTodo(data);
        });   
    }, [no]);

    const handleClickModify = () => {
        putOne(todo).then((data) => {
            console.log("modify result:", data);
        });
    };

    const handleClickDelete = () => {
        deleteOne(no).then((data) => {
            console.log("delete result:", data);
        });
    };

    const handleChangeTodo = (e) => {
        const { name, value } = e.target;

        setTodo((prevTodo) => ({
            ...prevTodo,
            [name]: value,
        }));
    };

    const handleChangeTodoComplete = (e) => {
        const value = e.target.value;

        setTodo((prevTodo) => ({
            ...prevTodo,
            completed: value === "Y",
        }));
    };

    const makeReadOnly = (title, value) => (
        <div className="flex justify-center">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <div className="w-1/5 p-6 text-right font-bold">
                  {title}
                </div>

                <div className="w-4/5 rounded-r border border-solid bg-gray-100 p-6 shadow-md">
                  {value}
                </div>
            </div>
        </div>
    );

    const makeInput = (title, name, type, value) => (
        <div className="flex justify-center">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <div className="w-1/5 p-6 text-right font-bold">
                  {title}
                </div>

                <input className="w-4/5 rounded-r border border-solid border-neutral-500 p-6 shadow-md"
                name={name} type={type} value={value} onChange={handleChangeTodo}/>
            </div>
        </div>
    );

    return (
        <div className="mt-2 mt-10 border-2 border-sky-200 p-4">
            {makeReadOnly("번호", todo.no)}
            {makeReadOnly("작성자", todo.writer)}

            {makeInput("내용", "title", "text", todo.title)}
            {makeInput("마감일", "dueDate", "date", todo.dueDate)}

        <div className="flex justify-center">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <div className="w-1/5 p-6 text-right font-bold">
                  완료 여부
                </div>

                <select className="w-4/5 rounded-r border border-solid border-neutral-500 p-6 shadow-md"
                value={todo.completed ? "Y" : "N"}
                onChange={handleChangeTodoComplete}>
                    <option value="Y">Completed</option>
                    <option value="N">Not Yet</option>
                </select>
            </div>
        </div>

            <div className="flex justify-end gap-3 p-4">
                <button type="button"
                className="w-32 rounded-md bg-red-500 px-4 py-3 text-lg font-semibold text-white hover:bg-red-600"
                onClick={handleClickDelete}>
                    Delete
                </button>

                <button type="button"
                className="w-32 rounded-md bg-blue-500 px-4 py-3 text-lg font-semibold text-white hover:bg-blue-600"
                onClick={handleClickModify}>
                    Modify
                </button>
            </div>
        </div>
    );
};

export default ModifyComponent;