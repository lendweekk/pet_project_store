// СОЗДАЛ МАССИВ ИЗ ОБЬЕКТОВ, ТОВАРЫ ------------------------------------------------

const CATALOG = [

	// СПИСОК 10 ШОРТ ------------------------------------------------

	{
		color: ['brown'],
		id: 01,
		name: 'SPORTIFS ORIGINAL SHORT',
		image: '../image/shorts/shorts1.1.jpg',
		size: 30,
		prise: 72.00,
	},
	{
		color: ['black'],
		id: 02,
		name: 'GALAPAGOS PLAIN SHORT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1261_source_1645739814.jpg',
		size: 34,
		prise: 49.99,
	},
	{
		color: ['blue'],
		id: 03,
		name: 'GALAPAGOS PLEATED SHORT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1270_source_1645739821.jpg',
		size: 36,
		prise: 49.99,
	},
	{
		color: ['grey'],
		id: 04,
		name: 'WEEKENDER DECK DRAW CORD SHORT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/230/991/0M039850_60__01704.1660570592.jpg',
		size: 38,
		prise: 40.00,
	},
	{
		color: ['grey'],
		id: 05,
		name: 'HOOK & TACKLE ORIGINAL',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1223_source_1666277747.jpg',
		size: 40,
		prise: 45.00,
	},
	{
		color: ['blue'],
		id: 06,
		name: 'SPORTIFS HATTERAS SHORT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1435_source_1660234697.jpg',
		size: 42,
		prise: 75.00,
	},
	{
		color: ['brown'],
		id: 07,
		name: 'SPORTIFS TIDEWATER SHORT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1994_source_1660235740.jpg',
		size: 44,
		prise: 75.00,
	},
	{
		color: ['blue'],
		id: 08,
		name: 'RJC BAYSIDE PULL-ON SHORTS',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1195_source_1645739772.jpg',
		size: 46,
		prise: 39.00,
	},
	{
		color: ['white'],
		id: 09,
		name: 'HOOK & TACKLE BEER CAN ISLAND',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1234_source_1645739790.jpg',
		size: 30,
		prise: 50.00,
	},
	{
		color: ['blue'],
		id: 10,
		name: 'WEEKENDER TRADER SHORT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1848_source_1645739802.jpg',
		size: 34,
		prise: 40.00,
	},

	// СПИСОК 10 РУБАШЕК ------------------------------------------------

	{
		color: ['aqua'],
		id: 11,
		name: 'HOOK & TACKLE SEACLIFF',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/2435_source_1649085570.jpg',
		size: 32,
		prise: 54.99,
	},
	{
		color: ['white'],
		id: 12,
		name: 'REYN SPOONER SUMMER',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1749_source_1648743885.jpg',
		size: 34,
		prise: 96.99,
	},
	{
		color: ['blue'],
		id: 13,
		name: 'OLD RANCH BRANDS',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1788_source_1645807914.jpg',
		size: 36,
		prise: 29.99,
	},
	{
		color: ['aqua'],
		id: 14,
		name: 'RJC OCEAN FRONT PRINT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/123/714/00RJC213_610__53146.1650907725.jpg',
		size: 38,
		prise: 29.99,
	},
	{
		color: ['red'],
		id: 15,
		name: 'RJC PARADISE BLOCK',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/122/713/00RJC049_9J__25228.1650907655.jpg',
		size: 40,
		prise: 29.99,
	},
	{
		color: ['green'],
		id: 16,
		name: 'MONSTERRA REVERSE',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/225/669/00GB1825_06__78145.1649087537.jpg',
		size: 42,
		prise: 88.99,
	},
	{
		color: ['aqua'],
		id: 17,
		name: 'KAHALA FISH SCALES',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/120/710/00KA1400_264__58707.1650911060.jpg',
		size: 34,
		prise: 63.99,
	},
	{
		color: ['red'],
		id: 18,
		name: 'RJC ISLAND LIFE PRINT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/124/715/00RJC268_976__76647.1650907882.jpg',
		size: 46,
		prise: 29.99,
	},
	{
		color: ['green'],
		id: 19,
		name: 'REVERSE PRINT SHIRT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/2415_source_1649085561.jpg',
		size: 32,
		prise: 88.99,
	},
	{
		color: ['blue'],
		id: 20,
		name: 'HIBISICUS PAREO',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/226/670/00GB1827_1J__96110.1649171458.jpg',
		size: 34,
		prise: 88.99,
	},

	// СПИСОК 10 БРЮК ------------------------------------------------

	{
		color: ['brown'],
		id: 21,
		name: 'SPORTIFS ORIGINAL PANT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/2061_source_1660237896.jpg',
		size: 30,
		prise: 94.00,
	},
	{
		color: ['black'],
		id: 22,
		name: 'SPORTIFS HATTERAS PANT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1538_source_1651685428.jpg',
		size: 34,
		prise: 94.99,
	},
	{
		color: ['blue'],
		id: 23,
		name: 'SPORTIFS CALCUTTA CHINOS',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/174/470/482162_02__30570.1646752383.jpg',
		size: 36,
		prise: 69.99,
	},
	{
		color: ['white'],
		id: 24,
		name: 'SPORTIFS TRINIDAD CHINOS',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1955_source_1645742888.jpg',
		size: 38,
		prise: 69.99,
	},
	{
		color: ['brown'],
		id: 25,
		name: 'SPORTIFS CALCUTTA PLEATED CHINOS',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1340_source_1645742901.jpg',
		size: 40,
		prise: 69.99,
	},
	{
		color: ['blue'],
		id: 26,
		name: 'SPORTIFS TRINIDAD PLEATED CHINOS',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1378_source_1645742914.jpg',
		size: 42,
		prise: 69.99,
	},
	{
		color: ['grey'],
		id: 27,
		name: 'HOOK & TACKLE ISLAND PANT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1205_source_1645739779.jpg',
		size: 44,
		prise: 70,
	},
	{
		color: ['black'],
		id: 28,
		name: 'ECOTHS BY SPORTIF CHAMBERS PANT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1662_source_1645739880.jpg',
		size: 46,
		prise: 29.00,
	},
	{
		color: ['red'],
		id: 29,
		name: 'ECOTHS BY SPORTIF CHAMBERS PAJAMA',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1657_source_1645739878.jpg',
		size: 30,
		prise: 59.00,
	},
	{
		color: ['grey'],
		id: 30,
		name: 'SPORTIFS HATTERAS',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1544_source_1651685428.jpg',
		size: 34,
		prise: 44.00,
	},

	// СПИСОК 10 РЕМНЕЙ ------------------------------------------------

	{
		color: ['black'],
		id: 31,
		name: 'LEATHER TAB BRAIDED BELT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/products/114/images/702/00050312_27__01113.1650905140.1280.1280.jpg?c=1',
		size: 32,
		prise: 32,
	},
	{
		color: ['blue'],
		id: 32,
		name: 'TRAVELER BELT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1028_source_1645739702.jpg',
		size: 34,
		prise: 18,
	},
	{
		color: ['white'],
		id: 33,
		name: 'LEATHER TAB COTTON BELT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1818_source_1645739749.jpg',
		size: 36,
		prise: 29.99,
	},
	{
		color: ['blue'],
		id: 34,
		name: 'THERAPEUTIC COMPRESSION SOCKS',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/112/698/0000SW1M_02__14921.1650904170.jpg',
		size: 38,
		prise: 30.99,
	},
	{
		color: ['blue'],
		id: 35,
		name: 'ELEVATION COMPRESSION SOCKS',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1024_source_1645739701.jpg',
		size: 40,
		prise: 29.99,
	},
	{
		color: ['brown'],
		id: 36,
		name: 'LEATHER TAB COTTON',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1816_source_1645739744.jpg',
		size: 42,
		prise: 29.99,
	},
	{
		color: ['blue'],
		id: 37,
		name: 'ADJUSTABLE TAB SOLID COLOR BRAIDED',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1170_source_1645739766.jpg',
		size: 44,
		prise: 32,
	},
	{
		color: ['black'],
		id: 38,
		name: 'ADJUSTABLE TAB SOLID COLOR BRAIDED',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1178_source_1645739768.jpg',
		size: 46,
		prise: 35.00,
	},
	{
		color: ['white'],
		id: 39,
		name: 'LEATHER TAB SOLID COLOR BRAIDED BELT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1138_source_1645739757.jpg',
		size: 32,
		prise: 32.00,
	},
	{
		color: ['brown'],
		id: 40,
		name: 'ADJUSTABLE TAB BRAIDED BELT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1186_source_1645739771.jpg',
		size: 30,
		prise: 34.00,
	},

	// СПИСОК 10 СКИДОЧНЫХ ТОВАРОВ ------------------------------------------------

	{
		color: ['black'],
		id: 41,
		name: 'OLD RANCH BRANDS HURON VEST',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/2607_source_1660572167.jpg',
		size: 32,
		prise: 34.99,
	},
	{
		color: ['brown'],
		id: 42,
		name: 'OLD RANCH BRANDS HURON QUARTER ZIP',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/2560_source_1668114932.jpg',
		size: 30,
		prise: 44.99,
	},
	{
		color: ['green'],
		id: 43,
		name: 'GO BAREFOOT MONSTERRA REVERSE',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/225/669/00GB1825_06__78145.1649087537.jpg',
		size: 36,
		prise: 64.99,
	},
	{
		color: ['green'],
		id: 44,
		name: 'THERAPEUTIC COMPRESSION SOCKS',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/171/618/D1469540DT_921_studio_F21__77168.1660853824.jpg',
		size: 38,
		prise: 30.99,
	},
	{
		color: ['grey'],
		id: 45,
		name: 'ECOTHS BY SPORTIF PELHAM FLEECE',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/170/914/B0575300DT_277_studio_S22__62307.1660853257.jpg',
		size: 40,
		prise: 24.99,
	},
	{
		color: ['blue'],
		id: 46,
		name: 'ECOTHS BY SPORTIF HYBRID SHORT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/169/910/B0574760DT_613_studio_S22__91525.1660852909.jpg',
		size: 42,
		prise: 39.99,
	},
	{
		color: ['blue'],
		id: 47,
		name: 'OLD RANCH BRANDS PINECREST SWEATER',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/232/996/E058683_388__31771.1660571695.jpg',
		size: 44,
		prise: 54.99,
	},
	{
		color: ['black'],
		id: 48,
		name: 'ECOTHS BY SPORTIF NELSON SWEATER',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/172/634/E0606830DT_264_studio_F21__77521.1660853578.jpg',
		size: 46,
		prise: 39.99,
	},
	{
		color: ['red'],
		id: 49,
		name: 'ECOTHS BY SPORTIF GO TO SHORT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/images/stencil/640w/products/164/577/A1225200DT_QL65_studio_F21__69270.1660853110.jpg',
		size: 32,
		prise: 32.00,
	},
	{
		color: ['aqua'],
		id: 50,
		name: 'ECOTHS BY SPORTIF KELBROOK SHIRT',
		image: 'https://cdn11.bigcommerce.com/s-a5wudv5ymc/product_images/attribute_rule_images/1889_source_1654537913.jpg',
		size: 34,
		prise: 29.00,
	},
]

