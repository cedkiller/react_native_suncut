import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular,
  Poppins_400Regular,
} from '@expo-google-fonts/dev';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Contact">
        <Drawer.Screen name="SunCut" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./assets/main.jpg')} style={styles.img} />
      </View>

      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 15,
        }}>
        Best Sunset Shot!
      </Text>

      <Text
        style={{
          fontSize: 13,
          paddingLeft: 15,
          paddingRight: 15,
          marginTop: 15,
        }}>
        I’m a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. I’m a great place for you to tell a story and
        let your users know a little more about you.
      </Text>

      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 15,
        }}>
        Shots of the best photographer
      </Text>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./assets/about.jpg')} style={styles.img2} />
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 15,
          marginLeft: 15,
        }}>
        Stacey Rozells
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginLeft: 15,
          marginTop: 15,
          paddingRight: 15,
        }}>
        I’m a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. I’m a great place for you to tell a story and
        let your users know a little more about you.
      </Text>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./assets/about3.jpg')} style={styles.img2} />
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 15,
          marginLeft: 15,
        }}>
        Ali Karimiboroujeni
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginLeft: 15,
          marginTop: 15,
          marginBottom: 15,
          paddingRight: 15,
        }}>
        I’m a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. I’m a great place for you to tell a story and
        let your users know a little more about you.
      </Text>
    </ScrollView>
  );
}

