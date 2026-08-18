const PageComponent = ({ serverData, movePage }) => {
    return (
        <div className="m-6 flex justify-center">
            {serverData.prev && (
                <button type="button"
                className="m-2 w-16 rounded p-2 text-center font-bold text-blue-500 hover:bg-blue-50"
                onClick={() => movePage({ page: serverData.prevPage })}>
                    Prev
                </button>
            )}

            {serverData.pageNumberList.map((pageNum) => (
                <button type="button" key={pageNum}
                className={`m-2 w-12 rounded p-2 text-center text-white shadow-md
                    ${serverData.currentPage === pageNum ? "bg-gray-500"
                        : "bg-blue-500 hover:bg-blue-600"}`}
                onClick={() => movePage({ page: pageNum })}>
                    {pageNum}
                </button>
            ))}

            {serverData.next && (
                <button type="button"
                className="m-2 w-16 rounded p-2 text-center font-bold text-blue-500 hover:bg-blue-50"
                onClick={() => movePage({ page: serverData.nextPage })}>
                    Next
                </button>
            )}
        </div>
    );
};

export default PageComponent;