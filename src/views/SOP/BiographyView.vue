<template>
  <div class="flex flex-col p-8">
    <h1 class="demo-title">Short Biography of Stichting SOP Rotterdam</h1>
    <div id="opt">
      <dl>
        <dd @click="showView('view-cover')" :class="{ cur: currentView === 'view-cover' }">
          View Cover
        </dd>
        <dd @click="showView('view-back')" :class="{ cur: currentView === 'view-back' }">
          View Back
        </dd>
        <dd @click="toggleBook" :class="{ cur: currentView === 'open-book' }">Open/Close book</dd>
        <dd @click="showView('view-rotate')" :class="{ cur: currentView === 'view-rotate' }">
          360° Showcase
        </dd>
      </dl>
    </div>

    <div id="book" :class="currentView" class="mt-4">
      <div class="main">
        <div class="book-font">
          <div class="book-cover ">
            <h2 class="title">Srpsko omladinsko drustov</h2>
            <h3 class="author p-4">Zajdeno da ucimo i igramo</h3>
            <div class="publisher">Rotterdam, Netherlands</div>
          </div>
          <div class="book-cover-back"></div>
        </div>
        <div class="book-page">
          <div id="page-1" class="page">
            <h3>Moja Biografija</h3>
            <p>
              Dragoslava Dragica Stanu, renomirana modna kreatorka i slikarka, nosi u svom radu
              tragove duboko ukorenjene ljubavi prema umetnosti, koju je nasledila od svog oca. Od
              ranog detinjstva bila je obučena da svoje modele i fantazije prenosi na platno, da
              vešto koristi sve delove i materijale, odražavajući njihovu lepotu kroz svoje
              kreacije.
            </p>
            <p>
              Početkom 1970-ih godina, Dragica je otputovala u Nemačku, gde se posvetila slikanju i
              oslikavanju delova odeće. Kombinovala je svilu sa drugim materijalima, stvarajući
              unikatne umetničke komade.
            </p>
            <p>
              Godine 1986, proširila je svoje stvaralaštvo i na slikarsko platno, otkrivajući novu
              dimenziju svoje umetničke izražajnosti. Njena prva izložba bila je otvorena u banji
              Oeynhausen, gde je provela šest nezaboravnih nedelja sa svojim mužem. Tokom tog
              perioda, uspela je da organizuje dve izložbe, što je bio početak njenog umetničkog
              puta koji je nastavio da se razvija širom Evrope i sveta.
            </p>
            <p>
              Dragica je tokom svoje karijere dobila brojna priznanja i pohvale za svoje kreacije.
              Među njima se posebno ističu Srebrna povelja na međunarodnoj izložbi u Vrnjačkoj Banji
              i dve zlatne nagrade na međunarodnim izložbama u Vojvodini. Ove nagrade predstavljaju
              njene prve velike uspehe u domovini.
            </p>
            <p>
              Godine 2022, Dragica je nominovana među 60 najboljih slikara u New Yorku, a nagrade su
              joj uručene 2023. godine. Njene samostalne izložbe održane su u mnogim prestižnim
              mestima, uključujući Pariz (2014), Menhetn u New Yorku (2016), Amsterdam (2016), i
              Miami (2017). Takođe je izlagala u Tokiju (2023), Barseloni, Madridu, Bazelu, Berlinu,
              Londonu (Chelsea), kao i u Rumuniji, Mađarskoj, Italiji, Briselu i Kanadi.
            </p>
            <p></p>
          </div>
          <div class="page-number">- 1 -</div>
        </div>
        <div class="book-back">
          <div class="description">
            <p>
              Njeni radovi su bili izloženi i u Luvru u Parizu takodje i Kanu u francuskoj za vreme
              filmskog festivala. Dragica koristi različite tehnike u svom radu, oslanjajući se na
              svoje raspoloženje i inspiraciju. Njene inovativne ideje se ogledaju u svakom
              umetničkom delu koje stvori. Do sada je imala preko 200 kolektivnih izložbi, dok je
              broj samostalnih izložbi dostigao 40, uključujući i inostranstvo. Ova izuzetna
              umetnica nastavlja da inspiriše i oduševljava publiku širom sveta svojim jedinstvenim
              stilom i nepokolebljivom strašću prema umetnosti.
            </p>
            <p class="txt-right">Nenad, Dragoslava, ChatGPT</p>
          </div>
          <div class="isbn">
            <img src="http://www.bluesdream.com/case/css3/3d-book-showcase/images/isbn.png" alt="asdf" />
          </div>
        </div>
        <div class="book-bone">
          <h2>Easdfasdfasdfff</h2>
        </div>
        <div class="book-top"></div>
        <div class="book-right"></div>
        <div class="book-bottom"></div>
      </div>
    </div>
  </div>
  <AMenuButton />
