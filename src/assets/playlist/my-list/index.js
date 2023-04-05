import qnt from './0 phai ngay hom nay - QNT.mp3';
import duCho from './Dù Cho.mp3';
import loMo from './lơ mơ - mer.mp3';
import dontCome from './Mademoiselle - Why don´t you come_.mp3';
import time from './TIME - KIM KUNNI Ft. Astronormous.mp3';
import vongXoay from './vongXoay.mp3';

import thumbQnt from '../../song-thumb-nail/my-list/0-phai-hom-nay.jpg';
import thumbDuchho from '../../song-thumb-nail/my-list/du-cho.jpg';
import thumbLoMO from '../../song-thumb-nail/my-list/lo-mo.jpg';
import thumbTime from '../../song-thumb-nail/my-list/time.jpg';
import thumbVongXoay from '../../song-thumb-nail/my-list/vong-xoay.jpg';
import thumbDontCome from '../../song-thumb-nail/my-list/why-dont-you-come.jpg';

const vietNamPlaylist = [
    {
        name: '0 phải hôm nay',
        singer: 'QNT',
        songSrc: qnt,
        thumbnailURL: thumbQnt,
    },
    {
        name: 'Dù cho',
        singer: 'Ngọc Nguyễn',
        songSrc: duCho,
        thumbnailURL: thumbDuchho,
    },
    {
        name: 'Vòng xoay',
        singer: 'Koquet',
        songSrc: vongXoay,
        thumbnailURL: thumbVongXoay,
    },
    {
        name: 'Lơ mơ',
        singer: 'Mer',
        songSrc: loMo,
        thumbnailURL: thumbLoMO,
    },
    {
        name: 'Why dont you come?',
        singer: 'Modemoiselle',
        songSrc: dontCome,
        thumbnailURL: thumbDontCome,
    },
    {
        name: 'Time',
        singer: 'KIM KUNNI',
        songSrc: time,
        thumbnailURL: thumbTime,
    },
];

export default vietNamPlaylist;
