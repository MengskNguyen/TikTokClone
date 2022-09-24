import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './suggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ avatar, name, nickname, tick }) {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                alt="abc"
                src="https://64.media.tumblr.com/4485d671eda100892165fa9a63689661/tumblr_mvce0jlECK1rue4a1o2_500.png"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Warhammer 40k</strong>
                    <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Leman Russ</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