// ЗДЕЛАЛ ВЫВОД ШОРТ ------------------------------------------------

const SHORTS = document.getElementById("shorts");
let list1 = document.querySelector('.shorts_activ');
list1.classList.add('list_activ');
list1.classList.remove('list_activ_no');

let htmlCatalog = '';

CATALOG.slice(0, 10).forEach(({ id, name, image, prise }) => {

	htmlCatalog += `
	<div class="card1">
		<a href="./details.html"><img src="${image}"/></a>
		<div class="shorts_color">
			<div class="color1">
				<div class="color_brown"></div>
				<div class="color_grey"></div>
				<div class="color_black"></div>
				<div class="color_blue"></div>
				<div class="color_white"></div>
			</div>
		</div>
		<p>${name}</p> 
		<div class="star">
			<img src="../image/Star4.png" alt="Star">
			<img src="../image/Star4.png" alt="Star">
			<img src="../image/Star4.png" alt="Star">
			<img src="../image/Star4.png" alt="Star">
			<img src="../image/Star5.png" alt="Star">
		</div>
		<p>As low as ${prise} $</p>
		<a href="#" class="btn_color" onclick="addToCart(${id})">
			<img src="../image/shopping-bag1.png" alt="shopping">
			<span>ADD TO CART</span>
		</a>
	</div>
	`;
});

