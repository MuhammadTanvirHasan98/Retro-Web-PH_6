
const latestPost = async () => {
  const fetching_data = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
  const Data = await fetching_data.json();
  Data.forEach((latest) => {
    const div = document.createElement('div');
    div.innerHTML = 
    `<div class="p-4 lg:p-6 flex flex-col  shadow-md shadow-blue-200  border rounded-2xl  gap-2 lg:gap-4 h-auto lg:h-full">
         <img src="${latest.cover_image}" alt="" class="min-w-full min-h-[80px] rounded-xl" >
         <p class="text-[#12132D99]"><i class="fa-solid fa-calendar-plus"></i>  ${latest.author.posted_date ? latest.author.posted_date : 'No publish date'}</p>
         <p class="font-extrabold text-lg">${latest.title}</p>
         <p class="text-[#12132D99] w-[85%]">${latest.description}</p>
        <div class="flex justify-start flex-1 items-end">
            <img src="${latest.profile_image}" alt="profile picture" class="rounded-full w-9 h-9">
            <div class=" text-left rtl:text-right ms-3 space-y-0.5 font-medium  ">
                <p class="text-lg">${latest.author.name}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  ${latest.author.designation ? latest.author.designation : 'Unknown'}
                </p>
            </div>
         </div>    
     </div>`
      latestPostContainer.appendChild(div);
  })

}

latestPost();