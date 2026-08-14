import { useParams, createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const ReadPage = () => {
    const { no } = useParams();
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();

    const page = parseInt(queryParams.get("page")) || 1;
    const size = parseInt(queryParams.get("size")) || 10;

    const queryStr = createSearchParams({
        page: String(page),
        size: String(size),
    }).toString();

    const moveToModify = () => {
        navigate({
            pathname: `/todo/modify/${no}`,
            search: `?${queryStr}`,
        });
    };

    const moveToList = () => {
        navigate({
            pathname: "/todo/list",
            search: `?${queryStr}`,
        });
    };

    return (
        <div className="text-3xl font-extrabold">
            Todo Read Page Component {no}

            <div>
                <button type="button" 
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-2xl mr-3"
                onClick={moveToModify}>
                    Test Modify
                </button>

                <button type="button" 
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-2xl"
                onClick={moveToList}>
                    Test List
                </button>
            </div>
        </div>
    );
};

export default ReadPage;