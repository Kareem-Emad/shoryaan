import React from 'react'
import {View,Image} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Fab , Card, CardItem,Thumbnail,List,ListItem} from 'native-base';
import {ImageBackground,StatusBar,StyleSheet,AsyncStorage,ScrollView} from 'react-native'
import {H3,Input,Toast,Item,Label,Picker} from 'native-base'

export class Profile extends React.Component
{
    
    constructor(props)
    {
        super(props);

        const { params } = this.props.navigation.state;

        this.state = {
            username: "Sayed Alesawy",
            name: "Sayed Kotb Sayed Kotb",
            email: "sayed@shoryaan.com",
            age: "20",
            governorate: "Cairo",
            city: "Nozha",
            gender: "Male",
            bloodType: "A+",
            nextDonation: "2"
        }
    }
    
    convertBloodTypeSign(){
        var bloodType = this.state.bloodType;
        if(bloodType[bloodType.length - 1] == '+'){
            return "+ve";
        }else{
            return "-ve";
        }
    }

    convertBloodType(){
        var bloodType = this.state.bloodType;
        return bloodType.slice(0,-1);
    }

    render(){
        return(
            <Container>
                <StatusBar translucent={false}  style = {styles.statusBar} barStyle = "light-content"/>

                <Header style = {styles.header} noShadow =  {true} androidStatusBarColor={'#D32F2F'}>
                    <Left style = {{flex: 1}}>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>

                    <Body style = {styles.title}>
                       <Title> PROFILE </Title>
                    </Body>
                   
                    <Right style = {{flex: 1}}>
                        <Button transparent>
                        <Icon onPress={() => this.props.navigation.navigate('EditProfile', this.state)} name='md-create' />
                        </Button>
                    </Right>
                </Header>

                <View style = {styles.section}>
                    <Thumbnail style = {{width: 70, height: 70}} round source={require('../../images/profile/pp.png')} />
                
                    <Text style = {styles.usernameText}> {this.state.username} </Text>
                        
                    <Text style={{color:'white', paddingTop: 5}}>  
                        <Icon name = 'pin' style = {styles.icon} />
                        {" "}{this.state.governorate}, Egypt
                    </Text>
                </View>

                <View style={{ borderBottomColor: '#BDBDBD', borderBottomWidth: 3 }}/>

                <View style = {styles.bloodBar}>
                    <View style = {styles.bloodBarNested}>
                        <View style={{flexDirection: 'row', alignContent: 'flex-start'}}>
                            <Text style={{fontSize: 40, fontWeight: 'bold', lineHeight: 40, color: '#D32F2F', paddingLeft:25}}>{this.convertBloodType()}</Text>
                            <Text style={{fontSize: 15, lineHeight: 15, color: '#D32F2F'}}>{this.convertBloodTypeSign()}</Text>
                        </View>

                        <View style={{flexDirection: 'row', alignContent: 'flex-end'}}>
                            <Text style={{fontSize: 40, fontWeight: 'bold', lineHeight: 40, color: '#D32F2F'}}>{this.state.nextDonation}</Text>
                            <Text style={{fontSize: 15, lineHeight: 15, color: '#D32F2F', paddingRight: 15}}>months</Text>
                        </View>
                    </View>
                    
                    <View style = {styles.bloodBarSub}>
                        <View style={{flexDirection: 'row', alignContent: 'flex-start'}}>
                            <Text style={{fontSize: 18, color: '#757575'}}>Blood Type</Text>
                        </View>

                        <View style={{flexDirection: 'row', alignContent: 'flex-end'}}>
                        <Text style={{fontSize: 18, color: '#757575'}}>Next donation</Text>
                        </View>
                    </View>
                </View>
                
                <View style={{ borderBottomColor: '#BDBDBD', borderBottomWidth: 2 }}/>

                <ScrollView>
                    <View style = {styles.mainList}>
                        <List>
                            <ListItem>
                                <Text style = {styles.listItemLabel}>Username:{" "}</Text>
                                <Text style = {styles.listItemData}>{this.state.username}</Text>
                            </ListItem>

                            <ListItem>
                                <Text style = {styles.listItemLabel}>Name:{" "}</Text>
                                <Text style = {styles.listItemData}>{this.state.name}</Text>
                            </ListItem>
                            
                            <ListItem>
                                <Text style = {styles.listItemLabel}>E-mail:{" "}</Text>
                                <Text style = {styles.listItemData}>{this.state.email}</Text>
                            </ListItem>

                            <ListItem>
                                <Text style = {styles.listItemLabel}>Age:{" "}</Text>
                                <Text style = {styles.listItemData}>{this.state.age}</Text>
                            </ListItem>

                            <ListItem>
                                <Text style = {styles.listItemLabel}>State:{" "}</Text>
                                <Text style = {styles.listItemData}>{this.state.governorate}</Text>
                            </ListItem>

                            <ListItem>
                                <Text style = {styles.listItemLabel}>City:{" "}</Text>
                                <Text style = {styles.listItemData}>{this.state.city}</Text>
                            </ListItem>

                            <ListItem>
                                <Text style = {styles.listItemLabel}>Gender:{" "}</Text>
                                <Text style = {styles.listItemData}>{this.state.gender}</Text>
                            </ListItem>

                        </List>
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

    usernameText:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5
    },

    icon:{
        color: 'white',
        fontSize: 20
    },

    listItemLabel:{
        fontSize: 25, 
        color:'#212121'
    },

    listItemData:{
        fontSize: 20, 
        color:'#757575'
    },

    bloodBar:{
        flexDirection: 'column',
        backgroundColor:'#FFFF',
        height: 80
    },

    bloodBarNested:{
        flex: 1, 
        flexDirection: 'row', 
        paddingTop: 15, 
        paddingLeft: 10, 
        paddingRight: 10, 
        paddingBottom: 5,
        justifyContent: 'space-between'
    },

    bloodBarSub:{
        height: 30,
        flexDirection: 'row', 
        paddingLeft: 10, 
        paddingRight: 10, 
        paddingBottom: 5,
        justifyContent: 'space-between'
    },

    section: {
      height: 140,
      backgroundColor:'#F44336',
      alignItems: 'center',
    },

    mainList:{
        backgroundColor:'#FFFFFF'
    }
})