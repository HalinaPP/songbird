const transportData = [
    {
        alias: 'publicTransport',
        title:'Общественный',
        elements:[
            {
                id: 1,
                name: 'Автобус',
                species: 'Bus',
                description: 'Авто́бус (сокращение от автомобиль-омнибус) —механическое моторное транспортное средство, предназначенное для перевозки пассажиров, приводимое в движение источником энергии, производимым из топлива.',
                image: '/images/public-transport/bus.jpg',
                audio: '/audio/public-transport/bus.mp3'
            },
            { 
                id: 2,
                name: 'Троллейбус',
                species: 'trolleybus',
                description: 'Описание2',
                image: '/images/public-transport/trolley-bus.jpg',
                audio: '/audio/public-transport/trolley-bus.mp3'

            },
            {
                id: 3,
                name: 'Метро',
                species: 'Subway',
                description: 'Описание',
                image: '/images/public-transport/subway.jpg',
                audio: '/audio/public-transport/subway.mp3'
            },
            {
                id: 4,
                name: 'Паром',
                species: 'Parom',
                description: 'Описание',
                image: '/images/public-transport/parom.jpg',
                audio: '/audio/public-transport/parom.mp3'
            },
            {
                id: 5,
                name: 'Пассажирский самолет',
                species: 'Plane',
                description: 'Описание',
                image: '/images/public-transport/plane.jpg',
                audio: '/audio/public-transport/plane.mp3'
            },
            {
                id: 6,
                name: 'Трамвай',
                species: 'Tramvai',
                description: 'Описание',
                image: '/images/public-transport/tramvai.jpg',
                audio: '/audio/public-transport/tramvai.mp3'
            }
        ]
    },

    {
        alias: 'waterTransport',
        title:'Водный',
        elements:[
            {
                id: 1,
                name: 'Водный мотоцикл',
                species: 'Jet ski',
                description: 'Описание',
                image: './images/water/water-bike.jpg',
                audio: './audio/water/water-bike.mp3'
            },
            {
                id: 2,
                name: 'Деревянная лодка с веслами',
                species: 'Wooden boat with oars',
                description: 'Описание',
                image: './images/water/wooden-boat.jpg',
                audio: './audio/water/wooden-boat.mp3'
            },
            {
                id: 3,
                name: 'Каяк',
                species: 'Кayak',
                description: 'Описание',
                image: './images/water/kayak-boat.jpg',
                audio: './audio/water/kayak-boat.mp3'
            },
            {
                id: 4,
                name: 'Моторная лодка',
                species: 'Motor boat',
                description: 'Описание',
                image: './images/water/boat-motornaya.jpg',
                audio: './audio/water/boat-motornaya.mp3'
            },
            {
                id: 5,
                name: 'Пароход',
                species: 'parahod',
                description: 'Описание',
                image: './images/water/parahod.jpg',
                audio: './audio/water/parahod.mp3'
            },
            {
                id: 6,
                name: 'Подлодка',
                species: 'Submarine',
                description: 'Описание',
                image: './images/water/podlodka.jpg',
                audio: './audio/water/podlodka.mp3'
            },
           
        ]
    },
    {
        alias: 'railwayTransport',
        title:'Железнодорожный',
        elements:[
            {
                id: 1,
                name: 'Игрушечный поезд',
                species: 'Toy train',
                description: 'Описание',
                image: './images/railway/toy-train.jpg',
                audio: './audio/railway/toy-train.mp3'
            },
            {
                id: 2,
                name: 'Метро',
                species: 'Subway',
                description: 'Описание',
                image: './images/railway/metro.jpg',
                audio: './audio/railway/metro.mp3'
            },
            {
                id: 3,
                name: 'Паровоз',
                species: 'Locomotive',
                description: 'Описание',
                image: './images/railway/old-poezd.jpg',
                audio: './audio/railway/old-poezd.mp3'
            },
            {
                id: 4,
                name: 'Пассажирский поезд',
                species: 'Passenger train',
                description: 'Описание',
                image: './images/railway/passazir-poezd.jpg',
                audio: './audio/railway/passazir-poezd.mp3'
            },
            {
                id: 5,
                name: 'Товарный поезд',
                species: 'Freight train',
                description: 'Описание',
                image: './images/railway/tovarniy-poezd.jpg',
                audio: './audio/railway/tovarniy-poezd.mp3'
            },
           
            {
                id: 6,
                name: 'Электричка',
                species: 'Electric train',
                description: 'Описание',
                image: './images/railway/elektrichka.jpg',
                audio: './audio/railway/elektrichka.mp3'
            }
        ]
    },
    {
        alias: 'airTransport',
        title:'Воздушный',
        elements:[
            {
                id: 1,
                name: 'Вертолет',
                species: 'Helikopter',
                description: 'Описание',
                image: './images/air/helikopter.jpg',
                audio: './audio/air/helikopter.mp3'
            },
            {
                id: 2,
                name: 'Воздушный шар',
                species: 'Air baloon',
                description: 'Описание',
                image: './images/air/air-baloon.jpg',
                audio: './audio/air/air-baloon.mp3'
            },
            {
                id: 3,
                name: 'Машина будущего',
                species: 'Car of the future',
                description: 'Описание',
                image: './images/air/future-car.jpg',
                audio: './audio/air/future-car.mp3'
            },
            {
                id: 4,
                name: 'Пассажирский самолет',
                species: 'Passenger plane',
                description: 'Описание',
                image: './images/air/plane.jpg',
                audio: './audio/air/plane.mp3'
            },
            {
                id: 5,
                name: 'Ракета',
                species: 'Rocket',
                description: 'Описание',
                image: './images/air/raketa.jpg',
                audio: './audio/air/raketa.mp3'
            },
            {
                id: 6,
                name: 'Самолет-истребитель',
                species: 'Fighter aircraft',
                description: 'Описание',
                image: './images/air/istrebitel.jpg',
                audio: './audio/air/istrebitel.mp3'
            }
       ]
    },
    {
        alias: 'twoWheelerTransport',
        title: 'Двухколесный',
        elements:[
            {
                id: 1,
                name: 'Велосипед',
                species: 'Bicycle',
                description: 'Описание',
                image: './images/two-wheelers/bicycle.jpg',
                audio: './audio/two-wheelers/bicycle.mp3'
            },
            {
                id: 2,
                name: 'Мопед',
                species: 'Moped',
                description: 'Описание',
                image: './images/two-wheelers/moped.jpg',
                audio: './audio/two-wheelers/moped.mp3'
            },
            {
                id: 3,
                name: 'Мотоцикл',
                species: 'Motorbike',
                description: 'Описание',
                image: './images/two-wheelers/bike.jpg',
                audio: './audio/two-wheelers/bike.mp3'
            },
            {
                id: 4,
                name: 'Питбайк',
                species: 'Pitbike',
                description: 'Описание',
                image: './images/two-wheelers/pitbyke.jpg',
                audio: './audio/two-wheelers/pitbyke.mp3'
            },
            {
                id: 5,
                name: 'Самокат',
                species: 'Kick scooter',
                description: 'Описание',
                image: './images/two-wheelers/samokat.jpg',
                audio: './audio/two-wheelers/samokat.mp3'
            },
            {
                id: 6,
                name: 'Спортивный мотоцикл',
                species: 'Sport bike',
                description: 'Описание',
                image: './images/two-wheelers/sport-bike.jpg',
                audio: './audio/two-wheelers/sport-bike.mp3'
            }
        ]
    },
    {
        alias: 'variousTransport',
        title:'Четырехколесный',
        elements:[
            {
                id: 1,
                name: 'Автомобиль',
                species: 'Car',
                description: 'Описание',
                image: './images/various/car.jpg',
                audio: './audio/various/car.mp3'
            },
            {
                id: 2,
                name: 'Картинг',
                species: 'Karting',
                description: 'Описание',
                image: './images/various/karting.jpg',
                audio: './audio/various/karting.mp3'
            },
            {
                id: 3,
                name: 'Повозка с лошадью',
                species: 'Horse carriage',
                description: 'Описание',
                image: './images/various/horse-povozka.jpg',
                audio: './audio/various/horse-povozka.mp3'
            },
            {
                id: 4,
                name: 'Скейтбоард',
                species: 'Skateboard',
                description: 'Описание',
                image: './images/various/skeitboard.jpg',
                audio: './audio/various/skeitboard.mp3'
            },
            {
                id: 5,
                name: 'Трактор',
                species: 'Tractor',
                description: 'Описание',
                image: './images/various/tractor.jpg',
                audio: './audio/various/tractor.mp3'
            },
            {
                id: 6,
                name: 'Электро автомобиль',
                species: 'Electro car',
                description: 'Описание',
                image: './images/various/electro-car.jpg',
                audio: './audio/various/electro-car.mp3'
            }
        ]
    }
];

export default transportData;