// ============================================================
// pets.js — Browse Page: Pet Data + All Page Logic
// ============================================================

// ────────────────────────────────────────────────────────────
// PET DATA — 104 pets, 10 categories, real Unsplash images
// ────────────────────────────────────────────────────────────
var petsData = [
  // DOGS
  { id:1,  name:'Bruno',    age:'2 years',   breed:'Golden Retriever',  category:'Dogs',        gender:'Male',   location:'Mumbai',      description:'Playful and affectionate. Loves fetch, swimming, and belly rubs. Great with kids. Fully vaccinated and house-trained.',     img:'asset/dog/golden.jpg' },
  { id:2,  name:'Bella',    age:'3 years',   breed:'Labrador',          category:'Dogs',        gender:'Female', location:'Delhi',       description:'Gentle Labrador who adores cuddles. Knows basic commands, loves walks. Perfect family companion, excellent with children.',     img:'asset/dog/lab.jpg' },
  { id:3,  name:'Max',      age:'1 year',    breed:'Beagle',            category:'Dogs',        gender:'Male',   location:'Pune',        description:'Curious and energetic with a great sense of smell. Currently learning commands — very quick learner!',                         img:'asset/dog/beagle.jpg' },
  { id:4,  name:'Daisy',    age:'4 years',   breed:'Poodle',            category:'Dogs',        gender:'Female', location:'Bangalore',   description:'Highly intelligent and hypoallergenic. Loves learning tricks. Perfect for allergy-sensitive families.',                         img:'asset/dog/poodle.jpeg' },
  { id:5,  name:'Rocky',    age:'2 years',   breed:'German Shepherd',   category:'Dogs',        gender:'Male',   location:'Hyderabad',   description:'Loyal, obedient, and intelligent. Bonds deeply with family. Excellent watchdog and companion.',                                img:'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&q=80&fit=crop&crop=face' },
  { id:6,  name:'Luna',     age:'1.5 years', breed:'Husky',             category:'Dogs',        gender:'Female', location:'Chennai',     description:'Stunning ice-blue eyes. Loves running. Playful, vocal, and full of personality!',                                               img:'asset/dog/husky.jpeg' },
  { id:7,  name:'Charlie',  age:'3 years',   breed:'Dachshund',         category:'Dogs',        gender:'Male',   location:'Kolkata',     description:'Funny little dog who thinks he is the biggest in the room. Loves couch cuddles and evening walks.',                           img:'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?w=400&q=80&fit=crop' },
  { id:8,  name:'Mia',      age:'5 years',   breed:'Shih Tzu',          category:'Dogs',        gender:'Female', location:'Ahmedabad',   description:'Calm and loving. Enjoys lap time and light play. Perfect apartment dog, very well-groomed.',                                  img:'asset/dog/shihtzu.jpeg' },
  { id:9,  name:'Tiger',    age:'2 years',   breed:'Rottweiler',        category:'Dogs',        gender:'Male',   location:'Jaipur',      description:'Confident and loyal. Incredibly gentle with proper training. Ideal for experienced owners.',                                    img:'asset/dog/rott.jpeg' },
  { id:10, name:'Coco',     age:'1 year',    breed:'Pomeranian',        category:'Dogs',        gender:'Female', location:'Surat',       description:'Fluffy and energetic. Tiny but bold — always ready to play and show off her gorgeous coat.',                                  img:'https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?w=400&q=80&fit=crop' },
  { id:11, name:'Buddy',    age:'6 years',   breed:'Boxer',             category:'Dogs',        gender:'Male',   location:'Nagpur',      description:'Mature Boxer past his hyper phase. Now calm, affectionate, and incredibly loyal. Loves children.',                            img:'asset/dog/boxer.jpeg' },
  // CATS
  { id:12, name:'Whiskers', age:'2 years',   breed:'Persian',           category:'Cats',        gender:'Female', location:'Mumbai',      description:'Graceful Persian with a silky coat. Loves sunny spots and gentle grooming sessions.',                                          img:'asset/cat/persian.png' },
  { id:13, name:'Oliver',   age:'3 years',   breed:'Siamese',           category:'Cats',        gender:'Male',   location:'Delhi',       description:'Talkative and curious Siamese. Will follow you everywhere and loves being part of every activity.',                           img:'asset/cat/siamese.png' },
  { id:14, name:'Mittens',  age:'1 year',    breed:'Tabby',             category:'Cats',        gender:'Female', location:'Bangalore',   description:'Young tabby with boundless energy. Loves chasing toys and climbing. Great for lively households.',                             img:'asset/cat/tabby.png' },
  { id:15, name:'Shadow',   age:'4 years',   breed:'British Shorthair', category:'Cats',        gender:'Male',   location:'Hyderabad',   description:'Dignified gentleman with a plush grey coat. Independent yet affectionate on his own terms.',                                  img:'asset/cat/british.png' },
  { id:16, name:'Luna',     age:'2 years',   breed:'Maine Coon',        category:'Cats',        gender:'Female', location:'Chennai',     description:'Magnificent Maine Coon — playful, dog-like personality, even loves water. Truly special.',                                    img:'asset/cat/maine.png' },
  { id:17, name:'Simba',    age:'1.5 years', breed:'Bengal',            category:'Cats',        gender:'Male',   location:'Pune',        description:'Athletic Bengal with a gorgeous spotted coat. Energetic and intelligent — needs stimulation.',                                 img:'asset/cat/bengal.png' },
  { id:18, name:'Cleo',     age:'5 years',   breed:'Ragdoll',           category:'Cats',        gender:'Female', location:'Kolkata',     description:'The ultimate lap cat — goes limp when held. Gentle and wonderful with children.',                                              img:'asset/cat/ragdoll.png' },
  { id:19, name:'Mochi',    age:'1 year',    breed:'Scottish Fold',     category:'Cats',        gender:'Female', location:'Ahmedabad',   description:'Signature folded ears and round face. Sweet, quiet, and incredibly adorable.',                                                img:'asset/cat/scottish.png' },
  { id:20, name:'Jasper',   age:'3 years',   breed:'Sphynx',            category:'Cats',        gender:'Male',   location:'Jaipur',      description:'Hairless Sphynx — wrinkly, warm, and loving. Craves attention. Great for allergy sufferers.',                                img:'asset/cat/sphynx.png' },
  { id:21, name:'Nala',     age:'2 years',   breed:'Abyssinian',        category:'Cats',        gender:'Female', location:'Surat',       description:'Lithe and athletic. Constantly curious, loves interactive toys and puzzle games.',                                             img:'asset/cat/abyssinian.png' },
  { id:22, name:'Felix',    age:'6 years',   breed:'Norwegian Forest',  category:'Cats',        gender:'Male',   location:'Nagpur',      description:'Majestic Norwegian Forest Cat. Gentle, good-natured, loves climbing high perches.',                                            img:'asset/cat/norwegian.png' },
  // BIRDS
  { id:23, name:'Kiwi',     age:'1 year',    breed:'Budgerigar',        category:'Birds',       gender:'Male',   location:'Mumbai',      description:'Cheerful green Budgie who loves to chatter and sing. Can mimic simple words. Very social.',                                   img:'asset/Birds/budgerigar.png' },
  { id:24, name:'Mango',    age:'2 years',   breed:'Cockatiel',         category:'Birds',       gender:'Male',   location:'Delhi',       description:'Friendly with a vibrant yellow crest. Whistles tunes, loves being petted on his cheeks.',                                     img:'asset/Birds/Cockatiel.png' },
  { id:25, name:'Peach',    age:'3 years',   breed:'Lovebird',          category:'Birds',       gender:'Female', location:'Bangalore',   description:'Colorful and full of personality. Bonds deeply with her owner and loves to play.',                                            img:'asset/Birds/love birds.png' },
  { id:26, name:'Rio',      age:'5 years',   breed:'African Grey',      category:'Birds',       gender:'Male',   location:'Hyderabad',   description:'Highly intelligent — can hold simple conversations. Sensitive, curious, very observant.',                                      img:'asset/Birds/grey parrot.png' },
  { id:27, name:'Sunny',    age:'1 year',    breed:'Sun Conure',        category:'Birds',       gender:'Female', location:'Chennai',     description:'Brilliantly colored, loud, playful, and extremely affectionate. Loves to be held.',                                           img:'asset/Birds/sun conure.png' },
  { id:28, name:'Sky',      age:'2 years',   breed:'Parakeet',          category:'Birds',       gender:'Male',   location:'Pune',        description:'Beautiful blue Parakeet, gentle and easy to tame. Perfect for first-time bird owners.',                                        img:'asset/Birds/parkeet.png' },
  { id:29, name:'Pearl',    age:'4 years',   breed:'Cockatoo',          category:'Birds',       gender:'Female', location:'Kolkata',     description:'White Cockatoo who loves dancing to music. Very cuddly and knows several phrases.',                                            img:'asset/Birds/cocktoos.png' },
  { id:31, name:'Blaze',    age:'3 years',   breed:'Eclectus Parrot',   category:'Birds',       gender:'Male',   location:'Jaipur',      description:'Striking red and blue coloring. Calm, intelligent, loves fruit and leafy greens.',                                            img:'asset/Birds/electus parrot.png' },
  { id:32, name:'Tweety',   age:'2 years',   breed:'Canary',            category:'Birds',       gender:'Male',   location:'Surat',       description:'Bright yellow Canary with a beautiful singing voice. Independent and peaceful.',                                               img:'asset/Birds/canary.png' },
  { id:33, name:'Aurora',   age:'1.5 years', breed:'Macaw',             category:'Birds',       gender:'Female', location:'Nagpur',      description:'Colorful Macaw with a bold personality. Intelligent and forms incredibly deep bonds.',                                        img:'asset/Birds/macaw.png' },
  // FISH
  { id:34, name:'Nemo',     age:'1 year',    breed:'Clownfish',         category:'Fish',        gender:'Male',   location:'Mumbai',      description:'Vibrant orange and white stripes. Thrives in saltwater, adds ocean color to any room.',                                       img:'asset/fish/clown fish.png' },
  { id:35, name:'Bubbles',  age:'6 months',  breed:'Betta',             category:'Fish',        gender:'Male',   location:'Delhi',       description:'Stunning electric blue fins. Needs his own tank but rewards with dazzling beauty.',                                            img:'asset/fish/beta fish.png' },
  { id:36, name:'Goldie',   age:'1 year',    breed:'Goldfish',          category:'Fish',        gender:'Female', location:'Bangalore',   description:'Classic Fancy Goldfish with a beautiful fantail. Peaceful and easy to care for.',                                             img:'asset/fish/gold fish.png' },
  { id:37, name:'Splash',   age:'8 months',  breed:'Guppy',             category:'Fish',        gender:'Male',   location:'Hyderabad',   description:'Colorful Guppy with a vibrant multi-colored tail. Hardy, social, great for community tanks.',                                img:'asset/fish/guppy.png' },
  { id:38, name:'Pearl',    age:'1 year',    breed:'Angelfish',         category:'Fish',        gender:'Female', location:'Chennai',     description:'Elegant silver and black striped markings. Glides gracefully — a true showstopper.',                                          img:'asset/fish/angel fish.png' },
  { id:39, name:'Coral',    age:'6 months',  breed:'Discus',            category:'Fish',        gender:'Female', location:'Pune',        description:'Stunning red and blue Discus. Known as the king of aquarium fish — truly rewarding.',                                         img:'asset/fish/discus.png' },
  { id:40, name:'Finn',     age:'1 year',    breed:'Oscar',             category:'Fish',        gender:'Male',   location:'Kolkata',     description:'Bold Oscar fish who recognizes his owner and has the personality of a puppy.',                                                img:'asset/fish/oscar.png' },
  { id:41, name:'Dory',     age:'2 years',   breed:'Blue Tang',         category:'Fish',        gender:'Female', location:'Ahmedabad',   description:'Bright blue Tang, active and cheerful. Brings a vivid ocean feel to any home.',                                               img:'asset/fish/blue tang.png' },
  { id:42, name:'Zigzag',   age:'6 months',  breed:'Zebrafish',         category:'Fish',        gender:'Male',   location:'Jaipur',      description:'Striped Zebrafish — one of the hardiest. Perfect for beginners, social and lively.',                                          img:'asset/fish/zebra fish.png' },
  { id:43, name:'Ruby',     age:'1 year',    breed:'Molly',             category:'Fish',        gender:'Female', location:'Surat',       description:'Deep red Molly fish. Peaceful, easy to breed, adapts well to community tanks.',                                               img:'asset/fish/molly.png' },
  // RABBITS
  { id:44, name:'Thumper',  age:'1 year',    breed:'Holland Lop',       category:'Rabbits',     gender:'Male',   location:'Mumbai',      description:'Adorable floppy ears. Loves binkying (happy jumps), exploring, and fresh hay. Very gentle.',                                 img:'asset/bunny/Holland Lop.png' },
  { id:45, name:'Snowball',  age:'2 years',  breed:'Angora',            category:'Rabbits',     gender:'Female', location:'Delhi',       description:'Fluffy white Angora rabbit with the softest fur imaginable. Enjoys being brushed.',                                           img:'asset/bunny/Angora Rabbit.png' },
  { id:47, name:'Hazel',    age:'3 years',   breed:'Flemish Giant',     category:'Rabbits',     gender:'Female', location:'Hyderabad',   description:'Massive Flemish Giant — gentle, calm, and dog-like in personality.',                                                         img:'asset/bunny/Flemish Giant Rabbit.png' },
  { id:48, name:'Cotton',   age:'6 months',  breed:'Mini Rex',          category:'Rabbits',     gender:'Male',   location:'Chennai',     description:'Tiny Mini Rex with plush fur and big curious eyes. Playful and easy to litter-train.',                                        img:'asset/bunny/Mini Rex Rabbit.png' },
  { id:49, name:'Biscuit',  age:'2 years',   breed:'Dutch',             category:'Rabbits',     gender:'Male',   location:'Pune',        description:'Classic Dutch rabbit with crisp white and brown pattern. Friendly and easy-going.',                                           img:'asset/bunny/Dutch Rabbit.png' },
  { id:50, name:'Rosie',    age:'1.5 years', breed:'Lionhead',          category:'Rabbits',     gender:'Female', location:'Kolkata',     description:'Magnificent mane of fur around her face. Gentle, loves attention, and photogenic.',                                           img:'asset/bunny/Lionhead Rabbit.png' },
  { id:51, name:'Patch',    age:'3 years',   breed:'Californian',       category:'Rabbits',     gender:'Male',   location:'Ahmedabad',   description:'White with dark markings on nose and ears. Calm, well-socialized, loves humans.',                                            img:'asset/bunny/Californian Rabbit.png' },
  { id:52, name:'Clover',   age:'1 year',    breed:'New Zealand',       category:'Rabbits',     gender:'Female', location:'Jaipur',      description:'Pure white rabbit with pink eyes. Robust, curious, and friendly. Great for beginners.',                                      img:'asset/bunny/New Zealand Rabbit.png' },
  { id:53, name:'Mocha',    age:'2 years',   breed:'English Spot',      category:'Rabbits',     gender:'Male',   location:'Surat',       description:'Unique pattern of spots along his sides. Energetic and loves to run and jump.',                                              img:'asset/bunny/English Spot Rabbit.png' },
  // HAMSTERS
  { id:54, name:'Peanut',   age:'6 months',  breed:'Syrian',            category:'Hamsters',    gender:'Male',   location:'Mumbai',      description:'Classic golden Syrian hamster. Loves his wheel, burrowing, and coming out in the evenings.',                                img:'asset/ham/ham1.png' },
  { id:55, name:'Cheddar',  age:'4 months',  breed:'Roborovski',        category:'Hamsters',    gender:'Female', location:'Delhi',       description:'One of the smallest and fastest hamsters — endlessly entertaining to watch.',                                                img:'asset/ham/ham2.png' },
  { id:56, name:'Nutmeg',   age:'8 months',  breed:"Campbell's Dwarf",  category:'Hamsters',    gender:'Female', location:'Bangalore',   description:"Friendly Campbell's Dwarf. More social than other dwarfs, can be kept in same-sex pairs.",                                  img:'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80&fit=crop' },

  // TURTLES
  { id:64, name:'Crush',    age:'5 years',   breed:'Red-Eared Slider',  category:'Turtles',     gender:'Male',   location:'Mumbai',      description:'Classic Red-Eared Slider who loves basking under his UV lamp. Very hardy.',                                                img:'asset/turtle/t1.jpeg' },

  // GUINEA PIGS
  { id:74, name:'Popcorn',  age:'1 year',    breed:'American',          category:'Guinea Pigs', gender:'Male',   location:'Mumbai',      description:'Loves to popcorn — a happy jump unique to guinea pigs. Social and chatters softly.',                                       img:'asset/guineapig/gp1.jpg' },
  { id:75, name:'Caramel',  age:'2 years',   breed:'Teddy',             category:'Guinea Pigs', gender:'Female', location:'Delhi',       description:'Dense fuzzy coat makes her incredibly huggable. Gentle and loves being held.',                                              img:'asset/guineapig/gp2.avif' },

  // HORSES
  { id:84, name:'Thunder',  age:'5 years',   breed:'Arabian',           category:'Horses',      gender:'Male',   location:'Rajasthan',   description:'Spirited Arabian horse. Intelligent, enduring, forms strong bonds with riders.',                                          img:'asset/horse/arabian.png' },
  { id:85, name:'Storm',    age:'7 years',   breed:'Marwari',      category:'Horses',      gender:'Female', location:'Pune',        description:'Retired Thoroughbred racehorse. Fast, elegant, perfect for experienced equestrians.',                                      img:'asset/horse/marwari.png' },
  { id:86, name:'Blaze',    age:'3 years',   breed:'Sindhi',     category:'Horses',      gender:'Male',   location:'Haryana',     description:'Muscular Quarter Horse. Calm and versatile, excels in trail riding and ranch work.',                                       img:'asset/horse/sindhi.png' },

  // EXOTIC PETS
  { id:94,  name:'Ziggy',   age:'2 years',   breed:'Bearded Dragon',    category:'Exotic Pets', gender:'Male',   location:'Mumbai',      description:'Friendly Bearded Dragon who loves basking. He waves his arm in greeting — very docile.',                                 img:'asset/exotic/bearded dragon.png' },
  { id:96,  name:'Gecko',   age:'1 year',    breed:'Leopard Gecko',     category:'Exotic Pets', gender:'Male',   location:'Bangalore',   description:'Spotted Leopard Gecko. Very easy to care for and active in the evenings.',                                               img:'asset/exotic/leopard geko.png' },
  { id:97,  name:'Spike',   age:'4 years',   breed:'Iguana',            category:'Exotic Pets', gender:'Male',   location:'Hyderabad',   description:'Large Green Iguana who loves climbing and basking. Truly impressive.',                                                   img:'asset/exotic/iguana.png' },
  { id:100, name:'Sugar',   age:'1 year',    breed:'Sugar Glider',      category:'Exotic Pets', gender:'Female', location:'Kolkata',     description:'Tiny Sugar Glider who bonds very deeply. Glides through the air and loves sleeping in a pouch.',                        img:'asset/exotic/sugar glider.png' },

  
];

