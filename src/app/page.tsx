"use client";
import { Button } from "@/components/button";
import { Menu, MenuProps } from "@/components/menu";
import { css } from "../../styled-system/css";
import { HStack } from "../../styled-system/jsx";

export default function Home(props: MenuProps) {
  return (
    <div>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼!
      </h1>
      <Button colorPalette="red" variant="solid">
        Hi
      </Button>
      <Menu.Root {...props}>
        <Menu.Trigger asChild>
          <Button variant="outline" size={props.size}>
            Open Menu
          </Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup id="group-1">
              <Menu.ItemGroupLabel htmlFor="group-1">
                My Account
              </Menu.ItemGroupLabel>
              <Menu.Separator />
              <Menu.Item id="profile">
                <HStack gap="6" justify="space-between" flex="1">
                  <HStack gap="2">Profile</HStack>
                  ⇧⌘P
                </HStack>
              </Menu.Item>
              <Menu.Item id="billing">
                <HStack gap="2">Billing</HStack>
              </Menu.Item>
              <Menu.Item id="settings">
                <HStack gap="6" justify="space-between" flex="1">
                  <HStack gap="2">Settings</HStack>
                  ⌘,
                </HStack>
              </Menu.Item>
              <Menu.Separator />
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  );
}
