const shuffle = arr => arr.sort(() => 0.5 - Math.random());

export default {
    hotel: [
        {
            title: 'Отель какое-то название',
            subtitle: 'Подзаголовок',
            description: shuffle(`Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sapiente ipsa quam,
            doloremque sit eaque. Provident nisi deleniti nulla,
            officia illo? Hic minus voluptas, eveniet aspernatur!
            Vel recusandae, temporibus nobis nihil.`.split(' ')).join(' '),
            photos: ['1.jpg', '2.jpg', '3.jpg'],
            phone: '8 (924) 234-23-43'
        },
        {
            title: 'Отель',
            subtitle: 'Подзаголовок',
            description: shuffle(`Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sapiente ipsa quam,
            doloremque sit eaque. Provident nisi deleniti nulla,
            officia illo? Hic minus voluptas, eveniet aspernatur!
            Vel recusandae, temporibus nobis nihil.`.split(' ')).join(' '),
            photos: ['4.jpeg'],
            phone: '8 (944) 234-13-56'
        },
        {
            title: 'Отель 2',
            subtitle: 'Подзаголовок',
            description: shuffle(`Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sapiente ipsa quam,
            doloremque sit eaque. Provident nisi deleniti nulla,
            officia illo? Hic minus voluptas, eveniet aspernatur!
            Vel recusandae, temporibus nobis nihil.`.split(' ')).join(' '),
            phone: '8 (985) 123-54-43'
        }
    ],
    fishing: [],
    tours: [
        {
            title: 'Тур',
            subtitle: '',
            description: "Еще один тур",
            photos: ['2.jpg', '5.jpg'],
            phone: '8 234 234-33-22'
        }
    ],
    weather: []
};