import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { wrapper as PoperWrapper } from '~/components/Poper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            placement="bottom-end"
            delay={[0, 800]}
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-poper')}>
                        {renderItems()}
                    </PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
