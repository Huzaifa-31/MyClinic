import React, { useState } from 'react';

export default function Examination({ exam }) {
    const [status, setStatus] = useState(exam.status || 'Complete');
    const [date, setDate] = useState(exam.date || '/');
    const [systolic, setSystolic] = useState(exam.cbp.systolic || '88');
    const [diastolic, setDiastolic] = useState(exam.cbp.diastolic || '76');
    const [phqScore, setPhqScore] = useState(exam.phq.score || '2');
    const [phqLevel, setPhqLevel] = useState(exam.phq.level || 'Normal');
    const [phqDate, setPhqDate] = useState(exam.phq.date || '/');
    const [colStatus, setColStatus] = useState(exam.col.status || 'Refused');
    const [colDate, setColDate] = useState(exam.col.date || '/');
    const [bcsDate, setBcsDate] = useState(exam.bcs_date || '/');
    const [editingField, setEditingField] = useState(null);

    const handleFieldClick = (field) => {
        setEditingField(field);
    };

    const handleFieldBlur = () => {
        setEditingField(null);
    };

    const handleInputChange = (event, field) => {
        switch (field) {
            case 'status':
                setStatus(event.target.value);
                break;
            case 'date':
                setDate(event.target.value);
                break;
            case 'systolic':
                setSystolic(event.target.value);
                break;
            case 'diastolic':
                setDiastolic(event.target.value);
                break;
            case 'phqScore':
                setPhqScore(event.target.value);
                break;
            case 'phqLevel':
                setPhqLevel(event.target.value);
                break;
            case 'phqDate':
                setPhqDate(event.target.value);
                break;
            case 'colStatus':
                setColStatus(event.target.value);
                break;
            case 'colDate':
                setColDate(event.target.value);
                break;
            case 'bcsDate':
                setBcsDate(event.target.value);
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
        <div className="px-2 pt-6  font-semibold">
            <div className="top mb-6 flex gap-12">
                <p className="text-xl text-[#001D94] font-bold">Examination</p>

                <div className="AWE flex flex-col gap-4 w-full">
                    <p className="text-responsive-lg  font-bold">AWE</p>

                    <div className="status flex gap-12">
                        <p className="text-[#63778F] w-14 text-responsive-base"> Status </p>
                        <div onClick={() => handleFieldClick('status')} onBlur={handleFieldBlur}>
                            {editingField === 'status' ? (
                                <input
                                    type="text"
                                    className="w-full"
                                    value={status}
                                    onChange={(e) => handleInputChange(e, 'status')}
                                    onKeyDown={(e) => handleKeyDown(e, 'status')}
                                    autoFocus
                                />
                            ) : (
                                <p className='text-responsive-base'>{status}</p>
                            )}
                        </div>
                    </div>

                    <div className="status flex gap-12">
                        <p className="text-[#63778F] w-14 text-responsive-base indent-10"> Date </p>
                        <div onClick={() => handleFieldClick('date')} onBlur={handleFieldBlur}>
                            {editingField === 'date' ? (
                                <input
                                    type="text"
                                    className="w-full"
                                    value={date}
                                    onChange={(e) => handleInputChange(e, 'date')}
                                    onKeyDown={(e) => handleKeyDown(e, 'date')}
                                    autoFocus
                                />
                            ) : (
                                <p className='text-responsive-base'>{date}</p>
                            )}
                        </div>
                    </div>

                    <div className="status flex gap-12">
                        <p className="text-[#63778F] w-14 indent-10 text-responsive-base"> CBP </p>
                        <div className="flex flex-col">
                            <p className='text-responsive-base'>Systolic</p>
                            <p className='text-responsive-base'>Diastolic</p>
                        </div>
                        <div className="flex flex-col">
                            <div onClick={() => handleFieldClick('systolic')} onBlur={handleFieldBlur}>
                                {editingField === 'systolic' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={systolic}
                                        onChange={(e) => handleInputChange(e, 'systolic')}
                                        onKeyDown={(e) => handleKeyDown(e, 'systolic')}
                                        autoFocus
                                    />
                                ) : (
                                    <p className='text-responsive-base'>{systolic}</p>
                                )}
                            </div>
                            <div onClick={() => handleFieldClick('diastolic')} onBlur={handleFieldBlur}>
                                {editingField === 'diastolic' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={diastolic}
                                        onChange={(e) => handleInputChange(e, 'diastolic')}
                                        onKeyDown={(e) => handleKeyDown(e, 'diastolic')}
                                        autoFocus
                                    />
                                ) : (
                                    <p className='text-responsive-base'>{diastolic}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="status flex gap-12">
                        <p className="text-[#63778F] w-14 text-responsive-base"> PHQ2 </p>
                        <div className="flex flex-col">
                            <p className='text-responsive-base'>Score</p>
                            <p className='text-responsive-base'>Level</p>
                            <p className='text-responsive-base'>Date</p>
                        </div>
                        <div className="flex flex-col">
                            <div onClick={() => handleFieldClick('phqScore')} onBlur={handleFieldBlur}>
                                {editingField === 'phqScore' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={phqScore}
                                        onChange={(e) => handleInputChange(e, 'phqScore')}
                                        onKeyDown={(e) => handleKeyDown(e, 'phqScore')}
                                        autoFocus
                                    />
                                ) : (
                                    <p className='text-responsive-base'>{phqScore}</p>
                                )}
                            </div>
                            <div onClick={() => handleFieldClick('phqLevel')} onBlur={handleFieldBlur}>
                                {editingField === 'phqLevel' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={phqLevel}
                                        onChange={(e) => handleInputChange(e, 'phqLevel')}
                                        onKeyDown={(e) => handleKeyDown(e, 'phqLevel')}
                                        autoFocus
                                    />
                                ) : (
                                    <p className='text-responsive-base'>{phqLevel}</p>
                                )}
                            </div>
                            <div onClick={() => handleFieldClick('phqDate')} onBlur={handleFieldBlur}>
                                {editingField === 'phqDate' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={phqDate}
                                        onChange={(e) => handleInputChange(e, 'phqDate')}
                                        onKeyDown={(e) => handleKeyDown(e, 'phqDate')}
                                        autoFocus
                                    />
                                ) : (
                                    <p className='text-responsive-base'>{phqDate}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="status flex gap-12">
                        <p className="text-[#63778F] w-14 text-responsive-base"> Status </p>
                        <div className="flex flex-col">
                            <p className='text-responsive-base'>Status</p>
                            <p className='text-responsive-base'>Date</p>
                        </div>
                        <div className="flex flex-col">
                            <div onClick={() => handleFieldClick('colStatus')} onBlur={handleFieldBlur}>
                                {editingField === 'colStatus' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={colStatus}
                                        onChange={(e) => handleInputChange(e, 'colStatus')}
                                        onKeyDown={(e) => handleKeyDown(e, 'colStatus')}
                                        autoFocus
                                    />
                                ) : (
                                    <p className='text-responsive-base'>{colStatus}</p>
                                )}
                            </div>
                            <div onClick={() => handleFieldClick('colDate')} onBlur={handleFieldBlur}>
                                {editingField === 'colDate' ? (
                                    <input
                                        type="text"
                                        className="w-full"
                                        value={colDate}
                                        onChange={(e) => handleInputChange(e, 'colDate')}
                                        onKeyDown={(e) => handleKeyDown(e, 'colDate')}
                                        autoFocus
                                    />
                                ) : (
                                    <p className='text-responsive-base'>{colDate}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="status flex gap-12">
                        <p className="text-[#63778F] w-14 text-responsive-base"> BCS </p>
                        <p>Date</p>
                        <div onClick={() => handleFieldClick('bcsDate')} onBlur={handleFieldBlur}>
                            {editingField === 'bcsDate' ? (
                                <input
                                    type="text"
                                    className="w-full"
                                    value={bcsDate}
                                    onChange={(e) => handleInputChange(e, 'bcsDate')}
                                    onKeyDown={(e) => handleKeyDown(e, 'bcsDate')}
                                    autoFocus
                                />
                            ) : (
                                <p className='text-responsive-base'>{bcsDate}</p>
                            )}
                        </div>
                    </div>

                    <p className="bg-[#F12D2D] text-[#E1EEFF] font-bold text-center text-responsive-sm py-1 rounded-md w-[300px]"> MAMMOGRAM OVERDUE </p>
                </div>
            </div>

            <div className="bottom "> </div>
        </div>
    );
}