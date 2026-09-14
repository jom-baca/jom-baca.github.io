const words = [['bas', '🚌'], ['beg', '🎒'], ['Kucing', '🐱'], ['jam', '⏰'], ['jus', '🧃'], ['pen', '🖊️'], ['rak', '🗄️'], ['tin', '🥫'], ['van', '🚐'], ['zip', '🤐'], ['bom', '💣'], ['bus', '🚌'], ['cam', '📷'], ['gam', '🖼️'], ['gas', '⛽'], ['lap', '💻'], ['lim', '🍋'], ['lot', '🎟️'], ['mal', '🏬'], ['pam', '⛲'], ['pin', '📌'], ['pod', '🎙️'], ['ros', '🌹'], ['sip', '🥤'], ['tali', '🪢'], ['top', '🔝'], ['wan', '👴'], ['yap', '🧑'], ['zon', '🗺️'], ['kad', '💳']];
const stories = [['Bas Ali', '🚌', ['Ali naik bas.', 'Bas itu besar.', 'Ali duduk di dalam bas.', 'Ali dan ibu pergi ke pekan.']], ['Jam Baru', '⏰', ['Ini jam baru.', 'Jam itu ada di rak.', 'Jam berbunyi tik tok.']], ['Cat Rumah', '🎨', ['Cat rumah.', 'Cat rumah warna merah.', 'Ahmad suka cat merah.']], ['Beg Merah', '🎒', ['Ini beg merah.', 'Beg ada di atas rak.', 'Pen dan buku ada dalam beg.']], ['Van Ibu', '🚐', ['Ibu ada van.', 'Van itu laju.', 'Ali naik van bersama ibu.', 'Ali bersama ibu pergi ke pasar.']], ['Tin Susu', '🥫', ['Ini tin susu.', 'Tin ada di atas meja.', 'Ali minum susu campur Coklat.', 'Ali minum sambil duduk.']], ['Pen Biru', '🖊️', ['Pen Ali warna biru.', 'Ali tulis di atas kad.', 'Tulisan Ali kemas.', 'Ali suka tulis cerita seram.']], ['Bunga Ros', '🌹', ['Ini ros merah.', 'Ros ada di dalam pasu.', 'Ibu suka bunga ros.', 'Ibu suka petik bunga ros.']], ['Jus Limau', '🧃', ['Ali buat jus limau.', 'Jus itu manis dan sedap.', 'Ali minum jus dengan ibu.','Ali minum jus dengan ibu sampai habis.']], ['Zip Seluar', '🤐', ['Zip baju sejuk Ali rosak.', 'Ibu tarik zip perlahan.', 'Zip sudah dibaiki!', 'Ali boleh zip baju semula']]];
const moreStories = [
  ['Rak Buku', '📚', ['Ada rak buku.', 'Buku Ali ada di rak.', 'Ali baca buku.']], 
  ['Bas Ke Taman', '🌳', ['Ali naik bas.', 'Bas pergi ke taman.', 'Ali main di taman.']], 
  ['Kasut Baru', '👟', ['Ini kasut Baru.', 'Kasut itu biru.', 'Ali pakai kasut.']], 
  ['Bola Ali', '⚽', ['Ali ada bola.', 'Ali sepak bola.', 'Bola masuk gol!']], 
  ['Topi Merah', '🧢', ['Ini topi merah.', 'Topi ada di atas rak.', 'Ali pakai topi.']], 
  ['Kad Untuk Ibu', '💌', ['Ali buat kad.', 'Kad itu untuk ibu.', 'Ibu suka kad Ali.']], 
  ['Pasu Ros', '🏺', ['Ada pasu.', 'Ros ada dalam pasu.', 'Pasu itu cantik.']], 
  ['Jam Pagi', '🌞', ['Jam berbunyi.', 'Hari sudah pagi.', 'Ali bangun dan mandi.']], 
  ['Buku Ali', '📖', ['Ali ada buku.', 'Buku ada gambar.', 'Ali baca dengan ibu.']], 
  ['Kucing Tidur', '🐱', ['Kucing sudah kenyang.', 'Kucing tidur di atas tikar.', 'Kucing tidur lena.']],
  ['Jus Manis', '🧃', ['Ini jus.', 'Jus itu manis.', 'Ali minum jus.']], 
  ['Tin Biskut', '🍪', ['Ada tin biskut.', 'Tin itu bulat.', 'Ali ambil biskut.']], 
  ['Van Biru', '🚐', ['Van itu biru.', 'Van ada di luar.', 'Ayah bawa van.']], 
  ['Pen Hilang', '🖊️', ['Pen Ali hilang.', 'Pen ada di bawah rak.', 'Ali jumpa pen.']], 
  ['Beg Sekolah', '🎒', ['Beg sekolah Ali berat.', 'Buku masuk dalam beg.', 'Ali angkat beg.']], 
  ['Bas Besar', '🚌', ['Bas itu besar.', 'Bas ada banyak kerusi.', 'Ali duduk dalam bas.']], 
  ['Kucing Makan', '🐱', ['Kucing makan ikan.', 'Kucing minum air.', 'Kucing sudah kenyang.']], 
  ['Ros Ibu', '🌹', ['Ibu beli ros.', 'Ros warna merah.', 'Ros ada dalam pasu.']], 
  ['Zip Beg', '🤐', ['Zip beg terbuka.', 'Ali tarik zip.', 'Zip beg sudah tutup.']], 
  ['Rak Mainan', '🧸', ['Mainan ada di rak.', 'Ali susun mainan.', 'Rak sudah kemas.']],
  ['Lari Pagi', '🏃', ['Ali lari pagi.', 'Ali lari di taman.', 'Ali rasa sihat.']], 
  ['Air Limau', '🍋', ['Ibu buat air limau.', 'Air itu masam.', 'Ali minum air.']], 
  ['Bola Dalam Bakul', '🏀', ['Bola ada dalam bakul.', 'Ali ambil bola.', 'Ali main bola.']], 
  ['Kapal Kertas', '⛵', ['Ali buat kapal.', 'Kapal itu daripada kertas.', 'Kapal terapung di air.']], 
  ['Lukis Gambar', '🎨', ['Ali lukis gambar.', 'Ali guna pen.', 'Gambar itu cantik.']], 
  ['Kampung Nenek', '🏘️', ['Hari ini baik.', 'Ali balik kampung.', 'Ali rasa hebat!']],
];
stories.push(...moreStories);
const extraKVKStories = [
  ['Lencana Ali', '🏅', ['Ali ada lencana.', 'Lencana itu emas.', 'Ali simpan lencana.']],
  ['Kawan Baharu', '🤝', ['Ali ada kawan.', 'Kawan Ali baik.', 'Mereka main bersama.']],
  ['Pagi Di Taman', '🌳', ['Ali pergi ke taman.', 'Ali nampak bas.', 'Ali duduk di bangku.']],
  ['Buku Di Rak', '📚', ['Buku ada di rak.', 'Rak itu tinggi.', 'Ali ambil buku.']],
  ['Kad Merah', '🟥', ['Ini kad merah.', 'Kad ada di meja.', 'Ali beri kad kepada ibu.']],
  ['Jus Untuk Siti', '🧃', ['Siti suka jus.', 'Jus ada dalam tin.', 'Siti minum jus.']],
  ['Bas Pagi', '🚌', ['Bas tiba pagi.', 'Ali naik bas.', 'Bas bawa Ali ke sekolah.']],
  ['Pen Dan Kad', '🖊️', ['Ali ada pen.', 'Ali tulis atas kad.', 'Kad itu untuk ayah.']],
  ['Ros Di Pasu', '🌹', ['Ros ada di pasu.', 'Pasu itu cantik.', 'Ibu letak pasu di meja.']],
  ['Van Ayah', '🚐', ['Ayah ada van.', 'Van warna biru.', 'Ali duduk dalam van.']],
  ['Jam Berbunyi', '⏰', ['Jam berbunyi tik tok.', 'Ali lihat jam.', 'Sudah masa untuk tidur.']],
  ['Beg Ali', '🎒', ['Beg Ali berat.', 'Ada buku dalam beg.', 'Ali bawa beg ke sekolah.']],
  ['Cat Comel', '🐱', ['Cat itu comel.', 'Cat duduk di rak.', 'Ali belai Cat.']],
  ['Hari Ceria', '🌈', ['Hari ini ceria.', 'Ali baca banyak kata.', 'Ali rasa hebat!']]
];
stories.push(...extraKVKStories);
const storyLevels = {
    1: [
      ['Kuda', '🐎', ['Ini kuda.', 'Kuda lari laju.', 'Bapa naik kuda.', 'Kuda suka Bapa.']],
      ['Bola', '⚽', ['Ini bola.', 'Bola itu biru.', 'Dina bawa bola.', 'Dina suka bola.']],
      ['Buku', '📚', ['Ini buku.', 'Buku itu baru.', 'Bibi baca buku.', 'Buku ada di meja.']],
      ['Mata', '👀', ['Ini mata.', 'Mata ada dua.', 'Mata Siti buka.', 'Siti jaga mata.']],
      ['Bayi', '👶', ['Ini bayi.', 'Nama bayi Rina.', 'Mama riba bayi.', 'Bayi suka mama.']],
      ['Kaki', '🦶', ['Ini kaki.', 'Kaki ada dua.', 'Didi lari laju.', 'Didi jaga kaki.']],
      ['Ceri', '🍒', ['Ini ceri.', 'Ceri ada dua.', 'Nini beli ceri.', 'Nini suka ceri.']],
      ['Guli', '🔴🟢🟡', ['Ini guli.', 'Guli itu biru.', 'Ari ada guli.', 'Ari suka guli.']],
      ['Baju', '👕', ['Ini baju.', 'Baju itu baru.', 'Mama beli baju.', 'Dina suka baju.']],
      ['Meja', '🪑', ['Ini meja.', 'Meja itu baru.', 'Buku ada di meja.', 'Bibi baca di meja.']],
      ['Nasi', '🍚', ['Ini nasi.', 'Nasi ada di meja.', 'Mama suap Dina.', 'Dina suka nasi.']],
      ['Susu', '🥛', ['Ini susu.', 'Susu itu suam.', 'Mama beri susu.', 'Bayi suka susu.']],
      ['Topi', '🧢', ['Ini topi.', 'Topi itu biru.', 'Rina bawa topi.', 'Rina suka topi.']],
      ['Roda', '🛞', ['Ini roda.', 'Roda ada dua.', 'Roda ada di beca.', 'Beca itu laju.']],
      ['Pasu', '🏺', ['Ini pasu.', 'Pasu itu biru.', 'Pasu ada di meja.', 'Ibu suka pasu.']],
      ['Labu', '🎃', ['Ini labu.', 'Labu itu muda.', 'Ibu beli labu.', 'Labu ada di meja.']],
      ['Sapu', '🧹', ['Ini sapu.', 'Sapu itu baru.', 'Ibu guna sapu.', 'Sapu ada di sisi.']],
      ['Tali', '🪢', ['Ini tali.', 'Tali itu biru.', 'Didi bawa tali.', 'Tali ada di meja.']],
      ['Dadu', '🎲', ['Ini dadu.', 'Dadu ada dua.', 'Dara main dadu.', 'Dara suka dadu.']],
      ['Roti', '🍞', ['Ini roti.', 'Roti ada di meja.', 'Ibu beri roti.', 'Rina suka roti.']],
      ['Lori', '🚚', ['Ini lori.', 'Lori itu biru.', 'Lori lalu di desa.', 'Didi suka lori.']],
      ['Beca', '🛺', ['Ini beca.', 'Beca ada roda.', 'Beca itu laju.', 'Ari suka beca.']],
      ['Desa', '🏡', ['Ini desa.', 'Desa itu jauh dari kota.', 'Dara ada di desa.', 'Dara suka desa.']],
      ['Kopi', '☕', ['Ini kopi.', 'Kopi itu suam.', 'Kopi ada di meja.', 'Bapa suka kopi.']],
      ['Bapa', '👨', ['Ini bapa.', 'Bapa baca buku.', 'Bapa bawa bola.', 'Didi suka bapa.']],
      ['Mama', '👩', ['Ini mama.', 'Mama baca buku.', 'Mama beli ceri.', 'Rina suka mama.']],
      ['Dahi', '🙂', ['Ini dahi.', 'Dahi ada di muka.', 'Ibu usap dahi.', 'Dahi Rina luas.']],
      ['Batu', '🪨', ['Ini batu.', 'Batu itu kelabu.', 'Batu ada di desa.', 'Didi main batu.']],
      ['Padi', '🌾', ['Ini padi.', 'Padi ada di desa.', 'Padi itu muda.', 'Mina suka padi.']],
      ['Rusa', '🦌', ['Ini rusa.', 'Rusa lari laju.', 'Rusa ada di desa.', 'Mina suka rusa.']]
    ],

    2: [
      ['Bas Ali', '🚌', ['Bas tiba pagi.', 'Ali naik bas.', 'Ibu ikut Ali.', 'Bas pergi ke pekan.']],
      ['Jam Baru', '⏰', ['Ali ada jam baru.', 'Jam ada di rak.', 'Jam bunyi pagi.', 'Ali lihat jam.']],
      ['Baiki Rumah', '🛠️🏠', ['Ayah baiki rumah.', 'Rumah atap bocor.', 'Ayah mula baiki.', 'Atap rumah dah tak bocor.']],
      ['Beg Merah', '🎒', ['Ali ada beg merah.', 'Buku ada di beg.', 'Pen ada di beg.', 'Ali bawa beg.']],
      ['Van Ibu', '🚐', ['Ibu ada van biru.', 'Ali naik van.', 'Ibu bawa van.', 'Van tiba di pasar.']],
      ['Tin Susu', '🥫', ['Ada tin susu.', 'Tin ada di meja.', 'Ibu buka tin.', 'Ali minum susu.']],
      ['Pen Biru', '🖊️', ['Ali ada pen biru.', 'Pen ada di meja.', 'Ali guna pen.', 'Ali tulis nama.']],
      ['Ros Merah', '🌹', ['Ibu beli ros merah.', 'Ros ada di pasu.', 'Pasu ada di meja.', 'Ibu suka ros.']],
      ['Jus Limau', '🧃', ['Ibu buat jus limau.', 'Ali kacau jus.', 'Jus rasa manis.', 'Ali minum jus.']],
      ['Zip Beg', '🎒', ['Zip beg Ali rosak.', 'Ibu tarik zip.', 'Zip kini baik.', 'Ali bawa beg.']],
      ['Cari Bola', '⚽', ['Ali cari bola.', 'Bola tiada di meja.', 'Ali lihat di bawah.', 'Bola ada di situ.']],
      ['Mimi Lapar', '🐱', ['Mimi rasa lapar.', 'Siti beri ikan.', 'Mimi makan ikan.', 'Mimi lalu lena.']],
      ['Rak Buku', '📚', ['Buku ada di meja.', 'Ali ambil buku.', 'Ali susun di rak.', 'Rak jadi kemas.']],
      ['Hujan Pagi', '🌧️', ['Pagi ini hujan.', 'Ali ada di rumah.', 'Ali baca buku.', 'Ibu buat roti.']],
      ['Kasut Baru', '👟', ['Ayah beli kasut.', 'Kasut itu biru.', 'Ali cuba pakai.', 'Ali suka kasut.']],
      ['Kad Untuk Ibu', '💌', ['Ali buat kad.', 'Ali tulis nama.', 'Ali beri kad pada ibu.', 'Ibu suka kad.']],
      ['Di Taman', '🌳', ['Ali pergi ke taman.', 'Siti ikut Ali.', 'Mereka lihat rusa.', 'Rusa lari laju.']],
      ['Kapal Kertas', '⛵', ['Ali lipat kertas.', 'Kertas jadi kapal.', 'Ali letak di air.', 'Kapal lalu di air.']],
      ['Dadu Adik', '🎲', ['Adik ada dadu.', 'Dadu ada di lantai.', 'Ali kutip dadu.', 'Adik kata terima kasih.']],
      ['Bas Sekolah', '🚌', ['Bas tiba pagi.', 'Ali naik bas.', 'Bas pergi ke sekolah.', 'Ali jumpa kawan.']],
      ['Kebun Atuk', '🌱', ['Atuk ada kebun.', 'Ali ikut atuk.', 'Atuk tanam sawi.', 'Ali bantu atuk.']],
      ['Ikan di Kolam', '🐟', ['Ada ikan di kolam.', 'Ikan itu kecil.', 'Siti beri ikan makan.', 'Ikan suka makan.']],
      ['Kotak Hadiah', '🎁', ['Ada kotak merah.', 'Kotak itu besar.', 'Ibu beri pada Siti.', 'Siti buka kotak.']],
      ['Pergi ke Pantai', '🏖️', ['Ali pergi ke pantai.', 'Ibu ikut Ali.', 'Ali main pasir.', 'Ali lihat ombak.']],
      ['Rama-rama', '🦋', ['Ada rama-rama.', 'Rama-rama itu kecil.', 'Siti lihat rama-rama.', 'Rama-rama lalu pergi.']],
      ['Bekal Siti', '🍱', ['Siti bawa bekal.', 'Bekal ada nasi.', 'Siti makan nasi.', 'Siti rasa puas.']],
      ['Main Bola', '⚽', ['Ali bawa bola.', 'Siti ikut Ali.', 'Mereka main bola.', 'Mereka rasa seronok.']],
      ['Bantu Ibu', '🧹', ['Ibu sapu rumah.', 'Ali bantu ibu.', 'Ali susun buku.', 'Rumah jadi kemas.']],
      ['Hari Sukan', '🏃', ['Hari ini hari sukan.', 'Ali masuk acara.', 'Ali lari laju.', 'Ibu sorak Ali.']],
      ['Anak Arnab', '🐇', ['Ada anak arnab.', 'Arnab itu putih.', 'Siti beri lobak.', 'Arnab makan lobak.']]
    ],

    3: []
};
let activeStories = stories, storyLevel = null, quizLevel = null;
let shortStoryPage = 0;
let shortStorySelected = false;
const shortStories = [
  { title: 'Arnab dan Kura-kura', cover: '🐰🐢', pages: [
    { emoji: '🌤️', text: ['Pada suatu pagi, Arnab bertemu Kura-kura.', 'Arnab suka mengejek Kura-kura yang berjalan perlahan.', 'Kura-kura mengajak Arnab berlumba.'] },
    { emoji: '🏁', text: ['Perlumbaan pun bermula.', 'Arnab berlari sangat laju.', 'Kura-kura berjalan perlahan tetapi tidak berhenti.'] },
    { emoji: '🌳😴', text: ['Arnab melihat Kura-kura jauh di belakang.', 'Arnab yakin dia akan menang.', 'Arnab berehat di bawah pokok lalu tertidur.'] },
    { emoji: '🐢', text: ['Kura-kura terus berjalan.', 'Dia melalui Arnab yang sedang tidur.', 'Akhirnya Kura-kura hampir sampai ke garisan penamat.'] },
    { emoji: '🏆', text: ['Arnab terjaga lalu berlari sekuat hati.', 'Namun Kura-kura sudah sampai dahulu.', 'Arnab sedar dia tidak patut sombong.'], lesson: true, lessonText: 'Rajin berusaha dan jangan memandang rendah orang lain.' }
  ]},
  { title: 'Singa dan Tikus', cover: '🦁🐭', pages: [
    { emoji: '🦁', text: ['Seekor Singa sedang tidur di dalam hutan.', 'Tikus kecil berlari lalu terpijak kaki Singa.', 'Singa terjaga dan menangkap Tikus.'] },
    { emoji: '🐭', text: ['Tikus meminta maaf kepada Singa.', '“Lepaskan saya. Mungkin saya boleh membantu kamu suatu hari nanti,” kata Tikus.', 'Singa ketawa tetapi melepaskannya.'] },
    { emoji: '🪢', text: ['Beberapa hari kemudian, Singa terkena perangkap pemburu.', 'Singa terikat dengan tali yang kuat.', 'Singa mengaum meminta bantuan.'] },
    { emoji: '🐭✨', text: ['Tikus terdengar suara Singa.', 'Tikus menggigit tali sedikit demi sedikit.', 'Akhirnya Singa berjaya bebas.'] },
    { emoji: '🤝', text: ['Singa mengucapkan terima kasih kepada Tikus.', 'Singa kini tahu haiwan kecil juga boleh membantu.', 'Mereka menjadi kawan baik.'], lesson: true, lessonText: 'Jangan memandang rendah orang lain dan sentiasa membalas kebaikan.' }
  ]},
  { title: 'Gagak dan Air', cover: '🐦🏺', pages: [
    { emoji: '☀️', text: ['Hari sangat panas.', 'Seekor Gagak berasa haus.', 'Gagak terbang mencari air.'] },
    { emoji: '🏺', text: ['Gagak menjumpai sebuah pasu.', 'Ada sedikit air di dalam pasu.', 'Paruh Gagak tidak dapat mencapai air itu.'] },
    { emoji: '🪨', text: ['Gagak tidak berputus asa.', 'Dia melihat batu-batu kecil di tanah.', 'Gagak terfikir satu cara.'] },
    { emoji: '🐦', text: ['Gagak memasukkan batu ke dalam pasu satu demi satu.', 'Air di dalam pasu semakin naik.', 'Akhirnya Gagak dapat minum.'] },
    { emoji: '💧', text: ['Gagak hilang rasa haus.', 'Dia gembira kerana berjaya menyelesaikan masalah.', 'Gagak pun terbang balik.'], lesson: true, lessonText: 'Gunakan fikiran dan jangan mudah berputus asa.' }
  ]},
  { title: 'Semut yang Rajin', cover: '🐜🌾', pages: [
    { emoji: '🌞', text: ['Pada musim panas, Semut sibuk mencari makanan.', 'Semut membawa makanan sedikit demi sedikit.', 'Dia menyimpannya di dalam sarang.'] },
    { emoji: '🦗', text: ['Belalang melihat Semut bekerja.', 'Belalang mengajak Semut bermain sepanjang hari.', 'Semut memilih untuk menyiapkan kerjanya dahulu.'] },
    { emoji: '🌧️', text: ['Beberapa minggu kemudian, hujan turun setiap hari.', 'Belalang sukar mencari makanan.', 'Belalang mula berasa lapar.'] },
    { emoji: '🐜', text: ['Semut masih mempunyai makanan di dalam sarang.', 'Semut berkongsi sedikit makanan dengan Belalang.', 'Belalang berasa sangat bersyukur.'] },
    { emoji: '🌟', text: ['Belalang belajar daripada Semut.', 'Dia berjanji akan rajin dan membuat persediaan.', 'Semut tersenyum mendengarnya.'], lesson: true, lessonText: 'Rajinlah berusaha dan bersedia sebelum menghadapi kesusahan.' }
  ]},
  { title: 'Anak Itik yang Berani', cover: '🦆🌊', pages: [
    { emoji: '🦆', text: ['Ibu Itik membawa anak-anaknya ke kolam.', 'Semua anak itik masuk ke dalam air.', 'Seekor anak itik takut untuk berenang.'] },
    { emoji: '💧', text: ['Ibu Itik berdiri dekat dengannya.', '“Cuba perlahan-lahan. Ibu ada di sini,” kata Ibu Itik.', 'Anak Itik mencelupkan kakinya ke dalam air.'] },
    { emoji: '🏊', text: ['Anak Itik mula menggerakkan kakinya.', 'Dia terapung dan berenang sedikit.', 'Anak Itik mula berasa yakin.'] },
    { emoji: '🦆🦆', text: ['Dia berenang bersama adik-beradiknya.', 'Mereka bermain di tepi kolam.', 'Anak Itik sangat gembira.'] },
    { emoji: '⭐', text: ['Anak Itik berjaya mengatasi rasa takut.', 'Ibu Itik memujinya kerana berani mencuba.', 'Sejak itu, dia suka berenang.'], lesson: true, lessonText: 'Berani mencuba membantu kita belajar perkara baharu.' }
  ]}
];
let shortStoryIndex = 0;
const levelWords = { 1: ['ba','bi','bu','ca','da','di','ka','la','ma','na','pa','sa'], 2: ['bas','bom','cat','jam','jus','kad','pen','rak','tin','van'], 3: ['baju','bola','buku','kaki','mata','meja','nasi','roda','susu','topi'] };
const levelEmojis = { 1: '🌱', 2: '⭐', 3: '🏆' };
const storage = { get: key => { try { return localStorage.getItem(key) } catch (e) { return null } }, set: (key, value) => { try { localStorage.setItem(key, value) } catch (e) {} } };

