import React, { useContext, useRef } from "react";
import { dateFormat } from "../helper";
import TaskForm from "../components/TaskForm";
import TaskContext from "../context/TaskContext";
import AuthContext from "../context/AuthContext";
function Popup(props) {
  const { option } = props;
  const { type, data } = option;

  const { deleteTask } = useContext(TaskContext);
  const { message }=useContext(AuthContext);
  const closeButton = useRef(null);
  
  const onDelete = () => {
    deleteTask(data.id);
  };

  return (
    <div className="modal" tabIndex="-1" id="task-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-primary">
          <div className="modal-header ">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeButton}
            ></button>
          </div>
          <div className="modal-body">
            {type === "view" ? (
              <div>
                <h5>{data.title}</h5>
                <p>{data.description}</p>
                <div className="d-flex">
                  <p>Modified On: {dateFormat(data.modifiedOn)}</p>
                  <p className="ms-auto">
                    Due Date: {dateFormat(data.duedate)}
                  </p>
                </div>
              </div>
            ) : type === "edit" ? (
              <div>
                <TaskForm
                  isUpdate={true}
                  data={data}
                  btnRef={closeButton}
                  isPopup={true}
                />
              </div>
            ) : (
              <div className="text-white">

                <p>
                  {
                  message !== "" ? message : 
                  "Are you sure you want to delete this task?"
                  }
                </p>
                <div className="d-flex">
                  <button className="btn btn-danger ms-auto" onClick={onDelete}>
                    Yes
                  </button>
                  <button className="btn btn-warning ms-2"  data-bs-dismiss="modal" aria-label="Close">No</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
