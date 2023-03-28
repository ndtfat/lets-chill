import { useDispatch } from 'react-redux';
import block from 'module-clsx';
import styles from './style.module.scss';
import themeSlice from '../../redux/reducerSlices/themeSlice';

const clsx = block(styles);

function ListBox({ list, type = 'list' }) {
    const dispatch = useDispatch();

    const className = clsx('item', {
        list: type === 'list',
        img: type === 'image',
        // active: true,
    });

    const handleClick = (index) => {
        if (type === 'image') {
            dispatch(themeSlice.actions.changeTheme(index));
        }
    };

    return list ? (
        <ul className={clsx('list')}>
            {list.map((item, index) => (
                <li key={index} className={className} onClick={() => handleClick(index)}>
                    {item.name || <img className={clsx('item-img')} src={item.thumbnailURL} />}
                </li>
            ))}
        </ul>
    ) : (
        <></>
    );
}

export default ListBox;