// ===== JOM BACA ACCOUNT + FREEMIUM CONFIG =====
// Tukar nombor di bawah kepada nombor WhatsApp penjual (format Malaysia: 60123456789).
const PURCHASE_WHATSAPP = '601110798762';
const PREMIUM_PRICE = 'RM9.90';
const FREE_STORY_LIMIT = 5;

let currentAccount = null;
let currentAccessToken = null;
let currentRefreshToken = null;
let currentPremium = false;
let accountReady = false;

const AUTH_SESSION_KEY = 'jomBacaAuthSession';

function getSupabaseConfig() {
    const config = window.JOM_BACA_CONFIG || {};
    return {
        supabaseUrl: (config.supabaseUrl || '').replace(/\/+$/, ''),
        supabaseAnonKey: config.supabaseAnonKey || ''
    };
}

function hasSupabaseConfig() {
    const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
    return !!supabaseUrl && !!supabaseAnonKey && !supabaseUrl.includes('PASTE_') && !supabaseAnonKey.includes('PASTE_');
}

function isPremiumUnlocked() {
    return currentPremium === true;
}

function saveAuthSession(session) {
    if (!session?.access_token || !session?.refresh_token) return;
    currentAccessToken = session.access_token;
    currentRefreshToken = session.refresh_token;
    currentAccount = session.user || currentAccount;
    storage.set(AUTH_SESSION_KEY, JSON.stringify({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
        expires_at: session.expires_at || null,
        user: session.user || null
    }));
}

