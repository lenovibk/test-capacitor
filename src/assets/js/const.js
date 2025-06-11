const MainMenuType = {
    VOCA: "voca",
    PRACTICE: "practice",
    GAME: "game",
    VIDEO: "video",
    STORY: "story"
}
const mainScreenMenus = [
    {
        name: MainMenuType.VOCA,
        featureImage: 'assets/img/main-menu/hoc-tap.png',
        description: 'Học bài'
    },
    {
        name: MainMenuType.PRACTICE,
        featureImage: 'assets/img/main-menu/kiem-tra.png',
        description: 'Kiểm tra'
    },
    {
        name: MainMenuType.TRO_CHOI,
        featureImage: 'assets/img/main-menu/tro-choi.png',
        description: 'Trò chơi'
    },
    {
        name: MainMenuType.VIDEO,
        featureImage: 'assets/img/main-menu/xem-video.png',
        description: 'Video'
    },
    {
        name: MainMenuType.STORY,
        featureImage: 'assets/img/main-menu/ke-truyen.png',
        description: 'Kể truyện'
    }
];

const topics = [
    {
        name: 'colors',
        featureImage: 'topic/mau-sac.png',
        description: 'Màu sắc',
        type: 'test-flashcard-choice',
        items: [
            {
                name: 'red',
                audioFile: 'topic/color/red/red.mp3',
                description: 'Màu đỏ',
                image: 'topic/color/red/red.jpg',
                ref: [{
                    name: 'red',
                    audioFile: 'topic/color/red/red.mp3',
                    description: 'Màu đỏ',
                    image: 'topic/color/red/red.jpg'
                }]
            },
            {
                name: 'yellow',
                audioFile: 'topic/color/yellow/yellow.mp3',
                description: 'Màu vàng',
                image: 'topic/color/yellow/yellow.jpg'
            },
            {
                name: 'orange',
                audioFile: 'topic/color/orange/orange.mp3',
                description: 'Màu cam',
                image: 'topic/color/orange/orange.jpg'
            },
            {
                name: 'purple',
                audioFile: 'topic/color/purple/purple.mp3',
                description: 'Màu tím',
                image: 'topic/color/purple/purple.jpg'
            },
            {
                name: 'green',
                audioFile: 'topic/color/green/green.mp3',
                description: 'Màu xanh lá cây',
                image: 'topic/color/green/green.jpg'
            },
            {
                name: 'blue',
                audioFile: 'topic/color/blue/blue.mp3',
                description: 'Màu xanh nước biển',
                image: 'topic/color/blue/blue.jpg'
            },
            {
                name: 'pink',
                audioFile: 'topic/color/pink/pink.mp3',
                description: 'Màu hồng',
                image: 'topic/color/pink/pink.jpg'
            },
            {
                name: 'black',
                audioFile: 'topic/color/black/black.mp3',
                description: 'Màu đen',
                image: 'topic/color/black/black.jpg'
            }
        ]
    },
    {
        name: 'shapes',
        featureImage: 'topic/hinh-dang.png',
        description: 'Hình dạng',
        type: 'test-flashcard-choice',
        items: [
            {
                name: 'tron',
                audioFile: 'topic/shape/tron.mp3',
                description: 'Hình tròn',
                image: 'topic/shape/tron.jpg'
            },
            {
                name: 'vuong',
                audioFile: 'topic/shape/vuong.mp3',
                description: 'Hình vuông',
                image: 'topic/shape/vuong.jpg'
            },
            {
                name: 'traitim',
                audioFile: 'topic/shape/traitim.mp3',
                description: 'Hình trái tim',
                image: 'topic/shape/traitim.jpg'
            },
            {
                name: 'chunhat',
                audioFile: 'topic/shape/chunhat.mp3',
                description: 'Hình chữ nhật',
                image: 'topic/shape/chunhat.jpg'
            },
            {
                name: 'ovan',
                audioFile: 'topic/shape/ovan.mp3',
                description: 'Hình ovan',
                image: 'topic/shape/ovan.jpg'
            },
            {
                name: 'thoi',
                audioFile: 'topic/shape/thoi.mp3',
                description: 'Hình thoi',
                image: 'topic/shape/thoi.jpg'
            },
            {
                name: 'ngoisao',
                audioFile: 'topic/shape/ngoisao.mp3',
                description: 'Hình ngôi sao',
                image: 'topic/shape/ngoisao.jpg'
            },
            {
                name: 'tamgiac',
                audioFile: 'topic/shape/tamgiac.mp3',
                description: 'Hình tam giác',
                image: 'topic/shape/tamgiac.jpg'
            }
        ]
    },
    {
        name: 'letter',
        featureImage: 'topic/chu-cai.png',
        description: 'Chữ cái',
        type: 'flashcard',
        items: [
            {
                name: 'a',
                audioFile: 'topic/letter/a/a.mp3',
                description: 'Chữ A',
                image: 'topic/letter/a/a.png'
            },
            {
                name: 'ă',
                audioFile: 'topic/letter/ă/ă.mp3',
                description: 'Chữ Ă',
                image: 'topic/letter/ă/ă.png'
            },
            {
                name: 'â',
                audioFile: 'topic/letter/â/â.mp3',
                description: 'Chữ Â',
                image: 'topic/letter/â/â.png'
            },
            {
                name: 'b',
                audioFile: 'topic/letter/b/b.mp3',
                description: 'Chữ B',
                image: 'topic/letter/b/b.png'
            },
            {
                name: 'c',
                audioFile: 'topic/letter/c/c.mp3',
                description: 'Chữ C',
                image: 'topic/letter/c/c.png'
            },
            {
                name: 'd',
                audioFile: 'topic/letter/d/d.mp3',
                description: 'Chữ D',
                image: 'topic/letter/d/d.png'
            },
            {
                name: 'đ',
                audioFile: 'topic/letter/đ/đ.mp3',
                description: 'Chữ Đ',
                image: 'topic/letter/đ/đ.png'
            },
            {
                name: 'e',
                audioFile: 'topic/letter/e/e.mp3',
                description: 'Chữ E',
                image: 'topic/letter/e/e.png'
            },
            {
                name: 'ê',
                audioFile: 'topic/letter/ê/ê.mp3',
                description: 'Chữ Ê',
                image: 'topic/letter/ê/ê.png'
            },
            {
                name: 'g',
                audioFile: 'topic/letter/g/g.mp3',
                description: 'Chữ G',
                image: 'topic/letter/g/g.png'
            },
            {
                name: 'h',
                audioFile: 'topic/letter/h/h.mp3',
                description: 'Chữ H',
                image: 'topic/letter/h/h.png'
            },
            {
                name: 'i',
                audioFile: 'topic/letter/i/i.mp3',
                description: 'Chữ I',
                image: 'topic/letter/i/i.png'
            },
            {
                name: 'k',
                audioFile: 'topic/letter/k/k.mp3',
                description: 'Chữ K',
                image: 'topic/letter/k/k.png'
            },
            {
                name: 'l',
                audioFile: 'topic/letter/l/l.mp3',
                description: 'Chữ L',
                image: 'topic/letter/l/l.png'
            },
            {
                name: 'm',
                audioFile: 'topic/letter/m/m.mp3',
                description: 'Chữ M',
                image: 'topic/letter/m/m.png'
            },
            {
                name: 'n',
                audioFile: 'topic/letter/n/n.mp3',
                description: 'Chữ N',
                image: 'topic/letter/n/n.png'
            },
            {
                name: 'o',
                audioFile: 'topic/letter/o/o.mp3',
                description: 'Chữ O',
                image: 'topic/letter/o/o.png'
            },
            {
                name: 'ô',
                audioFile: 'topic/letter/ô/ô.mp3',
                description: 'Chữ Ô',
                image: 'topic/letter/ô/ô.png'
            },
            {
                name: 'ơ',
                audioFile: 'topic/letter/ơ/ơ.mp3',
                description: 'Chữ Ơ',
                image: 'topic/letter/ơ/ơ.png'
            },
            {
                name: 'p',
                audioFile: 'topic/letter/p/p.mp3',
                description: 'Chữ P',
                image: 'topic/letter/p/p.png'
            },
            {
                name: 'q',
                audioFile: 'topic/letter/q/q.mp3',
                description: 'Chữ Q',
                image: 'topic/letter/q/q.png'
            },
            {
                name: 'r',
                audioFile: 'topic/letter/r/r.mp3',
                description: 'Chữ R',
                image: 'topic/letter/r/r.png'
            },
            {
                name: 's',
                audioFile: 'topic/letter/s/s.mp3',
                description: 'Chữ S',
                image: 'topic/letter/s/s.png'
            },
            {
                name: 't',
                audioFile: 'topic/letter/t/t.mp3',
                description: 'Chữ T',
                image: 'topic/letter/t/t.png'
            },
            {
                name: 'u',
                audioFile: 'topic/letter/u/u.mp3',
                description: 'Chữ U',
                image: 'topic/letter/u/u.png'
            },
            {
                name: 'ư',
                audioFile: 'topic/letter/ư/ư.mp3',
                description: 'Chữ Ư',
                image: 'topic/letter/ư/ư.png'
            },
            {
                name: 'v',
                audioFile: 'topic/letter/v/v.mp3',
                description: 'Chữ V',
                image: 'topic/letter/v/v.png'
            },
            {
                name: 'x',
                audioFile: 'topic/letter/x/x.mp3',
                description: 'Chữ X',
                image: 'topic/letter/x/x.png'
            },
            {
                name: 'y',
                audioFile: 'topic/letter/y/y.mp3',
                description: 'Chữ Y',
                image: 'topic/letter/y/y.png'
            }
        ]
    },
    {
        name: 'number',
        featureImage: 'topic/so-dem.png',
        description: 'Chữ số',
        type: 'flashcard',
        items: [
            {
                name: '0',
                audioFile: 'topic/number/0/0.mp3',
                description: 'Số không',
                image: 'topic/number/0/0.png'
            },
            {
                name: '1',
                audioFile: 'topic/number/1/1.mp3',
                description: 'Số một',
                image: 'topic/number/1/1.png'
            },
            {
                name: '2',
                audioFile: 'topic/number/2/2.mp3',
                description: 'Số hai',
                image: 'topic/number/2/2.png'
            },
            {
                name: '3',
                audioFile: 'topic/number/3/3.mp3',
                description: 'Số ba',
                image: 'topic/number/3/3.png'
            },
            {
                name: '4',
                audioFile: 'topic/number/4/4.mp3',
                description: 'Số bốn',
                image: 'topic/number/4/4.png'
            },
            {
                name: '5',
                audioFile: 'topic/number/5/5.mp3',
                description: 'Số năm',
                image: 'topic/number/5/5.png'
            },
            {
                name: '6',
                audioFile: 'topic/number/6/6.mp3',
                description: 'Số sáu',
                image: 'topic/number/6/6.png'
            },
            {
                name: '7',
                audioFile: 'topic/number/7/7.mp3',
                description: 'Số bảy',
                image: 'topic/number/7/7.png'
            },
            {
                name: '8',
                audioFile: 'topic/number/8/8.mp3',
                description: 'Số tám',
                image: 'topic/number/8/8.png'
            },
            {
                name: '9',
                audioFile: 'topic/number/9/9.mp3',
                description: 'Số chín',
                image: 'topic/number/9/9.png'
            }
        ]
    },
    {
        name: 'body',
        featureImage: 'topic/co-the.png',
        description: 'Cơ thể',
        type: 'flashcard',
        items: []
    },
    {
        name: 'fruit',
        featureImage: 'topic/trai-cay.png',
        description: 'Trái cây',
        type: 'flashcard',
        items: []
    },
    {
        name: 'traffic',
        featureImage: 'topic/phuong-tien.png',
        description: 'Loại xe',
        type: 'flashcard',
        items: []
    },
    {
        name: 'sport',
        featureImage: 'topic/the-thao.png',
        description: 'Thể thao',
        type: 'flashcard',
        items: []
    },
    {
        name: 'work',
        featureImage: 'topic/nghe-nghiep.png',
        description: 'Nghề nghiệp',
        type: 'flashcard',
        items: []
    },
    {
        name: 'tool',
        featureImage: 'topic/dung-cu.png',
        description: 'Dụng cụ',
        type: 'flashcard',
        items: []
    },
    {
        name: 'closther',
        featureImage: 'topic/quan-ao.png',
        description: 'Quần áo',
        type: 'flashcard',
        items: []
    },
    {
        name: 'animal',
        featureImage: 'topic/dong-vat.png',
        description: 'Động vật',
        type: 'flashcard',
        items: []
    }
];