import React, { useState } from 'react';
import { PiEarSlash, PiEarSlashBold } from "react-icons/pi";
import { CgFormatSlash } from "react-icons/cg";

export default function MedicalHistory({ patientData, labs }) {
    const [risk, setRisk] = useState(patientData.risk);
    const [tobaccoUse, setTobaccoUse] = useState(patientData.tobacco_use);
    const [dm2, setDm2] = useState(patientData.dm2);
    const [statins, setStatins] = useState(patientData.statins);
    const [quarter1, setQuarter1] = useState(labs.quarter1 || '/');
    const [quarter2, setQuarter2] = useState(labs.quarter2 || '/');
    const [quarter3, setQuarter3] = useState(labs.quarter3 || '/');
    const [quarter4, setQuarter4] = useState(labs.quarter4 || '/');
    const [egrfDate, setEgrfDate] = useState(labs.egrf_date || '/');
    const [uacrDate, setUacrDate] = useState(labs.uacr_date || '/');
    const [editingField, setEditingField] = useState(null);

    const handleFieldClick = (field) => {
        setEditingField(field);
    };

    const handleFieldBlur = () => {
        setEditingField(null);
    };

    const handleInputChange = (event, field) => {
        switch (field) {
            case 'risk':
                setRisk(event.target.value);
                break;
            case 'tobaccoUse':
                setTobaccoUse(event.target.value);
                break;
            case 'dm2':
                setDm2(event.target.value);
                break;
            case 'statins':
                setStatins(event.target.value);
                break;
            case 'quarter1':
                setQuarter1(event.target.value);
                break;
            case 'quarter2':
                setQuarter2(event.target.value);
                break;
            case 'quarter3':
                setQuarter3(event.target.value);
                break;
            case 'quarter4':
                setQuarter4(event.target.value);
                break;
            case 'egrfDate':
                setEgrfDate(event.target.value);
                break;
            case 'uacrDate':
                setUacrDate(event.target.value);
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
        <div className="mt-6 py-6  px-5 rounded-lg  bg-white">
            <div className="top flex gap-2 items-start ">
                <p className="text text-[#001D94] font-bold text-responsive-xl ">Medical History</p>
                <div className="flex gap-10">
                    <div className="flex w-full min-w-fit flex-col text-[#63778F] font-semibold">
                        <p className='text-responsive-base'>Risk</p>
                        <p className='text-responsive-base '>Tobacco use</p>
                    </div>
                    <div className="flex w-full flex-col gap-1 font-semibold">
                        <div onClick={() => handleFieldClick('risk')} onBlur={handleFieldBlur}>
                            {editingField === 'risk' ? (
                                <input
                                    type="text"
                                    className="w-full text-yellow-500"
                                    value={risk}
                                    onChange={(e) => handleInputChange(e, 'risk')}
                                    onKeyDown={(e) => handleKeyDown(e, 'risk')}
                                    autoFocus
                                />
                            ) : (
                                <p className="text-yellow-500">{risk}</p>
                            )}
                        </div>
                        <div onClick={() => handleFieldClick('tobaccoUse')} onBlur={handleFieldBlur}>
                            {editingField === 'tobaccoUse' ? (
                                <input
                                    type="text"
                                    className="w-full"
                                    value={tobaccoUse}
                                    onChange={(e) => handleInputChange(e, 'tobaccoUse')}
                                    onKeyDown={(e) => handleKeyDown(e, 'tobaccoUse')}
                                    autoFocus
                                />
                            ) : (
                                <p>{tobaccoUse}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex w-full  flex-col gap-1  text-[#63778F] font-semibold">
                        <p className='text-responsive-base'>DM2</p>
                        <p className='text-responsive-base'>Statins</p>
                    </div>
                    <div className="flex w-full  flex-col gap-1  font-semibold">
                        <div onClick={() => handleFieldClick('dm2')} onBlur={handleFieldBlur}>
                            {editingField === 'dm2' ? (
                                <input
                                    type="text"
                                    className="w-full"
                                    value={dm2}
                                    onChange={(e) => handleInputChange(e, 'dm2')}
                                    onKeyDown={(e) => handleKeyDown(e, 'dm2')}
                                    autoFocus
                                />
                            ) : (
                                <p className='text-responsive-base'>{dm2}</p>
                            )}
                        </div>
                        <div onClick={() => handleFieldClick('statins')} onBlur={handleFieldBlur}>
                            {editingField === 'statins' ? (
                                <input
                                    type="text"
                                    className="w-full"
                                    value={statins}
                                    onChange={(e) => handleInputChange(e, 'statins')}
                                    onKeyDown={(e) => handleKeyDown(e, 'statins')}
                                    autoFocus
                                />
                            ) : (
                                <p className='text-responsive-base'>{statins}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom mt-8 flex items-start">
                <p className=" text-[#001D94] font-bold text-responsive-xl">Labs</p>
                <div className="ml-32">
                    <p className="font-bold text-responsive-lg">A1c</p>
                    <div className="pl-4 mt-4">
                        <div className="flex flex-wrap gap-3 font-semibold mb-2 max-w-[400px]   text-[#63778F] ">
                            <p className='text-responsive-base'>QTR1</p>
                            <div onClick={() => handleFieldClick('quarter1')} onBlur={handleFieldBlur}>
                                {editingField === 'quarter1' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={quarter1}
                                        onChange={(e) => handleInputChange(e, 'quarter1')}
                                        onKeyDown={(e) => handleKeyDown(e, 'quarter1')}
                                        autoFocus
                                    />
                                ) : (
                                    <p className='text-responsive-base'>{quarter1}</p>
                                )}
                            </div>
                            <p className='text-responsive-base'>QTR2</p>
                            <div onClick={() => handleFieldClick('quarter2')} onBlur={handleFieldBlur}>
                                {editingField === 'quarter2' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={quarter2}
                                        onChange={(e) => handleInputChange(e, 'quarter2')}
                                        onKeyDown={(e) => handleKeyDown(e, 'quarter2')}
                                        autoFocus
                                    />
                                ) : (
                                    <p className='text-responsive-base'>{quarter2}</p>
                                )}
                            </div>
                            <p className='text-responsive-base'>QTR3</p>
                            <div onClick={() => handleFieldClick('quarter3')} onBlur={handleFieldBlur}>
                                {editingField === 'quarter3' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={quarter3}
                                        onChange={(e) => handleInputChange(e, 'quarter3')}
                                        onKeyDown={(e) => handleKeyDown(e, 'quarter3')}
                                        autoFocus
                                    />
                                ) : (
                                    <p>{quarter3}</p>
                                )}
                            </div>
                            <p className='text-responsive-base'>QTR4</p>
                            <div onClick={() => handleFieldClick('quarter4')} onBlur={handleFieldBlur}>
                                {editingField === 'quarter4' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={quarter4}
                                        onChange={(e) => handleInputChange(e, 'quarter4')}
                                        onKeyDown={(e) => handleKeyDown(e, 'quarter4')}
                                        autoFocus
                                    />
                                ) : (
                                    <p>{quarter4}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 font-semibold  text-[#63778F] ">
                            <p className='text-responsive-base'>Date</p>
                            <p className='text-responsive-base'>{quarter1}</p>
                            <p className='text-responsive-base'>Date</p>
                            <p className='text-responsive-base'>{quarter2}</p>
                            <p className='text-responsive-base'>Date</p>
                            <p className='text-responsive-base'>{quarter3}</p>
                            <p className='text-responsive-base'>Date</p>
                            <p className='text-responsive-base'>{quarter4}</p>
                        </div>
                    </div>
                    <p className="font-bold text-responsive-lg mt-6">KED</p>
                    <div className="pl-4  mt-2">
                        <div className="flex gap-8 font-semibold mb-2  text-[#63778F] ">
                            <p>CMP (eGRF) Date</p>
                            <div onClick={() => handleFieldClick('egrfDate')} onBlur={handleFieldBlur}>
                                {editingField === 'egrfDate' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={egrfDate}
                                        onChange={(e) => handleInputChange(e, 'egrfDate')}
                                        onKeyDown={(e) => handleKeyDown(e, 'egrfDate')}
                                        autoFocus
                                    />
                                ) : (
                                    <p>{egrfDate}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-2 font-semibold  text-[#63778F] ">
                            <p className="">Albumin/Creatine (uACR) Date</p>
                            <div onClick={() => handleFieldClick('uacrDate')} onBlur={handleFieldBlur}>
                                {editingField === 'uacrDate' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={uacrDate}
                                        onChange={(e) => handleInputChange(e, 'uacrDate')}
                                        onKeyDown={(e) => handleKeyDown(e, 'uacrDate')}
                                        autoFocus
                                    />
                                ) : (
                                    <p>{uacrDate}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}