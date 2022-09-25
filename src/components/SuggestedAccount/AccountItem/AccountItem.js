import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from '../suggestedAccounts.module.scss';
import AccountPreview from '../AccountPreview';
const cx = classNames.bind(styles);

function AccountItem({ avatar, name, nickname, tick, tippy }) {
    const renderReview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <HeadlessTippy
                interactive={true}
                delay={[800, 0]}
                offset={[-20, 5]}
                placement="bottom"
                render={renderReview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        alt="abc"
                        src="https://64.media.tumblr.com/4485d671eda100892165fa9a63689661/tumblr_mvce0jlECK1rue4a1o2_500.png"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Warhammer 40k</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Leman Russ</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

AccountItem.propTypes = {
    avatar: PropTypes.string.isRequired,
};

export default AccountItem;