const html = `
	<div class="cards">
		${htmlCatalog}
	</div>
`;

SHORTS.innerHTML = html;


// ЗДЕЛАЛ ВЫВОД РУБАШЕК ------------------------------------------------

let list2 = document.querySelector('.shirts_activ');

const SHIRTS = document.getElementById("shirts");

list2.onclick = function () {
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	SALE.innerHTML = '';
	htmlCatalog = '';

	list2.classList.add('list_activ');
	list2.classList.remove('list_activ_no');

	list1.classList.add('list_activ_no');
	list1.classList.remove('list_activ');
	list3.classList.add('list_activ_no');
	list3.classList.remove('list_activ');
	list4.classList.add('list_activ_no');
	list4.classList.remove('list_activ');
	list5.classList.add('list_activ_no');
	list5.classList.remove('list_activ');

	CATALOG.slice(10, 20).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_green"></div>
					<div class="color_red"></div>
					<div class="color_aqua"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHIRTS.innerHTML = html;
}

// ЗДЕЛАЛ ВЫВОД ШТАНОВ ------------------------------------------------

let list3 = document.querySelector('.plants_activ');

const PLANTS = document.getElementById("plants");

list3.onclick = function () {

	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	SALE.innerHTML = '';
	htmlCatalog = '';

	list3.classList.add('list_activ');
	list3.classList.remove('list_activ_no');

	list1.classList.add('list_activ_no');
	list1.classList.remove('list_activ');
	list2.classList.add('list_activ_no');
	list2.classList.remove('list_activ');
	list4.classList.add('list_activ_no');
	list4.classList.remove('list_activ');
	list5.classList.add('list_activ_no');
	list5.classList.remove('list_activ');

	CATALOG.slice(20, 30).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
			<div class="color1">
				<div class="color_grey"></div>
				<div class="color_blue"></div>
				<div class="color_black"></div>
				<div class="color_red"></div>
				<div class="color_white"></div>
			</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	PLANTS.innerHTML = html;
}

