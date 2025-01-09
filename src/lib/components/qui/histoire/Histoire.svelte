<script lang="ts">
  import { lang } from '../../../store/lang';
  import wizo from '../../../images/IMG/wizo.png';
</script>

<div class="transition-colors duration-500 pt-[20px] lg:pt-[50px] pb-[20px] lg:pb-[30px] flex flex-col items-center justify-center bg-[#f4f3fc] dark:bg-[#0C0C12]" id="quest-container">

  <!-- Section Wizorah -->
  <div class="flex flex-col lg:flex-row items-center justify-center mb-[30px] lg:mr-[60px]" id="informatique">
    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] w-[90%] lg:w-[500px] rounded-[10px] flex flex-col justify-center p-[20px] mx-[15px] lg:mx-[50px]" id="texte-informatique">
      <h1 class="transition-colors duration-500 font-bold pb-4 text-[18px] text-center lg:text-[25px] text-[#4e59d8] dark:text-[#5865f2] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' ? "WIZORAH : Un Projet d'une vie" : "WIZORAH : A Lifetime Project"}
      </h1>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Wizorah est un projet personnel qui me tient à cœur depuis plus de huit ans. Né d’une passion pour Minecraft et d’un désir d’innovation, ce serveur sur Minecraft Bedrock Edition reflète ma vision d’un univers ludique alliant magie et fantaisie.`
          : `Wizorah is a personal project that has been close to my heart for over eight years. Born from a passion for Minecraft and a desire for innovation, this server on Minecraft Bedrock Edition reflects my vision of a playful universe combining magic and fantasy.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Wizorah est bien plus qu’un simple serveur Minecraft. C’est une plateforme pensée pour offrir aux joueurs une expérience unique, à travers des modes de jeu immersifs tels que :`
          : `Wizorah is much more than just a Minecraft server. It is a platform designed to offer players a unique experience, through immersive game modes such as :`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `PvP Factions : Un mode stratégique et compétitif où l’alliance et la défense de base prennent tout leur sens.`
          : `PvP Factions : A strategic and competitive mode where alliance and base defense take on their full meaning.`}
      </p>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Kitmap : Un espace dédié aux duels rapides et équilibrés pour perfectionner ses compétences en combat.`
          : `Kitmap : A space dedicated to fast and balanced duels to perfect your combat skills.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `L'objectif est de repousser les limites de ce que Minecraft peut offrir, en exploitant tout le potentiel de la Bedrock Edition, souvent sous-estimée, et en y ajoutant des éléments novateurs.`
          : `The goal is to push the boundaries of what Minecraft can offer, taking the full potential of the often underrated Bedrock Edition and adding innovative elements to it.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `L’univers de Wizorah se distingue par sa richesse et son immersion. Noxélia, la mascotte du serveur est la gardienne de se monde regorgeant de mystère.`
          : `The universe of Wizorah is distinguished by its richness and immersion. Noxélia, the mascot of the server is the guardian of this world full of mystery.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Wizorah est une synthèse de mes compétences et de ma passion. Ce projet est également un défi personnel visant à :`
          : `Wizorah is a synthesis of my skills and passion. This project is also a personal challenge aimed at :`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Innover : Proposer des systèmes et fonctionnalités qui modernisent l’expérience de jeu.`
          : `Innovate : Offer systems and features that modernize the gaming experience.`}
      </p>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Créer : Concevoir un univers qui inspire et rassemble une communauté.`
          : `Create : Design a universe that inspires and brings together a community.`}
      </p>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Partager : Offrir un espace où chaque joueur peut vivre une aventure sur mesure.`
          : `Share : Offer a space where each player can live a tailor-made adventure.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Depuis des années, l’idée de créer un serveur me pousse à explorer, apprendre et dépasser mes propres limites. Wizorah est à la fois un terrain d’expression créative et une vitrine de ma capacité à mener un projet complexe, de l’idée initiale à sa réalisation concrète.`
          : `For years, the idea of ​​creating a server has pushed me to explore, learn and exceed my own limits. Wizorah is both a field of creative expression and a showcase of my ability to lead a complex project, from the initial idea to its concrete realization.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[12px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Wizorah n’est pas seulement un serveur Minecraft ; c’est le reflet de ma vision et de mon engagement envers une expérience immersive et unique.`
          : `Wizorah is not just a Minecraft server; it is a reflection of my vision and commitment to an immersive and unique experience.`}
      </p>
    </div>
    <div class="hidden lg:flex items-center justify-center" id="image-informatique">
      <img class="w-[500px] rounded-[10px]" src={wizo} alt="Informatique">
    </div>
  </div>

</div>