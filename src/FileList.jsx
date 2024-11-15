import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFile, deleteFile } from "./fileSlice";

const FileList = () => {
    const files = useSelector((state) => state.files.files);
    const dispatch = useDispatch();

    return (
        <ul>
            {Object.keys(files).map((fileName) => (
                <li key={fileName}>
                    <span onClick={() => dispatch(selectFile({ fileName }))}>
                        {fileName}
                    </span>
                    <button onClick={() => dispatch(deleteFile({ fileName }))}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default FileList;
