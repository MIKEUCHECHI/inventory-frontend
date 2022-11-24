import { IconButton } from '@chakra-ui/button';
import { LockIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Flex, List, ListItem, Text } from '@chakra-ui/layout';
import React from 'react';
import ActiveLink from '../components/ActiveLink';

export interface Props {}

const Layout = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Flex
        p={4}
        justifyContent="space-between"
        alignItems="center"
        shadow="md"
        zIndex="20"
      >
        <Image
          src="/svgs/logo.svg"
          alt="Logo"
          width="50"
          height="50"
          className="h-10"
        />
        <Text>Vaya Admin Panel </Text>
        <Flex>
          <IconButton
            variant="outline"
            size="sm"
            onClick={() => {}}
            icon={<LockIcon />}
            aria-label="logout"
          />
        </Flex>
      </Flex>

      <Flex flex={1}>
        <Flex flex={1} pb={4} className="flex-auto">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
