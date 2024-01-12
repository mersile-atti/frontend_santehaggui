import { useEffect, useState } from 'react';
import { EmergencyProfile } from '../hooks/useProfiles'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Stack, StackDivider, Text } from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiChat1, CiShare2 } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import axios from 'axios';

interface Props {
    profile: EmergencyProfile
}

const ProfileCard = ({ profile }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFullProfile = async () => {
      try {
        const response = await axios.get('/api/healthRecords/profile-url');
        console.log(response.data.emergencyProfiles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching full profile:', error);
        setLoading(false);
      }
    };

    fetchFullProfile();
  }, [profile._id, axios]);
  return (
    <Card maxW='md'>
        <Heading 
        as='h3'
        size='md'
        textTransform='uppercase'
        textAlign='center'
        padding='10px'
        borderBottom='1px solid #ccc'
        margin='0'
        >My Emergency Profile</Heading>
        <CardHeader
        borderBottom='1px solid #ccc'
        >
            <Flex whiteSpace='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Image 
            borderRadius='full'
            boxSize='100px'
            src={profile.photoUrl}
            alt='sante hhaggui' />
                <Box>
          <Heading size='sm' textTransform='uppercase'>{profile.name}</Heading>
          <Text as='b'>{profile.umi}</Text>
        </Box>
        
                </Flex>
                <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<BsThreeDotsVertical />}
      />
            </Flex>
        </CardHeader>
        <CardBody>
          {loading ? (
            <p>Loading...</p>
          ) :
        (<Stack divider={<StackDivider />} spacing='1'>
      <Box>
      <Heading size='sm' textTransform='uppercase'>
          Genre
        </Heading>
        <Text>
          {profile.gender}
        </Text>
        </Box>
        <Box>
        <Heading size='sm' textTransform='uppercase'>
          Blood Type
        </Heading>
        <Text>
          {profile.bloodType}
        </Text>
        </Box>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          Birthday
        </Heading>
        <Text>
          {profile.birthday}
        </Text>
      </Box>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          Allergies
        </Heading>
        <Text>
          {profile.allergies}
        </Text>
      </Box>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          Medications
        </Heading>
        <Text>
          {profile.medications}
        </Text>
      </Box>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          Treatments & Procedures
        </Heading>
        <Text>
          {profile.treatmentsAndProcedures}
        </Text>
      </Box>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          Address
        </Heading>
        <Text>
          {profile.address}
        </Text>
      </Box>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          Emergency Contact
        </Heading>
        <Text>
          {profile.emergencyContactName}, {profile.emergencyContactPhone}
        </Text>
        <Text>
          {profile.emergencyContactRelationship}, {profile.emergencyContactAddress}
        </Text>
      </Box>
      </Stack>)}
        </CardBody>
        <CardFooter
    justify='space-evenly'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<SlLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<CiChat1 />}>
      Comment
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<CiShare2 />}>
      Share
    </Button>
  </CardFooter>
    </Card>
  )
}

export default ProfileCard