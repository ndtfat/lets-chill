import { useDispatch, useSelector } from 'react-redux';
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
    };

    return list ? (
        <ul className={clsx('list')}>
            {list.map((item, index) => {
                const className = clsx('item', {
                    list: type === 'list',
                    img: type === 'image',
                    active: item.themeSRC === currentTheme || song.playlist === item.list,
                });

                return (
                    <li key={index} className={className} onClick={() => handleClick(index)}>
                        {item.name || (
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

export default ListBox;
