import AppLayout from "../component/layout/AppLayout";
import ChatTopbar from "../component/specific/ChatTopbar";
import MessageInputContainer from "../component/specific/MessageInputContainer";

import ChatBubble from "../component/ui/ChatBubble";

const Chat: React.FC = () => {

    return (
        <div className=' relative text-white flex flex-col h-full  '>

            <div className="sticky top-0  z-10 mb-2 md:mt-0 mt-[5rem]">
                <ChatTopbar />
            </div>

            <div className=" flex flex-grow flex-col px-2 p-2 overflow-y-auto  custom-scrollbar max-h-[calc(100vh-20rem)]  md:max-h-[calc(100vh-15rem)]">
                <div className=" flex flex-col flex-grow gap-4">
                    <ChatBubble
                        position="left"
                        message="hello!"
                        profilePicture="https://i.pinimg.com/236x/13/ff/00/13ff0097687266036163e8e6022bbdc0.jpg"
                        time="10:22 AM"
                    />
                    <ChatBubble
                        position="right"
                        message="how are you?"
                        profilePicture="https://i.pinimg.com/736x/86/8e/cd/868ecdb0d03947e0395b5259531e49a2.jpg"
                        time="10:23 AM"
                    />
                    <ChatBubble
                        position="right"
                        message="Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere pretium maecenas facilisis condimentum placerat rutrum. Vel elementum dolor porta est sociosqu leo class netus lobortis? Scelerisque nunc malesuada nec natoque penatibus. Duis ad iaculis facilisi erat duis eget at a? Primis libero in convallis sollicitudin, duis integer integer."
                        profilePicture="https://i.pinimg.com/736x/86/8e/cd/868ecdb0d03947e0395b5259531e49a2.jpg"
                        time="10:23 AM"
                    />
                    <ChatBubble
                        position="right"
                        message="Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere pretium maecenas facilisis condimentum placerat rutrum. Vel elementum dolor porta est sociosqu leo class netus lobortis? Scelerisque nunc malesuada nec natoque penatibus. Duis ad iaculis facilisi erat duis eget at a? Primis libero in convallis sollicitudin, duis integer integer."
                        profilePicture="https://i.pinimg.com/736x/86/8e/cd/868ecdb0d03947e0395b5259531e49a2.jpg"
                        time="10:23 AM"
                    />
                    <ChatBubble
                        position="left"
                        message="Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere pretium maecenas facilisis condimentum placerat rutrum. Vel elementum dolor porta est sociosqu leo class netus lobortis? Scelerisque nunc malesuada nec natoque penatibus. Duis ad iaculis facilisi erat duis eget at a? Primis libero in convallis sollicitudin, duis integer integer."
                        profilePicture="https://i.pinimg.com/736x/86/8e/cd/868ecdb0d03947e0395b5259531e49a2.jpg"
                        time="10:23 AM"
                    />
                    <ChatBubble
                        position="right"
                        message="Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere pretium maecenas facilisis condimentum placerat rutrum. Vel elementum dolor porta est sociosqu leo class netus lobortis? Scelerisque nunc malesuada nec natoque penatibus. Duis ad iaculis facilisi erat duis eget at a? Primis libero in convallis sollicitudin, duis integer integer."
                        profilePicture="https://i.pinimg.com/736x/86/8e/cd/868ecdb0d03947e0395b5259531e49a2.jpg"
                        time="10:23 AM"
                    />

                </div>
            </div>

            <div className="sticky bottom-0 z-10 mr-4 ">
                <MessageInputContainer />
            </div>

        </div>
    )
}
const WrappedChat = AppLayout(Chat);

export { Chat };
export default WrappedChat;

