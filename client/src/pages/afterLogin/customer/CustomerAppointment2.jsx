import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import scheduleData from "../../../documents/dummy";
import PageHeader from "../../../components/PagesHeader/PageHeader";
import Button from "../../../components/button/Button";

const CustomerAppointment2 = () => {
  return (
    <div
      className="w-full p-2 pb-48
    bg-slate-100"
    >
      <div
        className="m-2 md:m-10 mt-24 p-2
    md:p-10 bg-white rounded-3xl"
      >
        <PageHeader title="Appointments" />

     

        <div className="flex w-full justify-center items-center mt-2">
          {/* <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-slate-200 w-full max-w-4xl p-8 rounded-xl shadow-lg  bg-opacity-60  justify-center items-center" > */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-white w-full max-w-4xl p-8 rounded-xl shadow-lg  bg-opacity-60  justify-center items-center">
           
            <div>
              {/* <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80"> */}
              <form className="flex flex-col space-y-4 ">
                <h3>
                  <b>Create an Appointment</b>
                </h3>
                <div>
                  <label
                    for="date"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    placeholder="Date"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                  ></input>
                </div>

                <div>
                  <label
                    for="time"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    placeholder="Time"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                  ></input>
                </div>

                <div>
                  <textarea
                    placeholder="Description"
                    rows="5"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                  ></textarea>
                </div>

                {/* <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                            Send
                        </button> */}
                <div className="mt-6 justify-center items-center flex w-full">
                  <Button
                    color="white"
                    bgColor="#03C9D7"
                    //  bgColor={currentColor}
                    text="Create"
                    borderRadius="10px"
                    size="md"
                    width="300px"
                    // margin-right="200px"
                  />
                </div>
              </form>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAppointment2;
