import React, { useState } from 'react';

// let API_ENDPOINT = `http://localhost:6001/songs`

const SongItem = props => {

    const [likes, setLikes] = useState(0);
    // const [favorite, setFavorite] = useState(props.favorite);

    // console.log("ITEM PROPS", props);

    const playNow = () => {
        console.log("PLAY NOW");
    }

    const addToQueue = () => {
        console.log("ADD TO QUEUE");
    }

    const markFavorite = () => {
        console.log("FAVORITE");

        const updated = {
            ...props,
            favorite: !props.favorite
        };

        // remove the function
        delete updated.updateSong;

        props.updateSong(updated);

        /*
        const favoriteBody = {
            ...props,
            favorite: !favorite
        };

        fetch(`${API_ENDPOINT}/${props.id}`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(favoriteBody)
        })
        .then(res => res.json())
        .then(song => {
            setFavorite(song.favorite);
        })
        .catch(err => console.error("err", err));
        */
    }

    const addLike = () => {
        console.log("ADD LIKE");
        setLikes(likes+1);
    }

    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td><button onClick={playNow /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={addToQueue /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={markFavorite /* Put your click handler here */}>{props.favorite ? "💚" : "♡"}</td>
            <td onClick={addLike}>Likes: {likes}</td>
        </tr>
    )
}

export default SongItem;

/*
{
  "songs": [
    {
      "id": 1,
      "title": "Formation",
      "artist": "Beyonce",
      "url": "https://www.youtube.com/embed/WDZJPJV__bQ",
      "genre": "Hip Hop",
      "favorite": true
    },
    {
      "id": 2,
      "title": "This is America",
      "artist": "Childish Gambino",
      "url": "https://www.youtube.com/embed/VYOjWnS4cMY",
      "genre": "Hip Hop",
      "favorite": true
    },
    {
      "id": 3,
      "title": "Changes",
      "artist": "2Pac ft Talent",
      "url": "https://www.youtube.com/embed/eXvBjCO19QY",
      "genre": "Hip Hop",
      "favorite": true
    },
    {
      "id": 4,
      "title": "24K Magic",
      "artist": "Bruno Mars",
      "url": "https://www.youtube.com/embed/UqyT8IEBkvY",
      "genre": "Hip Hop",
      "favorite": true
    },
    {
      "id": 5,
      "title": "Good As Hell",
      "artist": "Lizzo",
      "url": "https://www.youtube.com/embed/SmbmeOgWsqE",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 6,
      "title": "Good Morning",
      "artist": "Kanye West",
      "url": "https://www.youtube.com/embed/6CHs4x2uqcQ",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 7,
      "title": "Me Voy",
      "artist": "CIMAFUNK",
      "url": "https://www.youtube.com/embed/o1YBngPfU-o",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 8,
      "title": "Dear Mama",
      "artist": "2Pac",
      "url": "https://www.youtube.com/embed/Mb1ZvUDvLDY",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 9,
      "title": "Ordinary People",
      "artist": "John Legend",
      "url": "https://www.youtube.com/embed/PIh07c_P4hc",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 10,
      "title": "Can I Kick It? ",
      "artist": "A Tribe Called Quest",
      "url": "https://www.youtube.com/embed/O3pyCGnZzYA",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 11,
      "title": "The Light",
      "artist": "Common",
      "url": "https://www.youtube.com/embed/OjHX7jf-znA",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 12,
      "title": "Vivir Mi Vida",
      "artist": "Marc Anthony",
      "url": "https://www.youtube.com/embed/YXnjy5YlDwk",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 13,
      "title": "La Vida Es Un Carnaval",
      "artist": "Celia Cruz",
      "url": "https://www.youtube.com/embed/0nBFWzpWXuM",
      "genre": "Salsa",
      "favorite": false
    },
    {
      "id": 14,
      "title": "Cry No More",
      "artist": "Rhiannon Giddens",
      "url": "https://www.youtube.com/embed/PU3cGLtULeI",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 15,
      "title": "Baltimore",
      "artist": "Prince feat. Eryn Allen Kane",
      "url": "https://www.youtube.com/embed/cieZB0Ab7xk",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 16,
      "title": "Be Free",
      "artist": "J. Cole",
      "url": "https://www.youtube.com/embed/T9IsM0RX7cc",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 17,
      "title": "Glory",
      "artist": "Common, John Legend",
      "url": "https://www.youtube.com/embed/HUZOKvYcx_o",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 18,
      "title": "Alright",
      "artist": "Kendrick Lamar",
      "url": "https://www.youtube.com/embed/Z-48u_uWMHY",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 19,
      "title": "Better Days",
      "artist": "Victoria Monet and Ariana Grande",
      "url": "https://www.youtube.com/embed/TSOzguYgbAM",
      "genre": "Pop",
      "favorite": false
    },
    {
      "id": 20,
      "title": "Freedom",
      "artist": "Beyoncé (feat. Kendrick Lamar)",
      "url": "https://www.youtube.com/embed/bWtcsj6W_Vw",
      "genre": "Hip Hop",
      "favorite": false
    },
    {
      "id": 21,
      "title": "Callaíta",
      "artist": "Bad Bunny",
      "url": "https://www.youtube.com/embed/acEOASYioGY",
      "genre": "Hip Hop",
      "favorite": true
    }
  ]
}
*/