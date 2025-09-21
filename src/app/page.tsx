'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Users, 
  Shield, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  ChevronRight,
  Award,
  BookOpen,
  MessageCircle,
  ChevronUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const services = [
    { icon: Brain, title: "Kaygı (Anksiyete) Bozuklukları", desc: "Günlük yaşamınızı etkileyen kaygı sorunlarınızla başa çıkmanız için profesyonel destek.", category: "kaygi" },
    { icon: Users, title: "Sosyal Kaygı", desc: "Sosyal ortamlarda yaşadığınız kaygı ve korkuları aşmanız için özel terapi programları.", category: "kaygi" },
    { icon: Heart, title: "Panik Atak", desc: "Panik atak belirtilerini yönetme ve önleme konusunda etkili terapi yöntemleri.", category: "kaygi" },
    { icon: Brain, title: "Obsesif Kompulsif Bozukluk (OKB)", desc: "Takıntılı düşünce ve davranışlarınızı kontrol altına almanız için uzman desteği.", category: "kaygi" },
    { icon: Heart, title: "Depresyon ve Mutsuzluk Hali", desc: "Depresif duygularınızı anlama ve yaşam enerjinizi geri kazanma süreci.", category: "duygusal" },
    { icon: Star, title: "Özgüven Sorunları", desc: "Kendinizi daha iyi tanıma ve özgüveninizi artırma konusunda rehberlik.", category: "kisisel" },
    { icon: Users, title: "İlişki Problemleri", desc: "İlişkilerinizde yaşadığınız zorlukları çözme ve sağlıklı bağlar kurma.", category: "iliski" },
    { icon: Shield, title: "Duygusal İhmal ve Travmalar", desc: "Geçmiş travmalarınızı iyileştirme ve duygusal sağlığınızı güçlendirme.", category: "travma" },
    { icon: Heart, title: "Tükenmişlik Sendromu", desc: "İş ve yaşam dengesini kurma, enerjinizi yeniden kazanma stratejileri.", category: "duygusal" },
    { icon: Users, title: "Duyguları Tanıma ve İfade Etme", desc: "Duygularınızı daha iyi anlama ve sağlıklı şekilde ifade etme becerileri.", category: "duygusal" },
    { icon: Star, title: "Değersizlik ve Suçluluk Duyguları", desc: "Kendinizi değerli hissetme ve suçluluk duygularından kurtulma süreci.", category: "duygusal" },
    { icon: Brain, title: "Karar Verme Güçlükleri", desc: "Hayatınızda önemli kararlar alırken size rehberlik edecek beceriler.", category: "kisisel" },
    { icon: Shield, title: "Sınır Koyma ve Hayır Diyebilme", desc: "Sağlıklı sınırlar koyma ve kendinizi koruma becerileri geliştirme.", category: "kisisel" },
    { icon: Heart, title: "Gelecek Kaygısı ve Yaşam Yönelimi", desc: "Geleceğiniz hakkında kaygılarınızı yönetme ve yaşam amacınızı bulma.", category: "kaygi" },
    { icon: Star, title: "Mükemmeliyetçilik", desc: "Mükemmeliyetçi düşüncelerinizi yönetme ve daha esnek olma yolları.", category: "kisisel" },
    { icon: Brain, title: "Kimlik Karmaşası", desc: "Kendinizi keşfetme ve kimlik arayışınızda size rehberlik etme.", category: "kisisel" },
    { icon: Heart, title: "Travma Sonrası Süreçler", desc: "Travmatik deneyimlerinizi işleme ve iyileşme sürecinde destek.", category: "travma" },
    { icon: Users, title: "Ayrılık, Yas ve İlişki Sonrası", desc: "Kayıp ve ayrılık süreçlerinde duygusal destek ve iyileşme rehberliği.", category: "iliski" },
    { icon: Heart, title: "Yeme Davranışı Problemleri", desc: "Yeme bozuklukları ve sağlıksız yeme alışkanlıklarınızla başa çıkma.", category: "davranis" },
    { icon: Clock, title: "Uyku Sorunları", desc: "Uyku problemlerinizi çözme ve kaliteli uyku alışkanlıkları geliştirme.", category: "davranis" },
    { icon: Brain, title: "Kendilik Sınırları ve Problemleri", desc: "Kişisel sınırlarınızı belirleme ve sağlıklı ilişkiler kurma becerileri.", category: "kisisel" }
  ];

  const filters = [
    { id: 'all', name: 'Tümü' },
    { id: 'kaygi', name: 'Kaygı Bozuklukları' },
    { id: 'duygusal', name: 'Duygusal Sorunlar' },
    { id: 'kisisel', name: 'Kişisel Gelişim' },
    { id: 'iliski', name: 'İlişki Problemleri' },
    { id: 'travma', name: 'Travma ve İyileşme' },
    { id: 'davranis', name: 'Davranış Problemleri' }
  ];

  const filteredServices = selectedFilter === 'all' 
    ? services 
    : services.filter(service => service.category === selectedFilter);

  const fullArticles = {
    'kaygi': {
      title: "Ergenlerde Kaygı Nasıl, Ne Şekilde Olur?",
      content: `Ergenlik dönemi birçok duygunun en uçlarda yaşandığı dönemdir ve kişi çoğu zaman olduğundan aşırı tepki verebilmektedir birçok duyguya ve durumlara. Birçok durumu aynı anda yaşamaktadır ve ergenlerde kaygı da bu dönemde çok fazla yaşanmaktadır.

Kaygıya neden olan faktörler arasında anne-baba kavgaları, psikolojik baskı, otoriter tutumlar, ayrılma ve boşanma, alaycı tutumlar ve akran anlaşmazlıkları yer almaktadır.

Kaygı belirtileri ise çekingenlik, yoğun korku, gerginlik, yetersizlik hissi, özsaygı düşüklüğü ve gelecek kaygısı olarak görülmektedir.

Tedavi önerileri olarak anne-babanın çözümcü, anlayışlı ve dinleyen bir tavırda yaklaşım sağlamaları gerekmektedir. Stres, sıkıntı şeklinde değil sevgi ve güven duygusu aşılanarak yaklaşım sağlanmalıdır.`
    },
    'anksiyete': {
      title: "Anksiyete Nedir?",
      content: `Kaygı yıllar boyunca insanların en önemli sorunlarından birisi olmuştur çünkü insanlar kendilerini güvende hissetmek isterler. Bilmedikleri ve kendilerine yabancı gelen şeylerden rahatsız olurlar.

Anksiyete üç temel öğeden oluşur:

Bedensel Öğeler:
• Kalp çarpıntısı
• Terleme
• Nefes alamama
• Titreme
• Uykusuzluk

Bilişsel Öğeler:
• Anksiyete uyarıcı düşünceler
• Kendini zayıf görme
• Tehlikelerle başa çıkamama
• Sürekli endişe
• Konsantrasyon bozukluğu

Davranışsal Öğeler:
• Motor huzursuzluk
• Kaçınma
• Güvenlik davranışları
• Yardım arama
• Sosyal izolasyon`
    },
    'aile': {
      title: "Ergenlikte Aile İçi İlişkiler",
      content: `Ergenlik, kişinin gelişim sürecinin bir parçasıdır. Çocukluk dönemi biter ardından ergenlik dönemi başlar. Bu dönemde, fizyolojik açıdan kızlarda adet dönemi başlar ve göğüslerin büyüme olur; erkeklerde ise kılların çıkar ve sesin kalınlaşması fiziksel büyüme başlar. Çocuk ve ergenin içinde yetiştiği, ilk ve yoğun ilişkilerin yaşandığı, toplumun en küçük birimi olan aileye ergenlik döneminde önemli sorumluluklar düşmektedir.

Bu dönemindeki aile içi ilişkiler bir değişir ve şekillenir. Bu değişim ergen birey ve anne baba arasındaki iletişim dengesizliğine sebep olur. Bu dengeye baktığımız zaman ailenin ergenlik döneminden önceki ilişkilerinde bir düzen ve bir denge vardır bu denge ergenlik döneminin getirmiş olduğu değişimler ile bozulur ve yeniden şekillenir.

Çocuk büyüdükçe, ailesinden giderek kopup ilgisi çevreye kaysa bile ergenlik döneminde anne-baba tutumlarının etkileri ergen üzerinde önemini korumaya devam eder. İnsan sosyal bir varlıktır, çevresiyle sürekli iletişim halinde olmak ister. Ergenlik döneminde en önemli ilişkiler ise aile bireyleriyle kurulmaktadır.

Ailenin, bireyin yaşamında kritik bir yeri ve önemi vardır. Ailenin, kişide duygusal bedensel bilişsel ve sosyal alanlarda fazlasıyla etkilidir. Bu etki doğumdan önce başlar ve hayatı boyunca devam ettirir. Aile içi ilişkilerin en yoğun ve en uzun süregelen ilişkiler olduğu söylenebilir.

Aile içi ilişkiler sağlıklı bireyler olma açısından çok önemlidir. Fiziksel ve psikolojik gelişimlerinde ailenin çok önemli bir rolü vardır. Kişi doğduğundan itibaren annesinin ve babasının onayına, sevgisine şefkatine ve ilgisine ihtiyaç duyar.

Ergen bireyler vücutlarındaki fiziksel özelliklerle beraber eşlik eden özerkleşme hissiyatında olurlar, daha çok sınırlarının genişlediğini, bakış açılarının genişlediğini ve kendini artık anne ve babasına bağlı bir kişi olarak değil kendini bağımsız bir birey olarak görmeye başlar tam bu noktada aile ve ergen arasındaki uyum oluşturulmadığı durumda aile arasında çatışmalar başlar ve aile içi iletişimde kopukluklar meydana gelir.

Ergen birey kendini daha tanımlayamamışken yani kimliği daha oturtmamışken, hedeflerini, meslek seçimini bir de ailenin ergen üzerine kurduğu meslek seçimleri konusundaki baskı ve istekleri ergen bireyde bir kimlik karmaşasını ortaya çıkarır. Kendi istekleri ve beklentileriyle ailenin ve çevresindeki insanların beklentileri arasında sıkışıp kalır.

Bu konuda aile içinde bir çatışmaya yol açabilmektedir. Bu konuda ailenin çocuğun üstünde fazla baskı kırmaması ve ergenin kendini tanıyabilmesi ve kimliğini oluşturması bakımından oldukça önemlidir. Aksi taktirde çocuk anne babalarına karşı gelip kendi istediklerini, hedeflerini aileye aile içinde kavga yaratacak düzeyde aileye ikna etme durumuyla karşılaşabilir. Bu durumda çocuğu benlik saygısında zedelenmeye sebep olabilmektedir.

Ergen bireylerin kendi hedeflerini, isteklerini, hayattan beklentilerini, meslek seçimlerini, kariyer hedeflerini belirlemeleri açısından çocuklarını serbest bırakılmalı aksi taktirde çocuk kendini bir birey olarak değil hala kendini anne ve babasına bağlı biri olarak görür.

Arkadaşlarıyla sürekli kendini karşılaştırır arkadaşlarının ailelerinin arkadaşı üzerinde baskı yapmadığını ve arkadaşında özerklik duygusunun geliştiğini görürse bu sefer kendine olan saygısı oldukça düşer ve ilerde öz saygı konusunda problemler yaşayanailir.

Çocuğun büyüdüğü aile yapısı, kişinin kişiliğinin oluşmasında ve benliğinin gelişmesinde etkili olur. Ergenin özgüveni ve benlik saygısı yüksek, mutlu biri olması için aile ortamının koşulları etkilidir.

Ebeveynin ergenin neye ihtiyacı olduğunu anlamalı ve ihtiyacını karşılamak için gereken tutum ve davranışları sergilemeli. Bu dönem ailenin çocuğa güven verdiği, onu anlamaya çalıştığı dinlediği, birbirleriyle dürüş ve acık bir diyalog halinde oldukları bir süreç olmalı.

Ergen ebeveynin tepkisinden davranışlarından etkilenerek onu örnek alabilir veya tam tersi bir davranışta bulunabilir ve bu tutuma bir tepki göstermiş olur. Bu ikili ilişkide ebeveyn yetkin olmalıdır. Bu sayede kurulan iletişim ergenin kendisiyle ilgili farkındalık kazanmasını sağlayacaktır.

Çocuk sağlıklı bir ailede yetişmişse eğer daha bağımsız, etkin ve kendini geliştiren biri olur. Çocuğun Anne ve babasının duygusal ihtiyaçlarını karşılaması da kendini değerli hissetmesi, özgüvenin gelişmesi, mutlu olması acısından çok önemlidir.

Ailesi çocuğun sevilen ve olumlu davranışları pekiştirdiklerinde ve ödüllendirdiklerinde çocuklar değerli olma hissini yaşar. Anne ve babanın aralarında kurdukları iletişime göre çocuklar, onları model alır. Sosyal yaşamlarını çevreleriyle olan duygusal ilişkilerini de bu modele göre yürütmeye çalışırlar.

Ayrıca eşler arasındaki ilişki uyumu azalırsa çocukların saldırgan davranışları artar ve uyum problemleri yaşarlar. Katı ,otoriter, bir ailede yetişmekte olan bir ergen anne ve babalarını otorite figürü olarak görür ve onlara karşı bağımlı bir kişilik yapısı oluşturur.

Ailenin otoriter, aşırı baskıcı olması çocuğun kişiliğini hiçe saymış olur. Ailenin katı bir disiplin uygulaması çocuğu kurallara istemese bile uymak zorunda bırakır. Böyle bir durumda çocuk uslu sakin dürüst nazik gibi görünse de aslında çekingen kendine güvenmeyen utangaç aşırı hassas bir yapıda olur.

Ayrıca bu bireylerin pozitif gelişim becerilerinin gelişemeyeceği ve kendilerine özgü karakterlerini keşfetmekte zorluk çekeceklerdir. Bu davranış biçimi ebeveyn ve ergen arasındaki ilişkinin olumsuz frekansını arttırabilir.

Bununla beraber ebeveynlerin çocuklarına karşı ilgisiz olmaları veya çok az ilgilenmeleri de, ileriki ilişkilerinde asosyal veya anti-sosyal davranışlara, alkol ve, uyuşturucu kullanımına, erken dönemde cinsellikle tanışmasına sebep olabilir.

Sağlıksız iletişimin olduğu ailelerde büyüyen çocuklar genel olarak affetme, mutluluk, iyi oluş, iyimserlik, dayanıklılık, sağlıklı iletişim gibi sosyal becerilerini de geliştirmekte zorluk yaşayacaklardır.

Eğer aile çocuğu Sürekli cezalandırırsa ve karşılaşırsa çocuk hemen üzülebilen iradesiz ve iletişimde sorunlar yaşayan bir birey olur. Bu şekilde baskıyla büyüyen çocuklar isyankâr davranırlar ve aşağılık duygusu oluşur.

İzin verici anne ve babaların kabul edici, ergenlerin isteklerini kabul eden ve ergenin olumsuz diye adlandırılan davranışlarına karşı daha alttan alıcı bir tutum sergileyen ve bunları kabul eden daha yumuşak ve nazik tutum içindelerdir.

Başka bir değişle izin verici anne ve baba tarzı çocuğunu bir birey olarak görür ve artık ergenlik dönemine girmesiyle beraber ergeni bir çocuk olarak değil de bir kendi hayatı hakkındaki olaylara kendi kendine karar alabilecek bir düzeyde olduklarını düşünürler.

Bu nedenden ötürü de ergen üzerinde kontrol edici bir tutum sergilemeyi, ergenin davranışlarına karışmayı, yorumlarıyla onları yönlendirmeyi ergenin özgürlük alanına bir müdahale olarak görmektedirler.

Anne ve babaların böyle bir tutum içerisine girmesi ergen bireye bir özerklik katar ve benlik saygısını arttırır. Bu ilişki, kişinin tüm hayatını da etkilemektedir. Kişinin ileride başkalarıyla kurduğu ilişkilerin temeli de ergenlik döneminde ailesi ile kurduğu ilişkiden etkilenir eğer bu sağlıksız bir ilişki olursa kişi uyum problemlerinin artmasına yol açabilmektedir.

Genel olarak bu süreç içerisinde ebeveyn çocuğa kendi davranışlarını sergileyebilmesi için alan tanımalı ona yetişkin gibi davranmalı. Birçok süreçten geçen ergenin bu dönemde en önemli desteği ailesidir.

Çocuklara karşı destekleyici bir biçimde yaklaşılmalı, onu anlamaya çalışılmalı bu sayede ailesine karşı daha açık olması sağlanacaktır. Ebeveynlerin katıldıkları etkinliklerde aktif olması çocuğun onları rol model alarak gruplarda daha atılgan olması sağlanabilir.

Aile çocuğu hiçbir zaman başka insanların önünde eleştirilmemeli ve çocuğun yaptığı davranışları başa çocuklarla karşılaştırmamalı. Aile Ergenin haklarını tanımalı çok fazla olmamakla beraber ona sorumluluklarını vermeli.

Çocuğun bu dönemde ilgisi genelde aileden arkadaş çevresine kayar aile bu konuda endişeye kapılmamalı ve arkadaş ilişkilerini engellemeye çalışmamalı. Yeni arkadaşlıklar arayan çocuğa katı bir anne ve baba gibi davranmak yerine arkadaş gibi davranmak daha sağlıklı olacaktır.

Onu hata yaptığında yargılamak yerine dinlemeli anlamaya çalışmalı ve destek olmalı. Aile çocuğun adına karar almamalı onu bir birey yerine koymalı fakat onu bu kararı doğrultusunda yönlendirmeli.

Ergenin kardeşle olan ilişkisine bakıldığında arkadaşlık ilişkilerini deneyeceği ilk yerdir. Kardeşlik ilişkisinde birbirlerini destekleyici veya dışlayıcı olabilirler. Birbirleriyle iyi anlaşıp iş birliği içinde çalışabilirler ya da bir yarış içine girebilirler. Bu kardeşlik ilişkisi ileriki hayatlarında alacakları rolleri etkiler. Kardeşiyle olan ilişkisinden edindiği tecrübe arkadaşlarıyla kurduğu ilişkisine öncü olur.

Kısacası ergenlik dönemine girmekle beraber kişide çevresel, fiziksel ve psikolojik değimler yaşanır. Hem bu ergen bireyde yaşanan değişimler aile içi iletişim ve dinamiklerini belirler ve değiştir hem de anne ve babanın tutumları aile içi ilişki ve dinamikleri belirler ve değiştirir.

Benim bu konuda ailelere vereceğim tavsiyeler bu ergenlik döneminin bir dönem olduğunu unutmamaları ve bu dönemin bir süre sonra gelişimsel evreyi tamamladıktan sonra sona ereceği, ergen bireydeki duygusal değişimlerin bu dönemde normal olduğunu ve bu dönemdeki kişilerin gerçek dünyayı daha yeni yeni öğrenmeye başladığı bir dönem olarak görüp ergen bireylere bazı konularda özgürlük, bağımsızlık ve özerklik hakları tanımaları olacaktır.

Kaynakça:
https://dergipark.org.tr/en/download/article-file/217248
Erciyes University Journal of Social Sciences Institute » Submission » Gelişim Psikolojisi Açısından Ergenlik Dönemi ve Genel Özellikleri (dergipark.org.tr)
Microsoft Word - ozcan_sezer.doc (dergipark.org.tr)`
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Nora Ördekoğlu</h1>
                <p className="text-sm text-gray-600">Uzman Psikolog</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#anasayfa" className="text-gray-700 hover:text-indigo-600 transition-colors">Anasayfa</a>
              <a href="#hakkimda" className="text-gray-700 hover:text-indigo-600 transition-colors">Hakkımda</a>
              <a href="#hizmetlerim" className="text-gray-700 hover:text-indigo-600 transition-colors">Hizmetlerim</a>
              <a href="#calismalar" className="text-gray-700 hover:text-indigo-600 transition-colors">Çalışmalar</a>
              <a href="#iletisim" className="text-gray-700 hover:text-indigo-600 transition-colors">İletişim</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="md:hidden py-4 space-y-4 border-t border-gray-200"
            >
              <a href="#anasayfa" className="block text-gray-700 hover:text-indigo-600 transition-colors">Anasayfa</a>
              <a href="#hakkimda" className="block text-gray-700 hover:text-indigo-600 transition-colors">Hakkımda</a>
              <a href="#hizmetlerim" className="block text-gray-700 hover:text-indigo-600 transition-colors">Hizmetlerim</a>
              <a href="#calismalar" className="block text-gray-700 hover:text-indigo-600 transition-colors">Çalışmalar</a>
              <a href="#iletisim" className="block text-gray-700 hover:text-indigo-600 transition-colors">İletişim</a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="anasayfa" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Psikolog{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Nora Ördekoğlu
                </span>
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6 italic"
              >
                "İyileşme bazen sadece biri dinlediğinde başlar."
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
              >
                <span className="font-semibold text-indigo-700">21 farklı uzmanlık alanında</span> bireysel terapi, çift terapisi, cinsel terapi ve online terapi hizmetleriyle 
                yaşamınızda <span className="font-semibold text-purple-700">pozitif değişimler</span> yaratmanıza yardımcı oluyorum.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8"
              >
                <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ 12+ Ay Deneyim
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ Süpervizyon Eşliğinde
                </div>
                <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ Online & Yüz Yüze
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ Güvenli & Gizli
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col xs:flex-row gap-3 sm:gap-4"
              >
                <a 
                  href="#iletisim" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
                >
                  Hemen Randevu Al
                  <ChevronRight className="ml-2 w-5 h-5" />
          </a>
          <a
                  href="#hakkimda" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 text-sm sm:text-base"
                >
                  Daha Fazla Bilgi
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                <div className="text-center">
                  <div className="w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-3 sm:border-4 md:border-6 border-indigo-200 shadow-2xl ring-1 sm:ring-2 md:ring-4 ring-indigo-100">
                    <img 
                      src="/foto.jpg" 
                      alt="Nora Ördekoğlu - Uzman Psikolog" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Nora Ördekoğlu</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Uzman Psikolog
                  </p>
                </div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimda" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hakkımda</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel geçmişim ve uzmanlık alanlarım
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Psikolog Nora Ördekoğlu</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                İstinye Üniversitesi Psikoloji bölümünden mezun olan, alanında uzman bir psikolog olarak 
                danışanlarıma en kaliteli psikolojik destek hizmetini sunmaktayım.
              </p>

              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-indigo-100"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Eğitim Geçmişi</h4>
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-indigo-700">İstinye Üniversitesi</p>
                        <p className="text-gray-700">Psikoloji Bölümü - Lisans</p>
                        <p className="text-sm text-gray-600">GNO: 3.00/4.00</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-pink-100"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Sertifikalar & Eğitimler</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="font-semibold text-pink-700">Terapi Eğitimleri</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Bilişsel Davranışçı Terapi</li>
                            <li>• Psikodinamik Terapi</li>
                            <li>• Cinsel Terapi</li>
                            <li>• Çözüm Odaklı Terapi</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-semibold text-pink-700">Uygulayıcı Eğitimleri</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Yetişkin Testleri</li>
                            <li>• MMPI Uygulayıcı</li>
                            <li>• Klinik Gözlem</li>
                            <li>• Görüşme Teknikleri</li>
                            <li>• T.A.T ve İmgelem</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-green-100"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Profesyonel Deneyim</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-green-700">Toplam Staj Deneyimi</span>
                          <span className="text-2xl font-bold text-green-600">12+ Ay</span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <p className="font-semibold text-gray-800">Kurumsal Deneyim</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• VONA PSİKOLOJİ (3 ay)</li>
                              <li>• PSİKOLOB (1 ay)</li>
                              <li>• DÜNYA DANIŞMANLIK (5 ay)</li>
                              <li>• PSİKODİNAMİK PSİKOLOJİ (3 ay)</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <p className="font-semibold text-gray-800">Aktif Çalışma</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Süpervizyon eşliğinde danışan görme</li>
                              <li>• Psikoloji kulübü aktif üyeliği</li>
                              <li>• Sürekli eğitim ve gelişim</li>
                              <li>• Profesyonel ağ oluşturma</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
        </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 xs:w-96 xs:h-96 sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] rounded-3xl overflow-hidden shadow-2xl border-3 sm:border-4 border-indigo-200">
                  <img 
                    src="/hkkmd.jpg" 
                    alt="Nora Ördekoğlu - Uzman Psikolog" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetlerim" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hizmetlerim</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
              Uzmanlık alanlarım ve sunduğum terapi hizmetleri
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 group border border-gray-100 hover:border-indigo-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors duration-300">
                  <span>Detaylı Bilgi</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studies Section */}
      <section id="calismalar" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Çalışmalar</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Psikoloji alanındaki araştırmalarım ve uzmanlık çalışmalarım
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {/* Ergenlerde Kaygı Çalışması */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Ergenlerde Kaygı Nasıl, Ne Şekilde Olur?</h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Ergenlik dönemi birçok duygunun en uçlarda yaşandığı dönemdir ve kişi çoğu zaman olduğundan aşırı tepki verebilmektedir birçok duyguya ve durumlara. Birçok durumu aynı anda yaşamaktadır ve ergenlerde kaygı da bu dönemde çok fazla yaşanmaktadır.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Kaygıya Neden Olan Faktörler</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Anne-baba kavgaları</li>
                      <li>• Psikolojik baskı</li>
                      <li>• Otoriter tutumlar</li>
                      <li>• Ayrılma ve boşanma</li>
                      <li>• Alaycı tutumlar</li>
                      <li>• Akran anlaşmazlıkları</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Kaygı Belirtileri</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Çekingenlik</li>
                      <li>• Yoğun korku</li>
                      <li>• Gerginlik</li>
                      <li>• Yetersizlik hissi</li>
                      <li>• Özsaygı düşüklüğü</li>
                      <li>• Gelecek kaygısı</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl my-6">
                  <h4 className="text-xl font-semibold mb-3">Tedavi Önerileri</h4>
                  <p className="opacity-90">
                    Anne-babanın çözümcü, anlayışlı ve dinleyen bir tavırda yaklaşım sağlamaları gerekmektedir. 
                    Stres, sıkıntı şeklinde değil sevgi ve güven duygusu aşılanarak yaklaşım sağlanmalıdır.
                  </p>
                </div>
                
                <div className="text-center mt-6">
                  <button
                    onClick={() => setSelectedArticle('kaygi')}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Tamamını Oku
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Anksiyete Çalışması */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Anksiyete Nedir?</h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Kaygı yıllar boyunca insanların en önemli sorunlarından birisi olmuştur çünkü insanlar kendilerini güvende hissetmek isterler. 
                  Bilmedikleri ve kendilerine yabancı gelen şeylerden rahatsız olurlar.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-2">Bedensel Öğeler</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Kalp çarpıntısı</li>
                      <li>• Terleme</li>
                      <li>• Nefes alamama</li>
                      <li>• Titreme</li>
                      <li>• Uykusuzluk</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-2">Bilişsel Öğeler</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Anksiyete uyarıcı düşünceler</li>
                      <li>• Kendini zayıf görme</li>
                      <li>• Tehlikelerle başa çıkamama</li>
                      <li>• Sürekli endişe</li>
                      <li>• Konsantrasyon bozukluğu</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-2">Davranışsal Öğeler</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Motor huzursuzluk</li>
                      <li>• Kaçınma</li>
                      <li>• Güvenlik davranışları</li>
                      <li>• Yardım arama</li>
                      <li>• Sosyal izolasyon</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <button
                    onClick={() => setSelectedArticle('anksiyete')}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Tamamını Oku
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Ergenlikte Aile İlişkileri */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Ergenlikte Aile İçi İlişkiler</h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Ergenlik, kişinin gelişim sürecinin bir parçasıdır. Bu dönemde fizyolojik açıdan kızlarda adet dönemi başlar ve göğüslerin büyüme olur; 
                  erkeklerde ise kılların çıkar ve sesin kalınlaşması fiziksel büyüme başlar.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Sağlıklı Aile Tutumları</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Destekleyici yaklaşım</li>
                      <li>• Anlamaya çalışma</li>
                      <li>• Dürüst ve açık diyalog</li>
                      <li>• Özgürlük ve bağımsızlık tanıma</li>
                      <li>• Arkadaş gibi davranma</li>
                      <li>• Dinleme ve destek olma</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Olumsuz Aile Tutumları</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Otoriter ve baskıcı tutum</li>
                      <li>• İlgisizlik</li>
                      <li>• Sürekli cezalandırma</li>
                      <li>• Karşılaştırma yapma</li>
                      <li>• Adına karar alma</li>
                      <li>• Arkadaş ilişkilerini engelleme</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl my-6">
                  <h4 className="text-xl font-semibold mb-3">Ailelere Tavsiyeler</h4>
                  <p className="opacity-90">
                    Bu ergenlik döneminin bir dönem olduğunu unutmamaları ve bu dönemdeki kişilerin gerçek dünyayı daha yeni yeni öğrenmeye başladığı 
                    bir dönem olarak görüp ergen bireylere bazı konularda özgürlük, bağımsızlık ve özerklik hakları tanımaları olacaktır.
                  </p>
                </div>
                
                <div className="text-center mt-6">
                  <button
                    onClick={() => setSelectedArticle('aile')}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Tamamını Oku
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">İletişim</h2>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto">
              Randevu almak ve daha fazla bilgi için benimle iletişime geçin
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">E-posta</h4>
                  <p className="text-sm sm:text-base text-indigo-100">n.ordekoglu@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Telefon</h4>
                  <p className="text-sm sm:text-base text-indigo-100">+90 545 233 24 29</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Adres</h4>
                  <p className="text-sm sm:text-base text-indigo-100">İstanbul / Beşiktaş</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Çalışma Saatleri</h4>
                  <p className="text-sm sm:text-base text-indigo-100">
                    Pazartesi - Cuma: 09:00 - 18:00<br />
                    Cumartesi: 09:00 - 15:00
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
            >
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Instagram'dan İletişim</h3>
                <p className="text-indigo-100 mb-6">
                  Randevu almak ve sorularınız için Instagram'dan bana ulaşabilirsiniz
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-indigo-200" />
                  <span className="text-white font-semibold">+90 545 233 24 29</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-indigo-200" />
                  <span className="text-white font-semibold">n.ordekoglu@gmail.com</span>
                </div>
              </div>

              <a
                href="https://www.instagram.com/psikolognoraordekoglu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold py-4 px-8 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Instagram'dan DM At
              </a>
              
              <p className="text-indigo-200 text-sm mt-4">
                Instagram profilimde daha fazla bilgi ve güncel paylaşımlar bulabilirsiniz
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram DM Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://www.instagram.com/psikolognoraordekoglu/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Instagram'dan DM At
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
          
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-ping opacity-20"></div>
        </a>
      </motion.div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-6 z-50"
        >
          <button
            onClick={scrollToTop}
            className="group relative"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300">
              <ChevronUp className="w-6 h-6 text-white" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Yukarı Çık
              <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </button>
        </motion.div>
      )}

      {/* Full Article Modal */}
      {selectedArticle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedArticle && fullArticles[selectedArticle as keyof typeof fullArticles]?.title}
              </h2>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
                {selectedArticle && fullArticles[selectedArticle as keyof typeof fullArticles]?.content}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Nora Ördekoğlu</h3>
              </div>
              <p className="text-gray-400">Uzman Psikolog</p>
              <p className="text-gray-400">İstanbul / Beşiktaş</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2">
                <li><a href="#hakkimda" className="text-gray-400 hover:text-white transition-colors">Hakkımda</a></li>
                <li><a href="#hizmetlerim" className="text-gray-400 hover:text-white transition-colors">Hizmetlerim</a></li>
                <li><a href="#calismalar" className="text-gray-400 hover:text-white transition-colors">Çalışmalar</a></li>
                <li><a href="#iletisim" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <p className="text-gray-400 flex items-center mb-2">
                <Mail className="w-4 h-4 mr-2" />
                n.ordekoglu@gmail.com
              </p>
              <p className="text-gray-400 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +90 545 233 24 29
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Psikolog Nora Ördekoğlu. Tüm hakları saklıdır.</p>
            <p className="text-gray-500 text-sm mt-2">
              Website by <span className="text-indigo-400 font-semibold">keweble studio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
