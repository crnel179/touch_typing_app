import React from 'react';
import Image from 'next/image';
import BannerImg from '../public/banner_img.jpg';

const BannerImg = () => {
    return (
        <div className={styles.banner_img}>
            <Image
                src={mypic}
                alt='Picture of the author'
                width='350px'
                height='300px'
            />
        </div>
    );
};

export default BannerImg;
