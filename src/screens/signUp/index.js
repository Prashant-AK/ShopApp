import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  VStack,
  Link,
  useToast,
  HStack,
  Text,
} from 'native-base';

export const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const handleSubmit = () => {
    console.log('Email and password is', email, password);
    toast.show({
      title: 'Account verified',
      // variant: 'outline',
      // description: 'Thanks for signing up with us.',
      // isClosable: true,
      // status: 'success',
      type: 'warning',
    });
  };
  return (
    <Box style={styles.mainContainer}>
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight="semibold">
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: 'warmGray.200',
          }}
          fontWeight="medium"
          size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input onChangeText={text => setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input onChangeText={text => setPassword(text)} type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              I'm already an user.
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
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
