<script>
  import { lang } from '../../../store/lang';
  import { darkMode } from '../../../store/dark.js';
  
  import htmld from '../../../images/SVG/technod/htmld.svg';
  import cssd from '../../../images/SVG/technod/cssd.svg';
  import jsd from '../../../images/SVG/technod/javascriptd.svg';
  import tsd from '../../../images/SVG/technod/typescriptd.svg';
  import svelted from '../../../images/SVG/technod/svelted.svg';
  import tailwindd from '../../../images/SVG/technod/tailwindd.svg';
  import cd from '../../../images/SVG/technod/cd.svg'
  import pythond from '../../../images/SVG/technod/pythond.svg';
  import sqld from '../../../images/SVG/technod/databased.svg';
  import gitd from '../../../images/SVG/technod/gitd.svg';

  import htmlw from '../../../images/SVG/technow/htmlw.svg';
  import cssw from '../../../images/SVG/technow/cssw.svg';
  import jsw from '../../../images/SVG/technow/javascriptw.svg';
  import tsw from '../../../images/SVG/technow/typescriptw.svg';
  import sveltew from '../../../images/SVG/technow/sveltew.svg';
  import tailwindw from '../../../images/SVG/technow/tailwindw.svg';
  import cw from '../../../images/SVG/technow/cw.svg'
  import pythonw from '../../../images/SVG/technow/pythonw.svg';
  import sqlw from '../../../images/SVG/technow/databasew.svg';
  import gitw from '../../../images/SVG/technow/gitw.svg';

let darkModeValue = false;

darkMode.subscribe(value => {
  darkModeValue = value;
});
</script>

<div class="transition-all duration-500 flex flex-col items-center justify-center pt-[41px] lg:pt-[50px] bg-[#f4f3fc] dark:bg-[#0C0C12]" id="techno-container">

  <div class="w-full h-[2px] mb-7" style="background: linear-gradient(to right, transparent 10%, #5865f2 50%, #5865f2 50%, transparent 90%);"></div>

  <h1 class="transition-all duration-500 font-extrabold pb-7 text-[25px] lg:text-[40px] underline text-[#ff9900] dark:text-[#FFC000] font-family: 'Outfit', sans-serif" id="technologies">
    {$lang === 'fr' ? "Technologies maîtrisées :" : "Mastered technologies :"}
  </h1>  

  <div class="grid grid-cols-3 lg:grid-cols-4" id="row">

    <a class="flex m-2 flex-col items-center no-underline" href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="html-container">
        <img src={htmld} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[25px] lg:h-[40px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={htmlw} alt="HTML Blanc" class="absolute top-[12px] transition-opacity duration-500 ease-in-out h-[26.5px] lg:h-[43px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
        <p class="mt-[45px] transition-all duration-300 text-[12px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">HTML</p>
      </div>
    </a>          

    <a class="flex m-2 flex-col items-center no-underline" href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="css-container">
        <img src={cssd} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[25px] lg:h-[40px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={cssw} alt="HTML Blanc" class="absolute top-[12px] transition-opacity duration-500 ease-in-out h-[26.5px] lg:h-[43px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
        <p class="mt-[45px] transition-all duration-300 text-[12px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">CSS</p>
      </div>
    </a>

    <a class="flex m-2 flex-col items-center no-underline" href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="css-container">
        <img src={jsd} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[25px] lg:h-[40px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={jsw} alt="HTML Blanc" class="absolute top-[12px] transition-opacity duration-500 ease-in-out h-[26.5px] lg:h-[43px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
        <p class="mt-[45px] transition-all duration-300 text-[12px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">JavaScript</p>
      </div>
    </a>

    <a class="flex m-2 flex-col items-center no-underline" href="https://www.typescriptlang.org/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="css-container">
        <img src={tsd} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[25px] lg:h-[40px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={tsw} alt="HTML Blanc" class="absolute top-[12px] transition-opacity duration-500 ease-in-out h-[26.5px] lg:h-[43px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
        <p class="mt-[45px] transition-all duration-300 text-[12px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">TypeScript</p>
      </div>
    </a>

    <a class="flex m-2 flex-col items-center no-underline" href="https://svelte.dev/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="svelte-container">
        <img src={svelted} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[25px] lg:h-[40px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={sveltew} alt="HTML Blanc" class="absolute top-[12px] transition-opacity duration-500 ease-in-out h-[26.5px] lg:h-[43px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
        <p class="mt-[45px] transition-all duration-300 text-[12px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">Svelte</p>
      </div>
    </a>

    <a class="flex m-2 flex-col items-center no-underline" href="https://tailwindcss.com/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="tailwindcss-container">
        <img src={tailwindd} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[25px] lg:h-[40px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={tailwindw} alt="HTML Blanc" class="absolute top-[12px] transition-opacity duration-500 ease-in-out h-[26.5px] lg:h-[43px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
        <p class="mt-[45px] transition-all duration-300 text-[12px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">TailwindCSS</p>
      </div>
    </a>

    <a class="flex m-2 flex-col items-center no-underline" href="https://learn.microsoft.com/fr-fr/cpp/c-language/?view=msvc-170" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="python-container">
        <img src={cd} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[25px] lg:h-[40px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={cw} alt="HTML Blanc" class="absolute top-[12px] transition-opacity duration-500 ease-in-out h-[26.5px] lg:h-[43px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
        <p class="mt-[45px] transition-all duration-300 text-[12px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">C</p>
      </div>
    </a>

    <a class="flex m-2 flex-col items-center no-underline" href="https://python.org/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="python-container">
        <img src={pythond} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[25px] lg:h-[40px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={pythonw} alt="HTML Blanc" class="absolute top-[12px] transition-opacity duration-500 ease-in-out h-[26.5px] lg:h-[43px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
        <p class="mt-[45px] transition-all duration-300 text-[12px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">Python</p>
      </div>
    </a>

    <a class="flex m-2 flex-col items-center no-underline" href="https://sql.sh/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="sql-container">
        <img src={sqld} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[25px] lg:h-[40px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={sqlw} alt="HTML Blanc" class="absolute top-[12px] transition-opacity duration-500 ease-in-out h-[26.5px] lg:h-[43px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
        <p class="mt-[45px] transition-all duration-300 text-[12px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">SQL</p>
      </div>
    </a>

    <a class="flex m-2 flex-col items-center no-underline" href="https://git-scm.com/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="git-container">
        <img src={gitd} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[25px] lg:h-[40px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={gitw} alt="HTML Blanc" class="absolute top-[12px] transition-opacity duration-500 ease-in-out h-[26.5px] lg:h-[43px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
        <p class="mt-[45px] transition-all duration-300 text-[12px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">GIT</p>
      </div>
    </a>

  </div>

</div>