function clearAuthSession() {
    currentAccount = null;
    currentAccessToken = null;
    currentRefreshToken = null;
    currentPremium = false;
    try { localStorage.removeItem(AUTH_SESSION_KEY); } catch (e) {}
}

function setAuthMessage(text, type = '') {
    const msg = document.getElementById('unlockMessage');
    if (!msg) return;
    msg.textContent = text || '';
    msg.className = 'unlock-message' + (type ? ` ${type}` : '');
}

function renderAccountUI() {
    const loggedOut = document.getElementById('premiumLoggedOut');
    const loggedIn = document.getElementById('premiumLoggedIn');
    const emailEl = document.getElementById('accountEmail');
    const stateEl = document.getElementById('accountPremiumState');
    const redeemArea = document.getElementById('redeemArea');

    if (currentAccount) {
        if (loggedOut) loggedOut.style.display = 'none';
        if (loggedIn) loggedIn.style.display = 'block';
        if (emailEl) emailEl.textContent = currentAccount.email || 'Akaun Jom Baca';
        if (stateEl) {
            stateEl.textContent = currentPremium ? '✅ Versi penuh aktif' : '🎁 Akaun percuma';
            stateEl.className = 'account-state' + (currentPremium ? ' premium' : '');
        }
        if (redeemArea) redeemArea.style.display = currentPremium ? 'none' : 'block';
    } else {
        if (loggedOut) loggedOut.style.display = 'block';
        if (loggedIn) loggedIn.style.display = 'none';
    }
}

function refreshPremiumScreen() {
    renderAccountUI();
    if (document.getElementById('stories')?.classList.contains('active') && storyLevel === null) {
        renderStoryLevels();
    }
}

function openPremiumModal() {
    const modal = document.getElementById('premiumModal');
    setAuthMessage('');
    renderAccountUI();
    if (modal) {
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        setTimeout(() => {
            const target = currentAccount ? document.getElementById('unlockCode') : document.getElementById('authEmail');
            target?.focus();
        }, 50);
    }
}

function closePremiumModal() {
    const modal = document.getElementById('premiumModal');
    if (modal) {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
    }
}

function buyPremium() {
    if (PURCHASE_WHATSAPP.includes('X')) {
        alert('Sila tukar PURCHASE_WHATSAPP dalam script.js kepada nombor WhatsApp anda dahulu.');
        return;
    }
    const text = encodeURIComponent(`Assalamualaikum, saya nak beli Jom Baca versi penuh ${PREMIUM_PRICE}.`);
    window.open(`https://wa.me/${PURCHASE_WHATSAPP}?text=${text}`, '_blank');
}

