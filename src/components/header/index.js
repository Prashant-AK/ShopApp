import React from 'react';
import {
  Box,
  HStack,
  // Icon,
  IconButton,
  StatusBar,
  Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Header = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="#6200ee"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        // maxW="350"
      >
        <HStack alignItems="center">
          <IconButton
            icon={<Icon name="arrow-left" size={30} color="white" />}
          />
          {/* <Icon
            //  size="sm"
            type="home"
            size={20}
            color="white"
          /> */}

          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          {/* <IconButton
            icon={
              <Icon
                // as={MaterialIcons}
                name="favorite"
                // size="sm"
                // color="white"
              />
            }
          /> */}
          {/* <IconButton
            icon={
              <Icon
                // as={MaterialIcons}
                name="search"
                // size="sm"
                // color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon
              // as={MaterialIcons}
              // name="more-vert"
              // size="sm"
              // color="white"
              />
            }
          /> */}
        </HStack>
      </HStack>
    </>
  );
};
