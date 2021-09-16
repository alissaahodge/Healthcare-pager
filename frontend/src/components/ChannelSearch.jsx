import Ract, {useState} from 'react';
import {userChatContext} from 'stream-chat-react';
// import { searchIcon}

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);

    const getChannels = async (text) => {
        try {
            const channelResponse = client.queryChannels({
                type: 'team',
                name: {$autocomplete: text},
                members: {$in: [client.userID]}
            });
            const userResponse = client.queryUsers({
                id: {$ne: client.userID},
                name: {$autocomplete: text}
            })

            const [channels, {users}] = await Promise.all([channelResponse, userResponse]);

            if (channels.length) setTeamChannels(channels);
            if (users.length) setDirectChannels(users);
        } catch (error) {
            setQuery('')
        }
    };

    const onSearch = (event) => {
        event.preventDefault();
        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    };
    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    {/*add search icon*/}
                </div>
                <input className="channel-search__input__text"
                       placeholder="Search"
                       type="text"
                       value={query}
                       onChange={onSearch}/>
            </div>

        </div>
    );
};
export default ChannelSearch;
