import React from 'react';
import Image from 'next/image';
import styles from '../src/styles/Banner.module.css';
import ex_mark from '../public/assets/banner_ex_mark.jpg';
import banner_img from '../public/assets/banner_img.jpg';
import banner_e from '../public/assets/banner_e.jpg';
import Button from '@mui/base/Button';
import { Card, Grid } from '@mui/joy';

const Banner = () => {
    return (
        <Grid
            container
            spacing={0}
            sx={{ flexGrow: 1 }}
            className={styles.banner_container}
        >
            <Grid
                container
                spacing={0}
                sx={{ flexGrow: 1 }}
                xs={6}
                className={styles.banner_left}
            >
                <Grid xs={4} className={styles.banner_ex_mark}>
                    <Image
                        className={styles.banner_ex_mark}
                        src={ex_mark}
                        alt='black exclamation mark in a yellow box'
                        width={36}
                        height={45.15}
                    />
                </Grid>
                <Grid xs={8}>
                    <h3>Touch typing training for children and adults</h3>
                    <p>
                        <span className={styles.banner_span}>
                            Save time and work smarter
                        </span>
                        &nbsp;with one of the most valuable skills you or your
                        children can learn.
                    </p>
                    <p>
                        <span className={styles.banner_span}>Touch typing</span>
                        &nbsp;is learning to type quickly and accurately without
                        looking at your hands using all your fingers on specific
                        keys.
                        <span className={styles.banner_span}>
                            &nbsp;Join our course&nbsp;
                        </span>
                        and gain a hugely beneficial skill for life.
                    </p>
                    <Button className={styles.banner_btn}>Our Courses</Button>
                </Grid>
            </Grid>
            <Grid
                xs={6}
                container
                spacing={0}
                sx={{ flexGrow: 1 }}
                className={styles.banner_right}
            >
                <div className={styles.banner_img}>
                    <Image
                        src={banner_img}
                        alt='man typing on a laptop at a desk'
                    />
                </div>
                <div className={styles.banner_e_section}>
                    <Image
                        className={styles.banner_e}
                        src={banner_e}
                        alt='black letter e in a blue square box'
                    />
                </div>
            </Grid>
        </Grid>
    );
};

export default Banner;