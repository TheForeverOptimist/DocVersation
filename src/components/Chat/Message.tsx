import { cn } from "@/libs/utils"


interface MessageProps{
    message: ,
    isNextMessageSamePerson: boolean
}


const Message = ({message, isNextMessageSamePerson}: MessageProps) => {
    return <div className={cn('flex items-end')}></div>
}


export default Message