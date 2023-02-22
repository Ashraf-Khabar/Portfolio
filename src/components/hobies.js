import React from "react";

const Hobies = ({ darkModeValue }) => {

    return (

        <div data-theme={darkModeValue} class=" max-w-screen-xl p-4 px-4 mx-auto sm:px-6 lg:px-8 py-26 lg:mt-20">
            <div class="relative">
                <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
                        <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                            My hobies
                        </p>
                        <h4 class="mt-2 text-2xl font-extrabold leading-8 sm:text-3xl sm:leading-9">

                        </h4>
                        <p class="mt-4 text-lg leading-6">
                            One of my greatest passions in life is engaging in a variety of hobbies that bring me joy and fulfillment. One of my favorite hobbies is playing football. I love the excitement and rush that comes from playing a competitive game, as well as the opportunity to work with my teammates to achieve a common goal.

                            In addition to football, I also have a keen interest in graphic design. I enjoy creating visually appealing designs that communicate a message or tell a story. Whether it's designing a logo, creating a flyer, or working on a website layout, I find graphic design to be a fascinating and rewarding pursuit.

                            Drawing is another hobby that I love to indulge in. Whenever I have spare time, I enjoy picking up a pencil and sketching out my ideas on paper. It's a great way to express my creativity and to relax and unwind after a long day.

                            When I'm not playing sports or working on my creative projects, I also enjoy watching anime and movies. There's something about immersing myself in a well-crafted story that I find truly captivating. Whether it's a thrilling action movie or a touching romantic anime, I love the way that good storytelling can transport me to another world and inspire me to see things from a different perspective.
                        </p>
                        <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base font-medium leading-6">
                                        Graohic designing
                                    </span>
                                </div>
                            </li>
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base font-medium leading-6">
                                        Watchin anime/movies
                                    </span>
                                </div>
                            </li>
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base font-medium leading-6">
                                        Drawing
                                    </span>
                                </div>
                            </li>
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base font-medium leading-6">
                                        Playing football
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                        <div class="relative space-y-4">
                            <div class="flex items-end justify-center space-x-4 lg:justify-start">
                                <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="1" />
                                <img class="w-40 rounded-lg shadow-lg md:w-64" width="260" src="https://images.liverpoolmuseums.org.uk/styles/focal_point_4_3/public/2020-11/IMG_5816%20(2).JPG" alt="2" />
                            </div>
                            <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                <img class="w-24 rounded-lg shadow-lg md:w-40" width="170" src="https://i0.wp.com/thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?fit=1000%2C742&ssl=1" alt="3" />
                                <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://www.sportsadda.com/static-assets/waf-images/86/3a/4b/1-1/J5cZ61KuVq.jpg?v=1.2&w=1024" alt="4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Hobies; 