import Proptypes from 'prop-types';
import block from 'module-clsx';
import styles from '../scss/configOption.module.scss';
import ListBox from './ListBox';

const clsx = block(styles);

function ConfigOption({ icon, isOpen, list, type, ...props }) {
    return (
        <div {...props} className={clsx('wrapper', { open: isOpen })}>
            {icon === 'esc' ? (
                <div className={clsx('esc-btn')}>
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
