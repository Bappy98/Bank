import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/image/icon/arrow-left.png'

function Form() {
    return (
        <div>
            <div className="bg-white mt-2 w-full px-3">
                <div className="flex justify-between xs:gap-3">
                    <ul className="flex gap-3 text-lg text-gray-500">
                        <li><img src={icon} alt="" /></li>
                        <li><h1>Create New File</h1></li>
                    </ul>
                    <ul className="flex mr-8 text-gray-700 w-[273px]">
                        <li><a href="#">SLI/</a></li>
                        <li><a href="#">New File/</a></li>
                        <li><a href="#">Create New File</a></li>
                    </ul>
                </div>
            </div>

            <div className="content-div h-[77vh] mx-4 px-5 mt-2 p-2">
                { /* Each input container */ }
                <InputField label="Applicant Name" placeholder="Applicant Name" />
                <InputField label="Applicant Mother Name" placeholder="Applicant Mother Name" />
                <InputField label="Date of Birth" placeholder="Date of Birth" />
                <InputField label="Profession Type" placeholder="Profession Type" />

                <InputField label="Identity Document Type" placeholder="Identity Document Type" />
                <InputField label="Identity Document Id" placeholder="Identity Document Id" />
                <InputField label="Sum Assured" placeholder="Sum Assured" />

                <div className="mt-2 h-[9vh]">
                <Link to="/UploadFile">
                <button className="log-btn px-8 rounded py-1 text-white" id="openModalButton">
                    Check Information
                </button>
                </Link>
                    </div>
            </div>
        </div>
    );
}

const InputField = ({ label, placeholder }) => (
    <div className="w-full h-[9vh] mt-1 xs:w-full md:w-[516px] lg:w-[516px] xl:w-[516px] 2xl:w-[516px]">
        <label>{label}</label>
        <input type="text" className="w-full py-1 px-4 border-stone-300 mt-1" placeholder={placeholder} />
    </div>
);

export default Form;