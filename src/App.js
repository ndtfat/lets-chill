import { useEffect, useState } from 'react';

function App() {
    const [songList, setSongList] = useState([]);

    const handleUpfile = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        console.log('file: ', file);
    };

    useEffect(() => {
        fetch('https://64183e4429e7e36438e31657.mockapi.io/api/songs')
            .then((res) => res.json())
            .then((songs) => {
                console.log(songs);
                setSongList(songs);
            });
    }, []);

    return (
        <div className="App">
            <input type="file" onChange={handleUpfile}></input>
            {songList.map((song) => (
                <div key={song.id}>
                    <p>{song.name}</p>
                    <p>{song.performer}</p>
                    <audio controls src={song.songURL}></audio>
                </div>
            ))}
        </div>
    );
}

export default App;
