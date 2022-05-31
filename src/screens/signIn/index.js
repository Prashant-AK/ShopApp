import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from 'native-base';

export const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = navigation => {
    console.log('Email and password is', email, password);
    navigation.navigate('Home');
  };

  return (
    <Box style={styles.mainContainer}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input onChangeText={text => setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input onChangeText={text => setPassword(text)} type="password" />
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => handleSubmit(navigation)}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              I'm a new user.{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '90%',
  },
  secondaryContainerChild: {},
  boxHeading: {
    // textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
  },
});
