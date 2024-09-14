import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlateforms from '../hooks/usePlateforms'


const PlateformSelector = () => {
  const {data, error}=usePlateforms();
  if(error) return null;
  // if(isLoading===true) return <Spinner />
    return (
<Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    Plateforms
  </MenuButton>
  <MenuList>
          {data.map(plateform => <MenuItem key={plateform.id}>{plateform.name}</MenuItem>)}
  </MenuList>
</Menu>
    )
}

export default PlateformSelector