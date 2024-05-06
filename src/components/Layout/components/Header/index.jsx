//node modulw
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faMessage,
    faPaperPlane,
    faUser,
    faBitcoinSign,
    faVideoCamera,
    faStore,
    faGear,
    faArrowRightFromBracket,
    faA,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

//local
import Button from '~/components/Button';
import { wrapper as PoperWrapper } from '~/components/Poper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Poper/Menu';
import {
    faBookmark,
    faLightbulb,
    faMoon,
} from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faA} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    //handle
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                //Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@deptrai',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favourite',
            to: '/Favourite',
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoinSign} />,
            title: 'Get Coins',
            to: '/get-coins',
        },
        {
            icon: <FontAwesomeIcon icon={faVideoCamera} />,
            title: 'LIVE Studio',
            to: '/live-studio',
        },
        {
            icon: <FontAwesomeIcon icon={faStore} />,
            title: 'Business Suite',
            to: '/business-suite',
        },
        {
            icon: <FontAwesomeIcon icon={faLightbulb} />,
            title: 'LIVE Create Hub',
            to: '/live-create-hub',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark Mode',
            to: '/dark-mode',
        },
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log Out',
            to: '/log-out',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PoperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PoperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search account and video.."
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                {/**Button */}
                <div className={cx('actions')}>
                    <Button text>
                        <FontAwesomeIcon
                            className={cx('upload-icon')}
                            icon={faPlus}
                        />
                        UpLoad
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Messages"
                                placement="bottom"
                            >
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary> Log in ( Đăng Nhập ) </Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a2b2117ce380299f1612b71e44d2cbe4.jpeg?lk3s=a5d48078&x-expires=1714575600&x-signature=CbvZXwN1nXZbbMYXMbxFzRGcJSY%3D"
                                className={cx('user-avatar')}
                                alt="Đẹp Trai Kiểu Xấu Xấu "
                            />
                        ) : (
                            <Button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </Button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
