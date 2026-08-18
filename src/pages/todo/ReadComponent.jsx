import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";

const initState = {
    no: 0,
    title: "",
    writer: "",
    dueDate: null,
    completed: false,
};

const ReadComponent = ({ no }) => {
    const [todo, setTodo] = useState(initState);

    useEffect(() => {
        getOne(no).then((data) => {
            console.log(data);
            setTodo(data);
        });
    }, [no]);

    return (
        <div>

        </div>
    );
};

export default ReadComponent;