function About({ navigation }) {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 15,
        }}>
        About Us
      </Text>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./assets/icon.png')} style={styles.img3} />
      </View>

      <Text
        style={{
          fontSize: 13,
          marginTop: 15,
          marginLeft: 15,
          paddingRight: 15,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        auctor velit enim, et facilisis magna rutrum euismod. Cras ullamcorper
        consequat lacinia. Phasellus pulvinar nisi ac tellus porttitor, quis
        finibus dui finibus. Fusce consectetur suscipit ullamcorper. Praesent
        mattis odio in laoreet ultrices. Nunc ut magna faucibus, sodales risus
        ut, elementum ante. Nam at gravida nibh. Donec elit lacus, vestibulum
        sit amet lorem vitae, dignissim posuere massa. Vestibulum quis vehicula
        mi. Donec semper dui vitae nulla pellentesque, a malesuada dui
        tincidunt. Mauris porta, nulla ac placerat tempus, eros nisl convallis
        nibh, in varius sem est sed metus. Maecenas molestie ullamcorper
        facilisis. Ut blandit viverra diam, ut suscipit felis. Sed et pretium
        sapien. Nam feugiat nunc euismod nulla mattis tempor. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginTop: 15,
          marginLeft: 15,
          paddingRight: 15,
        }}>
        Donec lacinia nisi risus, sed mattis mauris placerat in. Cras placerat
        lacus eu consequat interdum. Nam porttitor accumsan mi, sit amet
        volutpat ante fermentum ut. In quis fringilla arcu. Morbi nec porttitor
        mauris. Quisque sit amet nibh augue. Nulla vestibulum elementum erat nec
        congue. Aliquam blandit commodo malesuada. Pellentesque id orci sem.
        Pellentesque lacinia rutrum aliquam. Nunc neque felis, tristique a
        porttitor at, finibus sagittis dolor. Donec velit ante, dictum placerat
        aliquet ac, commodo et augue.
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginTop: 15,
          marginLeft: 15,
          paddingRight: 15,
        }}>
        Quisque vel convallis lacus. Donec in lectus et eros lacinia efficitur.
        Nam aliquet arcu efficitur sodales euismod. Integer dictum diam quis
        massa rutrum, et hendrerit sem volutpat. Nulla ornare auctor nisl. Proin
        lectus orci, euismod non vestibulum nec, porta sit amet lorem. Duis
        ipsum arcu, vestibulum at nunc sit amet, semper fermentum ipsum.
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginTop: 15,
          marginLeft: 15,
          paddingRight: 15,
        }}>
        Maecenas sed egestas urna. Pellentesque quis enim nec nibh ultrices
        tincidunt sed ac tortor. Nullam id lacus molestie, consectetur dui
        vulputate, pharetra sapien. Vestibulum ac quam magna. Nullam dapibus non
        magna et feugiat. Cras lacus massa, sollicitudin nec tristique non,
        ultricies eget nulla. Donec in bibendum magna, sit amet vestibulum
        sapien. Donec condimentum arcu non lorem imperdiet pretium. Vivamus
        maximus ultrices libero, non commodo enim scelerisque a. Fusce rutrum
        egestas purus at fringilla. Phasellus consectetur, tortor et congue
        dapibus, risus ante mattis nibh, et blandit purus lorem quis mi.
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginTop: 15,
          marginLeft: 15,
          paddingRight: 15,
        }}>
        Duis vulputate venenatis mauris sed tincidunt. Donec egestas vitae nulla
        non facilisis. Integer varius odio vel maximus bibendum. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. In malesuada eros ac accumsan pellentesque. Cras volutpat
        consequat ornare. Cras sed pellentesque odio, nec consequat nisi.
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginTop: 15,
          marginLeft: 15,
          paddingRight: 15,
        }}>
        In ac massa vestibulum, feugiat sem at, tempor mi. Pellentesque
        consequat ullamcorper magna, sit amet convallis leo. Cras sed ipsum
        scelerisque, laoreet lacus id, tristique tellus. Phasellus risus urna,
        accumsan eu justo quis, ultrices pretium libero. Duis vel finibus odio.
        Nulla sed pellentesque lectus, a pretium justo. Duis et dui at mauris
        volutpat sagittis. Praesent non felis orci. Nullam malesuada hendrerit
        leo a laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; In non pharetra nunc. Cras eget enim
        ligula. Nam volutpat, nisi in pretium congue, nisl lacus vestibulum
        lorem, a vehicula odio quam eu nunc. Praesent ante sem, aliquam lobortis
        facilisis dapibus, varius id eros.
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginTop: 15,
          marginLeft: 15,
          paddingRight: 15,
        }}>
        Quisque dapibus sem quis est iaculis, vitae ornare nibh mollis. Proin
        porttitor nisl condimentum sem interdum, vel consequat ipsum vestibulum.
        Donec nec mollis nisi, ac consectetur tortor. Nunc ut libero risus.
        Proin nec urna maximus, finibus nulla sed, pellentesque orci. Fusce
        rutrum felis ac arcu elementum, ut ornare turpis auctor. Vestibulum
        pellentesque dapibus ipsum, non sodales nisl laoreet id.
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginTop: 15,
          marginLeft: 15,
          paddingRight: 15,
        }}>
        Cras feugiat auctor dui. Ut pharetra rhoncus ullamcorper. Proin non arcu
        pretium sem dictum vehicula nec eu metus. In pulvinar, nulla a bibendum
        molestie, enim dolor commodo purus, a rhoncus nulla metus non libero.
        Quisque ex elit, rhoncus in mattis eu, molestie non diam. Quisque tempus
        placerat lacus sit amet hendrerit. Mauris in porta enim. Integer quis
        vestibulum sem. Morbi consectetur erat ut ex porttitor dictum.
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginTop: 15,
          marginLeft: 15,
          paddingRight: 15,
        }}>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu
        volutpat orci. Aenean nec pellentesque sapien, eu tempus nisi. Cras
        tempor placerat nunc, non ullamcorper felis mattis quis. Duis pharetra
        nisi in felis feugiat, et semper justo accumsan. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Donec a orci magna.
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginTop: 15,
          marginLeft: 15,
          paddingRight: 15,
        }}>
        Sed vel ex erat. Maecenas luctus turpis non pulvinar hendrerit. Aliquam
        erat volutpat. Morbi iaculis sapien urna, vitae congue arcu ornare ac.
        Fusce ornare gravida quam vitae mattis. Vestibulum nisi magna,
        condimentum quis commodo ut, ornare nec eros. Proin aliquet tempor
        turpis vel auctor. Nam mattis leo eget orci consequat, sed molestie
        metus posuere.
      </Text>
    </ScrollView>
  );
}

function Contact({ navigation }) {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 15,
        }}>
        Contact Us
      </Text>

      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          marginLeft: 15,
          marginTop: 15,
        }}>
        Name
      </Text>
      <TextInput
        value={Name}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />

      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          marginLeft: 15,
          marginTop: 15,
        }}>
        Email
      </Text>
      <TextInput
        value={Email}
        placeholder="Enter your email"
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          marginLeft: 15,
          marginTop: 15,
        }}>
        Contact
      </Text>
      <TextInput
        value={Message}
        placeholder="Enter a message"
        onChangeText={(text) => setMessage(text)}
        style={styles.input}
      />
      
      <Button
      title = "Enter"
      onPress = {() => alert("Thank you for reaching to us!")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 330,
    marginTop: 15,
    borderRadius: 10,
  },

  img2: {
    height: 400,
    width: 330,
    borderRadius: 10,
    marginTop: 15,
  },

  img3: {
    height: 100,
    width: 100,
  },

  input: {
    marginLeft: 15,
    height: 30,
    width: 300,
  },
});
