import coolServerImage from '../assets/serverphotos/coolserver.jpg'
import videoGameServerImage from '../assets/serverphotos/videogamesserver.jpg'

let servers = [
    {
        name: 'Cool Server',
        id: '1',
        image: coolServerImage,
        channels: [
            {
                name: 'Cool Food',
                subchannels: [
                    {name: 'Filipino'},
                    {name: 'Indian'}
                ]
            },

            {
                name: 'Cool Music',
                subchannels: [
                    {name: 'Rock'},
                    {name: 'HipHop'}
                ]
            }

        ]
    },
    {
        name: 'VideoGames',
        id: '2',
        image: videoGameServerImage,
        channels: [
            {name: 'PC Games',
            subchannels: [
                {name: 'MMO'},
                {name: 'Single Player'}
            ]
        }
        ]
    }
]

export default servers