</template>

<script setup lang="ts">
import AMenuButton from '@/components/atoms/nav/AMenuButton.vue'
import { ref } from 'vue'

const currentView = ref('view-cover')

const showView = (view: string) => {
  currentView.value = view
}

const toggleBook = () => {
  currentView.value = currentView.value === 'open-book' ? 'view-cover' : 'open-book'
}
</script>

<style scoped>
.txt-right {
  text-align: right;
}
.demo-title {
  height: 32px;
  font-size: 32px;
  color: #92684f;
  text-align: center;
  margin: 40px 0 84px 0;
  text-shadow: 0 2px 4px rgba(41, 48, 58, 0.3);
}
.open-book .main {
  animation: moveBookToCenter 1s forwards;
}

@keyframes moveBookToCenter {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes bookAnimation {
  from {
     transform: rotate3d(0, 1, 0, 360deg);
  }
  to {
    transform: rotate3d(0, 1, 0, 0deg);
  }
}
#book {
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -ms-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-perspective: 2000px;
  -moz-perspective: 2000px;
  -ms-perspective: 2000px;
  -o-perspective: 2000px;
  perspective: 2000px;
  animation: bookAnimation 1s forwards;
}
.main {
  max-width: 420px;
  width: 100%;
  height: 560px;
  color: #92684f;
  position: relative;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -ms-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.book-font {
  max-width: 420px;
  width: 100%;
  height: 560px;
  position: absolute;
  top: 0;
  bottom: 0;
  font-size: 15px;
  text-align: center;
  text-shadow: 0 2px 0 rgba(30, 35, 45, 1);
  box-shadow: inset 3px 0 10px rgba(0, 0, 0, 0.1); /* 给书本添加光照阴影 */
  z-index: 10;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -webkit-transform-origin: 0% 50%;
  -moz-transform-origin: 0% 50%;
  -ms-transform-origin: 0% 50%;
  -o-transform-origin: 0% 50%;
  transform-origin: 0% 50%;

  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -ms-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;

  -webkit-transform: translate3d(0, 0, 25px); /* 对应关系-1 */
  -moz-transform: translate3d(0, 0, 25px);
  -ms-transform: translate3d(0, 0, 25px);
  -o-transform: translate3d(0, 0, 25px);
  transform: translate3d(0, 0, 25px);
}
.book-cover {
  max-width: 420px;
  width: 100%;
  height: 560px;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  background: #29303a 0 200px no-repeat;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.book-cover-back {
  max-width: 420px;
  width: 100%;
  height: 560px;
  position: absolute;
  top: 0;
  bottom: 0;
  background: #29303a;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;

  -webkit-transform: rotate3d(0, 1, 0, -180deg);
  -moz-transform: rotate3d(0, 1, 0, -180deg);
  -ms-transform: rotate3d(0, 1, 0, -180deg);
  -o-transform: rotate3d(0, 1, 0, -180deg);
  transform: rotate3d(0, 1, 0, -180deg);
}
.title {
  margin: 40px 0 122px 0;
  height: 40px;
  font-size: 40px;
  padding: 1rem;
}
.author {
  height: 20px;
  font-size: 20px;
}
.publisher {
  width: 100%;
  position: absolute;
  bottom: 22px;
}

.book-page {
  width: 100%;
  max-width: 415px;
  height: 550px;
  line-height: 20px;
  position: absolute;
  top: 5px;
  z-index: 9;
  box-shadow: inset 3px 0 10px rgba(0, 0, 0, 0.1);
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -webkit-transition-duration: 0.5s;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -webkit-transform: translate3d(
    0,
    0,
    24px
  ); /* 这里的Z坐标 一定要比封面页的低 否则旋转的时候 渲染时会导致层叠*/
  -moz-transform: translate3d(0, 0, 24px);
  -ms-transform: translate3d(0, 0, 24px);
  -o-transform: translate3d(0, 0, 24px);
  transform: translate3d(0, 0, 24px);
}
.page {
  height: 500px;
  margin: 30px 40px;
  overflow-y: scroll;
}

.page::-webkit-scrollbar {
  width: 0px; /* This will hide the scrollbar */
}

.page {
  scrollbar-width: none; /* This will hide the scrollbar */
}
.book-page h3 {
  font-size: 14px;
  text-align: center;
  margin-bottom: 14px;
}
.book-page p {
  font-size: 13px;
  margin-bottom: 14px;
}
.page-number {
  width: 100%;
  font-size: 13px;
  text-align: center;
  position: absolute;
  bottom: 10px;
}

.book-back {
  max-width: 420px;
  width: 100%;
  background: #29303a;
  position: absolute;
  top: 0;
  bottom: 0;
  color: white;
  -webkit-transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 25px);
  -moz-transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 25px);
  -ms-transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 25px);
  -o-transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 25px);
  transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 25px);
  z-index: 8;
}

