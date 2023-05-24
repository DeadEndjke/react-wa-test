import s from './Message.module.scss'

export default function Message({ messageData, type}){


    function getMessage(type){
        if(messageData.typeMessage === 'textMessage' || messageData.typeMessage === 'extendedTextMessage'){
            switch(type){
                case 'outgoingAPIMessageReceived':{
                    return messageData.extendedTextMessageData.text
                    
                }
                case 'incomingMessageReceived':{
                    return messageData.textMessageData.textMessage
                }
                default:
                    return ""
    
                }
            }
            else{
                return messageData.typeMessage
        }
    }       

    return(
       
        <div className={type == 'outgoingAPIMessageReceived' ? s.messageOutgoing : s.messageIncoming}>{getMessage(type)}</div>
    )
}