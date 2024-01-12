import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface EmergencyProfile {
    _id: string,
    name: string,
    gender: string,
    photoUrl: string,
    umi: string,
    birthday: string,
    bloodType: string,
    allergies: string,
    medications: string,
    treatmentsAndProcedures: string,
    address: string,
    emergencyContactName: string,
    emergencyContactRelationship: string,
    emergencyContactPhone: string,
    emergencyContactAddress: string,
}

interface FetchHealthRecordsProfile {
  emergencyProfiles: EmergencyProfile[];
}

const useProfiles = () => {

    const [emergencyProfiles, setEmergencyProfiles] = useState<EmergencyProfile[]>([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
    const controller = new AbortController();
      apiClient.get<FetchHealthRecordsProfile>('/healthRecords/profile-url', {signal: controller.signal})
        .then(res => setEmergencyProfiles(res.data.emergencyProfiles)) // Access 'emergencyProfiles' instead of 'results'
        .catch(err => {
            if (err instanceof CanceledError) return;
            setError(err.message)});
        return () => controller.abort(); // Clean up the AbortController when the component unmounts
        
    }, []);
    return {emergencyProfiles, error}
}

export default useProfiles;