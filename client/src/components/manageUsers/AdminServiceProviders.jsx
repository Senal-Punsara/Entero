import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library
import Shakir from "../../Shakir.jpg";
import SearchIcon from "@mui/icons-material/Search";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const API_URL = "http://localhost:4000/api/adminservice";
const File_Url = "http://localhost:4000/serviceBRDocs/";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function AdminServiceProviders() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [popup, setPopup] = useState(false);
  const [popupS, setPopupS] = useState(false);
  const [services, setServices] = useState([]);
  const [rawServices, setRawServices] = useState([]);
  const [serviceDetail, setServiceDetail] = useState([]);
  const [serviceRegister, setServiceRegister] = useState([]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePopup = (service) => {
    setServiceDetail(service);
    setPopup(!popup);
  };
  const handlePopupS = (service) => {
    setServiceDetail(service);
    setPopupS(!popupS);
  };

  async function fetchServices() {
    try {
      const res = await axios.get(API_URL);
      setServices(
        res.data.filter(
          (service) => service.status === "a" || service.status === "d"
        )
      );
      setRawServices(
        res.data.filter(
          (service) => service.status === "a" || service.status === "d"
        )
      );
      setServiceRegister(res.data.filter((service) => service.status === "n"));
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchServices();
  }, []);

  const changeStatus = async (id) => {
    try {
      const x = API_URL + "/" + id;
      const res = await axios.put(x);
      console.log(res.data);
      fetchServices();
      alert("Status updated");
    } catch (error) {
      console.log(error.message);
    }
  };

  const registrationStatus = async (id, y, mail, file) => {
    try {
      const x = API_URL + "/serviceregister/" + id;
      const status = y;
      const email = mail;
      const br_file = file;
      const res = await axios.put(x, { status, email, br_file });
      console.log(res.data);
      fetchServices();
      alert("Done");
    } catch (error) {
      console.log(error.message);
    }
  };

  const searchByNames = (e) => {
    if (e.target.value === "") {
      setServices(rawServices);
    } else {
      setServices([]);
      rawServices.map((item) => {
        if (
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.userid === e.target.value
        ) {
          setServices((service) => [...service, item]);
        }
      });
    }
  };

  return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
      <div className="flex justify-start mb-7">
        <h2 className="text-2xl font-bold leading-7 font-serif text-gray-900 sm:text-3xl">
          Service Provider Details
        </h2>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="SERVICES" {...a11yProps(0)} />
            <Tab label="SERVICE REGISTRATIONS" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="flex p-1 md:px-4 py-2 ">
            <div className="relative w-64">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <SearchIcon
                    className="!h-5 !w-5 fill-slate-300"
                    viewBox="0 0 20 20"
                  />
                </span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search for services"
                  type="text"
                  name="search"
                  onChange={(e) => {
                    searchByNames(e);
                  }}
                />
              </label>
            </div>
          </div>
          <>
            <div className="overflow-auto justify-center w-full h-screen">
              <table class="min-w-full z-0">
                <thead class="bg-white border-b sticky top-0">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Service Provider_ID
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Payment Package
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    ></th>
                  </tr>
                </thead>
                <tbody className="">
                  {services.map((service) => (
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {service.userid}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {service.name}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {service.photography ? "Photography " : ""}
                        {service.refreshment ? "Refreshment " : ""}
                        {service.decoration ? "Decoration " : ""}
                        {service.hallservices ? "Halls " : ""}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {service.package}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {service.status === "a" ? "Active" : "Blocked"}
                      </td>

                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => {
                            handlePopup(service);
                          }}
                          className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        >
                          View
                        </button>
                        <button
                          className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          onClick={() => {
                            changeStatus(service.userid);
                          }}
                        >
                          {service.status === "a" ? "Remove" : "Activate"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <>
            <div className="overflow-auto justify-center w-full h-screen">
              <table class="min-w-full z-0">
                <thead class="bg-white border-b sticky top-0">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Service Provider_ID
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    ></th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    ></th>
                  </tr>
                </thead>
                <tbody className="">
                  {serviceRegister.map((service) => (
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {service.userid}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {service.name}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {service.photography ? "Photography " : ""}
                        {service.refreshment ? "Refreshment " : ""}
                        {service.decoration ? "Decoration " : ""}
                        {service.hallservices ? "Halls " : ""}
                      </td>

                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => {
                            handlePopupS(service);
                          }}
                          className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        >
                          View
                        </button>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          onClick={() => {
                            registrationStatus(
                              service.userid,
                              "a",
                              service.email,
                              service.br_file
                            );
                          }}
                        >
                          Accept
                        </button>
                        <button
                          className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          onClick={() => {
                            registrationStatus(
                              service.userid,
                              "d",
                              service.email,
                              service.br_file
                            );
                          }}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        </TabPanel>
      </Box>

      <div
        className={
          popup
            ? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0"
            : "hidden"
        }
      >
        <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[80%] mx-[10%] md:w-[60%] md:mx-[20%] lg:w-[40%] lg:mx-[30%] p-2 overflow-visible ">
          <div className="w-full inline-flex justify-end items-end">
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer"
              onClick={handlePopup}
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex flex-col  items-center  mb-2 justify-center">
              {/*The image */}
              <div className="p-2">
                {serviceDetail && serviceDetail.image === null ? (
                  <img
                    src="/assets/images/userAvatar.png"
                    alt=""
                    className="w-28 h-28 rounded-full shadow-2xl "
                  />
                ) : (
                  <img
                    src={File_Url + (serviceDetail && serviceDetail.image)}
                    alt=""
                    className="w-28 h-28 rounded-full shadow-2xl "
                  />
                )}
              </div>

              {/*The buttons */}
              <div className="flex flex-col w-44 p-4">
                <button className=" border-2   p-1 mb-3 rounded bg-cyan-500 hover:bg-cyan-400 text-white">
                  {serviceDetail && serviceDetail.status === "a"
                    ? "Remove"
                    : "Activate"}
                </button>

                
              </div>
            </div>
            <div className=" w-full p-2">
              <p className="text-center text-xl font-bold  mb-2 border-b-2">
                Details
              </p>
              <dl class="text-gray-900 divide-y divide-gray-200 ">
                <div class="flex flex-col pb-3">
                  <dt class="mb-1 text-gray-500 md:text-md ">Name</dt>
                  <dd class="text-md font-semibold">
                    {serviceDetail && serviceDetail.name}
                  </dd>
                </div>
                <div class="flex flex-col pb-3">
                  <dt class="mb-1 text-gray-500 md:text-md ">BR</dt>
                  <dd class="text-md font-semibold">
                    {serviceDetail && serviceDetail.br_no}
                  </dd>
                </div>
                <div class="flex flex-col pb-3">
                  <dt class="mb-1 text-gray-500 md:text-md ">Email address</dt>
                  <dd class="text-md font-semibold">
                    {serviceDetail && serviceDetail.email}
                  </dd>
                </div>
                <div class="flex flex-col py-3">
                  <dt class="mb-1 text-gray-500 md:text-md ">Address</dt>
                  <dd class="text-md font-semibold">
                    {serviceDetail && serviceDetail.address}
                  </dd>
                </div>
                <div class="flex flex-col pt-3">
                  <dt class="mb-1 text-gray-500 md:text-md ">Contact</dt>
                  <dd class="text-md font-semibold">
                    {serviceDetail && serviceDetail.contact_number}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          popupS
            ? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0"
            : "hidden"
        }
      >
        <div className="bg-white fixed rounded-3xl top-[20%] flex flex-col w-[80%] mx-[10%] md:w-[60%] md:mx-[20%] lg:w-[40%] lg:mx-[30%] ">
          <div className="flex flex-row w-full mb-4 border-b-2 border-cyan-500 py-2 items-center">
            <div className="basis-1/2 flex flex-row justify-end">
              <p className="text-center text-xl font-bold">Details</p>
            </div>
            <div className="basis-1/2 flex flex-row justify-end mr-2">
              <AiOutlineClose
                className="w-6 h-6 cursor-pointer"
                onClick={handlePopupS}
              />
            </div>
          </div>

          <div className=" w-full p-4">
            <dl class="text-gray-900 divide-y divide-gray-200 ">
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-md ">Name</dt>
                <dd class="text-md font-semibold">
                  {serviceDetail && serviceDetail.name}
                </dd>
              </div>
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-md ">BR</dt>
                <dd class="text-md font-semibold">
                  {serviceDetail && serviceDetail.br_no}
                </dd>
              </div>
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-md ">Email address</dt>
                <dd class="text-md font-semibold">
                  {serviceDetail && serviceDetail.email}
                </dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-md ">Address</dt>
                <dd class="text-md font-semibold">
                  {serviceDetail && serviceDetail.address}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex justify-center w-full items-center mb-4 ">
            <img
              src="/assets/images/pdf.png"
              alt="pdf"
              className="w-20 h-14 object-cover mt-3 mr-2 "
            />
            <p>{serviceDetail && serviceDetail.br_file}</p>
          </div>
          <div className="flex justify-center w-full items-center mb-4 ">
            <button className=" border-2   p-1 mb-3 rounded bg-cyan-500 hover:bg-cyan-400 text-white">
              View BR
            </button>
          </div>
          <div className="w-full ">
            {serviceDetail && (
              <>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={
                      "https://enterofilestorage.blob.core.windows.net/enterofiles/" +
                      serviceDetail.userid
                    }
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </Worker>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminServiceProviders;
