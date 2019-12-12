



const dormImg = {
    'Hinton James': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Hinton_James_Residence_Hall_at_UNC.jpg',
    'Craige': 'http://reslife.web.unc.edu/files/2015/05/DSC_0139-e1433128672176.jpg',
    'Hardin': 'http://reslife.web.unc.edu/files/2015/06/Hardin.jpg',
    'Horton': 'http://reslife.web.unc.edu/files/2015/06/Horton.jpg',
    'Rams Village 1-3': 'https://pbs.twimg.com/profile_images/786619162042966016/cQ1ZtqS5_400x400.jpg',
    'Rams Village 4-5': 'https://snworksceo.imgix.net/dth/3e406ca7-b73f-4a62-8466-5120fd83aac7.sized-1000x1000.JPG?w=1000',
    'Carmichael': 'https://snworksceo.imgix.net/dth/d03be0b6-7d47-4c88-b778-b1d82953103b.sized-1000x1000.jpg?w=1000',
    'Granville': 'https://www.newsobserver.com/latest-news/u9jtvh/picture236067933/alternates/FREE_1140/Granville%20Towers.JPEG',
    'Old West': 'https://blogs.lib.unc.edu/ncm/wp-content/uploads/2018/10/Old_West_Final_View.jpg'
}


const dormsArr = [
    //kenan community
    {
        name: 'kenan',
        rating: '4.5/5.0',
        coordinate: [-79.04752, 35.91459],

    },
    {
        name: 'Alderman',
        rating: '4.2/5.0',
        coordinate: [-79.04821, 35.91474],

    },
    {
        name: 'Mclver',
        rating: '4.2/5.0',
        coordinate: [-79.04782, 35.91405],

    },
    {
        name: 'Spencer',
        rating: '4.2/5.0',
        coordinate: [-79.04942, 35.915],

    },

    //lowerquad community
    {
        name: 'Aycock',
        rating: '4.2/5.0',
        coordinate: [-79.04712, 35.91284],
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Hinton_James_Residence_Hall_at_UNC.jpg'

    },
    {
        name: 'Graham',
        rating: '4.2/5.0',
        coordinate: [-79.04659, 35.91304],

    },
    {
        name: 'Stacy',
        rating: '4.2/5.0',
        coordinate: [-79.046, 35.9129]

    },
    {
        name: 'Everett',
        rating: '4.2/5.0',
        coordinate: [-79.04628, 35.91266],
    },
    {
        name: 'Lewis',
        rating: '4.2/5.0',
        coordinate: [-79.0469, 35.9124],
    },

    //Cobb
    {
        name: 'Cobb',
        rating: '4.2/5.0',
        coordinate: [-79.04479, 35.91242],
    },

    //Conner Community
    {
        name: 'Joyner',
        rating: '4.2/5.0',
        coordinate: [-79.04673, 35.91174],
    },
    {
        name: 'Alexander',
        rating: '4.2/5.0',
        coordinate: [-79.04635, 35.91137],
    },
    {
        name: 'Connor',
        rating: '4.2/5.0',
        coordinate: [-79.04607, 35.91087],
    },
    {
        name: 'Winston',
        rating: '4.2/5.0',
        coordinate: [-79.04604, 35.91037],
    },

    //Olde Campus Upper Quad
    {
        name: 'Manly',
        rating: '4.2/5.0',
        coordinate: [-79.04791, 35.91268],
    },
    {
        name: 'Mangum',
        rating: '4.2/5.0',
        coordinate: [-79.04755, 35.91203],
    },
    {
        name: 'Ruffin',
        rating: '4.2/5.0',
        coordinate: [-79.0481, 35.91183],
    },
    {
        name: 'Grimes',
        rating: '4.2/5.0',
        coordinate: [-79.0485, 35.91245],
    },
    {
        name: 'Old East',
        rating: '4.2/5.0',
        coordinate: [-79.05084, 35.9124],
    },
    {
        name: 'Old West',
        rating: '4.2/5.0',
        coordinate: [-79.05178, 35.91198],
    },

    //Carmichael
    {
        name: 'Carmichael',
        rating: '4.2/5.0',
        coordinate: [-79.04601, 35.90832],
    },

    //Parker Community
    {
        name: 'Teague',
        rating: '4.2/5.0',
        coordinate: [-79.04499, 35.90764],
    },
    {
        name: 'Parker',
        rating: '4.2/5.0',
        coordinate: [-79.04443, 35.90701],
    },
    {
        name: 'Avery',
        rating: '4.2/5.0',
        coordinate: [-79.04422, 35.90625],
    },

    //Ehaus
    {
        name: 'Ehringhaus',
        rating: '4.2/5.0',
        coordinate: [-79.04288, 35.90436],
    },

    //Manning East: Koury + Horton
    {
        name: 'Koury',
        rating: '4.2/5.0',
        coordinate: [-79.04341, 35.90355],
    },
    {
        name: 'Horton',
        rating: '4.2/5.0',
        coordinate: [-79.0436, 35.90312],
    },

    //Hinton James
    {
        name: 'Hinton James',
        rating: '4.2/5.0',
        coordinate: [-79.04318, 35.90243],
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Hinton_James_Residence_Hall_at_UNC.jpg'

    },

    //Craige
    {
        name: 'Craige',
        rating: '4.2/5.0',
        coordinate: [-79.04508, 35.90277],
    },

    //Morrison
    {
        name: 'Morrison',
        rating: '4.2/5.0',
        coordinate: [-79.04618, 35.90456],
    },

    //Manning West: Hardin + Craige North
    {
        name: 'Hardin',
        rating: '4.2/5.0',
        coordinate: [-79.04604, 35.90399],
    },
    {
        name: 'Craige North',
        rating: '4.2/5.0',
        coordinate: [-79.04561, 35.90356],
    },

    //Rams
    {
        name: 'Rams Village 1-3',
        rating: '4.2/5.0',
        coordinate: [-79.04627, 35.90216],
    },

    {
        name: 'Rams Village 4-5',
        rating: '4.2/5.0',
        coordinate: [-79.0429, 35.90165],
    },

]



    // var kenanCommunity = {
    //     type: "polygon",
    //     rings: [
    //         [-79.04996, 35.91522],
    //         [-79.04918, 35.91551],
    //         [-79.04879, 35.91474],
    //         [-79.04758, 35.91514],
    //         [-79.047, 35.91417],
    //         [-79.04813, 35.9138],
    //         [-79.04867, 35.91473],
    //         [-79.04949, 35.91443],
    //     ]
    // };


    // var OldeCampusLowerQuad = {
    //     type: "polygon",
    //     rings: [
    //         [-79.04765, 35.91284],
    //         [-79.04617, 35.9133],
    //         [-79.04577, 35.91271],
    //         [-79.04723, 35.91215],

    //     ]
    // };

    // var simpleFillSymbol = {
    //     type: "simple-fill",
    //     color: [227, 139, 79, 0.2],  // orange, opacity 80%
    //     outline: {
    //         color: [255, 255, 255],
    //         width: 1
    //     },
    //     // style: 'backward-diagonal'
    // };

    // var kenanPoly = new Graphic({
    //     geometry: kenanCommunity,
    //     symbol: simpleFillSymbol
    // });

    // var lowerQuad = new Graphic({
    //     geometry: OldeCampusLowerQuad,
    //     symbol: simpleFillSymbol
    // });

    // graphicsLayer.add(kenanPoly);
    // graphicsLayer.add(lowerQuad)
