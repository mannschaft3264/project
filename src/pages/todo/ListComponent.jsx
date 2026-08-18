import { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    dtoList: [],
    pageNumberList: [],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    currentPage: 0,
};

const ListComponent = () => {
    const { page, size } = useCustomMove();

    const [serverData, setServerData] = useState(initState);

    useEffect(() => {
        getList({ page, size }).then((data) => {
            console.log(data);
            setServerData(data);
        });
    }, [page, size]);

    return (
        <div className="mx-2 mt-10 border-2 border-blue-100">
            <div className="mx-auto flex flex-wrap justify-center p-6">
                {serverData.dtoList.map((todo) => (
                    <div key={todo.no}
                    className="m-2 w-full min-w-[400px] rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
                        <div className="flex items-center">
                            <div className="w-1 text-xl font-bold">
                                {todo.no}
                            </div>

                            <div className="w-8/12 p-2 text-lg font-semibold">
                              {todo.title}
                            </div>

                            <div className="w-3/12 p-2 text-right text-base text-gray-600">
                              {todo.dueDate}
                            </div>
                            </div>
                            </div>
                ))}
            </div>
        </div>
    );
};

export default ListComponent;