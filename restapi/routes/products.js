const express = require('express');
const route = express.Router();

route.get("/", function(req, res, next) {
    res.status(200).json(
        [
            {
                id: 1 ,
                manufacture: "Apple", 
                productname: "MacBook Pro med Touch Bar", 
                description:"MacBook Pro tar den bärbara datorn till en helt ny nivå av prestanda och bärbarhet.",
                price: 34990, 
                rating: 3.3, 
                category: "Laptops", 
                quantity: 1,
                image: "https://dustinweb.azureedge.net/image/390241/960/720/apple-macbook-pro-med-touch-bar---space-grey-core-i9-16gb-512gb-ssd-154.png"
            },
            {
                id: 2 ,
                manufacture: "Samsung", 
                productname: "QE65Q7FNAT", 
                description:'65" QLED TV med HDR1500, Ambient mode som låter dig dig använda TVn som tavla.', 
                price: 14990, 
                rating: 4.6, 
                category: "TV", 
                quantity: 1,
                image: "https://dustinweb.azureedge.net/image/367028/960/720/samsung-qe65q7fnat.jpg"
            },
            {

                id: 3 ,
                manufacture: "HP", 
                productname: "250 G6 Ci5", 
                description:'Core i5 8GB 256GB SSD 15.6" Kraftfull bärbar med högupplöst skärm och stor SSD-hårddisk',
                price: 5690, 
                rating: 3.5, 
                category: "Laptops", 
                quantity: 1,
                image: "https://dustinweb.azureedge.net/image/279844/960/720/hp-250-g6-core-i5-8gb-256gb-ssd-156.jpg"
            },    
            {
                id: 4 ,
                manufacture: "Harman Kardon", 
                productname: "Onyx Studio 4", 
                description:"Stort ljud i rund förpackning. Eeefwefe fwefweef wefwefefwe, fwef juuilui hj ghjdfg.",
                price: 1290, 
                rating: 4.4, 
                category: "Speakers", 
                quantity: 1,
                image: "https://dustinweb.azureedge.net/image/384129/960/720/harman-kardon-onyx-studio-4.jpg"
            },    
            {
                id: 5 ,
                manufacture: "Samsung", 
                productname: "Galaxy Note9", 
                description:"128GB Dual-SIM Midnattssvart. Mobiltelefonen som tar dig till en ny nivå",
                price: 7990, 
                rating: 4.2, 
                category: "Mobiles", 
                quantity: 1,
                image: "https://dustinweb.azureedge.net/image/391940/960/720/samsung-galaxy-note9-128gb-dual-sim-midnattssvart.jpg"
            }, 
            {
                id: 6 ,
                manufacture: "Sapphire", 
                productname: "Nitro+ Radeon RX 580 4GB", 
                description:"Dual Bios, HDR-återgivning (High dynamic-range), AMD Eyefinity Technology.",
                price: 1949, 
                rating: 2.3, 
                category: "Graphic cards", 
                quantity: 1,
                image: "https://dustinweb.azureedge.net/image/265551/960/720/sapphire-nitro-radeon-rx-580-4gb.jpg"
            }, 
            {
                id: 7 ,
                manufacture: "Apple", 
                productname: "iPad Pro Wi-FI + Cellular", 
                description:"12,9' 256GB Rymdgrå. Allt är nytt. Allt är skärm. Allt är möjligt.",
                price: 15590, 
                rating: 5, 
                category: "Tablets", 
                quantity: 1,
                image: "https://dustinweb.azureedge.net/image/414237/960/720/apple-ipad-pro-wi-fi-cellular-2018-129-256gb-rymdgra.tif"
            }, 
            {
                id: 8 ,
                manufacture: "Kingston", 
                productname: "SSDNow A400", 
                description:"Kingstons stabila A400-enhet förbättrar dramatiskt upplevelsen av ditt befintliga system.",
                price: 1190, 
                rating: 1.4, 
                category: "SSD", 
                quantity: 1,
                image: "https://dustinweb.azureedge.net/image/269758/960/720/kingston-ssdnow-a400-960gb-25-serial-ata-600.jpg"
            }, 
            {
                id: 9 ,
                manufacture: "ASUS", 
                productname: "UF Gaming FX705GM", 
                description:"8:e Generationens Intel® Core i7 sexkärnig processor 17.3tum Anti-Glare Wide-View skärm",
                price: 18990, 
                rating: 5, 
                category: "Laptops", 
                quantity: 1,
                image: "https://dustinweb.azureedge.net/image/435218/960/720/asus-tuf-gaming-fx705gm-core-i7-32gb-512gb-ssd-173-60hz-gtx-1060.jpg"
            }, 
            {
                id: 10 ,
                manufacture: "LG", 
                productname: 'OLED65E8PLA 65" 4K SMART OLED TV', 
                description:"Perfect Black, slående kontrast. Den briljanta hjärnan, smarta α9-processorn Cinema HDR, upplev filmmakarens vision.",
                price: 24490, 
                rating: 4.6, 
                category: "TV", 
                quantity: 1,
                image: "https://dustinweb.azureedge.net/image/395509/960/720/lg-oled65e8pla-65-4k-smart-oled-tv.jpg"
            }
        ]
    );
})

module.exports = route;