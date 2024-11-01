<script>
  import { lang } from '../../../store/lang';
  import { darkMode } from '../../../store/dark.js';
  
  import webd from '../../../images/SVG/service/webd.svg';
  import webw from '../../../images/SVG/service/webw.svg';
  
  let darkModeValue = false;

  darkMode.subscribe(value => {
    darkModeValue = value;
  });
</script>

<div class="transition-colors duration-500 pt-[100px] bg-[#f4f3fc] dark:bg-[#0C0C12] flex justify-center items-center" id="biographie">

  <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex items-center w-[800px] p-5 rounded-[10px]" id="bio-container">

    <div class="relative flex items-center mr-7 mt-5 w-[700px]" id="web">
      <img src={webd} alt="Web sombre" class="absolute transition-opacity duration-500 ease-in-out {$darkMode ? 'opacity-0' : 'opacity-100'}">
      <img src={webw} alt="Web clair" class="absolute transition-opacity duration-500 ease-in-out {$darkMode ? 'opacity-100' : 'opacity-0'}">
    </div>
    
    <div class="flex flex-col w-[2000px]" id="bio-text">
      <h1 class="transition-colors duration-500 text-[40px] mb-[10px] font-family: 'Outfit', sans-serif dark:text-white font-semibold">
        <span class="transition-colors duration-500 text-[#ff9900] dark:text-[#FFC000]">
          {$lang === 'fr' ? "Développement" : "Web"}
        </span> 
        <span class="transition-colors duration-500 font-bold text-[#4e59d8] dark:text-[#5865f2]">
          {$lang === 'fr' ? "Web" : "Development"}
        </span>
      </h1>
      <p class="transition-colors duration-500 text-[17px] text-black dark:text-[#868894] font-family: 'Outfit', sans-serif dark:text-white">
        {$lang === 'fr' ? "Pour l'instant je suis spécialisé dans le développement Web, offrant des solutions pour répondre à vos besoins. J’utilise le framework Svelte, reconnu pour sa rapidité et son efficacité, combiné avec TailwindCSS pour un design moderne et réactif. Mon objectif est de créer des sites Web performants et esthétiquement agréables." 
        : 
        "Currently, I specialize in web development, offering solutions to meet your needs. I use the Svelte framework, known for its speed and efficiency, combined with TailwindCSS for a modern and responsive design. My goal is to create high-performance and aesthetically pleasing websites."}
      </p>
    </div>

  </div>
</div>