// ЗДЕЛАЛ ВЫВОД РЕМНЕЙ ------------------------------------------------

let list4 = document.querySelector('.accessories_activ');

const ACCESSORIES = document.getElementById("accessories");

list4.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	htmlCatalog = '';

	list4.classList.add('list_activ');
	list4.classList.remove('list_activ_no');

	list1.classList.add('list_activ_no');
	list1.classList.remove('list_activ');
	list2.classList.add('list_activ_no');
	list2.classList.remove('list_activ');
	list3.classList.add('list_activ_no');
	list3.classList.remove('list_activ');
	list5.classList.add('list_activ_no');
	list5.classList.remove('list_activ');

	CATALOG.slice(30, 40).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_black"></div>
					<div class="color_brown"></div>
					<div class="color_white"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	ACCESSORIES.innerHTML = html;
}

// ЗДЕЛАЛ ВЫВОД ТОВАРОВ ПО АКЦИИ ------------------------------------------------

let list5 = document.querySelector('.sale_activ');

const SALE = document.getElementById("sale");

list5.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	list5.classList.add('list_activ');
	list5.classList.remove('list_activ_no');

	list1.classList.add('list_activ_no');
	list1.classList.remove('list_activ');
	list2.classList.add('list_activ_no');
	list2.classList.remove('list_activ');
	list3.classList.add('list_activ_no');
	list3.classList.remove('list_activ');
	list4.classList.add('list_activ_no');
	list4.classList.remove('list_activ');

	CATALOG.slice(40, 50).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_black"></div>
					<div class="color_brown"></div>
					<div class="color_green"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SALE.innerHTML = html;
}

// СОЗДАЛ СОРТИРОВКУ ТОВАРОВ ПО ЦВЕТУ ------------------------------------------------

