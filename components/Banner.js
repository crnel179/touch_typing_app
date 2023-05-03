import React from 'react';
import styles from '../src/styles/Banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner_comp}>
            <h3>Touch typing training for children and adults</h3>
            <p>
                <span className={styles.banner_span}>
                    Save time and work smarter
                </span> with one of the most valuable skills you or your children can
                learn.
            </p>
            <p>
                <span className={styles.banner_span}>Touch typing</span> is
                learning to type quickly and accurately without looking at your
                hands using all your fingers on specific keys.
                <span className={styles.banner_span}> Join our course</span> and
                gain a hugely beneficial skill for life.
            </p>
            <button className={styles.banner_btn}>Our Courses</button>
        </div>
    );
};

export default Banner;
