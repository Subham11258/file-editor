import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createFile } from "./fileSlice";

const FileActions = () => {
    const [newFileName, setNewFileName] = useState("");
    const dispatch = useDispatch();

    const handleCreate = () => {
        if (newFileName) {
            dispatch(createFile({ fileName: newFileName }));
            setNewFileName("");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                placeholder="New file name"
            />
            <button onClick={handleCreate}>Create File</button>
        </div>
    );
};

export default FileActions;
