<script type="ts">
  import Fa from "svelte-fa";
  import {
    faInstagram,
    faYoutube,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";

  let linkList = [
    {
      name: "weekend_explored",
      subText: "Instagram",
      link: "https://www.instagram.com/weekend_explored",
      icon: faInstagram,
      iconClassNames: "text-orange-500",
    },
    {
      name: "behind_scenes_explored",
      subText: "Instagram",
      link: "https://www.instagram.com/behind_scenes_explored",
      icon: faInstagram,
      iconClassNames: "text-orange-500",
    },
    {
      name: "weekend_explored",
      subText: "Youtube",
      link: "https://www.youtube.com/channel/UCkHTylmLVCsbyKXJq-Hmalg",
      icon: faYoutube,
      iconClassNames: "text-red-500",
    },
  ];
</script>

<div class="h-screen">
  <div class="md:w-1/3  mx-auto mt-20">
    <div class="p-2 flex items-center flex-col">
      <img
        src="https://avatars.githubusercontent.com/u/29562232?s=400&u=eca0006297cc43aa65b1521b6829783728f9ea5f&v=4"
        alt="Profile"
        class="rounded-full overflow-hidden w-20 h-20 border-gray-200 border-4 object-contain"
      />
      <div class="font-bold mt-2 opacity-90">Amal Chandran</div>
      <div class="my-2 text-center">
        <span>Beginner FPV</span> |
        <span>Content Creator</span>
      </div>
    </div>
    <div class="flex gap-y-2 flex-col xl:w-1/2 px-2 pb-2 md:mx-auto">
      {#each linkList as link}
        <a
          href={link.link}
          class=" bg-black bg-opacity-40 hover:bg-slate-900 rounded py-2 px-3"
        >
          <div class="flex items-center justify-center  gap-2">
            <div>
              <Fa icon={link.icon} class={link.iconClassNames} />
            </div>
            <div class="font-normal text-white ">
              {link.name}
            </div>
          </div>

          <div class="text-gray-300 flex justify-center text-xs">
            {link.subText}
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
