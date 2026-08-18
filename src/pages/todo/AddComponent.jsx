import { useState } from "react";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../../components/common/ResultModal";

const initState = {
    title: "",
    writer: "",
    dueDate: "",
    completed: false,
};

const AddComponent = () => {
    const [todo, setTodo] = useState(initState);
    const [result, setResult] = useState(null);

    const handleChangeTodo = (e) => {
        const { name, value } = e.target;

        setTodo((prevTodo) => ({
            ...prevTodo,
            [name]: value,
        }));
    };

    /*const handleClickAdd = () => {
        console.log(todo);
    };*/

    const handleClickAdd = () => {
        postAdd(todo)
        .then(result => {
            console.log(result);

            setResult(result.no);

            setTodo({...initState});
        })
        .catch(e => {
            console.error(e)
        });
    };

    const closeModal = () => {
        setResult(null);
    };

    const makeInput = (title, name, type, value) => (
        <div className="flex justify-center">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <div className="w-1/5 p-6 text-right font-bold">
                  {title}
                </div>

                <input className="w-4/5 rounded-r border border-solid border-neutral-500 p-6 shadow-md"
                name={name} type={type} value={value} onChange={handleChangeTodo} />
            </div>
        </div>
    );


    return (
        <div className="m-2 mt-10 border-2 border-sky-200 p-4">
            {result !== null && (
                <ResultModal title="Add Result"
                content={`New ${result} Added`}
                callbackFn={closeModal}/>
            )}

            {makeInput("내용", "title", "text", todo.title)}
            {makeInput("작성자", "writer", "text", todo.writer)}
            {makeInput("마감일", "dueDate", "date", todo.dueDate)}

            
        <div className="m-2 mt-10 border-2 border-sky-200 p-4">

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">
                      내용
                    </div>

                    <input className="w-4/5 rounded-r border border-solid border-neutral-500 p-6 shadow-md"
                    name="title" type="text" value={todo.title} onChange={handleChangeTodo}/>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">
                      작성자
                    </div>

                    <input className="w-4/5 rounded-r border border-solid border-neutral-500 p-6 shadow-md"
                    name="writer" type="text" value={todo.writer} onChange={handleChangeTodo}/>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">
                      마감일
                    </div>

                    <input className="w-4/5 rounded-r border border-solid border-neutral-500 p-6 shadow-md"
                    name="dueDate" type="date" value={todo.dueDate} onChange={handleChangeTodo}/>
                </div>
            </div>

            <div className="flex justify-end p-4">
                <button type="button" 
                className="w-32 rounded-md bg-blue-500 px-4 py-3 text-lg font-semibold text-white hover:bg-blue-600"
                onClick={handleClickAdd}>
                    ADD
                </button>
            </div>
        </div>
        </div>
    );
};

export default AddComponent;