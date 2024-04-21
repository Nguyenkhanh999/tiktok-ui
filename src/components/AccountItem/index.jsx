import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a3562b32792463521fc048cf7b0470a4~c5_100x100.jpeg?lk3s=30310797&x-expires=1713006000&x-signature=NCFUSJx981i79xOJLgUHXHjqoB0%3D"
                alt="Khánh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> Linh tít  </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('id-user')}> embetit </span>
            </div>
        </div>
    );
}

export default AccountItem;
