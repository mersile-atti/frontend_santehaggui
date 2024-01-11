import {Link } from 'react-router-dom';
import { SimpleGrid, Text } from "@chakra-ui/react";
import useProfiles from "../hooks/useProfiles";
import ProfileCard from "./ProfileCard";



const ProfileGrid = () => {
    const {emergencyProfiles, error} = useProfiles();

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid column={1} spacing={10} justifyItems='center'>
      {emergencyProfiles.map(emergencyProfile => (
        <Link key={emergencyProfile._id} to={`/profile/${emergencyProfile._id}`}>
        <ProfileCard key={emergencyProfile._id} profile={emergencyProfile} />
        </Link>
      ))}
    </SimpleGrid>
    </>
  );
};

export default ProfileGrid;