async function supabaseAuthRequest(path, body) {
    const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
    if (!hasSupabaseConfig()) throw new Error('Supabase belum dikonfigurasi.');
    const response = await fetch(`${supabaseUrl}/auth/v1/${path}`, {
        method: 'POST',
        headers: {
            'apikey': supabaseAnonKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
        throw new Error(data?.msg || data?.message || data?.error_description || 'Permintaan tidak berjaya.');
    }
    return data;
}

function getAuthFormValues() {
    return {
        email: (document.getElementById('authEmail')?.value || '').trim().toLowerCase(),
        password: document.getElementById('authPassword')?.value || ''
    };
}

function validateAuthForm(email, password) {
    if (!email || !email.includes('@')) return 'Sila masukkan email yang sah.';
    if (!password || password.length < 6) return 'Kata laluan mesti sekurang-kurangnya 6 aksara.';
    return '';
}

async function signUpAccount() {
    const { email, password } = getAuthFormValues();
    const validation = validateAuthForm(email, password);
    if (validation) return setAuthMessage(validation, 'error');

    setAuthMessage('⏳ Sedang daftar akaun...');
    try {
        const data = await supabaseAuthRequest('signup', { email, password });
        if (data?.access_token) {
            saveAuthSession(data);
            await loadPremiumStatus();
            setAuthMessage('✅ Akaun berjaya didaftarkan dan anda telah log masuk.', 'success');
        } else {
            setAuthMessage('✅ Akaun berjaya didaftarkan. Sila semak email untuk pengesahan, kemudian log masuk.', 'success');
        }
        renderAccountUI();
    } catch (error) {
        console.error('Signup error:', error);
        setAuthMessage(friendlyAuthError(error.message), 'error');
    }
}

async function forgotPassword() {
    const email = (document.getElementById('authEmail')?.value || '').trim().toLowerCase();
    if (!email || !email.includes('@')) return setAuthMessage('Sila masukkan email anda dahulu.', 'error');
    if (!hasSupabaseConfig()) return setAuthMessage('Supabase belum dikonfigurasi.', 'error');

    setAuthMessage('⏳ Sedang hantar email reset kata laluan...');
    try {
        const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
        // Supabase akan kembali ke halaman Jom Baca selepas pengguna klik pautan dalam email.
        const redirectTo = window.location.href.split('#')[0].split('?')[0];
        const response = await fetch(`${supabaseUrl}/auth/v1/recover?redirect_to=${encodeURIComponent(redirectTo)}`, {
            method: 'POST',
            headers: { 'apikey': supabaseAnonKey, 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data?.msg || data?.message || 'Tidak dapat menghantar email reset.');
        setAuthMessage('✅ Email reset telah dihantar. Sila semak inbox dan folder spam.', 'success');
    } catch (error) {
        console.error('Password recovery error:', error);
        setAuthMessage(friendlyAuthError(error.message), 'error');
    }
}

function getRecoverySessionFromUrl() {
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    if (hash.get('type') !== 'recovery' || !hash.get('access_token')) return false;
    currentAccessToken = hash.get('access_token');
    currentRefreshToken = hash.get('refresh_token') || null;
    const area = document.getElementById('resetPasswordArea');
    if (area) area.style.display = 'block';
    openPremiumModal();
    setAuthMessage('🔐 Masukkan kata laluan baru anda.', 'success');
    setTimeout(() => document.getElementById('newPassword')?.focus(), 100);
    return true;
}

async function updatePassword() {
    const password = document.getElementById('newPassword')?.value || '';
    if (password.length < 6) return setAuthMessage('Kata laluan mesti sekurang-kurangnya 6 aksara.', 'error');
    if (!currentAccessToken) return setAuthMessage('Pautan reset tidak sah atau telah tamat tempoh. Sila minta pautan baru.', 'error');

    setAuthMessage('⏳ Sedang simpan kata laluan baru...');
    try {
        const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
        const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
            method: 'PUT',
            headers: {
                'apikey': supabaseAnonKey,
                'Authorization': `Bearer ${currentAccessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password })
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data?.msg || data?.message || 'Tidak dapat menukar kata laluan.');
        const area = document.getElementById('resetPasswordArea');
        if (area) area.style.display = 'none';
        document.getElementById('newPassword').value = '';
        history.replaceState(null, '', window.location.pathname + window.location.search);
        setAuthMessage('✅ Kata laluan berjaya ditukar. Anda boleh log masuk menggunakan kata laluan baru.', 'success');
    } catch (error) {
        console.error('Update password error:', error);
        setAuthMessage(friendlyAuthError(error.message), 'error');
    }
}

async function loginAccount() {
    const { email, password } = getAuthFormValues();
    const validation = validateAuthForm(email, password);
    if (validation) return setAuthMessage(validation, 'error');

    setAuthMessage('⏳ Sedang log masuk...');
    try {
        const data = await supabaseAuthRequest('token?grant_type=password', { email, password });
        saveAuthSession(data);
        await loadPremiumStatus();
        setAuthMessage(currentPremium ? '✅ Log masuk berjaya. Versi penuh anda telah dipulihkan.' : '✅ Log masuk berjaya.', 'success');
        refreshPremiumScreen();
    } catch (error) {
        console.error('Login error:', error);
        setAuthMessage(friendlyAuthError(error.message), 'error');
    }
}

function friendlyAuthError(message = '') {
    const m = message.toLowerCase();
    if (m.includes('invalid login credentials')) return 'Email atau kata laluan tidak betul.';
    if (m.includes('email not confirmed')) return 'Email belum disahkan. Sila semak inbox email anda.';
    if (m.includes('user already registered')) return 'Email ini sudah didaftarkan. Sila log masuk.';
    if (m.includes('password')) return 'Kata laluan tidak diterima. Gunakan sekurang-kurangnya 6 aksara.';
    return message || 'Tidak dapat sambung ke akaun sekarang. Sila cuba lagi.';
}

async function refreshAccessToken() {
    if (!currentRefreshToken) return false;
    try {
        const data = await supabaseAuthRequest('token?grant_type=refresh_token', { refresh_token: currentRefreshToken });
        saveAuthSession(data);
        return true;
    } catch (error) {
        console.warn('Refresh session failed:', error);
        clearAuthSession();
        return false;
    }
}

async function authenticatedRpc(functionName, payload = {}, allowRefresh = true) {
    const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
    if (!currentAccessToken) throw new Error('NOT_LOGGED_IN');

    let response = await fetch(`${supabaseUrl}/rest/v1/rpc/${functionName}`, {
        method: 'POST',
        headers: {
            'apikey': supabaseAnonKey,
            'Authorization': `Bearer ${currentAccessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (response.status === 401 && allowRefresh && await refreshAccessToken()) {
        return authenticatedRpc(functionName, payload, false);
    }

    const data = await response.json().catch(() => null);
    if (!response.ok) {
        throw new Error(data?.message || `HTTP ${response.status}`);
    }
    return data;
}

async function loadPremiumStatus() {
    if (!currentAccessToken) {
        currentPremium = false;
        return false;
    }
    try {
        const result = await authenticatedRpc('get_my_premium_status');
        currentPremium = result?.is_premium === true;
        if (result?.email && currentAccount) currentAccount.email = result.email;
        return currentPremium;
    } catch (error) {
        console.warn('Premium status error:', error);
        currentPremium = false;
        return false;
    }
}

async function restoreAuthSession() {
    if (!hasSupabaseConfig()) {
        accountReady = true;
        return;
    }
    let saved = null;
    try { saved = JSON.parse(storage.get(AUTH_SESSION_KEY) || 'null'); } catch (e) {}
    if (!saved?.refresh_token) {
        accountReady = true;
        renderAccountUI();
        return;
    }

    currentRefreshToken = saved.refresh_token;
    currentAccessToken = saved.access_token || null;
    currentAccount = saved.user || null;

    const refreshed = await refreshAccessToken();
    if (refreshed) await loadPremiumStatus();
    accountReady = true;
    refreshPremiumScreen();
}

async function logoutAccount() {
    const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
    try {
        if (currentAccessToken) {
            await fetch(`${supabaseUrl}/auth/v1/logout`, {
                method: 'POST',
                headers: {
                    'apikey': supabaseAnonKey,
                    'Authorization': `Bearer ${currentAccessToken}`
                }
            });
        }
    } catch (error) {
        console.warn('Logout request failed:', error);
    }
    clearAuthSession();
    setAuthMessage('Anda telah log keluar.');
    refreshPremiumScreen();
}

async function submitUnlockCode() {
    const input = document.getElementById('unlockCode');
    const button = document.querySelector('.premium-unlock');
    const code = (input?.value || '').trim().toUpperCase();

    if (!currentAccount || !currentAccessToken) {
        setAuthMessage('Sila log masuk dahulu sebelum mengaktifkan unlock code.', 'error');
        return;
    }
    if (!code) {
        setAuthMessage('Sila masukkan unlock code.', 'error');
        return;
    }

    if (button) {
        button.disabled = true;
        button.textContent = '⏳ Semak code...';
    }
    setAuthMessage('');

    try {
        const result = await authenticatedRpc('redeem_unlock_code', { p_code: code });
        if (result?.success === true) {
            currentPremium = true;
            // Nilai lama tidak lagi digunakan untuk menentukan premium, tetapi dibersihkan supaya logout betul-betul mengunci akses.
            try { localStorage.removeItem('jomBacaPremium'); } catch (e) {}
            storage.set('jomBacaRedeemedCode', code);
            setAuthMessage('🎉 Berjaya! Versi penuh telah diaktifkan pada akaun email ini.', 'success');
            refreshPremiumScreen();
            setTimeout(() => closePremiumModal(), 900);
        } else {
            const reason = result?.reason;
            const message = reason === 'used_by_you'
                ? '✅ Code ini memang sudah aktif pada akaun anda.'
                : reason === 'used'
                    ? 'Code ini telah digunakan oleh akaun lain.'
                    : 'Code tidak sah. Sila semak dan cuba lagi.';
            setAuthMessage(message, reason === 'used_by_you' ? 'success' : 'error');
            if (reason === 'used_by_you') {
                currentPremium = true;
                refreshPremiumScreen();
            }
        }
    } catch (error) {
        console.error('Unlock error:', error);
        setAuthMessage('Tak dapat semak code sekarang. Sila cuba lagi.', 'error');
    } finally {
        if (button) {
            button.disabled = false;
            button.textContent = '🔓 Aktifkan Pada Akaun Ini';
        }
    }
}

function premiumStatusHTML() {
    if (isPremiumUnlocked()) {
        const email = currentAccount?.email ? ` • ${escapeHtml(currentAccount.email)}` : '';
        return `<div class="premium-status unlocked">✅ Versi penuh aktif${email}<br><button class="account-link-button" onclick="openPremiumModal()">Akaun Saya</button></div>`;
    }
    if (currentAccount) {
        return `<div class="free-trial-note"><b>👤 ${escapeHtml(currentAccount.email || 'Akaun Jom Baca')}</b><span>5 cerita percuma • Versi penuh belum aktif</span><button onclick="openPremiumModal()">🔐 Masukkan Unlock Code</button></div>`;
    }
    return `<div class="free-trial-note"><b>🎁 Cuba 5 cerita PERCUMA</b><span>Akses semua tahap & cerita — ${PREMIUM_PRICE}</span><button onclick="openPremiumModal()">👤 Log Masuk / Buka Versi Penuh</button></div>`;
}

function escapeHtml(value = '') {
    return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}
// ===== END ACCOUNT + FREEMIUM CONFIG =====

const savedStoryLevel = Number(storage.get('kvkStoryLevel')) || null;
const savedStoryIndex = Number(storage.get('kvkStoryIndex')) || 0;
if (savedStoryLevel && storyLevels[savedStoryLevel]) {
    storyLevel = savedStoryLevel;
    activeStories = storyLevels[savedStoryLevel];
}
let s = JSON.parse(storage.get('kvk') || 'null') || {
    learned: [],
    score: 0,
    stories: [],
    wrong: {}
};
let wi = 0, si = Math.min(savedStoryIndex, activeStories.length - 1);
function go(id) {
    if (id === 'home') { storyLevel = null; activeStories = stories; id = 'stories'; }
    document.querySelectorAll('.screen').forEach(x => x.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (id === 'learn')
        renderWord();
    if (id === 'stories') {
        if (storyLevel === null) renderStoryLevels();
        else { document.getElementById('storyLevelArea').innerHTML = ''; storyLevel === 3 ? (shortStorySelected ? renderShortStory() : renderShortStoryMenu()) : (document.getElementById('shortStoryContent').style.display = 'none', document.getElementById('storyContent').style.display = 'block', renderStory()); }
    }
    if (id === 'quiz') {
        if (quizLevel === null) renderQuizLevels();
        else { document.getElementById('quizLevelArea').innerHTML = ''; document.getElementById('quizContent').style.display = 'block'; newQuiz(); }
    }
    if (id === 'progress' || id === 'parent')
        renderProgress()
}
function save() {
    storage.set('kvk', JSON.stringify(s))
}



// ===== AUDIO KHAS + TTS FALLBACK =====
// Jika ada rakaman untuk perkataan tertentu, app akan main rakaman itu dahulu.
// Jika fail tiada / gagal dimainkan, app akan guna TTS Bahasa Melayu seperti biasa.
const SPEECH_RATE = {
  word: 0.55,
  sentence: 0.70,
  slow: 0.35
};

// MP3 khas hanya untuk perkataan yang memang bermasalah.
// Contoh: audio/bela.mp3
const recordedAudioMap = {
  bela: 'audio/bela.mp3',
  'bapa suka bela kuda': 'audio/bela-kuda.mp3',
  'nana bela kuda': 'audio/nana-bela-kuda.mp3'
};

function getIndonesianVoice() {
  const voices = speechSynthesis.getVoices();
  return (
    voices.find(v => (v.lang || '').toLowerCase() === 'id-id') ||
    voices.find(v => (v.lang || '').toLowerCase().startsWith('id')) ||
    null
  );
}

function playRecordedWordIfAvailable(text) {
  const clean = (text || '')
    .trim()
    .toLowerCase()
    .replace(/[.!?,;:]+$/g, '');

  const audioPath = recordedAudioMap[clean];
  if (!audioPath) return false;

  const audio = new Audio(audioPath);
  audio.preload = 'auto';

  audio.addEventListener('error', () => {
    speakWithTTS(text, SPEECH_RATE.word, true);
  }, { once: true });

  audio.play().catch(() => {
    speakWithTTS(text, SPEECH_RATE.word, true);
  });

  return true;
}

function speakWithTTS(text, rate = SPEECH_RATE.word, cancelFirst = true) {
  return new Promise(resolve => {
    if (cancelFirst) speechSynthesis.cancel();

    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'id-ID';
    u.rate = rate;

    const indonesianVoice = getIndonesianVoice();
    if (indonesianVoice) {
      u.voice = indonesianVoice;
      u.lang = indonesianVoice.lang || 'id-ID';
    }

    u.onend = resolve;
    u.onerror = resolve;
    speechSynthesis.speak(u);
  });
}

function voice(text, rate) {
  const clean = (text || '').trim();
  const isSentence = /\s/.test(clean);

  if (playRecordedWordIfAvailable(clean)) return;

  const selectedRate =
    typeof rate === 'number'
      ? rate
      : (isSentence ? SPEECH_RATE.sentence : SPEECH_RATE.word);

  speakWithTTS(clean, selectedRate, true);
}


function speakWord() {
    let w = words[wi][0];
    voice(w);
    s.learned.includes(w) || s.learned.push(w);
    save()
}
function speakSlowly() {
    let w = words[wi][0].toUpperCase();
    voice(w.split('').join('... ') + '... ' + w, SPEECH_RATE.slow);
    s.learned.includes(w.toLowerCase()) || s.learned.push(w.toLowerCase());
    save()
}
function renderWord() {
    let [w, e] = words[wi];
    w = w.toUpperCase();
    word.textContent = w;
    learnImg.textContent = e;
    formula.textContent = w.split('').join(' + ') + ' = ' + w;
    c1.textContent = w[0];
    v.textContent = w[1];
    c2.textContent = w[2];
    count.textContent = (wi + 1) + ' / 30'
}
function changeWord(n) {
    wi = (wi + n + words.length) % words.length;
    renderWord()
}
const syllableMap = {
    ali: ['A', 'li'], naik: ['na', 'ik'], duduk: ['du', 'duk'], dalam: ['da', 'lam'], pergi: ['per', 'gi'], pekan: ['pe', 'kan'], bas: ['bas'], itu: ['i', 'tu'], besar: ['be', 'sar'], dan: ['dan'], ibu: ['I', 'bu'], baru: ['ba', 'ru'], ini: ['i', 'ni'], rumah: ['ru', 'mah'], warna: ['war', 'na'], merah: ['me', 'rah'], ahmad: ['Ah', 'mad'], suka: ['su', 'ka'], cat: ['cat'], beg: ['beg'], ada: ['a', 'da'], atas: ['a', 'tas'], rak: ['rak'], pen: ['pen'], buku: ['bu', 'ku'], van: ['van'], laju: ['la', 'ju'], bersama: ['ber', 'sa', 'ma'], tin: ['tin'], susu: ['su', 'su'], meja: ['me', 'ja'], minum: ['mi', 'num'], 
    biru: ['bi', 'ru'], tulis: ['tu', 'lis'], kad: ['kad'], tulisan: ['tu', 'li', 'san'], kemas: ['ke', 'mas'], bunga: ['bu', 'nga'], ros: ['ros'], pasu: ['pa', 'su'], limau: ['li', 'mau'], jus: ['jus'], manis: ['ma', 'nis'], seluar: ['se', 'lu', 'ar'], rosak: ['ro', 'sak'], tarik: ['ta', 'rik'], perlahan: ['per', 'la', 'han'], sudah: ['su', 'dah'], baik: ['ba', 'ik'], kucing: ['ku', 'cing'], kasut: ['ka', 'sut'], bola: ['bo', 'la'], topi: ['to', 'pi'], untuk: ['un', 'tuk'], pagi: ['pa', 'gi'], hari: ['ha', 'ri'], bangun: ['ba', 'ngun'], mandi: ['man', 'di'], biskut: ['bis', 'kut'], bulat: ['bu', 'lat'], 
    ambil: ['am', 'bil'], sekolah: ['se', 'ko', 'lah'], berat: ['be', 'rat'], banyak: ['ba', 'nyak'], kerusi: ['ke', 'ru', 'si'], makan: ['ma', 'kan'], ikan: ['i', 'kan'], air: ['air'], luar: ['lu', 'ar'], ayah: ['A', 'yah'], bawa: ['ba', 'wa'], hilang: ['hi', 'lang'], bawah: ['ba', 'wah'], jumpa: ['jum', 'pa'], terbuka: ['ter', 'bu', 'ka'], tutup: ['tu', 'tup'], mainan: ['ma', 'in', 'an'], susun: ['su', 'sun'], lari: ['la', 'ri'], taman: ['ta', 'man'], rasa: ['ra', 'sa'], sihat: ['si', 'hat'], kapal: ['ka', 'pal'], kertas: ['ker', 'tas'], daripada: ['da', 'ri', 'pa', 'da'], terapung: ['te', 'ra', 'pung'], lukis: ['lu', 'kis'], 
    gambar: ['gam', 'bar'], guna: ['gu', 'na'], kampung: ['kam', 'pung'], nenek: ['ne', 'nek'], hebat: ['he', 'bat'], roti: ['ro', 'ti'], sedap: ['se', 'dap'], bilik: ['bi', 'lik'], sisi: ['si', 'si'], katil: ['ka', 'til'], lambai: ['lam', 'bai'], dinding: ['din', 'ding'], tunjuk: ['tun', 'juk'], pukul: ['pu', 'kul'], pilih: ['pi', 'lih'], panggil: ['pang', 'gil'], kenyang: ['ke', 'nyang'], lena: ['le', 'na'], senyum: ['se', 'nyum'], 
    berbunyi: ['ber', 'bu', 'nyi'], tik: ['tik'], tok: ['tok'], lencana: ['len', 'ca', 'na'], emas: ['e', 'mas'], kawan: ['ka', 'wan'], baharu: ['ba', 'ha', 'ru'], main: ['main'], ceria: ['ce', 'ria'], kata: ['ka', 'ta'], mereka: ['me', 're', 'ka'], cantik: ['can', 'tik'], cuci: ['cu', 'ci'], bersih: ['ber', 'sih'], comel: ['co', 'mel'], belai: ['be', 'lai'], ubat: ['u', 'bat'], luka: ['lu', 'ka'], kepala: ['ke', 'pa', 'la'], beli: ['be', 'li'], beri: ['be', 'ri'], buat: ['bu', 'at'], tiba: ['ti', 'ba'], bangku: ['bang', 'ku'], tinggi: ['ting', 'gi'], simpan: ['sim', 'pan'],
    bapa: ['ba','pa'], mama: ['ma','ma'], mimi: ['mi','mi'], sasa: ['sa','sa'], dada: ['da','da'], nana: ['na','na'], kaki: ['ka','ki'], mata: ['ma','ta'], bibi: ['bi','bi'], pipi: ['pi','pi'], guli: ['gu','li'], kuda: ['ku','da'], kera: ['ke','ra'], kutu: ['ku','tu'], tikar: ['ti','kar'], riba: ['ri','ba'], ungu: ['un','gu'], bagi: ['ba','gi'], tiga: ['ti','ga'], dua: ['du','a'], lima: ['li','ma'], empat: ['em','pat'], enam: ['e','nam'], tujuh: ['tu','juh'], lapan: ['la','pan'], sembilan: ['sem','bi','lan'], sepuluh: ['se','pu','luh'], kepada: ['ke','pa','da'], papa: ['pa','pa'], teman: ['te','man'],pasar: ['pa','sar'], desa: ['de','sa'],
    sambil: ['sam','bil'],seram: ['se','ram'],cerita: ['ce','ri','ta'],ceri: ['ce','ri'], petik : ['pe','tik'], sampai: ['sam','pai'], habis: ['ha','bis'], campur: ['cam','pur'], coklat: ['cok','lat'], cawan: ['ca','wan'], arnab: ['ar','nab'], kura: ['ku','ra'], berlumba: ['ber','lum','ba'], pokok: ['po','kok'], garisan: ['ga','ri','san'], penamat: ['pe','na','mat'], hutan: ['hu','tan'], yakin: ['ya','kin'], berhenti: ['ber','hen','ti'], seketika: ['se','ke','ti','ka'], berbatu: ['ber','ba','tu'], kesusahan: ['ke','su','sa','han'], selamat: ['se','la','mat'], tepuk: ['te','puk'], sombong: ['som','bong'], rendah: ['ren','dah'], membantu: ['mem','ban','tu'],
    hanya: ['ha','nya'], penting: ['pen','ting'], belajar: ['be','la','jar'], saling: ['sa','ling'], mudah: ['mu','dah'], diam: ['di','am'], terus: ['ter','us'], dekat: ['de','kat'], pengajaran: ['pen','ga','jar','an'], orang: ['o','rang'], lain: ['la','in'], memandang: ['mem','an','dang'],aku: ['a','ku'], rehat: ['re','hat'], tertidur: ['ter','ti','dur'], kesalahan: ['ke','sa','lah','an'], menolong: ['me','no','long'], lebih: ['le','bih'], menang: ['me','nang'], paling: ['pa','ling'],berlari: ['ber','la','ri'], sangat: ['sa','ngat'], pada: ['pa','da'], berkata: ['ber','kata'], ketawa: ['ke','ta','wa'], mula: ['mu','la'], akan: ['a','kan'], dengan: ['de','ngan'], belakang: ['be','la','kang'], 
    tidak: ['ti','dak'], lama: ['la','ma'], kemudian: ['ke','mu','di','an'], nampak: ['nam','pak'], sedang: ['se','dang'], tidur: ['ti','dur'], sedikit: ['se','di','kit'], demi: ['de','mi'], semakin: ['se','ma','kin'], kita: ['ki','ta'], berjalan: ['ber','ja','lan'], tetapi: ['te','ta','pi'], terlambat: ['ter','lam','bat'], dahulu: ['da','hu','lu'], syabas: ['sya','bas'], sedar: ['se','dar'], bahawa: ['ba','ha','wa'], patut: ['pa','tut'], lalu: ['la','lu'],  bela: ['be','la'], 
};

// Pecahan suku kata Tahap 2: maksimum 3 huruf bagi setiap bahagian.
Object.assign(syllableMap, {
  tiba:['ti','ba'], ikut:['i','kut'], pekan:['pe','kan'], bunyi:['bun','yi'],
  ayah:['A','yah'], pilih:['pi','lih'], jadi:['ja','di'], ceria:['ce','ri','a'],
  merah:['me','rah'], pasar:['pa','sar'], buka:['bu','ka'], nama:['na','ma'],
  buat:['bu','at'], kacau:['ka','cau'], rasa:['ra','sa'], kini:['ki','ni'],
  cari:['ca','ri'], tiada:['ti','a','da'], lihat:['li','hat'], bawah:['ba','wah'],
  situ:['si','tu'], lapar:['la','par'], beri:['be','ri'], susun:['su','sun'],
  hujan:['hu','jan'], cuba:['cu','ba'], pakai:['pa','kai'], pada:['pa','da'],
  mereka:['me','re','ka'], rusa:['ru','sa'], lipat:['li','pat'], kertas:['ker','tas'],
  letak:['le','tak'], adik:['a','dik'], lantai:['lan','tai'], kutip:['ku','tip'],
  kata:['ka','ta'], terima:['te','ri','ma'], kasih:['ka','sih'], jumpa:['jum','pa'],
  kawan:['ka','wan'], sekolah:['se','ko','lah'], rumah:['ru','mah'], kasut:['ka','sut'],
  kapal:['ka','pal'], limau:['li','mau'], manis:['ma','nis'], rosak:['ro','sak'],
  tarik:['ta','rik'], baik:['ba','ik']
});


Object.assign(syllableMap, {
  ayah:['A','yah'], rumah:['ru','mah'], pilih:['pi','lih'], mula:['mu','la'],
  ceria:['ce','ri','a'], merah:['me','rah'], buku:['bu','ku'], bawa:['ba','wa'],
  biru:['bi','ru'], pasar:['pa','sar'], buka:['bu','ka'], minum:['mi','num'],
  tulis:['tu','lis'], nama:['na','ma'], beli:['be','li'], pasu:['pa','su'],
  limau:['li','mau'], kacau:['ka','cau'], manis:['ma','nis'], rosak:['ro','sak'],
  tarik:['ta','rik'], baik:['ba','ik'], cari:['ca','ri'], tiada:['ti','a','da'],
  lihat:['li','hat'], bawah:['ba','wah'], situ:['si','tu'], lapar:['la','par'],
  beri:['be','ri'], ikan:['i','kan'], makan:['ma','kan'], lena:['le','na'],
  ambil:['am','bil'], susun:['su','sun'], kemas:['ke','mas'], hujan:['hu','jan'],
  roti:['ro','ti'], kasut:['ka','sut'], cuba:['cu','ba'], pakai:['pa','kai'],
  untuk:['un','tuk'], pada:['pa','da'], pergi:['per','gi'], taman:['ta','man'],
  mereka:['me','re','ka'], rusa:['ru','sa'], lipat:['li','pat'], kertas:['ker','tas'],
  kapal:['ka','pal'], letak:['le','tak'], dadu:['da','du'], adik:['a','dik'],
  lantai:['lan','tai'], kutip:['ku','tip'], kata:['ka','ta'], terima:['te','ri','ma'],
  kasih:['ka','sih'], sekolah:['se','ko','lah'], jumpa:['jum','pa'], kawan:['ka','wan'],
  pekan:['pe','kan'], bunyi:['bun','yi']
});


Object.assign(syllableMap, {
  kebun:['ke','bun'], atuk:['a','tuk'], tanam:['ta','nam'], sawi:['sa','wi'],
  bantu:['ban','tu'], kolam:['ko','lam'], kecil:['ke','cil'], dekat:['de','kat'],
  kotak:['ko','tak'], hadiah:['ha','di','ah'], besar:['be','sar'], pantai:['pan','tai'],
  pasir:['pa','sir'], ombak:['om','bak'],
  pokok:['po','kok'],
  bekal:['be','kal'],

  seronok:['se','ro','nok'], sapu:['sa','pu'], acara:['a','ca','ra'], pujian:['pu','ji','an'],
  arnab:['ar','nab'], putih:['pu','tih'], lobak:['lo','bak']
});


Object.assign(syllableMap, {
  rama:['ra','ma'], puas:['pu','as']
});


// Lengkapkan warna suku kata untuk SEMUA perkataan Tahap 1 & Tahap 2 yang masih tiada.
Object.assign(syllableMap, {
  anak:['a','nak'],
  ari:['A','ri'],
  baca:['ba','ca'],
  baju:['ba','ju'],
  baling:['ba','ling'],
  batu:['ba','tu'],
  bayi:['ba','yi'],
  beca:['be','ca'],
  dahi:['da','hi'],
  damai:['da','mai'],
  dara:['da','ra'],
  di:['di'],
  didi:['di','di'],
  dina:['di','na'],
  jaga:['ja','ga'],
  jam:['jam'],
  ke:['ke'],
  kelabu:['ke','la','bu'],
  kopi:['ko','pi'],
  labu:['la','bu'],
  lega:['le','ga'],
  lori:['lo','ri'],
  masuk:['ma','suk'],
  muda:['mu','da'],
  muka:['mu','ka'],
  nasi:['na','si'],
  nini:['ni','ni'],
  padi:['pa','di'],
  rina:['ri','na'],
  roda:['ro','da'],
  siti:['si','ti'],
  suam:['su','am'],
  suap:['su','ap'],
  sukan:['su','kan'],
  tali:['ta','li'],
  usap:['u','sap'],
  zip:['zip']
});

// Lengkapkan warna suku kata untuk semua perkataan Tahap 3 yang masih tiada.
Object.assign(syllableMap, {
  akhirnya:['a','khir','nya'],
  anaknya:['a','nak','nya'],
  asa:['a','sa'],
  bantuan:['ban','tu','an'],
  bebas:['be','bas'],
  beberapa:['be','be','ra','pa'],
  bekerja:['be','ker','ja'],
  belalang:['be','la','lang'],
  beradiknya:['ber','a','dik','nya'],
  berani:['be','ra','ni'],
  berasa:['be','ra','sa'],
  berdiri:['ber','di','ri'],
  berehat:['be','re','hat'],
  berenang:['be','re','nang'],
  berjanji:['ber','jan','ji'],
  berjaya:['ber','ja','ya'],
  berkongsi:['ber','kong','si'],
  bermain:['ber','main'],
  bermula:['ber','mu','la'],
  berputus:['ber','pu','tus'],
  bersedia:['ber','se','di','a'],
  bersyukur:['ber','syu','kur'],
  bertemu:['ber','te','mu'],
  berusaha:['ber','u','sa','ha'],
  boleh:['bo','leh'],
  dapat:['da','pat'],
  dengannya:['de','ngan','nya'],
  dia:['di','a'],
  fikiran:['fi','ki','ran'],
  gagak:['ga','gak'],
  gembira:['gem','bi','ra'],
  gunakan:['gu','na','kan'],
  haiwan:['hai','wan'],
  hampir:['ham','pir'],
  hati:['ha','ti'],
  haus:['ha','us'],
  idea:['i','de','a'],
  itik:['i','tik'],
  jangan:['jan','gan'],
  jauh:['ja','uh'],
  juga:['ju','ga'],
  kakinya:['ka','ki','nya'],
  kamu:['ka','mu'],
  kebaikan:['ke','ba','ik','an'],
  kerana:['ke','ra','na'],
  kerjanya:['ker','ja','nya'],
  kuat:['ku','at'],
  lahan:['la','han'],
  lepaskan:['le','pas','kan'],
  maaf:['ma','af'],
  makanan:['ma','kan','an'],
  masalah:['ma','sa','lah'],
  masih:['ma','sih'],
  melalui:['me','la','lu','i'],
  melepaskannya:['me','le','pas','kan','nya'],
  melihat:['me','li','hat'],
  memasukkan:['me','ma','suk','kan'],
  membalas:['mem','ba','las'],
  membawa:['mem','ba','wa'],
  membuat:['mem','bu','at'],
  memilih:['me','mi','lih'],
  meminta:['me','min','ta'],
  mempunyai:['mem','pu','nya','i'],
  memujinya:['me','mu','ji','nya'],
  menangkap:['me','nang','kap'],
  mencapai:['men','ca','pai'],
  mencari:['men','ca','ri'],
  mencelupkan:['men','ce','lup','kan'],
  mencuba:['men','cu','ba'],
  mendapat:['men','da','pat'],
  mendengarnya:['men','de','ngar','nya'],
  mengajak:['meng','a','jak'],
  mengatasi:['meng','a','ta','si'],
  mengaum:['meng','a','um'],
  mengejek:['me','nge','jek'],
  menggerakkan:['meng','ge','rak','kan'],
  menggigit:['meng','gi','git'],
  menghadapi:['meng','ha','da','pi'],
  mengucapkan:['meng','u','cap','kan'],
  menjadi:['men','ja','di'],
  menjumpai:['men','jum','pai'],
  menyelesaikan:['me','nye','le','sai','kan'],
  menyiapkan:['me','nyi','ap','kan'],
  menyimpannya:['me','nyim','pan','nya'],
  minggu:['ming','gu'],
  mungkin:['mung','kin'],
  musim:['mu','sim'],
  namun:['na','mun'],
  nanti:['nan','ti'],
  panas:['pa','nas'],
  paruh:['pa','ruh'],
  pemburu:['pem','bu','ru'],
  perangkap:['pe','rang','kap'],
  perkara:['per','ka','ra'],
  perlumbaan:['per','lum','ba','an'],
  persediaan:['per','se','di','a','an'],
  pulang:['pu','lang'],
  pun:['pun'],
  rajin:['ra','jin'],
  rajinlah:['ra','jin','lah'],
  sarang:['sa','rang'],
  satu:['sa','tu'],
  saya:['sa','ya'],
  sebelum:['se','be','lum'],
  sebuah:['se','bu','ah'],
  seekor:['se','e','kor'],
  sejak:['se','jak'],
  sekuat:['se','ku','at'],
  semua:['se','mu','a'],
  semut:['se','mut'],
  sentiasa:['sen','ti','a','sa'],
  sepanjang:['se','pan','jang'],
  setiap:['se','ti','ap'],
  sibuk:['si','buk'],
  singa:['si','nga'],
  sini:['si','ni'],
  suara:['su','a','ra'],
  suatu:['su','a','tu'],
  sukar:['su','kar'],
  tahu:['ta','hu'],
  takut:['ta','kut'],
  tanah:['ta','nah'],
  tepi:['te','pi'],
  terbang:['ter','bang'],
  terdengar:['ter','de','ngar'],
  terikat:['ter','i','kat'],
  terjaga:['ter','ja','ga'],
  terkena:['ter','ke','na'],
  terpijak:['ter','pi','jak'],
  tersenyum:['ter','se','nyum'],
  tikus:['ti','kus'],
  turun:['tu','run'],
  yang:['yang'],
  terfikir :['ter','fi','kir'],
  balik : ['ba','lik'],
});

function colourSyllables(sentence) {
    return sentence.split(/(\p{L}+|[^\p{L}]+)/u).filter(Boolean).map(part => {
        if (!/^\p{L}+$/u.test(part)) return `<span class="punctuation">${part}</span>`;
        const syllables = [...(syllableMap[part.toLowerCase()] || [part])];
        if (part[0] === part[0].toUpperCase() && part[0] !== part[0].toLowerCase()) {
            syllables[0] = syllables[0][0].toUpperCase() + syllables[0].slice(1);
        }
        return syllables.map((syllable, i) => `<span class="syllable ${i % 2 ? 'syllable-red' : 'syllable-black'}">${syllable}</span>`).join('');
    }).join('');
}
function sentenceWithCapitalStart(sentence) {
    return sentence.replace(/^(\s*)(\p{L})/u, (_, space, firstLetter) => space + firstLetter.toUpperCase());
}
function levelButtons(type) {
    const labels = type === 'story'
        ? [
            ['🌱 Tahap 1 – Bacaan Mudah<br><small>30 cerita • Fokus KV</small>', 1],
            ['⭐ Tahap 2 – Bacaan Sederhana<br><small>30 cerita • Fokus KVK</small>', 2],
            ['🏆 Tahap 3 – Cerita Pendek<br><small>5 cerita • Membaca & memahami</small>', 3]
          ]
        : [
            ['🌱 Tahap 1 – KV', 1],
            ['⭐ Tahap 2 – KVK', 2],
            ['🏆 Tahap 3 – Kefahaman', 3]
          ];
    return '<div class="level-options">' + labels.map(item => {
        if (type === 'story' && !isPremiumUnlocked() && item[1] > 1) {
            return `<button class="level-card locked" onclick="openPremiumModal()">${item[0]} <span class="lock-badge">🔒 Premium</span></button>`;
        }
        return `<button class="level-card" onclick="select${type === 'story' ? 'Story' : 'Quiz'}Level(${item[1]})">${item[0]}${type === 'story' && item[1] === 1 && !isPremiumUnlocked() ? '<span class="free-badge">5 cerita percuma</span>' : ''}</button>`;
    }).join('') + '</div>';
}
function renderStoryLevels() { const outsideList = document.getElementById('shortStoryListOutside'); if (outsideList) outsideList.style.display = 'none'; document.getElementById('storyContent').style.display = 'none'; document.getElementById('storyLevelArea').innerHTML = '<div class="storybook-animals" aria-hidden="true"><span>🦊</span><span>🐰</span><span>🦉</span><span>🐻</span></div><h3>Pilih tahap bacaan</h3><p class="storybook-subtitle">Belajar membaca langkah demi langkah 🌈</p>' + premiumStatusHTML() + levelButtons('story') }
function selectStoryLevel(level) {
    if (!isPremiumUnlocked() && level > 1) {
        openPremiumModal();
        return;
    }
    storyLevel = level;
    activeStories = storyLevels[level];
    si = 0;
    storage.set('kvkStoryLevel', level);
    storage.set('kvkStoryIndex', si);
    document.getElementById('storyLevelArea').innerHTML = '';
    if (level === 3) {
        shortStorySelected = false;
        shortStoryPage = 0;
        renderShortStoryMenu();
    }
    else {
        document.getElementById('shortStoryContent').style.display = 'none';
        document.getElementById('storyContent').style.display = 'block';
        renderStory();
    }
}
function chooseStoryLevel() { storyLevel = null; activeStories = stories; document.getElementById('storyContent').style.display = 'none'; document.getElementById('shortStoryContent').style.display = 'none'; renderStoryLevels() }
function renderShortStoryMenu() {
    const outsideList = document.getElementById('shortStoryListOutside'); if (outsideList) outsideList.style.display = 'none';
    const box = document.getElementById('shortStoryContent');
    shortStorySelected = false;
    shortStoryPage = 0;
    box.style.display = 'block';
    document.getElementById('storyContent').style.display = 'none';

    box.innerHTML = `<div class="short-story-cover">📚✨</div>
        <h2>Pilih Cerita Pendek</h2>
        <p class="storybook-subtitle">Pilih satu cerita untuk mula membaca.</p>
        <div class="level-options short-story-menu">
            ${shortStories.map((story, index) => `
                <button class="level-card" onclick="selectShortStory(${index})">
                    <span style="font-size:2rem;display:block;margin-bottom:6px">${story.cover}</span>
                    ${story.title}
                </button>
            `).join('')}
        </div>
        `;
}

function selectShortStory(index) {
    shortStoryIndex = index;
    shortStoryPage = 0;
    shortStorySelected = true;
    renderShortStory();
}

function backToShortStoryMenu() {
    shortStorySelected = false;
    shortStoryPage = 0;
    renderShortStoryMenu();
}

function renderShortStory() {
    const box = document.getElementById('shortStoryContent');
    const story = shortStories[shortStoryIndex];
    const page = story.pages[shortStoryPage];
    box.style.display = 'block';
    document.getElementById('storyContent').style.display = 'none';
    const outsideList = document.getElementById('shortStoryListOutside');
    if (outsideList) {
        outsideList.style.display = 'block';
        outsideList.innerHTML = '<button class="secondary" onclick="renderShortStoryMenu()">← Senarai Cerita</button>';
    }
    box.innerHTML = `<div class="short-story-cover">${story.cover}</div><h2>${story.title}</h2><div class="short-story-emoji">${page.emoji}</div><div class="short-story-text">${page.text.map(t => { const sentence = sentenceWithCapitalStart(t); return `<div class="story-line"><span>${colourSyllables(sentence)}</span><button class="mini" onclick="voice('${sentence.replaceAll("'", '')}')">🔊</button></div>` }).join('')}</div>${page.lesson ? `<div class="lesson-box">🌟 <b>Pengajaran</b><br>${page.lessonText}</div>` : ''}<div class="short-story-nav"><button class="secondary" onclick="changeShortStoryPage(-1)">⬅</button><span class="pill">${shortStoryPage + 1}/5</span><button class="primary" onclick="changeShortStoryPage(1)">➡</button></div>`;
}
function changeShortStoryPage(n) { shortStoryPage = (shortStoryPage + n + 5) % 5; renderShortStory(); }
function changeShortStory(n) { shortStoryIndex = (shortStoryIndex + n + shortStories.length) % shortStories.length; shortStoryPage = 0; renderShortStory(); }
function renderQuizLevels() { document.getElementById('quizContent').style.display = 'none'; document.getElementById('quizLevelArea').innerHTML = '<h3>Pilih tahap kuiz</h3>' + levelButtons('quiz') }
function selectQuizLevel(level) { quizLevel = level; storage.set('kvkQuizLevel', level); document.getElementById('quizLevelArea').innerHTML = ''; document.getElementById('quizContent').style.display = 'block'; newQuiz() }
function chooseQuizLevel() { quizLevel = null; document.getElementById('quizContent').style.display = 'none'; renderQuizLevels() }
function renderStory() {
    let x = activeStories[si];
    const outsideList = document.getElementById('shortStoryListOutside'); if (outsideList) outsideList.style.display = 'none';
    document.getElementById('storyCount').textContent = (si + 1) + '/' + activeStories.length;
    storyEmoji.textContent = x[1];
    storyTitle.textContent = x[0];
    storyText.innerHTML = x[2].map((t, i) => { const sentence = sentenceWithCapitalStart(t); return `<div class="story-line"><span>${colourSyllables(sentence)}</span><button class="mini" onclick="voice('${sentence.replaceAll("'", '')}')">🔊</button></div>` }).join('')
}
async function readStory() {
    const lines = activeStories[si][2].map(sentenceWithCapitalStart);

    // Cancel sekali sahaja. Selepas itu baca ayat satu demi satu.
    speechSynthesis.cancel();

    for (const line of lines) {
        await speakWithTTS(line, SPEECH_RATE.sentence, false);
    }

    if (!s.stories.includes(si))
        s.stories.push(si);
    save()
}
function changeStory(n) {
    const nextIndex = (si + n + activeStories.length) % activeStories.length;
    if (!isPremiumUnlocked() && storyLevel === 1 && nextIndex >= FREE_STORY_LIMIT) {
        openPremiumModal();
        return;
    }
    si = nextIndex;
    storage.set('kvkStoryIndex', si);
    renderStory();
}
function newQuiz() {
    if (quizLevel === null) return renderQuizLevels();
    const choices = levelWords[quizLevel];
    let type = Math.floor(Math.random() * 3),
    w = choices[Math.floor(Math.random() * choices.length)];
    feedback.textContent = '';
    const picture = quizLevel === 1 ? '🔤' : quizLevel === 2 ? (words.find(x => x[0] === w)?.[1] || '🔤') : ({baju:'👕', bola:'⚽', buku:'📚', kaki:'🦶', mata:'👀', meja:'🪑', nasi:'🍚', roda:'🛞', susu:'🥛', topi:'🧢'}[w] || '🔤');
    quizVisual.textContent = picture;
    if (type === 0) {
        quizPrompt.textContent = 'Apakah ini?';
        let opts = [w, ...choices.filter(x => x !== w).sort(() => Math.random() - .5).slice(0, 2)].sort(() => Math.random() - .5);
        quizArea.innerHTML = '<div class="choices">' + opts.map(x => `<button class="choice" onclick="answer('${x}','${w}')">${x.toUpperCase()}</button>`).join('') + '</div>'
    } else if (type === 1) {
        quizPrompt.textContent = 'Susun huruf menjadi perkataan yang betul.';
        quizVisual.textContent = '🔤';
        quizArea.innerHTML = '<div class="letters-pool">' + w.split('').sort(() => Math.random() - .5).map((x, i) => `<button class="tile" onclick="pickTile(this,'${x}','${w}')">${x.toUpperCase()}</button>`).join('') + '</div><p id="built"></p>'
    } else {
        quizPrompt.textContent = 'Dengar dan pilih perkataan.';
        quizVisual.textContent = '🔊';
        quizArea.innerHTML = '<button class="primary" onclick="voice(\'' + w + '\')">🔊 Dengar</button><div class="choices">' + [w, ...choices.filter(x => x !== w).sort(() => Math.random() - .5).slice(0, 2)].sort(() => Math.random() - .5).map(x => `<button class="choice" onclick="answer('${x}','${w}')">${x.toUpperCase()}</button>`).join('') + '</div>'
    }
}
function answer(a, w) {
    if (a === w) {
        s.score++;
        feedback.textContent = '🎉 Betul! Hebat!';
        feedback.className = 'feedback pop';
        voice(w);
        save()
    } else {
        feedback.textContent = 'Cuba lagi 😊';
        s.wrong[a] = (s.wrong[a] || 0) + 1;
        save()
    }
}
function pickTile(b, x, w) {
    b.disabled = true;
    built.textContent = (built.textContent || '') + x.toUpperCase();
    if (built.textContent.toLowerCase() === w) {
        feedback.textContent = '🎉 ' + w.toUpperCase() + '!';
        voice(w);
        s.score++;
        save()
    }
}
function renderProgress() {
    let n = s.learned.length,
    p = Math.round((n / 30) * 100);
    learned.textContent = n + '/30';
    score.textContent = s.score;
    read.textContent = s.stories.length + '/50';
    bar.style.width = p + '%';
    percent.textContent = p + '% kemajuan';
    stars.textContent = n >= 20 ? '⭐ ⭐ ⭐' : n >= 10 ? '⭐ ⭐ ☆' : n >= 5 ? '⭐ ☆ ☆' : '☆ ☆ ☆';
    pWords.textContent = n + '/30';
    pScore.textContent = s.score;
    pStories.textContent = s.stories.length + '/50';
    pWrong.textContent = Object.keys(s.wrong).length ? Object.entries(s.wrong).sort((a, b) => b[1] - a[1]).map(x => x[0].toUpperCase()).join(', ') : 'Tiada lagi';
    parentSummary.textContent = 'Kemajuan keseluruhan: ' + p + '%'
}
function resetProgress() {
    if (confirm('Padam semua kemajuan?')) {
        s = {
            learned: [],
            score: 0,
            stories: [],
            wrong: {}
        };
        save();
        renderProgress();
        toast.textContent = 'Kemajuan telah direset.';
        toast.style.display = 'block';
        setTimeout(() => toast.style.display = 'none', 1800)
    }
}

document.getElementById('premiumModal')?.addEventListener('click', function (e) {
    if (e.target === this) closePremiumModal();
});
document.getElementById('unlockCode')?.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') submitUnlockCode();
});

speechSynthesis.onvoiceschanged = () => {};
// Cerita KVK ialah halaman utama: sentiasa bermula dengan pemilihan tahap.
storyLevel = null;
activeStories = stories;
renderStoryLevels();
restoreAuthSession();

// ===== PWA INSTALL =====
let deferredInstallPrompt = null;
let autoInstallPopupShown = false;

function isIosDevice(){ return /iphone|ipad|ipod/i.test(navigator.userAgent); }
function isStandaloneMode(){ return matchMedia('(display-mode: standalone)').matches || navigator.standalone === true; }

function updateInstallButtonVisibility(){
  const wrap=document.getElementById('installAppWrap');
  if(!wrap) return;
  wrap.style.display=isStandaloneMode() ? 'none' : '';
  if (isStandaloneMode()) console.log('[PWA] App already installed');
}

function openPwaInstallModal(){
  if(isStandaloneMode() || isIosDevice() || autoInstallPopupShown) return;
  const modal=document.getElementById('pwaInstallModal');
  if(!modal) return;
  autoInstallPopupShown=true;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}

function closePwaInstallModal(){
  const modal=document.getElementById('pwaInstallModal');
  if(modal){
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  }
}

window.addEventListener('beforeinstallprompt', e => {
  // Simpan native Chrome prompt supaya ia boleh dibuka selepas user tekan butang.
  e.preventDefault();
  deferredInstallPrompt=e;
  console.log('[PWA] beforeinstallprompt fired');
  updateInstallButtonVisibility();
  // Tunjuk popup Jom Baca di home page secara automatik.
  setTimeout(openPwaInstallModal, 700);
});

window.addEventListener('appinstalled',()=>{
  deferredInstallPrompt=null;
  closePwaInstallModal();
  updateInstallButtonVisibility();
});

async function confirmPwaInstall(){
  closePwaInstallModal();
  if(!deferredInstallPrompt){
    const manual=document.getElementById('manualInstallModal');
    if(manual){manual.classList.add('show');manual.setAttribute('aria-hidden','false');}
    return;
  }

  deferredInstallPrompt.prompt();
  const choice=await deferredInstallPrompt.userChoice;
  console.log('[PWA] userChoice:', choice.outcome);
  deferredInstallPrompt=null;
  updateInstallButtonVisibility();
}

async function installJomBaca(){
  if(isStandaloneMode()) return updateInstallButtonVisibility();

  if(isIosDevice()){
    const m=document.getElementById('iosInstallModal');
    if(m){
      m.classList.add('show');
      m.setAttribute('aria-hidden','false');
    }
    return;
  }

  if(deferredInstallPrompt){
    openPwaInstallModal();
    return;
  }

  console.log('[PWA] Install prompt unavailable - showing manual instructions');
  const manual=document.getElementById('manualInstallModal');
  if(manual){manual.classList.add('show');manual.setAttribute('aria-hidden','false');}
}

function closeIosInstallGuide(){
  const m=document.getElementById('iosInstallModal');
  if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true');}
}
function closeManualInstallGuide(){
  const m=document.getElementById('manualInstallModal');
  if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true');}
}

document.addEventListener('DOMContentLoaded',()=>{
  updateInstallButtonVisibility();
  getRecoverySessionFromUrl();
  // iPhone/iPad tidak menyokong beforeinstallprompt. Tunjuk panduan Safari sekali
  // apabila laman dibuka dan belum dipasang sebagai standalone.
  if(isIosDevice() && !isStandaloneMode()){
    setTimeout(()=>{
      const m=document.getElementById('iosInstallModal');
      if(m){m.classList.add('show');m.setAttribute('aria-hidden','false');}
    }, 900);
  }
});

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js',{scope:'./'})
    .then(()=>console.log('[PWA] Service worker registered'))
    .catch(err=>console.warn('[PWA] Service worker registration failed',err)));
}
