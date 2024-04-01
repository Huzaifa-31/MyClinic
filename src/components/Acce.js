import { useState } from 'react';

export default function Acce({ acce, foot, eye }) {
    const [editing, setEditing] = useState(false);
    const [editedValue, setEditedValue] = useState('');

    const handleInputChange = (e) => {
        setEditedValue(e.target.value);
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSave = () => {
        setEditing(false);
        // Handle saving the edited value to state or wherever appropriate
    };

    const handleCancel = () => {
        setEditing(false);
        // Handle canceling the edit, maybe revert back the edited value
    };

    return (
        <div className="mt-4 mb-5 flex pl-4 font-semibold">
            <div className="left w-1/2">
                <p className="title text-xl mb-3 font-bold text-responsive-lg ">ACCE</p>
                <div className="flex flex-col gap-2">
                    <div className="flex  indent-3 ">
                        <p className="text-[#63778F] w-20  text-responsive-base">Status</p>
                        {editing ? (
                            <input
                                type="text"
                                className='w-full'
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={handleSave}
                                autoFocus
                            />
                        ) : (
                            <p className='text-responsive-base' onClick={handleEditClick}>{acce.status || 'Not Applicable'}</p>
                        )}
                    </div>
                    <div className="flex indent-3">
                        <p className="text-[#63778F] w-20 ">Date</p>
                        {editing ? (
                            <input
                                type="text"
                                className='w-full'
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={handleSave}
                            />
                        ) : (
                            <p onClick={handleEditClick}>{acce.date || '/'}</p>
                        )}
                    </div>
                    <div className="flex indent-3">
                        <p className="text-[#63778F] w-20">CBP</p>
                        <div className="flex flex-col">
                            <p className='text-responsive-base'>Systolic</p>
                            <p className='text-responsive-base'>Diastolic</p>
                        </div>
                        <div className="flex flex-col indent-3">
                            <p className="ml-5">{editing ? (
                                <input
                                    type="text"
                                    className='w-full'
                                    value={editedValue}
                                    onChange={handleInputChange}
                                    onBlur={handleSave}
                                />
                            ) : (
                                <p onClick={handleEditClick}>{acce.cbp.systolic || 0}</p>
                            )}</p>
                            <p className="ml-5">{editing ? (
                                <input
                                    type="text"
                                    className='w-full'
                                    value={editedValue}
                                    onChange={handleInputChange}
                                    onBlur={handleSave}
                                />
                            ) : (
                                <p onClick={handleEditClick}>{acce.cbp.diastolic || 0}</p>
                            )}</p>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="text-[#63778F] w-20 ">Fall Risk</p>
                        {editing ? (
                            <input
                                type="text"
                                className='w-full'
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={handleSave}
                            />
                        ) : (
                            <p onClick={handleEditClick}>{acce.fall_risk || "nnn"}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="right w-1/2 pl-4">
                <p className="title text-xl mb-3 font-bold">EYE</p>
                <div className="flex flex-col gap-2">
                    <div className="flex ">
                        <p className="text-[#63778F] w-20 ">Status</p>
                        {editing ? (
                            <input
                                type="text"
                                className='w-full'
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={handleSave}
                                autoFocus
                            />
                        ) : (
                            <p onClick={handleEditClick}>{eye.status || 'Not Applicable'}</p>
                        )}
                    </div>
                    <div className="flex">
                        <p className="text-[#63778F] w-20 ">Date</p>
                        {editing ? (
                            <input
                                type="text"
                                className='w-full'
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={handleSave}
                            />
                        ) : (
                            <p onClick={handleEditClick}>{eye.date || '/'}</p>
                        )}
                    </div>
                    <div className="flex gap-4 mt-12">
                        <p className="text-[#63778F] w-20 ">Attestation</p>
                        {editing ? (
                            <input
                                type="text"
                                className='w-full'
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={handleSave}
                            />
                        ) : (
                            <p className='text-responsive-base' onClick={handleEditClick}>{eye.attestation || 'Not Needed'}</p>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <p className="text-[#63778F] ">HOSP/ER FU</p>
                        {editing ? (
                            <input
                                type="text"
                                className='w-full'
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={handleSave}
                            />
                        ) : (
                            <p className='text-responsive-base' onClick={handleEditClick}>{eye.hosp || 'Not Needed'}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
