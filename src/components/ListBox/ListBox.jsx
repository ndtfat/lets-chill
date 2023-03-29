import { useDispatch, useSelector } from 'react-redux';
import block from 'module-clsx';
import styles from '../../scss/listBox.module.scss';
import themeSlice from '../../redux/reducerSlices/themeSlice';
import { themeSelector } from '../../redux/selectors';

const clsx = block(styles);

function ListBox({ list, type = 'list' }) {
    const dispatch = useDispatch();
    const { themeSRC: currentTheme } = useSelector(themeSelector);

    const handleClick = (index) => {
        if (type === 'image') {
            dispatch(themeSlice.actions.changeTheme(index));
        }
    };

    return list ? (
        <ul className={clsx('list')}>
            {list.map((item, index) => {
                const className = clsx('item', {
                    list: type === 'list',
                    img: type === 'image',
                    active: item.themeSRC === currentTheme,
                });

                return (
                    <li key={index} className={className} onClick={() => handleClick(index)}>
                        {item.name || <img className={clsx('item-img')} src={item.thumbnailURL} />}
                    </li>
                );
            })}
        </ul>
    ) : (
        <></>
    );
}

export default ListBox;
