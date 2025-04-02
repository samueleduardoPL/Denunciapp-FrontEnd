import React, { useState } from "react";
import Button from "../components/Button";
import Feather from "@expo/vector-icons/Feather";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    useAnimatedValue,
    FlatList,
    Platform,
  } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { colors } from "../../Color";


  interface Message{
    id: string;
    text: string;
    isUser: boolean;
  }

  const ChatScreen = () =>{
    const navigation = useNavigation();
    const [inputText, setInputText] = useState('');
    const [Messages, setMessages] = useState<Message[]>([{
        id: '1',
        text: '¡Te escucho alto y claro! Detállame qué pasó y dónde pasó, para poder ayudarte ciudadano.',
        isUser: false
    }]);

    const handleSendMessage = () => {
        if (inputText.trim()){
            const newUserMessage: Message = {
                id: Date.now().toString(),
                text: inputText,
                isUser: true,
            };

            setMessages(prevMessages => [...prevMessages, newUserMessage]);
            setInputText('');


            setTimeout(() => {
                const botResponse: Message ={
                    id: (Date.now() + 1).toString(),
                    text: 'Gracias por tu denuncia. Se ha registrado como "infraestructura pública peligrosa" Será enviada a las autoridades competentes. Tu reporte ayuda a prevenir accidentes y mejorar tu comunidad.',
                    isUser: false,
                };

                setMessages(prevMessages => [...prevMessages, botResponse]);
            }, 1000);
        }
            };


            const renderHeader = () => (
<View style= {styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color={colors.primary}/>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Hola ciudadano!</Text>
    <View style={{width: 24}}/>
</View>
);

const renderMessage = ({ item }: {item: Message }) => (
<View style={[
styles.messageBubble,
item.isUser ? styles.userMessage : styles.botMessage
]}>

    <Text style={[
 styles.messageText,
 item.isUser ? styles.userMessageText : styles.botMessageText
    ]}>
    {item.text}
    </Text>
</View>
);

return (
<SafeAreaView style={styles.container}>
{renderHeader()}

<FlatList
data={Messages}
renderItem={renderMessage}
keyExtractor={item => item.id}
contentContainerStyle={styles.messageList}
/>

<KeyboardAvoidingView
behavior={Platform.OS === "ios" ? "padding" : "height"}
style={styles.inputContainer}
>
    <TextInput
    style={styles.input}
    value={inputText}
    onChangeText={setInputText}
    placeholder="Describe tu denuncia"
    placeholderTextColor="#999"
    multiline
/>

<TouchableOpacity
style={styles.sendButton}
onPress={handleSendMessage}
>
    <Feather name="send" size={20} color="white"/>
</TouchableOpacity>
</KeyboardAvoidingView>
</SafeAreaView>
);
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: colors.secondary,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.primary,
    },
    messageList: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    messageBubble: {
      maxWidth: '80%',
      padding: 12,
      marginVertical: 6,
      borderRadius: 18,
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: colors.primary,
      borderTopRightRadius: 4,
    },
    botMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#f0f0f0',
      borderTopLeftRadius: 4,
    },
    messageText: {
      fontSize: 16,
      lineHeight: 22,
    },
    userMessageText: {
      color: 'white',
    },
    botMessageText: {
      color: '#333',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
      backgroundColor: 'white',
    },
    input: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 10,
      marginRight: 8,
      fontSize: 16,
    },
    sendButton: {
      backgroundColor: colors.primary,
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default ChatScreen;
   
