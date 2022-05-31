import React from 'react';
import {Header} from '../../components';
import {
  View,
  Text,
  Container,
  Box,
  IconButton,
  HStack,
  Heading,
  VStack,
  Divider,
  Image,
  ScrollView,
  Button,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = [
  {
    id: '100',
    title: 'Mango',
    price: 45,
    weight: 1,
    unit: 'Kg',
    image:
      'https://feeds.abplive.com/onecms/images/uploaded-images/2021/07/12/a7056e8c342e9fe4f751ce7b4263a215_original.jpg?impolicy=abp_images&imwidth=720',
  },
  {
    id: '101',
    title: 'Banana',
    price: 20,
    weight: 12,
    unit: 'piece',
    image:
      'https://www.mashed.com/img/gallery/heres-what-happens-when-you-eat-a-banana-every-day/intro-1596497583.jpg',
  },
  {
    id: '102',
    title: 'Kiwi',
    price: 30,
    weight: 1,
    unit: 'piece',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kiwi-fruits-582a07b.jpg?quality=90&resize=661%2C600',
  },
  {
    id: '103',
    title: 'Papaya',
    price: 210,
    weight: 1,
    unit: 'Kg',
    image:
      'https://cdn-prod.medicalnewstoday.com/content/images/articles/275/275517/a-papaya-cut-in-half.jpg',
  },
  {
    id: '104',
    title: 'Guava',
    price: 60,
    weight: 1,
    unit: 'kg',
    image: 'https://www.santosfood.com/wp-content/uploads/2020/01/4-4.jpg',
  },
  {
    id: '105',
    title: 'Lichi',
    price: 200,
    weight: 1,
    unit: 'Kg',
    image:
      'https://static5.depositphotos.com/1006597/536/i/450/depositphotos_5362508-stock-photo-lychee.jpg',
  },
];

const CategoryItem = ({title, image}) => (
  <VStack alignItems={'center'} margin={2} space={1} borderRadius={10}>
    <View padding={2}>
      <Image
        source={{
          uri: `${image}`,
        }}
        alt="Alternate Text"
        size="sm"
        rounded="lg"
      />
    </View>

    <Text fontWeight={700} fontSize="sm">
      {title}
    </Text>
  </VStack>
);

const ProductItem = ({id, title, price, weight, unit, image}) => (
  <VStack
    alignItems={'center'}
    margin={2}
    space={1}
    padding={5}
    rounded={15}
    borderColor="emerald.300"
    borderWidth={1}>
    <Image
      source={{
        uri: `${image}`,
      }}
      alt="Alternate Text"
      size="xl"
      rounded="lg"
    />
    <Text fontWeight={700} fontSize="lg">
      {title}
    </Text>
    <Text fontSize="sm" fontWeight={700}>
      {weight} {unit}
    </Text>
    <Text fontSize="xl" fontWeight={700}>
      {price} <Icon name="rupee" />
    </Text>
    <Button bgColor="emerald.700" px={8}>
      <Text color="white" fontWeight={700} fontSize="lg">
        Add
      </Text>
    </Button>
  </VStack>
);

export const Home = () => {
  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          flex: 1,
          backgroundColor: 'white',
          padding: 10,
        }}>
        {/* 
        Header Section Start
         */}
        <Box>
          <HStack justifyContent="space-between">
            <VStack style={{margin: 6}}>
              <Heading>Welcome to</Heading>
              <Text fontSize="5xl" fontWeight={700} color="green.400">
                Veg Shop
              </Text>
            </VStack>
            <VStack>
              <IconButton
                icon={<Icon name="shopping-cart" size={30} color="black" />}
              />
            </VStack>
          </HStack>
        </Box>
        {/* 
        Header Section Start
         */}

        {/* 
        Category Section Start
         */}
        <Divider />
        <View>
          <Text px={2} fontSize="xl" fontWeight={700}>
            Categories
          </Text>
          <HStack flexWrap={'wrap'}>
            <CategoryItem
              title={'Mangoes'}
              image={
                'https://feeds.abplive.com/onecms/images/uploaded-images/2021/07/12/a7056e8c342e9fe4f751ce7b4263a215_original.jpg?impolicy=abp_images&imwidth=720'
              }
            />
            <CategoryItem
              title={'Fruits'}
              image={
                'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4'
              }
            />
            <CategoryItem
              title={'Vegetables'}
              image={
                'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6'
              }
            />
            <CategoryItem
              title={'Herbs'}
              image={
                'https://assets.bonappetit.com/photos/5cd4358198fe993a28aef969/16:9/w_2560%2Cc_limit/Basically-Non-Herbs-01.jpg'
              }
            />
            <CategoryItem
              title={'Dry Fruits'}
              image={
                'https://5.imimg.com/data5/SELLER/Default/2020/9/EK/SI/MI/111137174/dry-fruits-500x500.jpg'
              }
            />
            <CategoryItem
              title={'Kitchen Staples'}
              image={
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jars-of-ingredients-on-wooden-shelves-royalty-free-image-1592239648.jpg'
              }
            />
          </HStack>
        </View>
        <Divider />
        {/* 
        Category Section End
         */}

        {/* 
        Carousel Section End
         */}
        {/* <View></View> */}
        {/* 
        Carousel Section End
         */}

        {/* 
        Listing of items Start
         */}
        <View>
          <Heading margin={2}>
            {' '}
            <Text color="green.400" fontWeight={700} fontSize="2xl">
              Hurry Up!
            </Text>
          </Heading>
          <HStack flexWrap={'wrap'}>
            {ListItem.map(data => {
              const {id, title, price, weight, unit, image} = data;
              return (
                <ProductItem
                  key={id}
                  title={title}
                  price={price}
                  weight={weight}
                  unit={unit}
                  image={image}
                />
              );
            })}
          </HStack>
        </View>
        {/* 
        Listing of items End
         */}
      </View>
    </ScrollView>
  );
};
