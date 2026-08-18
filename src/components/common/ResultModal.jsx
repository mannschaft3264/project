const ResultModal = ({ title, content, callbackFn }) => {
    const handleClose = () => {
        if (callbackFn) {
            callbackFn();
        }
    };

    return (
        <div className="fixed inset-0 z-[1055] flex items-center justify-center bg-black/20"
        onClick={handleClose}>

        <div className="w-1/4 min-w-[600px] rounded-lg bg-white px-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}>
        <div className="mt-6 mb-6 border-b-2 border-gray-300 pb-4 text-2xl font-bold">
            {title}
        </div>

        <div className="border-b-2 border-orange-400 py-6 text-3xl">
            {content}
        </div>

        <div className="flex justify-end">
            <button type="button"
            className="my-4 rounded bg-blue-500 px-6 py-3 text-lg text-white hover:bg-blue-600"
            onClick={handleClose}>
                Close
            </button>
            </div> 
        </div>
        </div>
    );
};

export default ResultModal;