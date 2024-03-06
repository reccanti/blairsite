import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu, Item, Menu } from "./DropdownMenu";
import CogIcon from "@/components/Icons/CogIcon";
import { Button } from "@/components/Button";
import { DropdownMenuToggleButton } from "./ToggleButton";
import MenuIcon from "@/components/Icons/MenuIcon";

const meta: Meta = {
  title: "Molecules/DropdownMenu",
  component: DropdownMenu,
};

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        <DropdownMenu
          toggleButton={
            <DropdownMenuToggleButton
              color="Inverted"
              icon={MenuIcon}
              label="List"
            />
          }
        >
          <Menu>
            <Item>
              <Button color="Magenta">First Element</Button>
            </Item>
            <Item>
              <Button color="Blue">Second Element</Button>
            </Item>
            <Item>
              <Button color="Green">Third Element</Button>
            </Item>
            <Item>
              <Button color="Red">Fourth Element</Button>
            </Item>
          </Menu>
        </DropdownMenu>
      </div>
    );
  },
};

export default meta;
