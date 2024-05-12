//node modulw
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

//local
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Poper/Menu';
import Image from '~/components/Image';
// icon
import { PlaneIcon } from '~/components/Icons/PlaneICon';
import { MessageIcon } from '~/components/Icons/MessageIcon';
import { UserIcon } from '~/components/Icons/UserIcon';
import { FavouriteIcon } from '~/components/Icons/FavouriteIcon';
import { GetCoinIcon } from '~/components/Icons/CoinIcon';
import { VideoIcon } from '~/components/Icons/VideoIcon';
import { SuiteIcon } from '~/components/Icons/SuiteIcon';
import { HubICon } from '~/components/Icons/HubICon';
import { SettingIcon } from '~/components/Icons/SettingIcon';
import { ModelIcon } from '~/components/Icons/ModeIcon';
import { LogOutIcon } from '~/components/Icons/LogOutICon';
import { KeyBoadIcon } from '~/components/Icons/KeyBoadIcon';
import { QuestionIcon } from '~/components/Icons/QuestionIcon';
import { LangugeIcon } from '~/components/Icons/LangugeIcon';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <LangugeIcon />,
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
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyBoadIcon />,
        title: 'Keyboard Shortcuts',
    },
];

function Header() {
    const currentUser = true;

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
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@deptrai',
        },
        {
            icon: <FavouriteIcon />,
            title: 'Favourite',
            to: '/Favourite',
        },
        {
            icon: <GetCoinIcon />,
            title: 'Get Coins',
            to: '/get-coins',
        },
        {
            icon: <VideoIcon />,
            title: 'LIVE Studio',
            to: '/live-studio',
        },
        {
            icon: <SuiteIcon />,
            title: 'Business Suite',
            to: '/business-suite',
        },
        {
            icon: <HubICon />,
            title: 'LIVE Create Hub',
            to: '/live-create-hub',
        },
        {
            icon: <SettingIcon />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <ModelIcon />,
            title: 'Dark Mode',
            to: '/dark-mode',
        },
        {
            icon: <LogOutIcon />,
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

                {/* Search */}

                <Search />

                {/**Button */}
                <div className={cx('actions')}>
                    <Button text className={cx('upload_btn')}>
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
                                    <PlaneIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary> Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
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
