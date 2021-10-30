import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';
import { NavigationContainer, mode } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Font } from 'expo';
import { AsyncStorage } from 'react-native';

const background = {
  uri:
    'https://i.pinimg.com/originals/6c/dd/a7/6cdda74aef801e92bac9270506312ca4.jpg',
};

const SaveData = async (email, password) => {
  console.log(email)
  console.log(password)
  console.log('Saving credentials');
  await AsyncStorage.setItem(
    '@store1:UserCredentials',
    JSON.stringify({ userEmail: email, userPassword: password })
  );
  console.log('Credentials saved!');
};

const LoadData = async () => {
  console.log('Loading data');

  var item = await AsyncStorage.getItem('@store1:UserCredentials');
  console.log(JSON.parse(item).userEmail);

  var data = JSON.parse(item);
  console.log(data);
  console.log(data.userEmail);
  console.log(data.userPassword);
  console.log('Data Loaded!');
};

// const TestScreen = ({navigation}) => {
//   return(
//     <View>
//       <Button title='save' onPress={SaveData}></Button>
//       <Button title='load' onPress={LoadData}></Button>
//     </View>
//   );
// }

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Create an account</Text>

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="white"
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="white"
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="white"
          autoCapitalize='none'
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#d4af37',
            alignItems: 'center',
            paddingVertical: 8,
            paddingHorizontal: 32,
            justifyContent: 'center',
            marginTop: 50,
          }}
          onPress={() => {
            if (password == confirmPassword) {
              const storing = SaveData(email, password)
              if (storing) {
                navigation.navigate('Login');
              }
            } else {
              alert('Passwords do not match.');
            }
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>

        <View
          style={{
            margin: 20,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            width: 200,
          }}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#d4af37', textAlign: 'center' }}>
            Already have an account? Login!
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="white"
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry={true}
          value={password}
          placeholder="Password"
          placeholderTextColor="white"
          autoCapitalize='none'
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#d4af37',
            alignItems: 'center',
            paddingVertical: 8,
            paddingHorizontal: 32,
            justifyContent: 'center',
            marginTop: 50,
          }}
          onPress={() => navigation.navigate('Home Screen')}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>

        <View
          style={{
            margin: 20,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            width: 200,
          }}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
          <Text style={{ color: '#d4af37', textAlign: 'center' }}>
            Don't have an account? Sign Up!
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Summoner's Rift</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Products List')}>
          <Text style={{ color: 'white' }}>Manage Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Employees List')}>
          <Text style={{ color: 'white' }}>Manage Employees</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Orders List')}>
          <Text style={{ color: 'white' }}>Manage Orders</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const ProductsLists = ({ navigation }) => {
  const productArray = [
    {
      id: 1,
      item: 'Bloodthirster',
      cost: '$3400',
      description: '',
      image:
        'https://static.wikia.nocookie.net/leagueoflegends/images/b/b9/Bloodthirster_item_HD.png',
    },
    {
      id: 2,
      item: "Liandry's Anguish",
      cost: '$3400',
      description: '',
      image:
        'https://static.wikia.nocookie.net/leagueoflegends/images/8/85/Liandry%27s_Anguish_item_HD.png',
    },
    {
      id: 3,
      item: "Guinsoo's Rageblade",
      cost: '$2600',
      description: '',
      image:
        'https://static.wikia.nocookie.net/leagueoflegends/images/6/64/Guinsoo%27s_Rageblade_item_HD.png',
    },
    {
      id: 4,
      item: "Archangel's Staff",
      cost: '$3000',
      description: '',
      image:
        'https://static.wikia.nocookie.net/leagueoflegends/images/c/c9/Archangel%27s_Staff_item_HD.png',
    },
    {
      id: 5,
      item: 'Morellonomicon',
      cost: '$2500',
      image:
        'https://static.wikia.nocookie.net/leagueoflegends/images/a/a1/Morellonomicon_item_HD.png',
    },
    {
      id: 6,
      item: 'Guardian Angel',
      cost: '$2800',
      description: '',
      image:
        'https://static.wikia.nocookie.net/leagueoflegends/images/c/c4/Guardian_Angel_item_HD.png',
    },
    {
      id: 7,
      item: "Warmog's Armor",
      cost: '$3000',
      description: '',
      image:
        'https://static.wikia.nocookie.net/leagueoflegends/images/6/6e/Warmog%27s_Armor_item_HD.png',
    },
    {
      id: 8,
      item: "Rabadon's Deathcap",
      cost: '$3600',
      description: '',
      image:
        'https://static.wikia.nocookie.net/leagueoflegends/images/e/e4/Rabadon%27s_Deathcap_item_HD.png',
    },
    {
      id: 9,
      item: "Runaan's Hurricane",
      cost: '$2600',
      description: '',
      image:
        'https://static.wikia.nocookie.net/leagueoflegends/images/f/ff/Runaan%27s_Hurricane_item_HD.png',
    },
    {
      id: 10,
      item: 'Thornmail',
      cost: '$2700',
      description: '',
      image:
        'https://static.wikia.nocookie.net/leagueoflegends/images/c/ca/Thornmail_item_HD.png',
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Products</Text>
        <View>
          {productArray.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{ borderBottomWidth: 1, borderBottomColor: '#d4af37' }}
                onPress={() => {
                  navigation.navigate('Product Details', { item });
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 5,
                    color: 'white',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}>
                  {item.item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ImageBackground>
    </View>
  );
};

const ProductDetails = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Product Details</Text>
        <View>
          <View
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              borderColor: '#d4af37',
              borderWidth: 2,
              marginBottom: 20,
              padding: 10,
            }}>
            <Text style={{ fontSize: 15, paddingBottom: 10, color: 'white' }}>
              Item: {item.item}
            </Text>
            <Text style={{ fontSize: 15, paddingBottom: 10, color: 'white' }}>
              Cost: {item.cost}
            </Text>
            <Text style={{ fontSize: 15, paddingBottom: 10, color: 'white' }}>
              Description: {item.description}
            </Text>
          </View>
          <Image
            style={{
              height: 300,
              width: 300,
              borderWidth: 5,
              borderColor: '#d4af37',
            }}
            source={{ uri: item.image }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const EmployeesList = ({ navigation }) => {
  const employeeArray = [
    {
      id: 1,
      name: 'Perkz',
      position: 'Midlane',
      image:
        'https://img.redbull.com/images/c_crop,x_0,y_0,h_4264,w_4975/c_fill,w_650,h_540/q_auto,f_auto/redbullcom/2019/11/01/c1f92872-3ff4-43ba-9762-bf461a0c58a5/wjperkz',
    },
    {
      id: 2,
      name: 'Caps',
      position: 'Midlane',
      image:
        'https://img.redbull.com/images/c_crop,w_4852,h_3235,x_0,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2019/11/01/235df54d-e438-4d5d-ab4e-cde90efaca5a/g2-esports-caps',
    },
    {
      id: 3,
      name: 'Rekkles',
      position: 'Botlane',
      image:
        'https://esports.as.com/2021/01/28/G2_REKKLES.png?hash=f5130a9ad5a77af38f5c3f546a3e2c8038c305ff',
    },
    {
      id: 4,
      name: 'Jankos',
      position: 'Jungle',
      image:
        'https://i.pinimg.com/originals/e4/f0/29/e4f029f2b1a98cd80de31d8697e5cc0a.png',
    },
    {
      id: 5,
      name: 'Mikyx',
      position: 'Support',
      image:
        'https://img.redbull.com/images/c_crop,w_4936,h_3291,x_0,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2019/11/01/f4b59d7e-8204-4e2b-991b-8467e1c44b9a/g2-esports-mikyx',
    },
    {
      id: 6,
      name: 'Wunder',
      position: 'Toplane',
      image:
        'https://media-s3-us-east-1.ceros.com/redbull/images/2020/09/16/806c053a34e90f7eaa86640200ceac7c/sidebar-wunder-front.png',
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Employees List</Text>
        <View>
          {employeeArray.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{ borderBottomWidth: 1, borderBottomColor: '#d4af37' }}
                onPress={() => {
                  navigation.navigate('Employee Details', { item });
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 5,
                    color: 'white',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}>
                  {item.id}. {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ImageBackground>
    </View>
  );
};

const EmployeeDetails = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Employee Details</Text>
        <View>
          <Text style={{ fontSize: 15, paddingBottom: 10, color: 'white' }}>
            Name: {item.name}
          </Text>
          <Text style={{ fontSize: 15, paddingBottom: 10, color: 'white' }}>
            Position: {item.position}
          </Text>
          <Image
            style={{
              height: 300,
              width: 300,
              borderWidth: 5,
              borderColor: '#d4af37',
            }}
            source={{ uri: item.image }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const OrdersList = ({ navigation }) => {
  const ordersArray = [
    {
      id: 1,
      product: 'Bloodthirster',
      price: '3400',
      customer: {
        name: 'Darius',
        contact: '0900-78601',
        address: 'Noxus',
      },
      orderDate: '29/3/2021',
      shippingStatus: 'processing',
    },
    {
      id: 2,
      product: "Warmog's Armor",
      price: '3000',
      customer: {
        name: 'Garen',
        contact: '0900-78601',
        address: 'Demacia',
      },
      orderDate: '29/3/2021',
      shippingStatus: 'delivered',
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Orders List</Text>
        <View>
          {ordersArray.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{ borderBottomWidth: 1, borderBottomColor: '#d4af37' }}
                onPress={() => {
                  navigation.navigate('Order Details', { item });
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 5,
                    color: 'white',
                    justifyContent: 'center',
                  }}>
                  Order# {item.id}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 5,
                    color: 'white',
                    justifyContent: 'center',
                  }}>
                  Product: {item.product}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 5,
                    color: 'white',
                    justifyContent: 'center',
                  }}>
                  Price: {item.price}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ImageBackground>
    </View>
  );
};

const OrderDetails = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Order Details</Text>
        <View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              paddingBottom: 10,
              color: 'white',
              fontWeight: 'bold',
              marginLeft: -50,
            }}>
            Order# {item.id}
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingBottom: 10,
              color: 'white',
              fontWeight: 'bold',
              marginLeft: -50,
            }}>
            Product: {item.product}
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingBottom: 10,
              color: 'white',
              fontWeight: 'bold',
              marginLeft: -50,
            }}>
            Price: {item.price}
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 17,
              marginBottom: 10,
              fontWeight: 'bold',
              color: '#d4af37',
              fontFamily: 'Georgia',
              justifyContent: 'center',
              marginLeft: -50,
            }}>
            Customer Details:
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingBottom: 10,
              color: 'white',
              fontWeight: 'bold',
              marginLeft: -50,
            }}>
            Name {item.customer.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingBottom: 10,
              color: 'white',
              fontWeight: 'bold',
              marginLeft: -50,
            }}>
            Contact: {item.customer.contact}
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingBottom: 10,
              color: 'white',
              fontWeight: 'bold',
              marginLeft: -50,
            }}>
            Address: {item.customer.address}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        {/*<Stack.Screen name="TestScreen" component={TestScreen} />*/}

        <Stack.Screen name="Sign Up" component={SignUp} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Products List" component={ProductsLists} />
        <Stack.Screen name="Product Details" component={ProductDetails} />
        <Stack.Screen name="Employees List" component={EmployeesList} />
        <Stack.Screen name="Employee Details" component={EmployeeDetails} />
        <Stack.Screen name="Orders List" component={OrdersList} />
        <Stack.Screen name="Order Details" component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: 10,
    width: 200,
    margin: 50,
    borderColor: '#d4af37',
    borderWidth: 2,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#d4af37',
    justifyContent: 'center',
    textAlign: 'center',
    textShadowColor: 'indigo',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  input: {
    height: 40,
    marginTop: 25,
    padding: 10,
    borderColor: '#d4af37',
    borderWidth: 2,
    width: 270,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    placeholderTextColor: 'white',
    color: 'white',
  },
};

export default App;