// ────────────────────────────────────────────────────────────
// PAGE STATE
// ────────────────────────────────────────────────────────────
var activeCategory = 'All';
var searchQuery    = '';

var CATEGORIES = ['All','Dogs','Cats','Birds','Fish','Rabbits','Hamsters','Turtles','Guinea Pigs','Horses','Exotic Pets'];

// ── Auth helpers ────────────────────────────────────────────
function requireLogin() {
  if (!localStorage.getItem('petconnect_current_user')) {
    window.location.href = 'login.html';
  }
}
function logout() {
  localStorage.removeItem('petconnect_current_user');
  window.location.href = 'login.html';
}
function updateNav() {
  var user      = JSON.parse(localStorage.getItem('petconnect_current_user') || 'null');
  var greet     = document.getElementById('userGreet');
  var logoutBtn = document.getElementById('logoutBtn');
  if (user) {
    if (greet)     { greet.textContent = '👋 ' + user.name.split(' ')[0]; greet.style.display = 'inline'; }
    if (logoutBtn) { logoutBtn.style.display = 'inline-block'; }
  }
  if (logoutBtn) logoutBtn.addEventListener('click', logout);
}

// ── Build filter pills ──────────────────────────────────────
function buildPills() {
  var container = document.getElementById('filterPills');
  if (!container) return;
  container.innerHTML = CATEGORIES.map(function (cat) {
    return '<button class="filter-pill' + (cat === 'All' ? ' active' : '') + '" data-cat="' + cat + '">' + cat + '</button>';
  }).join('');

  container.querySelectorAll('.filter-pill').forEach(function (btn) {
    btn.addEventListener('click', function () {
      activeCategory = this.dataset.cat;
      container.querySelectorAll('.filter-pill').forEach(function (b) {
        b.classList.toggle('active', b.dataset.cat === activeCategory);
      });
      renderCards();
    });
  });
}

