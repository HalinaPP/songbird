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
                description: 'Тролле́йбус — (англ. trolleybus) безрельсовое механическое транспортное средство с электрическим приводом, получающее электрический ток через двухпроводную контактную сеть с помощью токоприёмника',
                image: '/images/public-transport/trolley-bus.jpg',
                audio: '/audio/public-transport/trolley-bus.mp3'

            },
            {
                id: 3,
                name: 'Метро',
                species: 'Subway',
                description: 'Метро(Метрополитен)-(фр. métropolitain) подземная или наземная городская железная дорога, отделённая от другого транспорта и пешеходного движения и предназначенная для пассажирского движения',
                image: '/images/public-transport/subway.jpg',
                audio: '/audio/public-transport/subway.mp3'
            },
            {
                id: 4,
                name: 'Паром',
                species: 'Parom',
                description: 'Паро́м — плавсредство, используемое для перевозки пассажиров и транспортных средств между двумя берегами водной преграды (реки, озера, пролива и даже моря).',
                image: '/images/public-transport/parom.jpg',
                audio: '/audio/public-transport/parom.mp3'
            },
            {
                id: 5,
                name: 'Пассажирский самолет',
                species: 'Plane',
                description: 'Пассажирский самолёт — самолёт, предназначенный и оборудованный для перевозки пассажиров и багажа.',
                image: '/images/public-transport/plane.jpg',
                audio: '/audio/public-transport/plane.mp3'
            },
            {
                id: 6,
                name: 'Трамвай',
                species: 'Tramvai',
                description: 'Трамва́й - (от англ. tram — вагон,  way — путь) наземная электрическая железная дорога, а также вагон или поезд этой железной для перевозки пассажиров',
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
                description: 'Водный мотоцикл (Гидроци́кл) — скоростное персональное водное транспортное средство со стационарным двигателем внутреннего сгорания, предназначенное для движения по водной поверхности.',
                image: './images/water/water-bike.jpg',
                audio: './audio/water/water-bike.mp3'
            },
            {
                id: 2,
                name: 'Деревянная лодка с веслами',
                species: 'Wooden boat with oars',
                description: 'Деревянная лодка - судно изготовленное из древесины и предназначенное для передвижения по воде с помощью весел или навесного мотора.',
                image: './images/water/wooden-boat.jpg',
                audio: './audio/water/wooden-boat.mp3'
            },
            {
                id: 3,
                name: 'Каяк',
                species: 'Кayak',
                description: 'Кая́к — (от qai — «покрытая») и алеутского языка: Iqyax (игах)- тип гребной одно-, двух- или трёхместной традиционной промысловой лодки народов Арктики. ',
                image: './images/water/kayak-boat.jpg',
                audio: './audio/water/kayak-boat.mp3'
            },
            {
                id: 4,
                name: 'Моторная лодка',
                species: 'Motor boat',
                description: 'Мото́рная ло́дка — маломерное судно, оборудованное легкосъёмным подвесным мотором.',
                image: './images/water/boat-motornaya.jpg',
                audio: './audio/water/boat-motornaya.mp3'
            },
            {
                id: 5,
                name: 'Пароход',
                species: 'parahod',
                description: 'Парохо́д — судно, оснащённое поршневой паровой машиной или паровой турбиной в качестве тягового двигателя.',
                image: './images/water/parahod.jpg',
                audio: './audio/water/parahod.mp3'
            },
            {
                id: 6,
                name: 'Подлодка',
                species: 'Submarine',
                description: 'Подво́дная ло́дка (подло́дка, субмари́на) — класс кораблей, способных погружаться и длительное время действовать в подводном положении.',
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
                description: 'Игрушечный поезд - (игрушечная железная дорога) представляет собой уменьшенную имитацию реального поезда. Обычно представляет собой локомотив с несколькими вагонами',
                image: './images/railway/toy-train.jpg',
                audio: './audio/railway/toy-train.mp3'
            },
            {
                id: 2,
                name: 'Метро',
                species: 'Subway',
                description: 'Метро(Метрополитен)-(фр. métropolitain) подземная или наземная городская железная дорога, отделённая от другого транспорта и пешеходного движения и предназначенная для пассажирского движения.',
                image: './images/railway/metro.jpg',
                audio: './audio/railway/metro.mp3'
            },
            {
                id: 3,
                name: 'Паровоз',
                species: 'Locomotive',
                description: 'Парово́з — автономный локомотив с паросиловой установкой, использующий в качестве двигателя паровые машины. Паровозы были первыми передвигающимися по рельсам транспортными средствами.',
                image: './images/railway/old-poezd.jpg',
                audio: './audio/railway/old-poezd.mp3'
            },
            {
                id: 4,
                name: 'Пассажирский поезд',
                species: 'Passenger train',
                description: 'Пассажирский поезд — поезд, состоящий из пассажирских вагонов и служащий для перевозки людей и багажа.',
                image: './images/railway/passazir-poezd.jpg',
                audio: './audio/railway/passazir-poezd.mp3'
            },
            {
                id: 5,
                name: 'Товарный поезд',
                species: 'Freight train',
                description: 'Товарный поезд-группа грузовых вагонов во главе с локомотивом, предназначенные для перевозки грузов. Устаревшее название — товарный поезд, в просторечии товарняк.',
                image: './images/railway/tovarniy-poezd.jpg',
                audio: './audio/railway/tovarniy-poezd.mp3'
            },
           
            {
                id: 6,
                name: 'Электричка',
                species: 'Electric train',
                description: 'Электропо́езд (разг. электричка) — разновидность неавтономного моторвагонного подвижного состава, получающего энергию, как правило, от внешней контактной сети с помощью токоприёмников.',
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
                description: 'Вертолёт —летательный аппарат вертикального взлёта и посадки, у которого подъёмная и движущая силы на всех этапах полёта создаются одним или несколькими несущими винтами с приводом от двигателей.',
                image: './images/air/helikopter.jpg',
                audio: './audio/air/helikopter.mp3'
            },
            {
                id: 2,
                name: 'Воздушный шар',
                species: 'Air baloon',
                description: 'Возду́шный шар — летательный аппарат (аэростат), в котором для полёта используется газ, который легче воздуха. Состоит из заполненной газом оболочки и прикреплённой к ней корзины.',
                image: './images/air/air-baloon.jpg',
                audio: './audio/air/air-baloon.mp3'
            },
            {
                id: 3,
                name: 'Машина будущего',
                species: 'Car of the future',
                description: 'Машина будующего-концептуальное или проектируемое транспортное средство, отличающееся принципиально другим способом движения и конструкцией.',
                image: './images/air/future-car.jpg',
                audio: './audio/air/future-car.mp3'
            },
            {
                id: 4,
                name: 'Пассажирский самолет',
                species: 'Passenger plane',
                description: 'Пассажирский самолёт — самолёт, предназначенный и оборудованный для перевозки пассажиров и багажа.',
                image: './images/air/plane.jpg',
                audio: './audio/air/plane.mp3'
            },
            {
                id: 5,
                name: 'Ракета',
                species: 'Rocket',
                description: 'Раке́та (от итал. rocchetta — маленькое веретено) — летательный аппарат, двигающийся в пространстве за счёт действия реактивной тяги, вследствие отброса части собственной массы аппарата.',
                image: './images/air/raketa.jpg',
                audio: './audio/air/raketa.mp3'
            },
            {
                id: 6,
                name: 'Самолет-истребитель',
                species: 'Fighter aircraft',
                description: 'Военный истребитель-боевой самолёт для истребления авиации и беспилотных средств противника.',
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
                description: 'Велосипе́д (от лат. vēlōx «быстрый» и pes «нога») — колёсное транспортное средство (или спортивный снаряд), приводимое в движение мускульной силой человека через ножные педали.',
                image: './images/two-wheelers/bicycle.jpg',
                audio: './audio/two-wheelers/bicycle.mp3'
            },
            {
                id: 2,
                name: 'Мопед',
                species: 'Moped',
                description: 'Мопе́д — транспортное средство с двигателем внутреннего сгорания рабочим объёмом не более 50 кубических сантиметров (так же электродвигателем, или мотор-колесом мощностью от 250 Вт до 4 кВт)',
                image: './images/two-wheelers/moped.jpg',
                audio: './audio/two-wheelers/moped.mp3'
            },
            {
                id: 3,
                name: 'Мотоцикл',
                species: 'Motorbike',
                description: 'Мотоци́кл - (франц. motocycle от мото... и греч. kýklos - колесо) Самодвижущаяся двухколёсная машина с двигателем внутреннего сгорания, расположенным впереди седла.',
                image: './images/two-wheelers/bike.jpg',
                audio: './audio/two-wheelers/bike.mp3'
            },
            {
                id: 4,
                name: 'Питбайк',
                species: 'Pitbike',
                description: 'Питбайк (англ. pitbike) — это разновидность мини-мотоцикла, пригодного для внедорожной (эндуро, мотокросса) или дорожной (например стантрайдинг, супермото) езды в зависимости от комплектации.',
                image: './images/two-wheelers/pitbyke.jpg',
                audio: './audio/two-wheelers/pitbyke.mp3'
            },
            {
                id: 5,
                name: 'Самокат',
                species: 'Kick scooter',
                description: 'Самокат—средство передвижения, представляющее планку на колёсах с приделанной к ней ручкой, приводимое в движение путём отталкивания ногой от земли в положении стоя.',
                image: './images/two-wheelers/samokat.jpg',
                audio: './audio/two-wheelers/samokat.mp3'
            },
            {
                id: 6,
                name: 'Спортивный мотоцикл',
                species: 'Sport bike',
                description: 'Спортивные мотоциклы(спортбайк) предназначены для участия в спортивных соревнования (гонках).Они используются на абсолютно ровных, почти идеально гладких и чистых дорогах. ',
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
                description: 'Легковой автомобиль (жарг. легковушка) — автомобиль, предназначенный для перевозки пассажиров и багажа, вместимостью от 2 до 8 человек.',
                image: './images/various/car.jpg',
                audio: './audio/various/car.mp3'
            },
            {
                id: 2,
                name: 'Картинг',
                species: 'Karting',
                description: 'Карт(Ка́ртинг) — простейшие гоночные автомобили без кузова.',
                image: './images/various/karting.jpg',
                audio: './audio/various/karting.mp3'
            },
            {
                id: 3,
                name: 'Повозка с лошадью',
                species: 'Horse carriage',
                description: 'Пово́зка— транспортное средство, предназначенное для перемещения по твёрдой поверхности грузов или пассажиров с использованием силы мускулов животных или человека.',
                image: './images/various/horse-povozka.jpg',
                audio: './audio/various/horse-povozka.mp3'
            },
            {
                id: 4,
                name: 'Скейтбоард',
                species: 'Skateboard',
                description: 'Скейтбо́рд (англ. skateboard —роликовая доска) — доска, состоящая из фанеры, которая содержит несколько слоёв шпона, установленная на колёса небольшого диаметра (ролики). Может использоваться в качестве транспортного средства.',
                image: './images/various/skeitboard.jpg',
                audio: './audio/various/skeitboard.mp3'
            },
            {
                id: 5,
                name: 'Трактор',
                species: 'Tractor',
                description: 'Тра́ктор (англ. tractor «тягач») — самодвижущаяся машина, выполняющая сельскохозяйственные, и другие работы в агрегате с прицепными, навесными или стационарными машинами (орудиями).',
                image: './images/various/tractor.jpg',
                audio: './audio/various/tractor.mp3'
            },
            {
                id: 6,
                name: 'Электро автомобиль',
                species: 'Electro car',
                description: 'Электромобиль — автомобиль, приводимый в движение одним или несколькими электродвигателями с питанием от независимого источника, а не двигателем внутреннего сгорания.',
                image: './images/various/electro-car.jpg',
                audio: './audio/various/electro-car.mp3'
            }
        ]
    }
];

export default transportData;