const colorBrow = document.querySelector('.color_brown');
const colorGrey = document.querySelector('.color_grey');
const colorBlack = document.querySelector('.color_black');
const colorBlue = document.querySelector('.color_blue');
const colorWhite = document.querySelector('.color_white');
const colorGreen = document.querySelector('.color_green');
const colorRed = document.querySelector('.color_red');
const colorAqua = document.querySelector('.color_aqua');

colorBrow.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const colorFilter = [];

	for (const filter of CATALOG) {
		if (filter.color.includes('brown') == true) {
			colorFilter.push(filter)
		}
	}

	colorFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_brown"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

colorGrey.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const colorFilter = [];

	for (const filter of CATALOG) {
		if (filter.color.includes('grey') == true) {
			colorFilter.push(filter)
		}
	}

	colorFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

colorBlack.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const colorFilter = [];

	for (const filter of CATALOG) {
		if (filter.color.includes('black') == true) {
			colorFilter.push(filter)
		}
	}

	colorFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_black"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

colorBlue.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const colorFilter = [];

	for (const filter of CATALOG) {
		if (filter.color.includes('blue') == true) {
			colorFilter.push(filter)
		}
	}

	colorFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_blue"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

colorWhite.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const colorFilter = [];

	for (const filter of CATALOG) {
		if (filter.color.includes('white') == true) {
			colorFilter.push(filter)
		}
	}

	colorFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_white"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

colorGreen.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const colorFilter = [];

	for (const filter of CATALOG) {
		if (filter.color.includes('green') == true) {
			colorFilter.push(filter)
		}
	}

	colorFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_green"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

colorRed.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const colorFilter = [];

	for (const filter of CATALOG) {
		if (filter.color.includes('red') == true) {
			colorFilter.push(filter)
		}
	}

	colorFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_red"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

colorAqua.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const colorFilter = [];

	for (const filter of CATALOG) {
		if (filter.color.includes('aqua') == true) {
			colorFilter.push(filter)
		}
	}

	colorFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_aqua"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

// СОЗДАЛ СОРТИРОВКУ ТОВАРОВ ПО РАЗМЕРУ ------------------------------------------------

const size30 = document.querySelector('.size_30');
const size32 = document.querySelector('.size_32');
const size34 = document.querySelector('.size_34');
const size36 = document.querySelector('.size_36');
const size38 = document.querySelector('.size_38');
const size40 = document.querySelector('.size_40');
const size42 = document.querySelector('.size_42');
const size44 = document.querySelector('.size_44');
const size46 = document.querySelector('.size_46');


size30.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const sizeFilter = [];
	for (const filter of CATALOG) {
		if (String(filter.size).includes("30") == true) {
			sizeFilter.push(filter)
		}
	}

	sizeFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_black"></div>
					<div class="color_brown"></div>
					<div class="color_green"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

size32.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const sizeFilter = [];

	for (const filter of CATALOG) {
		if (String(filter.size).includes("32") == true) {
			sizeFilter.push(filter)
		}
	}

	sizeFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_black"></div>
					<div class="color_brown"></div>
					<div class="color_green"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

size34.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const sizeFilter = [];

	for (const filter of CATALOG) {
		if (String(filter.size).includes("34") == true) {
			sizeFilter.push(filter)
		}
	}

	sizeFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_black"></div>
					<div class="color_brown"></div>
					<div class="color_green"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

size36.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const sizeFilter = [];

	for (const filter of CATALOG) {
		if (String(filter.size).includes("36") == true) {
			sizeFilter.push(filter)
		}
	}

	sizeFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_black"></div>
					<div class="color_brown"></div>
					<div class="color_green"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

size38.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const sizeFilter = [];

	for (const filter of CATALOG) {
		if (String(filter.size).includes("38") == true) {
			sizeFilter.push(filter)
		}
	}

	sizeFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_black"></div>
					<div class="color_brown"></div>
					<div class="color_green"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

size40.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const sizeFilter = [];

	for (const filter of CATALOG) {
		if (String(filter.size).includes("40") == true) {
			sizeFilter.push(filter)
		}
	}

	sizeFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_black"></div>
					<div class="color_brown"></div>
					<div class="color_green"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

