import { useDispatch, useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import block from 'module-clsx';
import styles from '../scss/listBox.module.scss';
import songSlice from '../redux/reducerSlices/songSlice';
import themeSlice from '../redux/reducerSlices/themeSlice';
import { songSelector, themeSelector } from '../redux/selectors';

const clsx = block(styles);

function ListBox({ list, type = 'list' }) {
    const dispatch = useDispatch();
    const { themeSRC: currentTheme } = useSelector(themeSelector);
    const song = useSelector(songSelector);

    const handleClick = (index) => {
        if (type === 'image') {
            dispatch(themeSlice.actions.changeTheme(index));
        }
        if (type === 'list') {
            dispatch(songSlice.actions.changePlaylist(index));
        }
        if (type === 'song-list') {
            console.log(song.playlist[index]);
            dispatch(songSlice.actions.changeSong(index));
        }
    };

    return list ? (
        <ul className={clsx('list', { song: type === 'song-list' })}>
            {list.map((item, index) => {
                const className = clsx('item', {
                    list: type === 'list' || type === 'song-list',
                    img: type === 'image',
                    active: item.themeSRC === currentTheme || song.playlist === item.list,
                });

                return (
                    <li key={index} className={className} onClick={() => handleClick(index)}>
                        {type === 'list' || type === 'song-list' ? (
                            <p>{item.name}</p>
                        ) : (
                            <img className={clsx('item-img')} src={item.thumbnailURL} alt="img" />
                        )}
                    </li>
                );
            })}
        </ul>
    ) : (
        <></>
    );
}

ListBox.prototype = {
    list: Proptypes.array.isRequired,
    type: Proptypes.string,
};

export default ListBox;
