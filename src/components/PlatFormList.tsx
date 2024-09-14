import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import { Platform } from '../hooks/useGames';
import { HStack, Icon} from '@chakra-ui/react';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform [];
}

const PlatFormList = ({platforms}: Props) => {
    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }
  return (
    <HStack paddingY={1}>
    {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"/>)}
    </HStack>
  )
}

export default PlatFormList