import { useEffect, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import songSlice from '../redux/reducerSlices/songSlice';
import { songSelector } from '../redux/selectors';

function Audio() {
    const dispatch = useDispatch();
    const audioRef = useRef();
    const song = useSelector(songSelector);

    localStorage.setItem('song', JSON.stringify(song));

    const { songSrc } = useMemo(() => {
        const currentSong = song.playlist[song.currentSongIndex];
        return currentSong;
    }, [song.currentSongIndex, song.playlist]);

    useEffect(() => {
        const { current: audioElement } = audioRef;
        const currentTime = song.currentTime;
        audioElement.muted = song.muted;
        audioElement.volume = song.volume;
        song.playPause ? audioElement.play() : audioElement.pause();
        audioElement.loop = song.repeat;
        audioElement.ontimeupdate = () => {
            dispatch(
                songSlice.actions.updateProgress({
                    value: (audioElement.currentTime / audioElement.duration) * 1000000000000,
                    userAdjust: false,
                }),
            );
        };
        if (currentTime.userAdjust) {
            // console.log(currentTime.value, ' of ', song);
            audioElement.currentTime = (currentTime.value / 1000000000000) * audioElement.duration;
        }
        audioElement.onended = () => {
            dispatch(songSlice.actions.nextSong());
        };
    });

    return (
        <>
            <audio ref={audioRef} src={songSrc}></audio>
        </>
    );
}

export default Audio;
