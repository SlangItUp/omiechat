import useConversation from "../../hooks/useConversation.js";

export function ReceivedMessage( {message} ) {
    const { selectedConversation } = useConversation();
      return (
      <div className="col-start-1 col-end-8 p-3 rounded-lg">
        <div className="flex flex-row items-center">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
            <img src={selectedConversation.pfp} />
          </div>
          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
            <div>{message.message}</div>
          </div>
        </div>
      </div>
  );
}

export function SentMessage({message}){
    const userInfo = JSON.parse(localStorage.getItem('user'))
    return(
        <div className="col-start-6 col-end-13 p-3 rounded-lg">
        <div className="flex items-center justify-start flex-row-reverse">
          <div
            className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
          >
            <img src={userInfo.pfp} ></img>
          </div>
          <div
            className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
          >
            <div>{message.message}</div>
          </div>
        </div>
      </div>
    )
}