.book-back .description {
  font-size: 14px;
  line-height: 20px;
  margin-top: 50px;
  padding: 10px 20px 10px 30px;
  background: rgba(255, 255, 255, 0.1);
}
.book-back p {
  padding: 5px 0;
}
.isbn {
  position: absolute;
  bottom: 20px;
  left: 30px;
}

.book-bone {
  width: 50px;
  background: #29303a;
  box-shadow:
    1px 0 0 #29303a,
    -1px 0 0 #29303a; /* 旋转的时候 拼接处隐隐约约会有个缝隙 所以加上个阴影来填补它 */
  position: absolute;
  top: 0;
  bottom: 0;
  left: -25px;
  -webkit-transform: rotate3d(0, 1, 0, -90deg);
  -moz-transform: rotate3d(0, 1, 0, -90deg);
  -ms-transform: rotate3d(0, 1, 0, -90deg);
  -o-transform: rotate3d(0, 1, 0, -90deg);
  transform: rotate3d(0, 1, 0, -90deg);
}
.book-bone h2 {
  width: 530px;
  height: 50px;
  line-height: 50px; /* 对应关系-1 */
  font-size: 14px;
  text-align: right;
  padding: 0 15px;
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  transform-origin: 0 0;

  -webkit-transform: rotate(90deg) translateY(-50px); /* 对应关系-1 */
  -moz-transform: rotate(90deg) translateY(-50px);
  -ms-transform: rotate(90deg) translateY(-50px);
  -o-transform: rotate(90deg) translateY(-50px);
  transform: rotate(90deg) translateY(-50px);
}
.book-bone span {
  font-size: 14px;
  padding-right: 20px;
}

.book-cover:after,
.book-back:after {
  /*  */
  content: '';
  width: 3px;
  position: absolute;
  top: 0;
  left: 10px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.06);
  box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
}
.book-page,
.book-top,
.book-right,
.book-bottom {
  background: #eeefe9;
}
.book-right {
  width: 50px;
  height: 550px;
  position: absolute;
  top: 5px;
  right: -20px;
  box-shadow:
    0 1px 0 #eeefe9,
    0 -1px 0 #eeefe9;
  -webkit-transform: rotate3d(0, 1, 0, 90deg);
  -moz-transform: rotate3d(0, 1, 0, 90deg);
  -ms-transform: rotate3d(0, 1, 0, 90deg);
  -o-transform: rotate3d(0, 1, 0, 90deg);
  transform: rotate3d(0, 1, 0, 90deg);
}
.book-top {
  width: 415px;
  height: 50px;
  position: absolute;
  top: -20px;
  left: 0;
  -webkit-transform: rotate3d(1, 0, 0, 90deg);
  -moz-transform: rotate3d(1, 0, 0, 90deg);
  -ms-transform: rotate3d(1, 0, 0, 90deg);
  -o-transform: rotate3d(1, 0, 0, 90deg);
  transform: rotate3d(1, 0, 0, 90deg);
}
.book-bottom {
  width: 415px;
  height: 50px;
  position: absolute;
  bottom: -20px;
  left: 0;
  -webkit-transform: rotate3d(1, 0, 0, -90deg) translate3d(0, 0, 0);
  -moz-rotate3d: (1, 0, 0, -90deg) translate3d(0, 0, 0);
  -ms-rotate3d: (1, 0, 0, -90deg) translate3d(0, 0, 0);
  -o-rotate3d: (1, 0, 0, -90deg) translate3d(0, 0, 0);
  rotate3d: (1, 0, 0, -90deg) translate3d(0, 0, 0);
}

