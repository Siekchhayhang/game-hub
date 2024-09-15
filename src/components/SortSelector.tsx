import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by relevance
      </MenuButton>
      <MenuList>
        <MenuItem>alphabetical</MenuItem>

        <MenuItem>by rating</MenuItem>

        <MenuItem>by sales</MenuItem>

        <MenuItem>by recent</MenuItem>

        <MenuItem> by popularity</MenuItem>

        <MenuItem>by most played</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
