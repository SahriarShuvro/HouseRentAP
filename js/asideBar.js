let asideBar = document.getElementById("asdideBar");

asideBar.innerHTML = `
        <aside
            class=" hidden lg:flex lg:flex-col top-0 left-0 m-4 p-2 mt-24 md:mt-28 lg:m-8   min-h-screen w-80    shadow-md p-4 backdrop-blur-xl rounded-lg bg-[#ffffff4a] dark:bg-[#00000047] duration-200"
            id="asideSection">
            <div>
                <!-- <p>All Job <span class="text-green-400">Rajshahi</span></p> -->
        
            </div>
            <div class="space-y-2 mt-8 flex w-full flex-col">
                <a class="asideMenu w-full hover:hover dasdhbord" id="dasdhbord" href="index.html"><ion-icon name="bar-chart-outline" class="text-2xl font-semibold mr-3"></ion-icon>Dasdhbord</a>
                <a
                    class="asideMenu w-full hover:hover propertySell"
                    id="propertySell"
                    href="propertySell.html"
                    ><ion-icon
                    name="bag-handle-outline"
                    class="text-2xl font-semibold mr-3"
                    ></ion-icon
                    >Property Sell
                </a>
                
                <a class="asideMenu w-full hover:hover blog flex" id="blog" href="blog.html"><span class="material-symbols-outlined text-2xl font-semibold mr-3"> rss_feed </span>Blog</a>
            </div>
        </aside>
`;