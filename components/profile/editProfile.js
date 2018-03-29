import React from 'react'
import {View,Image} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Fab , Card, CardItem,Thumbnail,List,ListItem} from 'native-base';
import {ImageBackground,StatusBar,StyleSheet,AsyncStorage,ScrollView,TextInput} from 'react-native'
import {H3,Input,Toast,Item,Label,Picker} from 'native-base'

export class EditProfile extends React.Component
{
    constructor(props)
    {
        super(props);

        const { params } = this.props.navigation.state;

        this.state = {
            username: params.username,
            name: params.name,
            email: params.email,
            age: params.age,
            governorate: params.governorate,
            city: params.city,
            bloodType: params.bloodType,
            gender: params.gender,
            bloodTypes: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-", "Unkown"],
            states: ["Cairo", "Alexandria", "Giza", "Aswan", "Asyut", "Beheira", "Beni Suef", "Dakahlia", "New Valley", "Port Said", "Sharqia", "Suez"],
            genders: ["Male", "Female"]
        };
        
    }

    onStateValueChange(value) {
        this.setState({
            governorate: value
        });
    }

    onGenderValueChange(value) {
        this.setState({
            gender: value
        });
    }

    onBloodTypeValueChange(value) {
        this.setState({
            bloodType: value
        });
    }

    render(){
        return(
            <Container>
                <StatusBar style = {styles.statusBar} barStyle = "light-content"/>

                <Header style = {styles.header} noShadow =  {true} androidStatusBarColor={'#D32F2F'}>
                    <Left style = {{flex: 1}}>
                        <Button transparent>
                            <Icon onPress={() => this.props.navigation.navigate('Profile')} name='arrow-back' />
                        </Button>
                    </Left>

                    <Body style = {styles.title}>
                    <Title> EDIT PROFILE </Title>
                    </Body>
                
                    <Right style = {{flex: 1}}>
                        <Button transparent>
                            <Icon onPress={() => this.props.navigation.navigate('Profile')} name='md-checkmark' />
                        </Button>
                    </Right>
                </Header>

                <ScrollView>
                    <View style = {styles.form}>
                        <Text style = {styles.inputFieldLabels}> Username</Text>
                        <TextInput style={styles.inputBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder= {this.state.username}
                            placeholderTextColor = "#757575"
                            selectionColor="#212121"
                        />

                        <Text style = {styles.inputFieldLabels}> Name (Optional)</Text>
                        <TextInput style={styles.inputBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder= {this.state.name}
                            placeholderTextColor = "#757575"
                            selectionColor="#212121"
                            autoCapitalize={'sentences'}
                        />

                        <Text style = {styles.inputFieldLabels}> Age </Text>
                        <TextInput style={styles.inputBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder= {this.state.age}
                            placeholderTextColor = "#757575"
                            selectionColor="#212121"
                        />

                        <Text style = {styles.inputFieldLabels}> City</Text>
                        <TextInput style={styles.inputBox} 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder= {this.state.city}
                            placeholderTextColor = "#757575"
                            selectionColor="#212121"
                            autoCapitalize={'sentences'}
                        />

                        <Text style = {styles.inputFieldLabels}> State</Text>
                        <Picker
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.governorate}
                            onValueChange={this.onStateValueChange.bind(this)}
                            style = {styles.StatePicker}
                            >
                            {this.state.states.map((item, index) => {
                                return (<Item style = {styles.StatePickerItem} label={item} value={item} key={index}/>) 
                            })}
                        </Picker>
                        
                        <Text style = {styles.inputFieldLabels}> Blood type</Text>
                        <Picker
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.bloodType}
                            onValueChange={this.onBloodTypeValueChange.bind(this)}
                            style = {styles.StatePicker}
                            >
                            {this.state.bloodTypes.map((item, index) => {
                                return (<Item style = {styles.StatePickerItem} label={item} value={item} key={index}/>) 
                            })}
                        </Picker>
                        
                        <Text style = {styles.inputFieldLabels}> Gender</Text>
                        <Picker
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.gender}
                            onValueChange={this.onGenderValueChange.bind(this)}
                            style = {styles.StatePicker}
                            >
                            {this.state.genders.map((item, index) => {
                                return (<Item style = {styles.StatePickerItem} label={item} value={item} key={index}/>) 
                            })}
                        </Picker> 
                    </View>
                </ScrollView>
            </Container>
        )
    }
} 

const styles = StyleSheet.create({
    statusBar:{
        backgroundColor: '#D32F2F'
    },

    header:{
        backgroundColor: '#F44336',
        height: 50
    },

    title:{
        flex: 1,  
        justifyContent: 'center', 
        alignItems: 'center'
    },

    form:{
        backgroundColor: '#FFFF'
    },

    inputBox: {
        flexDirection: 'row',
        backgroundColor:'#ffffff',
        borderRadius: 15,
        paddingHorizontal:25,
        fontSize:16,
        color:'#757575',
        borderColor: '#757575',
        borderWidth: 2,
        marginVertical: 8,
        marginHorizontal: 10
    },

    inputFieldLabels:{
        paddingTop:5,
        paddingLeft:10,
        fontSize: 20
    },

    StatePicker:{
        flexDirection: 'row',
        marginHorizontal: 25,
    },

    StatePickerItem:{
        fontSize: 16,
        color: '#757575'
    }
})