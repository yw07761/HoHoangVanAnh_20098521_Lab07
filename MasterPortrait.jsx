import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    ScrollView,
    Image,
    TouchableOpacity,
  } from 'react-native'
  import React, { useState } from 'react'
  
  const MasterPortrait = (props) => {
    // Lấy navigate và route từ props
    const { navigation, route } = props
    const { navigate, goBack } = navigation
  
    // Lấy kích thước toàn màn hình
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
  
    const [typeDonut, setTypeDonut] = useState([
      {
        id: 1,
        name: 'Donut',
        isSelected: true,
      },
      {
        id: 2,
        name: 'Pink Donut',
        isSelected: false,
      },
      {
        id: 3,
        name: 'Floating',
        isSelected: false,
      },
    ])
  
    const [data, setData] = useState([
      {
        id: 1,
        name: 'Tasty donut',
        price: '$10.00',
        image: require('./assets/donut1.jpg'),
      },
      {
        id: 2,
        name: 'Pink donut',
        price: '$20.00',
        image: require('./assets/donut2.jpg'),
      },
      {
        id: 3,
        name: 'Floating donut',
        price: '$30.00',
        image: require('./assets/donut3.jpg'),
      },
      {
        id: 4,
        name: 'Tasty Donut',
        price: '$10.00',
        image: require('./assets/donut4.jpg'),
      },
      {
        id: 5,
        name: 'Pink Donut',
        price: '$20.00',
        image: require('./assets/donut5.png'),
      },
    ])
  
    const [searchText, setSearchText] = useState('')
  
    return (
      <View
        style={{
          height: screenHeight,
          width: screenWidth,
          backgroundColor: '#fff',
        }}
      >
        <Text
          style={{
            marginTop: 13,
            marginHorizontal: 15,
            fontWeight: 'bold',
            fontSize: 16,
            color: '#595959',
          }}
        >
          Welcome, Jala!
        </Text>
        <Text
          style={{
            marginTop: 6,
            marginHorizontal: 15,
            fontWeight: 'bold',
            fontSize: 18,
            color: '#161616',
          }}
        >
          Choice you Best food
        </Text>
  
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <TextInput
            onChangeText={(text) => setSearchText(text)}
            style={{
              marginHorizontal: 15,
              width: screenWidth * 0.73,
              height: screenHeight * 0.073,
              borderWidth: 1,
              borderColor: '#b5b5b5',
              borderRadius: 3,
              backgroundColor: '#f9f9f9',
              paddingLeft: 13,
              fontWeight: 'bold',
              fontSize: 17,
            }}
            placeholder="Search food"
            placeholderTextColor="#b5b5b5"
          />
          <View
            style={{
              height: screenHeight * 0.072,
              width: screenHeight * 0.072,
              backgroundColor: '#f1b000',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('./assets/search.png')}
              style={{
                height: screenHeight * 0.04,
                width: screenHeight * 0.04,
                tintColor: '#fff',
              }}
            />
          </View>
        </View>
  
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          }}
        >
          {typeDonut.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                let newItems = typeDonut.map((itemN) => {
                  item.id == itemN.id ? setSearchText(itemN.name) : null
                  return { ...itemN, isSelected: item.id == itemN.id }
                })
                setTypeDonut(newItems)
              }}
              key={index}
              style={{
                width: screenWidth * 0.27,
                height: screenHeight * 0.05,
                backgroundColor: item.isSelected ? '#f1b000' : '#f9f9f9',
                borderWidth: 1,
                borderColor: '#b5b5b5',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#212121',
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
  
        <ScrollView
          style={{
            marginBottom: 30,
          }}
        >
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  navigate('DetailPortrait', {
                    item: item,
                  })
                }}
                style={{
                  marginTop: 15,
                  marginHorizontal: 15,
                  width: screenWidth - 30,
                  height: screenHeight * 0.18,
                  backgroundColor: '#f4dddd',
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    height: screenHeight * 0.16,
                    width: screenHeight * 0.16,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    marginHorizontal: screenHeight * 0.01,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    height: screenHeight * 0.16,
                    marginHorizontal: 15,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 9,
                      fontSize: 19,
                      fontWeight: 'bold',
                      color: '#000',
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      marginTop: 13,
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#828282',
                    }}
                  >
                    Spicy tasty donut family
                  </Text>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: 19,
                      fontWeight: 'bold',
                      color: '#000',
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
                <Image
                  source={require('./assets/plus.png')}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    height: screenHeight * 0.06,
                    width: screenHeight * 0.06,
                  }}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    )
  }
  
  export default MasterPortrait
  
  const styles = StyleSheet.create({})