// ── Filter logic ────────────────────────────────────────────
function getFiltered() {
  var list = petsData;
  if (activeCategory !== 'All') {
    list = list.filter(function (p) { return p.category === activeCategory; });
  }
  if (searchQuery) {
    var q = searchQuery.toLowerCase();
    list = list.filter(function (p) {
      return p.name.toLowerCase().includes(q)     ||
             p.breed.toLowerCase().includes(q)    ||
             p.category.toLowerCase().includes(q) ||
             p.location.toLowerCase().includes(q);
    });
  }
  return list;
}

// ── Navigate to adopt page ──────────────────────────────────
function adoptPet(petName) {
  localStorage.setItem('petconnect_adopt_pet', petName);
  window.location.href = 'adopt.html';
}

// ── Render 3D flip cards ────────────────────────────────────
function renderCards() {
  var grid = document.getElementById('petGrid');
  var pets = getFiltered();
  var label = document.getElementById('resultsLabel');
  if (label) label.textContent = pets.length + ' pet' + (pets.length !== 1 ? 's' : '') + ' found';

  if (pets.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div><h3>No pets found</h3><p>Try a different filter or clear your search.</p></div>';
    return;
  }

  grid.innerHTML = pets.map(function (pet) {
    // Escape single quotes in pet name for inline onclick
    var safeName = pet.name.replace(/'/g, "\\'");
    return (
      '<div class="flip-wrap">' +
        '<div class="flip-inner">' +
          // FRONT
          '<div class="flip-front">' +
            '<div class="front-img-wrap">' +
              '<img src="' + pet.img + '" alt="' + pet.name + '" loading="lazy" ' +
                'onerror="this.src=\'https://images.unsplash.com/photo-1444212477490-ca407925329e?w=400&q=80&fit=crop\'"/>' +
              '<span class="front-badge">' + pet.category + '</span>' +
            '</div>' +
            '<div class="front-body">' +
              '<div class="front-name">' + pet.name + '</div>' +
              '<div class="front-meta">' + pet.breed + '<br/>' + pet.age + ' · ' + pet.gender + ' · ' + pet.location + '</div>' +
            '</div>' +
            '<div class="front-hint"><span class="hint-arrow">↔</span> Hover to see details</div>' +
          '</div>' +
          // BACK
          '<div class="flip-back">' +
            '<div class="back-img-strip">' +
              '<img src="' + pet.img + '" alt="' + pet.name + '" loading="lazy"/>' +
            '</div>' +
            '<div class="back-body">' +
              '<div class="back-name">' + pet.name + '</div>' +
              '<div class="back-tags">' +
                '<span class="back-tag">📅 ' + pet.age + '</span>' +
                '<span class="back-tag">⚥ ' + pet.gender + '</span>' +
                '<span class="back-tag">📍 ' + pet.location + '</span>' +
              '</div>' +
              '<p class="back-desc">' + pet.description + '</p>' +
              '<button class="back-btn" onclick="adoptPet(\'' + safeName + '\')">Adopt ' + pet.name + ' →</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }).join('');

  // Re-attach cursor grow to new cards
  var cursor = document.getElementById('cursor');
  if (cursor) {
    grid.querySelectorAll('.flip-wrap').forEach(function (el) {
      el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); });
      el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); });
    });
  }
}

// ── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  requireLogin();
  updateNav();
  buildPills();

  // Pre-select category from URL (e.g. pets.html?category=Dogs)
  var urlCat = new URLSearchParams(window.location.search).get('category') || 'All';
  if (urlCat !== 'All') {
    activeCategory = urlCat;
    document.querySelectorAll('.filter-pill').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.cat === urlCat);
    });
  }

  renderCards();

  // Search
  var inp   = document.getElementById('searchInput');
  var clear = document.getElementById('searchClear');
  if (inp) {
    inp.addEventListener('input', function () {
      searchQuery = this.value.trim();
      if (clear) clear.classList.toggle('show', searchQuery.length > 0);
      renderCards();
    });
  }
  if (clear) {
    clear.addEventListener('click', function () {
      inp.value = ''; searchQuery = '';
      clear.classList.remove('show');
      renderCards();
    });
  }

  // Hamburger
  var ham  = document.getElementById('hamburger');
  var navL = document.getElementById('navLinks');
  if (ham && navL) ham.addEventListener('click', function () { navL.classList.toggle('open'); });

  // Custom cursor
  var cursor = document.getElementById('cursor');
  if (cursor) {
    document.addEventListener('mousemove', function (e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, .filter-pill').forEach(function (el) {
      el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); });
      el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); });
    });
  }
});