.book-right,
.book-top,
.book-bottom {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}

.view-cover:hover .main {
  -webkit-transform: rotate3d(0, 1, 0, -40deg);
  -moz-transform: rotate3d(0, 1, 0, -40deg);
  -ms-transform: rotate3d(0, 1, 0, -40deg);
  -o-transform: rotate3d(0, 1, 0, -40deg);
  transform: rotate3d(0, 1, 0, -40deg);
}
/* Cover Back */
.view-back .main {
  -webkit-transform: rotate3d(0, 1, 0, 180deg);
  -moz-transform: rotate3d(0, 1, 0, 180deg);
  -ms-transform: rotate3d(0, 1, 0, 180deg);
  -o-transform: rotate3d(0, 1, 0, 180deg);
  transform: rotate3d(0, 1, 0, 180deg);
}
.view-back:hover .main {
  -webkit-transform: rotate3d(0, 1, 0, 140deg);
  -moz-transform: rotate3d(0, 1, 0, 140deg);
  -ms-transform: rotate3d(0, 1, 0, 140deg);
  -o-transform: rotate3d(0, 1, 0, 140deg);
  transform: rotate3d(0, 1, 0, 140deg);
}
.open-book {
  -webkit-transform: translate3d(50%, 0, 0);
  -moz-transform: translate3d(50%, 0, 0);
  -ms-transform: translate3d(50%, 0, 0);
  -o-transform: translate3d(50%, 0, 0);
  transform: translate3d(50%, 0, 0);
}
.open-book .book-font {
  -webkit-transform: translate3d(0, 0, 25px) rotate3d(0, 1, 0, -160deg);
  -moz-transform: translate3d(0, 0, 25px) rotate3d(0, 1, 0, -160deg);
  -ms-transform: translate3d(0, 0, 25px) rotate3d(0, 1, 0, -160deg);
  -o-transform: translate3d(0, 0, 25px) rotate3d(0, 1, 0, -160deg);
  transform: translate3d(0, 0, 25px) rotate3d(0, 1, 0, -160deg);
}

.open-book:hover .main {
  -webkit-transform: rotate3d(1, 1, 0, 15deg);
  -moz-transform: rotate3d(1, 1, 0, 15deg);
  -ms-transform: rotate3d(1, 1, 0, 15deg);
  -o-transform: rotate3d(1, 1, 0, 15deg);
  transform: rotate3d(1, 1, 0, 15deg);
}

.view-rotate .main {
  -webkit-transition-duration: 5s;
  -moz-transition-duration: 5s;
  -ms-transition-duration: 5s;
  -o-transition-duration: 5s;
  transition-duration: 5s;

  -webkit-transform: rotate3d(0, 1, 0, 360deg);
  -moz-transform: rotate3d(0, 1, 0, 360deg);
  -ms-transform: rotate3d(0, 1, 0, 360deg);
  -o-transform: rotate3d(0, 1, 0, 360deg);
  transform: rotate3d(0, 1, 0, 360deg);
}
.view-rotate:hover .main {
  -webkit-transition-duration: 8s;
  -moz-transition-duration: 8s;
  -ms-transition-duration: 8s;
  -o-transition-duration: 8s;
  transition-duration: 8s;

  -webkit-transform: rotate3d(0, 1, 0, -360deg);
  -moz-transform: rotate3d(0, 1, 0, -360deg);
  -ms-transform: rotate3d(0, 1, 0, -360deg);
  -o-transform: rotate3d(0, 1, 0, -360deg);
  transform: rotate3d(0, 1, 0, -360deg);
}

#opt {
  width: 150px;
  line-height: 30px;
  margin: auto;
  text-align: center;
  padding: 10px 10px 5px 10px;
  margin-bottom: 16px;
  z-index: 100px;
}
#opt:after {
  content: '';
  width: 105%;
  height: 104%;
  z-index: -1;
}
#opt dt {
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
#opt dd {
  color: #999;
  cursor: pointer;
  background: rgba(170, 170, 170, 0.1);
  margin-bottom: 5px;
}
#opt dd:hover {
  color: rgba(255, 255, 255, 0.8);
  box-shadow: inset 2px 0 0 rgba(85, 85, 85, 0.2);
  background: rgba(85, 85, 85, 0.4);
}
#opt .cur {
  color: black;
  box-shadow: inset 2px 0 0 rgba(85, 85, 85, 0.2);
  background: rgba(85, 85, 85, 0.2);
}
</style>
