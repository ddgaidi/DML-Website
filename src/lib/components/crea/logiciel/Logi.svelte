<script>
  import { lang } from '../../../store/lang';
  import { darkMode } from '../../../store/dark.js';
  
  import vsc from '../../../images/IMG/logiciel/vsc.png';
  import jb from '../../../images/IMG/logiciel/jb.png';
  import github from '../../../images/IMG/logiciel/github.png';
  import micro from '../../../images/IMG/logiciel/365.png';
  import aseprite from '../../../images/IMG/logiciel/aseprite.png';
  import bb from '../../../images/IMG/logiciel/bb.png';

let darkModeValue = false;

darkMode.subscribe(value => {
  darkModeValue = value;
});
</script>

<div class="transition-all duration-500 flex flex-col items-center justify-center pt-[21px] lg:pt-[50px] bg-[#f4f3fc] dark:bg-[#0C0C12]" id="logi-container">

  <div class="w-full h-[2.1px] mb-7" style="background: linear-gradient(to right, transparent 10%, #5865f2 50%, #5865f2 50%, transparent 90%);"></div>

  <h1 class="transition-all duration-500 font-extrabold pb-7 text-[25px] lg:text-[40px] underline text-[#ff9900] dark:text-[#FFC000] font-family: 'Outfit', sans-serif" id="technologies">
    {$lang === 'fr' ? "Logiciels maîtrisés :" : "Mastered software :"}
  </h1>  

  <div class="grid grid-cols-2 lg:grid-cols-4" id="row">

    <a class="flex flex-col items-center m-2 no-underline" href="https://code.visualstudio.com/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[100px] h-[100px] lg:w-[110px] lh:h-[110px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="html-container">
        <img src={vsc} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[35px] lg:h-[50px]" />
        <p class="mt-[55px] transition-all duration-300 text-[14px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">VS Code</p>
      </div>
    </a>          

    <a class="flex flex-col items-center m-2 no-underline" href="https://www.jetbrains.com/fr-fr/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[100px] h-[100px] lg:w-[110px] lh:h-[110px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="css-container">
        <img src={jb} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[35px] lg:h-[50px]" />
        <p class="mt-[55px] transition-all duration-300 text-[14px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">JetBrains</p>
      </div>
    </a>

    <a class="flex flex-col items-center m-2 no-underline" href="https://github.com/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[100px] h-[100px] lg:w-[110px] lh:h-[110px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="svelte-container">
        <img src={github} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[35px] lg:h-[50px]" />
        <p class="mt-[55px] transition-all duration-300 text-[14px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">GitHub</p>
      </div>
    </a>    

    <a class="flex flex-col items-center m-2 no-underline" href="https://www.blockbench.net/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[100px] h-[100px] lg:w-[110px] lh:h-[110px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="svelte-container">
        <img src={bb} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[35px] lg:h-[50px]" />
        <p class="mt-[55px] transition-all duration-300 text-[14px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">BlockBench</p>
      </div>
    </a>

    <a class="flex flex-col items-center m-2 no-underline" href="https://www.aseprite.org/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[100px] h-[100px] lg:w-[110px] lh:h-[110px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="svelte-container">
        <img src={aseprite} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[35px] lg:h-[50px]" />
        <p class="mt-[55px] transition-all duration-300 text-[14px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">Aseprite</p>
      </div>
    </a>

    <a class="flex flex-col items-center m-2 no-underline" href="https://www.office.com/" target="_blank">
      <div class="relative transition-all duration-300 group flex flex-col justify-center items-center bg-[#d4d5e2] dark:bg-[#14141E] w-[100px] h-[100px] lg:w-[110px] lh:h-[110px] rounded-[10px] hover:bg-[#c7c9d8] dark:hover:bg-[#191925] hover:scale-110 hover:cursor-pointer" id="svelte-container">
        <img src={micro} alt="HTML Noir" class="absolute top-[14px] transition-opacity duration-500 ease-in-out h-[35px] lg:h-[50px]" />
        <p class="mt-[55px] transition-all duration-300 text-[14px] lg:text-[16px] text-[#5e5e5e] group-hover:text-black dark:text-[#a2a4b3] dark:group-hover:text-white no-underline font-family: 'Outfit', sans-serif">Microsoft 365</p>
      </div>
    </a>

  </div>


</div>