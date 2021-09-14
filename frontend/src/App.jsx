import React from 'react';

import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";

import {ChannelListContainer, ChannelContainer} from "./components";
import { API_KEY} from "./environment/environment";

import './App.css';

const client = StreamChat.getInstance(API_KEY);

const App = () => {
return(<div className="app__wrapper">
    <Chat client={client} theme="team light">
        <ChannelListContainer
        />
        <ChannelContainer
        />
    </Chat>
</div>);
};

export default App;
