import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const DrawerComponent = ({
  children,
  header,
  isOpen,
  onClose,
}: {
  children: any;
  isOpen: boolean;
  onClose(): void;
  header: JSX.Element;
}) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size={'lg'}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{header}</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
