<script lang="ts">
  import { lang } from '../../../store/lang';
  import informatique from '../../../images/IMG/histoire/dev.jpeg';
  import scolaire from '../../../images/IMG/histoire/etudes.jpg';
  import web from '../../../images/IMG/histoire/web.jpg';
</script>

<div class="transition-colors duration-500 pt-[50px] pb-[30px] flex flex-col items-center justify-center bg-[#f4f3fc] dark:bg-[#0C0C12]" id="quest-container">

  <div class="flex items-center justify-center flex-row mb-[60px] mr-[60px]" id="informatique">
    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] w-[500px] rounded-[10px] flex flex-col items-center justify-center p-[20px] mx-[50px]" id="texte-informatique">
      <h1 class="transition-colors duration-500 font-bold pb-4 text-[25px] text-[#4e59d8] dark:text-[#5865f2] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' ? "Pourquoi l'informatique ?" : "Why Computer Science ?"}
      </h1>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Depuis mon plus jeune âge, j’ai toujours été fasciné par les ordinateurs. Je me souviens avoir été émerveillé par tout ce que l’on pouvait créer. Cette fascination précoce a grandement influencé mon parcours et a orienté mes intérêts vers l’informatique. Mon rêve d’enfant était de devenir un hacker, un expert capable de naviguer dans les méandres des systèmes informatiques les plus sécurisés. Cependant, j’ai rapidement compris que le piratage d’entreprises était illégal et potentiellement nuisible. Au lieu de cela, mon intérêt s’est porté sur le fonctionnement interne des logiciels.`
          : 'Since a young age, I have always been fascinated by computers. I remember being amazed by everything that could be created. This early fascination had a significant influence on my path and directed my interests toward computer science. As a child, my dream was to become a hacker, an expert capable of navigating the intricacies of the most secure computer systems. However, I quickly realized that hacking into companies was illegal and potentially harmful. Instead, my interest shifted towards understanding the inner workings of software.'}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `En ce qui concerne mon avenir, je souhaite intégrer une école qui me poussera à pleine capacité dans la recherche et la création en informatique. Je suis impatient de voir où cette passion me mènera.`
          : `Regarding my future, I want to attend a school that will push me to my full potential in research and creation in computer science. I am eager to see where this passion will lead me.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Je souhaite m’orienter vers la cybersécurité, un domaine qui est non seulement passionnant, mais aussi extrêmement pertinent dans le monde numérique d’aujourd’hui. Cela semble être une évolution naturelle de mon rêve d’enfance de devenir un hacker, mais dans un contexte légal et éthique.`
          : `I want to orient myself towards cybersecurity, a field that is not only exciting but also extremely relevant in today's digital world. It seems to be a natural evolution of my childhood dream of becoming a hacker, but in a legal and ethical context.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Quant aux défis spécifiques que j’espère relever dans le domaine de la cybersécurité, je souhaite être capable de hacker tout ce qu’on me demande tout en pouvant l'améliorer et le rendre quasiment infaillible. C’est un objectif ambitieux, mais je suis prêt à travailler dur pour l’atteindre.`
          : `As for the specific challenges I hope to tackle in cybersecurity, I want to be able to hack anything I'm asked while being able to improve it and make it nearly foolproof. It's an ambitious goal, but I'm ready to work hard to achieve it.`}
      </p>
    </div>
    <div class="flex items-center justify-center" id="image-informatique">
      <img class="w-[500px] rounded-[10px]" src={informatique} alt="Informatique">
    </div>
  </div>

  <div class="flex items-center justify-center flex-row mb-[60px] ml-[50px]" id="scolaire">
    <div class="flex items-center justify-center" id="image-scolaire">
      <img class="w-[500px] rounded-[10px]" src={scolaire} alt="Scolaire">
    </div>
    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] w-[500px] rounded-[10px] flex flex-col items-center justify-center p-[20px] mx-[50px]" id="texte-scolaire">
      <h1 class="transition-colors duration-500 font-bold pb-4 text-[25px] text-[#4e59d8] dark:text-[#5865f2] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' ? "Mon parcours :" : "My Journey :"}
      </h1>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `J'ai obtenu mon Brevet des collèges avec mention bien en 2021. Ensuite, j’ai poursuivi mes études au lycée, où j’ai obtenu mon BAC Général avec les spécialités Mathématiques et Numériques et sciences informatiques [NSI] en 2024.`
          : `I obtained my College Certificate with honors in 2021. Then I continued my studies in high school, where I obtained my General BAC with specialties in Mathematics and Digital and Computer Science [NSI] in 2024.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Mon intérêt pour l’informatique et la technologie ont été un moteur tout au long de mon parcours. Après le lycée, mon intérêt s'est porté vers un BTS CIEL (Cybersécurité, informatique et réseaux, électronique), que je considère comme une opportunité de parfaire mes compétences techniques, et de me préparer aux enjeux concrets du secteur de la cybersécurité et de l'informatique. Mon ambition est d'acquérir une expertise qui me permettra d’évoluer dans ces domaines.`
          : `My interest in computer science and technology has been a driving force throughout my journey. After high school, my interest turned to a BTS CIEL (Cybersecurity, Computing and Networks, Electronics), which I consider an opportunity to perfect my technical skills and prepare for the real challenges of the cybersecurity and computer science sectors. My ambition is to acquire expertise that will allow me to evolve in these fields.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `En parallèle j'ai appris à développer des applications web en utilisant les Framework SvelteKit et TailwindCSS, et les langages de développements HTML, CSS et JavaScript.`
          : `At the same time, I learned to develop web applications using the SvelteKit and TailwindCSS frameworks, as well as the programming languages HTML, CSS, and JavaScript.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `En somme, mon parcours est celui d’un passionné d’informatique, toujours prêt à apprendre et à relever de nouveaux défis.`
          : `In summary, my journey is that of a computer enthusiast, always ready to learn and take on new challenges.`}
      </p>
    </div>
  </div>

  <div class="flex items-center justify-center flex-row mr-[60px]" id="web">
    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] w-[500px] rounded-[10px] flex flex-col items-center justify-center p-[20px] mx-[50px]" id="texte-web">
      <h1 class="transition-colors duration-500 font-bold pb-4 text-[25px] text-[#4e59d8] dark:text-[#5865f2] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' ? "Le développement web :" : "Web Development :"}
      </h1>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `On m’a conseillé d’apprendre à développer des sites car c’est un domaine intéressant et enrichissant pour toute personne travaillant dans l’informatique. J’ai suivi ce conseil et j’ai réalisé plusieurs sites web jusqu’à présent, que vous pouvez retrouver sur la page Créations sur le site.`
          : `I was advised to learn how to develop websites because it is an interesting and enriching field for anyone working in computing. I followed this advice and have created several websites so far, which you can find on the Creations page of the site.`}
      </p>
      <p>‎</p>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Le développement web est un domaine passionnant pour plusieurs raisons. Il offre une plateforme pour exprimer ma créativité, que ce soit en termes de design, d’interactivité ou de fonctionnalités, les possibilités sont infinies. Chaque projet web est un nouveau défi, et trouver des solutions aux problèmes rencontrés lors du développement d’un site web est une expérience enrichissante.`
          : `Web development is an exciting field for several reasons. It provides a platform to express my creativity, whether in terms of design, interactivity, or functionality; the possibilities are endless. Each web project is a new challenge, and finding solutions to the problems encountered during the development of a website is a rewarding experience.`}
      </p>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Le domaine du web évolue constamment. Il y a toujours quelque chose de nouveau à apprendre, que ce soit un nouveau framework, une nouvelle bibliothèque ou une nouvelle approche de conception. Un site web peut atteindre un public mondial, et il est gratifiant de savoir que le travail que je fais peut être utilisé et apprécié par des personnes du monde entier.`
          : `The web field is constantly evolving. There is always something new to learn, whether it's a new framework, a new library, or a new design approach. A website can reach a global audience, and it is gratifying to know that the work I do can be used and appreciated by people all over the world.`}
      </p>
      <p class="transition-colors duration-500 text-[13px] text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {$lang === 'fr' 
          ? `Avec les nombreuses technologies et langages disponibles, cela offre une grande flexibilité. Je peux choisir les outils qui correspondent le mieux à mes besoins et à mes préférences. Ces qualités font du développement web un domaine passionnant et gratifiant. Je suis impatient de continuer à apprendre et à créer dans ce domaine.`
          : `With the many available technologies and languages, it offers great flexibility. I can choose the tools that best fit my needs and preferences. These qualities make web development an exciting and rewarding field. I look forward to continuing to learn and create in this area.`}
      </p>
    </div>
    <div class="flex items-center justify-center" id="image-web">
      <img class="w-[500px] rounded-[10px]" src={web} alt="Web">
    </div>
  </div>
</div>