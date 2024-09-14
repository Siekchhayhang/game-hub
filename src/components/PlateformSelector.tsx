import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlateforms from '../hooks/usePlateforms'

interface Props {
  onSelectPlateform: (platform: Platform) => void;
  selectedPlateform: Platform | null;
}

const PlateformSelector = ({onSelectPlateform, selectedPlateform}: Props) => {
  const {data, error}=usePlateforms();
  if(error) return null;
  // if(isLoading===true) return <Spinner />
    return (
<Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    {selectedPlateform?.name || 'Platforms'}
  </MenuButton>
  <MenuList>
          {data.map(plateform => <MenuItem onclick={() => onSelectPlateform(plateform)} key={plateform.id}>{plateform.name}</MenuItem>)}
  </MenuList>
</Menu>
    )
}

export default PlateformSelector