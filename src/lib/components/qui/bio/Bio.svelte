<script lang="ts">
  import { lang } from '../../../store/lang';
  import pdp from '../../../images/IMG/pdp/pdp.gif';
</script>

<div class="transition-colors duration-500 lg:pt-[90px] pt-[70px] bg-[#f4f3fc] dark:bg-[#0C0C12] flex justify-center items-center" id="biographie">

  <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col lg:flex-row items-center w-[90%] lg:max-w-[800px] p-4 lg:p-5 rounded-[10px]" id="bio-container">
    
    <!-- Photo de profil -->
    <div class="mb-4 lg:mb-0 lg:mr-7 w-full lg:w-auto hidden lg:flex justify-center" id="pdp">
      <img class="w-[40%] lg:w-[300px] rounded-[20px] lg:rounded-[40px] pointer-events-none select-none" src={pdp} alt="">
    </div>
    
    <!-- Texte biographique -->
    <div class="transition-colors duration-500 flex flex-col items-center lg:items-start text-justify lg:text-left" id="bio-text">
      <h1 class="transition-colors duration-500 text-[18px] lg:text-[40px] text-black dark:text-[#c2c4d4] mb-[10px] font-family: 'Outfit', sans-serif dark:text-white font-black">
        <span class="transition-colors duration-500 font-extrabold text-[#ff9900] dark:text-[#FFC000]">DML</span> | 
        <span class="transition-colors duration-500 font-semibold text-[#4e59d8] dark:text-[#5865f2]">
          {$lang === 'fr' ? "Fondateur de Wizorah" : "Founder of Wizorah"}
        </span>
      </h1>
      <p class="transition-colors duration-500 text-[12px] lg:text-[17px] max-w-[99%] lg:w-[600px] text-black dark:text-[#868894] font-family: 'Outfit', sans-serif dark:text-white">
        {$lang === 'fr' 
          ? "Je me surnomme DML, j'ai 18 ans et je réside en région parisienne. Depuis mon plus jeune âge, ma passion pour l'informatique ne cesse de grandir. Au cours des dernières années, j'ai particulièrement plongé dans le domaine du développement web. Le 10 Décembre 2024, j'ai commencé mon serveur Minecraft Bedrock, " 
          : "My nickname is DML, I am 18 years old and I live in the Paris region. Since I was young, my passion for computers has continued to grow. In recent years, I have particularly immersed myself in the field of web development. On December 10, 2024, I started my Minecraft Bedrock server, "}
          <span class="transition-colors duration-500 font-extrabold text-[#db39a0]">WIZORAH</span>.
      </p>
    </div>

  </div>
</div>