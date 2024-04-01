import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import data from "../patients.json"

const usePatientStore = create(
  persist(
    (set) => ({
      patients: data,
      updatePatient: (patientId, newData) => {
        set((state) => ({
          patients: state.patients.map((patient) =>
            patient.id === patientId ? { ...patient, ...newData } : patient
          ),
        }));
      },
    }),
    {
      name: 'patientData',
      getStorage: () => localStorage,
    }
  )
);

export default usePatientStore;
