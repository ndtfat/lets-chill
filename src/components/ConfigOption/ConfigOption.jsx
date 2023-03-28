import Proptypes from 'prop-types';
import 'boxicons';
import block from 'module-clsx';
import styles from './style.module.scss';
import ListBox from '../ListBox';

const clsx = block(styles);

function ConfigOption({ icon, onOpen, isOpen, list, type, ...props }) {
    const handleOpen = () => {
        onOpen(true);
    };

    return (
        <div {...props} className={clsx('wrapper', { open: isOpen })}>
            {icon === 'esc' ? (
                <div onClick={handleOpen} className={clsx('esc-btn')}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            ) : (
                <div className={clsx('config-option')}>{icon}</div>
            )}

            <div className={clsx('option-list')}>
                <ListBox type={type} list={list} />
            </div>
        </div>
    );
}

ConfigOption.propTypes = {
    icon: Proptypes.any.isRequired,
    onOpen: Proptypes.func,
    isOpen: Proptypes.bool,
    type: Proptypes.string,
};

export default ConfigOption;
