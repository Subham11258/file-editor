import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editFile } from "./fileSlice";

const Editor = () => {
    const selectedFile = useSelector((state) => state.files.selectedFile);
    const files = useSelector((state) => state.files.files);
    const dispatch = useDispatch();

    if (!selectedFile) {
        return <p>Select a file to edit</p>;
    }

    return (
        <div>
            <h2>{selectedFile}</h2>
            <textarea
                value={files[selectedFile]}
                onChange={(e) =>
                    dispatch(editFile({ fileName: selectedFile, content: e.target.value }))
                }
                rows="10"
                cols="50"
            />
        </div>
    );
};

export default Editor;
