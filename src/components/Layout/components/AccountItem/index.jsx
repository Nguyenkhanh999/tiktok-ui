
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)


function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatr')}src="" alt="Khánh"/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span> Nguyễn Văn Khánh </span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <span className={cx('username')}> Nguyễn Văn Khánh </span>
            </div>

        </div>
    )
}

export default AccountItem;