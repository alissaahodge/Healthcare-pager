import React from 'react';

import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";
import Cookies from 'universal-cookie';

import {ChannelListContainer, ChannelContainer} from "./components";
import { API_KEY} from "../environment/environment";

const client = StreamChat.getInstance(API_KEY);

const App = () => {
return(<div className="app__wrapper">
    <Chat client={client} theme="team light">
        <ChannelListContainer/>
        <ChannelContainer/>
    </Chat>
</div>);
};

export default App;
