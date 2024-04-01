import React, { useState } from 'react';
import profilepic from "../assets/image7.png";

export default function PatientCard({ patientData }) {
    const [lastName, setLastName] = useState(patientData.last_name);
    const [firstName, setFirstName] = useState(patientData.first_name);
    const [acct, setAcct] = useState(patientData.acct);
    const [dob, setDob] = useState(patientData.dob);
    const [age, setAge] = useState(patientData.age);
    const [sex, setSex] = useState(patientData.sex);
    const [clinic, setClinic] = useState(patientData.clinic);
    const [plan, setPlan] = useState(patientData.plan);
    const [benefitYear, setBenefitYear] = useState(patientData.benefit_year);
    const [editingField, setEditingField] = useState(null);

    const handleFieldClick = (field) => {
        setEditingField(field);
    };

    const handleFieldBlur = () => {
        setEditingField(null);
    };

    const handleInputChange = (event, field) => {
        switch (field) {
            case 'lastName':
                setLastName(event.target.value);
                break;
            case 'firstName':
                setFirstName(event.target.value);
                break;
            case 'acct':
                setAcct(event.target.value);
                break;
            case 'dob':
                setDob(event.target.value);
                break;
            case 'age':
                setAge(event.target.value);
                break;
            case 'clinic':
                setClinic(event.target.value);
                break;
            case 'plan':
                setPlan(event.target.value);
                break;
            case 'benefitYear':
                setBenefitYear(event.target.value);
                break;
            default:
                break;
        }
    };

    const handleKeyDown = (event, field) => {
        if (event.key === 'Enter') {
            handleFieldBlur();
        }
    };

    return (
        <div className="rounded-md flex  items-start py-5 px-3  bg-white gap-5">
            <img src={profilepic} alt="patient" className="rounded-md " />
            <div className="flex gap-7">
                <div className="flex flex-col gap-2 font-semibold text-[#63778F]">
                    <p className="whitespace-nowrap text-responsive-base">Last Name</p>
                    <p className="whitespace-nowrap text-responsive-base">First Name</p>
                    <p className='text-responsive-base'>ACCT</p>
                    <p className='text-responsive-base'>DOB</p>
                    <p className='text-responsive-base'>Age</p>
                </div>
                <div className="flex flex-col gap-2 font-semibold ">
                    <div
                        onClick={() => handleFieldClick('lastName')}
                        onBlur={handleFieldBlur}
                    >
                        {editingField === 'lastName' ? (
                            <input
                                type="text"
                                className="w-full"
                                value={lastName}
                                onChange={(e) => handleInputChange(e, 'lastName')}
                                onKeyDown={(e) => handleKeyDown(e, 'lastName')}
                                autoFocus
                            />
                        ) : (
                            <p className="whitespace-nowrap">{lastName}</p>
                        )}
                    </div>
                    <div
                        onClick={() => handleFieldClick('firstName')}
                        onBlur={handleFieldBlur}
                    >
                        {editingField === 'firstName' ? (
                            <input
                                type="text"
                                className="w-full"
                                value={firstName}
                                onChange={(e) => handleInputChange(e, 'firstName')}
                                onKeyDown={(e) => handleKeyDown(e, 'firstName')}
                                autoFocus
                            />
                        ) : (
                            <p className="whitespace-nowrap">{firstName}</p>
                        )}
                    </div>
                    <div onClick={() => handleFieldClick('acct')} onBlur={handleFieldBlur}>
                        {editingField === 'acct' ? (
                            <input
                                type="text"
                                className="w-full"
                                value={acct}
                                onChange={(e) => handleInputChange(e, 'acct')}
                                onKeyDown={(e) => handleKeyDown(e, 'acct')}
                                autoFocus
                            />
                        ) : (
                            <p>{acct}</p>
                        )}
                    </div>
                    <div onClick={() => handleFieldClick('dob')} onBlur={handleFieldBlur}>
                        {editingField === 'dob' ? (
                            <input
                                type="text"
                                className="w-full"
                                value={dob}
                                onChange={(e) => handleInputChange(e, 'dob')}
                                onKeyDown={(e) => handleKeyDown(e, 'dob')}
                                autoFocus
                            />
                        ) : (
                            <p>{dob}</p>
                        )}
                    </div>
                    <div onClick={() => handleFieldClick('age')} onBlur={handleFieldBlur}>
                        {editingField === 'age' ? (
                            <input
                                type="text"
                                className="w-full"
                                value={age}
                                onChange={(e) => handleInputChange(e, 'age')}
                                onKeyDown={(e) => handleKeyDown(e, 'age')}
                                autoFocus
                            />
                        ) : (
                            <p>{age}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex gap-7 ">
                <div className="flex flex-col gap-2 font-semibold text-[#63778F]">
                    <p className='text-responsive-base'>Sex</p>
                    <p className='text-responsive-base'>Clinic</p>
                    <p className='text-responsive-base'>Plan</p>
                    <p className='text-responsive-base'>Benefit year</p>
                </div>
                <div className="flex flex-col gap-2 font-semibold ">
                    <p>
                        <select value={sex}>
                            <option className='text-responsive-base'>Male</option>
                            <option className='text-responsive-base'>Female</option>
                            <option className='text-responsive-base'>Other</option>
                        </select>
                    </p>
                    <div onClick={() => handleFieldClick('clinic')} onBlur={handleFieldBlur}>
                        {editingField === 'clinic' ? (
                            <input
                                type="text"
                                className="w-full"
                                value={clinic}
                                onChange={(e) => handleInputChange(e, 'clinic')}
                                onKeyDown={(e) => handleKeyDown(e, 'clinic')}
                                autoFocus
                            />
                        ) : (
                            <p>{clinic}</p>
                        )}
                    </div>
                    <div onClick={() => handleFieldClick('plan')} onBlur={handleFieldBlur}>
                        {editingField === 'plan' ? (
                            <input
                                type="text"
                                className="w-full"
                                value={plan}
                                onChange={(e) => handleInputChange(e, 'plan')}
                                onKeyDown={(e) => handleKeyDown(e, 'plan')}
                                autoFocus
                            />
                        ) : (
                            <p>{plan}</p>
                        )}
                    </div>
                    <div
                        onClick={() => handleFieldClick('benefitYear')}
                        onBlur={handleFieldBlur}
                    >
                        {editingField === 'benefitYear' ? (
                            <input
                                type="text"
                                className="w-full"
                                value={benefitYear}
                                onChange={(e) => handleInputChange(e, 'benefitYear')}
                                onKeyDown={(e) => handleKeyDown(e, 'benefitYear')}
                                autoFocus
                            />
                        ) : (
                            <p>{benefitYear}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}