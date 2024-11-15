import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    files: {},
    selectedFile: null,
};

const fileSlice = createSlice({
    name: "files",
    initialState,
    reducers: {
        createFile: (state, action) => {
            const { fileName } = action.payload;
            if (!state.files[fileName]) {
                state.files[fileName] = "";
            }
        },
        deleteFile: (state, action) => {
            const { fileName } = action.payload;
            delete state.files[fileName];
            if (state.selectedFile === fileName) {
                state.selectedFile = null;
            }
        },
        editFile: (state, action) => {
            const { fileName, content } = action.payload;
            if (state.files[fileName] !== undefined) {
                state.files[fileName] = content;
            }
        },
        selectFile: (state, action) => {
            state.selectedFile = action.payload.fileName;
        },
    },
});

export const { createFile, deleteFile, editFile, selectFile } = fileSlice.actions;
export default fileSlice.reducer;
