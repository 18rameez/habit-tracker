import React from "react";
import { useRef, useEffect } from "react";


const Modal = () => {

  const form = useRef(null)



  const sendData = (e) => {
   
    const qform = document.getElementById("habit-creation-form")
    const formData = new FormData(form.current);
    console.log(form);
    for (const arr of formData) {
        console.log(arr)
    }
     
     e.preventDefault();
  }

  useEffect(() => {


    console.log(form)

  })


  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Create a new habit
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form ref={form} id="habit-creation-form" >

               
              <div  class="mb-3">
                <label for="habit-type" class="col-form-label">
                  How do you want to evaluate your progress:
                </label>

                <div class="input-group mb-3">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Options
                  </label>

                  
                  <select class="form-select" id="habit-type" name="habit-type">
                    <option selected>Choose...</option>
                    <option value="1">WITH A YES OR NO</option>
                    <option value="2">WITH A NUMERIC VALUE</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label for="habit-name" class="col-form-label">
                  Habit name:
                </label>
                <input type="text" class="form-control" id="habit-name" name="habit-name"/>
              </div>

              <div class="mb-3 row">

                <div className="col">
                <div class="input-group mb-3">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Options
                  </label>
                  <select class="form-select" id="habit-goal-type" name="habit-goal-type">
                    <option selected>Atleast</option>
                    <option value="1">Less than</option>
                    <option value="2">Exactly</option>
                    <option value="3">Any value</option>
                  </select>
                </div>
                </div>
                 
                 <div className=" col">
                   <input type="number" class="form-control" id="habit-goal-value" name="habit-goal-value" placeholder="Goal" />
                 </div>

              </div>

              <div class="mb-3">
                 <label  class="col-form-label"> Unit:</label>
                <input type="text" class="form-control" id="habit-unit" name="habit-unit" placeholder="eg: hr/min"/>
              </div>

            

            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button onClick={sendData}  type="button" class="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );


};

export default Modal;
