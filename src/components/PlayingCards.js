const playingCards = [
    {
        id: 1,
        value: 1,
        img: "https://i.ibb.co/sCfZM5k/ace-of-clubs.png"
    },
    {
        id: 2,
        value: 1,
        img: "https://i.ibb.co/ccg8gc2/ace-of-diamonds.png"
    },
    {
        id: 3,
        value: 1,
        img: "https://i.ibb.co/6nwt9Jw/ace-of-hearts.png"
    },
    {
        id: 4,
        value: 1,
        img: "https://i.ibb.co/VQsN22D/ace-of-spades.png"
    },
    {
        id: 5,
        value: 2,
        img: "https://i.ibb.co/xCqKgLF/2-of-clubs.png"
    },
    {
        id: 6,
        value: 2,
        img: "https://i.ibb.co/8NvggNL/2-of-diamonds.png"
    },
    {
        id: 7,
        value: 2,
        img: "https://i.ibb.co/JyRqY91/2-of-hearts.png"
    },
    {
        id: 8,
        value: 2,
        img: "https://i.ibb.co/jVFSTT0/2-of-spades.png"
    },
    {
        id: 9,
        value: 3,
        img: "https://i.ibb.co/PMj23MR/3-of-clubs.png"
    },
    {
        id: 10,
        value: 3,
        img: "https://i.ibb.co/8YwwC0y/3-of-diamonds.png"
    },
    {
        id: 11,
        value: 3,
        img: "https://i.ibb.co/NsDXf40/3-of-hearts.png"
    },
    {
        id: 12,
        value: 3,
        img: "https://i.ibb.co/1JyHRV0/3-of-spades.png"
    },
    {
        id: 13,
        value: 4,
        img: "https://i.ibb.co/x22hmMq/4-of-clubs.png"
    },
    {
        id: 14,
        value: 4,
        img: "https://i.ibb.co/5YPkHYT/4-of-diamonds.png"
    },
    {
        id: 15,
        value: 4,
        img: "https://i.ibb.co/tpFLXkY/4-of-hearts.png"
    },
    {
        id: 16,
        value: 4,
        img: "https://i.ibb.co/d5QW3QD/4-of-spades.png"
    },
    {
        id: 17,
        value: 5,
        img: "https://i.ibb.co/kBss7Hb/5-of-clubs.png"
    },
    {
        id: 18,
        value: 5,
        img: "https://i.ibb.co/9nmCnHy/5-of-diamonds.png"
    },
    {
        id: 19,
        value: 5,
        img: "https://i.ibb.co/K6WsnTJ/5-of-hearts.png"
    },
    {
        id: 20,
        value: 5,
        img: "https://i.ibb.co/jWhycgS/5-of-spades.png"
    },
    {
        id: 21,
        value: 6,
        img: "https://i.ibb.co/zPmqN7n/6-of-clubs.png"
    },
    {
        id: 22,
        value: 6,
        img: "https://i.ibb.co/SRfb0wh/6-of-diamonds.png"
    },
    {
        id: 23,
        value: 6,
        img: "https://i.ibb.co/sVs0Njh/6-of-hearts.png"
    },
    {
        id: 24,
        value: 6,
        img: "https://i.ibb.co/t4b0Wx4/6-of-spades.png"
    },
    {
        id: 25,
        value: 7,
        img: "https://i.ibb.co/8rbT2RM/7-of-clubs.png"
    },
    {
        id: 26,
        value: 7,
        img: "https://i.ibb.co/T8v3m3z/7-of-diamonds.png"
    },
    {
        id: 27,
        value: 7,
        img: "https://i.ibb.co/fpmg9YW/7-of-hearts.png"
    },
    {
        id: 28,
        value: 7,
        img: "https://i.ibb.co/chK7110/7-of-spades.png"
    },
    {
        id: 29,
        value: 8,
        img: "https://i.ibb.co/BrXG0C8/8-of-clubs.png"
    },
    {
        id: 30,
        value: 8,
        img: "https://i.ibb.co/FW6xqCL/8-of-diamonds.png"
    },
    {
        id: 31,
        value: 8,
        img: "https://i.ibb.co/87sYBhY/8-of-hearts.png"
    },
    {
        id: 32,
        value: 8,
        img: "https://i.ibb.co/yRvrHnG/8-of-spades.png"
    },
    {
        id: 33,
        value: 9,
        img: "https://i.ibb.co/dJrrRtj/9-of-clubs.png"
    },
    {
        id: 34,
        value: 9,
        img: "https://i.ibb.co/PhFWC0F/9-of-diamonds.png"
    },
    {
        id: 35,
        value: 9,
        img: "https://i.ibb.co/wrvqjMX/9-of-hearts.png"
    },
    {
        id: 36,
        value: 9,
        img: "https://i.ibb.co/DG1zyLj/9-of-spades.png"
    },
    {
        id: 37,
        value: 10,
        img: "https://i.ibb.co/chh6Cs5/10-of-clubs.png"
    },
    {
        id: 38,
        value: 10,
        img: "https://i.ibb.co/LJf7f9S/10-of-diamonds.png"
    },
    {
        id: 39,
        value: 10,
        img: "https://i.ibb.co/hcdBjQJ/10-of-hearts.png"
    },
    {
        id: 40,
        value: 10,
        img: "https://i.ibb.co/NTzTZvT/10-of-spades.png"
    },
    {
        id: 41,
        value: 10,
        img: "https://i.ibb.co/KmYBPfk/jack-of-clubs2.png"
    },
    {
        id: 42,
        value: 10,
        img: "https://i.ibb.co/Lg19xGx/jack-of-diamonds2.png"
    },
    {
        id: 43,
        value: 10,
        img: "https://i.ibb.co/YLFcdxm/jack-of-hearts2.png"
    },
    {
        id: 44,
        value: 10,
        img: "https://i.ibb.co/L5hsPH0/jack-of-spades2.png"
    },
    {
        id: 45,
        value: 10,
        img: "https://i.ibb.co/vkz4QWZ/queen-of-clubs2.png"
    },
    {
        id: 46,
        value: 10,
        img: "https://i.ibb.co/3MTrQVp/queen-of-diamonds2.png"
    },
    {
        id: 47,
        value: 10,
        img: "https://i.ibb.co/9tGCsDG/queen-of-hearts2.png"
    },
    {
        id: 48,
        value: 10,
        img: "https://i.ibb.co/g4pFqX2/queen-of-spades2.png"
    },
    {
        id: 49,
        value: 10,
        img: "https://i.ibb.co/fGWHh8Q/king-of-clubs2.png"
    },
    {
        id: 50,
        value: 10,
        img: "https://i.ibb.co/NF1N19T/king-of-diamonds2.png"
    },
    {
        id: 51,
        value: 10,
        img: "https://i.ibb.co/vQhbs5S/king-of-hearts2.png"
    },
    {
        id: 52,
        value: 10,
        img: "https://i.ibb.co/MC7PjcR/king-of-spades2.png"
    },
    
]

export default playingCards