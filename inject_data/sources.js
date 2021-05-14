/* eslint-disable no-multi-str */
const sources = [
  {
    name: 'Lumpia Semarang',
    price: 19000,
    description: 'Rebung muda, telur, sayuran, dan daging ayam dibalut dengan\
 kulit lumpia renyah, disajikan dengan saus pedas manis.',
    linkImage: 'http://localhost:8080/img/lumpia-semarang.webp',
    category: 'appetizer',
    isRecommended: true,
  },
  {
    name: 'Buffalo Chicken Wings',
    price: 26000,
    description: 'Sayap ayam goreng dilapisi dengan saus pedas dan butter.',
    linkImage: 'http://localhost:8080/img/buffalo-chicken-wings.webp',
    category: 'appetizer',
    isRecommended: false,
  },
  {
    name: 'Garlic Parmesan Chicken Wings',
    price: 28000,
    description: 'Sayap ayam goreng dilapisi saus butter dan bawang putih\
 bertabur keju parmesan.',
    linkImage: 'http://localhost:8080/img/garlic-parmesan-chicken-wings.webp',
    category: 'appetizer',
    isRecommended: false,
  },
  {
    name: 'Sate Taichan',
    price: 20000,
    description: 'Sate daging ayam disajikan dengan saus sambal dan perasan\
 jeruk nipis.',
    linkImage: 'http://localhost:8080/img/sate-taichan.webp',
    category: 'appetizer',
    isRecommended: false,
  },
  {
    name: 'Cheesy Garlic Bread',
    price: 18000,
    description: 'Roti bakar dengan bumbu bawang putih dan taburan keju.',
    linkImage: 'http://localhost:8080/img/cheesy-garlic-bread.webp',
    category: 'appetizer',
    isRecommended: true,
  },
  {
    name: 'Batagor',
    price: 18000,
    description: 'Bakso tahu goreng khas Bandung diguyur dengan saus kacang.',
    linkImage: 'http://localhost:8080/img/batagor.webp',
    category: 'appetizer',
    isRecommended: false,
  },
  {
    name: 'Creamy Mushroom Toast',
    price: 24000,
    description: 'Roti brioche bakar dengan topping tumisan jamur shitake\
, jamur tiram, dan jamur kancing dipadu dengan saus yang creamy.',
    linkImage: 'http://localhost:8080/img/creamy-mushroom-toast.webp',
    category: 'appetizer',
    isRecommended: true,
  },
  {
    name: 'French Toast',
    price: 20000,
    description: 'Roti bakar klasik dari Prancis dengan topping sirup maple\
 dan buah-buahan segar.',
    linkImage: 'http://localhost:8080/img/french-toast.webp',
    category: 'appetizer',
    isRecommended: false,
  },
  {
    name: 'Nasi Padang',
    price: 26000,
    description: 'Nasi, rendang, perkedel, dengan sayur nangka dan daun\
 singkong, diguyur dengan kuah gulai.',
    linkImage: 'http://localhost:8080/img/nasi-padang.webp',
    category: 'main-course',
    isRecommended: true,
  },
  {
    name: 'Chicken Katsu Fried Rice',
    price: 24000,
    description: 'Nasi goreng oriental dengan chicken katsu yang renyah.',
    linkImage: 'http://localhost:8080/img/chicken-katsu-fried-rice.webp',
    category: 'main-course',
    isRecommended: false,
  },
  {
    name: 'Spaghetti Carbonara',
    price: 26000,
    description: 'Spaghetti dengan saus super creamy dan taburan keju\
 parmesan.',
    linkImage: 'http://localhost:8080/img/spaghetti-carbonara.webp',
    category: 'main-course',
    isRecommended: true,
  },
  {
    name: 'Lasagna',
    price: 29000,
    description: 'Tumpukan pasta dengan isian daging giling, saus tomat, dan\
 keju ricotta, dipadu dengan lelehan mozarella diatasnya.',
    linkImage: 'http://localhost:8080/img/lasagna.webp',
    category: 'main-course',
    isRecommended: false,
  },
  {
    name: 'Salmon en Croute',
    price: 34000,
    description: 'Hidangan klasik dari Prancis, daging salmon yang lembut\
 dilapisi dengan kulit pastry yang renyah.',
    linkImage: 'http://localhost:8080/img/salmon-en-croute.webp',
    category: 'main-course',
    isRecommended: false,
  },
  {
    name: 'Tom Yam',
    price: 27000,
    description: 'Sup khas Thailand dengan cita rasa pedas dan aroma rempah\
 yang kuat.',
    linkImage: 'http://localhost:8080/img/tom-yam.webp',
    category: 'main-course',
    isRecommended: false,
  },
  {
    name: 'Filet Mignon',
    price: 38000,
    description: 'Daging sapi tenderloin disajikan dengan saus dan sayuran.',
    linkImage: 'http://localhost:8080/img/filet-mignon.webp',
    category: 'main-course',
    isRecommended: false,
  },
  {
    name: 'Soto Betawi + Nasi',
    price: 25000,
    description: 'Soto daging sapi khas Betawi yang segar dengan nasi, emping\
 dan acar.',
    linkImage: 'http://localhost:8080/img/soto-betawi.webp',
    category: 'main-course',
    isRecommended: true,
  },
  {
    name: 'Nasi Bebek Cabe Ijo',
    price: 29000,
    description: 'Nasi putih hangat dengan bebek goreng dibalut dengan pedasnya\
 sambal cabai hijau.',
    linkImage: 'http://localhost:8080/img/nasi-bebek-cabe-ijo.webp',
    category: 'main-course',
    isRecommended: false,
  },
  {
    name: 'Cheese Cake',
    price: 19000,
    description: 'Kue keju yang lembut dengan rasa manis dan asin yang pas.',
    linkImage: 'http://localhost:8080/img/cheese-cake.webp',
    category: 'dessert',
    isRecommended: false,
  },
  {
    name: 'Chocolate Lava',
    price: 19000,
    description: 'Kue coklat lembut dengan lelehan coklat di tengahnya.',
    linkImage: 'http://localhost:8080/img/chocolate-lava.webp',
    category: 'dessert',
    isRecommended: true,
  },
  {
    name: 'Raspberry Pie',
    price: 22000,
    description: 'Kue pie yang renyah dengan isian selai raspberry yang segar.',
    linkImage: 'http://localhost:8080/img/raspberry-pie.webp',
    category: 'dessert',
    isRecommended: false,
  },
  {
    name: 'Es Pisang Ijo',
    price: 22000,
    description: 'Es legendaris dengan pisang ijo dan bubur sum-sum, dipadu\
 dengan sirup merah dan susu kental manis.',
    linkImage: 'http://localhost:8080/img/es-pisang-ijo.webp',
    category: 'dessert',
    isRecommended: true,
  },
  {
    name: 'Apple Turnover',
    price: 23000,
    description: 'Pastry renyah dengan isian saus dan potongan buah apel yang\
 lembut.',
    linkImage: 'http://localhost:8080/img/apple-turnover.webp',
    category: 'dessert',
    isRecommended: false,
  },
  {
    name: 'Strawberry Nutella Pizza',
    price: 32000,
    description: 'Pizza mini dengan topping manis nutella dan potongan buah\
 strawberry yang segar.',
    linkImage: 'http://localhost:8080/img/strawberry-nutella-pizza.webp',
    category: 'dessert',
    isRecommended: false,
  },
  {
    name: 'Chocolate Mousse',
    price: 22000,
    description: 'Telur, cokelat, krim, dan gula bercampur menjadi satu.',
    linkImage: 'http://localhost:8080/img/chocolate-mousse.webp',
    category: 'dessert',
    isRecommended: true,
  },
  {
    name: 'Tiramisu Cake',
    price: 24000,
    description: 'Dessert lezat dengan tekstur yang lembut dan cita rasa kopi\
 yang kuat.',
    linkImage: 'http://localhost:8080/img/tiramisu-cake.webp',
    category: 'dessert',
    isRecommended: false,
  },
  {
    name: 'Ice Brown Sugar Coffee',
    price: 18000,
    description: 'Es kopi susu kekinian dengan lelehan gula aren yang legit.',
    linkImage: 'http://localhost:8080/img/ice-brown-sugar-coffee.webp',
    category: 'drinks',
    isRecommended: true,
  },
  {
    name: 'Vanilla Latte',
    price: 20000,
    description: 'Kopi espresso bercampur dengan susu yang creamy dan sirup\
 vanila.',
    linkImage: 'http://localhost:8080/img/vanilla-latte.webp',
    category: 'drinks',
    isRecommended: true,
  },
  {
    name: 'Es Dawet Ayu',
    price: 19000,
    description: 'Campuran dawet, santan, dan gula merah yang menyegarkan.',
    linkImage: 'http://localhost:8080/img/es-dawet-ayu.webp',
    category: 'drinks',
    isRecommended: true,
  },
  {
    name: 'Lemon Mint Iced Tea',
    price: 17000,
    description: 'Es teh manis bercampur dengan perasan lemon dan aroma mint\
 yang menyegarkan.',
    linkImage: 'http://localhost:8080/img/lemon-mint-iced-tea.webp',
    category: 'drinks',
    isRecommended: false,
  },
  {
    name: 'Cappucino',
    price: 23000,
    description: 'Kopi espresso bercampur susu dengan creamy foam yang ikonik.',
    linkImage: 'http://localhost:8080/img/cappucino.webp',
    category: 'drinks',
    isRecommended: false,
  },
  {
    name: 'Wedang Jahe',
    price: 17000,
    description: 'Air rebusan jahe yang menghangatkan tubuh.',
    linkImage: 'http://localhost:8080/img/wedang-jahe.webp',
    category: 'drinks',
    isRecommended: false,
  },
  {
    name: 'Strawberry Milkshake',
    price: 21000,
    description: 'Susu, es krim dan buah strawberry dicampur menjadi minuman\
 yang menyegarkan.',
    linkImage: 'http://localhost:8080/img/strawberry-milkshake.webp',
    category: 'drinks',
    isRecommended: false,
  },
  {
    name: 'Avocado Juice',
    price: 21000,
    description: 'Jus alpukat lembut dengan lelehan coklat.',
    linkImage: 'http://localhost:8080/img/avocado-juice.webp',
    category: 'drinks',
    isRecommended: true,
  },
  {
    name: 'Cheese Tea',
    price: 18000,
    description: 'Es teh dengan topping lapisan foam susu dan krim keju.',
    linkImage: 'http://localhost:8080/img/cheese-tea.webp',
    category: 'drinks',
    isRecommended: false,
  },
];

module.exports = sources;
