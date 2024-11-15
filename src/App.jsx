import React from "react";
import FileList from "./FileList";
import Editor from "./Editor";
import FileActions from "./FileActions";

const App = () => {
   return (
       <div>
           <h1>Redux File Editor</h1>
           <FileActions />
           <FileList />
           <Editor />
       </div>
   );
};

export default App;