size42.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const sizeFilter = [];

	for (const filter of CATALOG) {
		if (String(filter.size).includes("42") == true) {
			sizeFilter.push(filter)
		}
	}

	sizeFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_black"></div>
					<div class="color_brown"></div>
					<div class="color_green"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

size44.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const sizeFilter = [];

	for (const filter of CATALOG) {
		if (String(filter.size).includes("44") == true) {
			sizeFilter.push(filter)
		}
	}

	sizeFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_black"></div>
					<div class="color_brown"></div>
					<div class="color_green"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

size46.onclick = function () {
	SHIRTS.innerHTML = '';
	SHORTS.innerHTML = '';
	PLANTS.innerHTML = '';
	SALE.innerHTML = '';
	ACCESSORIES.innerHTML = '';
	htmlCatalog = '';

	const sizeFilter = [];

	for (const filter of CATALOG) {
		if (String(filter.size).includes("46") == true) {
			sizeFilter.push(filter)
		}
	}

	sizeFilter.splice(0, 10).forEach(({ id, name, image, prise }) => {
		htmlCatalog += `
		<div class="card1">
			<a href="./details.html"><img src="${image}"/></a>
			<div class="shorts_color">
				<div class="color1">
					<div class="color_grey"></div>
					<div class="color_blue"></div>
					<div class="color_black"></div>
					<div class="color_brown"></div>
					<div class="color_green"></div>
				</div>
			</div>
			<p>${name}</p> 
			<div class="star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star4.png" alt="Star">
				<img src="../image/Star5.png" alt="Star">
			</div>
			<p>As low as ${prise} $</p>
			<a href="#" class="btn_color" onclick="addToCart(${id})">
				<img src="../image/shopping-bag1.png" alt="shopping">
				<span>ADD TO CART</span>
			</a>
		</div>
		`;
	});

	const html = `
		<div class="cards">
			${htmlCatalog}
		</div>
	`;

	SHORTS.innerHTML = html;
}

// СОЗДАЛ КОРЗИНУ ------------------------------------------------

let cart = [];

function addToCart(id) {
	if (cart.some((item) => item.id === id)) {
		alert("Product already in basket!")
	} else {
		const item = CATALOG.find((product) => product.id === id);

		cart.push({
			...item,
			namberOfUnits: 1
		});
	}
	updateCart();
}

function updateCart() {
	renderCartItems();
}

let cartItemsEl = document.querySelector('.basket_open')

function renderCartItems() {
	cartItemsEl.innerHTML = '';
	cart.forEach((item) => {
		cartItemsEl.innerHTML += `
			<div class="basket_open_catalog">
				<img src="${item.image}" alt="${item.name}">
				<p>${item.name}</p>
				<p>As low as ${item.prise} $</p>
				<div  class="delete">
					<img src="../image/delete.png" alt="delete">
				</div>
			</div>
		`

		const deleteProduct = document.querySelector('.delete');

		deleteProduct.addEventListener('click', function () {
			cart.forEach((item) => {
				cartItemsEl.innerHTML -= `
				<div class="basket_open_catalog">
					<img src="${item.image}" alt="${item.name}">
					<p>${item.name}</p>
					<p>As low as ${item.prise} $</p>
					<div  class="delete">
						<img src="../image/delete.png" alt="delete">
					</div>
				</div>
			`;
			})
		});
	})
};

const basketClick = document.querySelector(".basket");
const basketActiv = document.querySelector(".basket_open");
const catalogActiv = document.querySelector(".basket_open_catalog");
const exitActiv = document.querySelector(".exit");

basketClick.addEventListener("click", function () {
	basketActiv.style.display = "block";
	catalogActiv.style.display = "flex";
	const bodyActiv = document.getElementsByTagName('body');
	bodyActiv.classList.add('.section_activ');
});

exitActiv.addEventListener('click', function () {
	basketActiv.style.display = "";
	catalogActiv.style.display = "none";
	exitActiv.classList.add(".exit_activ_none");
});

// Добавил функционал детального осмотра товаров

