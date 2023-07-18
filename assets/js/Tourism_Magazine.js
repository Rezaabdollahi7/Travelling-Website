const TourismMagazineContext = `
    <!--Tourism Magazine -->
    <section class="tourism-magazine container-fluid mt-7">
        <div class="main-row ">
            <div class="row">
                <div class="tourism-magazine-tittle position-relative d-flex align-items-center justify-content-center flex-column">
                    <h3 class="position-relative"> &nbsp; مجله گردشگری &nbsp;</h3>

                    <span class="sub-tittle">خودت را به روز نگه دار !</span>

                    <!-- tabs buttons -->
                    <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="ms-4 ms-md-5 nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">راهنمای سفر</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="ms-4 ms-md-5 nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">معرفی جاذبه ها</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="ms-4 ms-md-5 nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">ایرانگردی</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="ms-4 ms-md-5 nav-link" id="pills-about-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-about"
                                aria-selected="false">شکم گردی</button>
                        </li>
                    </ul>
                    <!-- end of tabs buttons  -->

                </div>
                <!-- end of tourism-magazine-tittle-->

                <!-- start tab content -->
                <div class="row tab-content-row mt-3">
                    <!-- tabs content -->
                    <div class="tab-content" id="pills-tabContent">
                      <!-- first tab content -->
                        <div class="tab-pane fade show active flex flex-row mt-4" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab" tabindex="0">
                            <div class="row">
                                <!-- first card -->
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class=" col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center ">
                                        <img src="./assets/images/عکس‌های وبلاگ/Istanbul-Tram-T1-Visual.jpg" alt="عکس مترو در استانبول "
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end ">حمل و نقل عمومی در استانبول ترکیه</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/louis-magnotti-YvCg5X3pWzc-unsplash.jpg" alt="عکس هواپیما"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> راهنمای خرید بلیت هواپیما     </h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/56-3710787-colors-streaming-winter-prayer-hall-nasir-ol-molk-mosque-shiraz-14288444120-.jpg" alt="عکس مسجد نصیرالمک"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> مسجد نصیرالملک، شاهکار معماری ایرانی</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                         <img src="./assets/images/عکس‌های وبلاگ/turkey-istanbul-rooftop.jpg" alt="عکس خانه در استانبول"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end">    معروفترین غذاهای خیابانی استانبول</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/water-planet-aquapark-alanya.jpg" alt="عکس آبشار آبی در استانبول"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> بزرگ‌ترین پارک آبی آنتالیا</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                          <img src="./assets/images/عکس‌های وبلاگ/averie-woodard-5d20kdvFCfA-unsplash.jpg" alt="عکس جاده"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> فواید سفر کردن</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                            </div>

                            <div class="seemore col-12 d-flex justify-content-center align-items-center mt-5 outline-none border-0" >
                                <button>بیشتر ببینید</button>
                            </div>
                        </div>
                        <!-- end of first tab -->

                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab" tabindex="0">
                            
                                  <div class="row">
                                <!-- first card -->
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class=" col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center ">
                                        <img src="./assets/images/عکس‌های وبلاگ/Istanbul-Tram-T1-Visual.jpg" alt="عکس مترو در استانبول "
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end">حمل و نقل عمومی در استانبول ترکیه</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/louis-magnotti-YvCg5X3pWzc-unsplash.jpg" alt="عکس هواپیما"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> راهنمای خرید بلیت هواپیما     </h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/56-3710787-colors-streaming-winter-prayer-hall-nasir-ol-molk-mosque-shiraz-14288444120-.jpg" alt="عکس مسجد نصیرالمک"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> مسجد نصیرالملک، شاهکار معماری ایرانی</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                         <img src="./assets/images/عکس‌های وبلاگ/turkey-istanbul-rooftop.jpg" alt="عکس خانه در استانبول"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end">    معروفترین غذاهای خیابانی استانبول</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/water-planet-aquapark-alanya.jpg" alt="عکس آبشار آبی در استانبول"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> بزرگ‌ترین پارک آبی آنتالیا</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                          <img src="./assets/images/عکس‌های وبلاگ/averie-woodard-5d20kdvFCfA-unsplash.jpg" alt="عکس جاده"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> فواید سفر کردن</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                            </div>

                            <div class="seemore col-12 d-flex justify-content-center align-items-center mt-5 outline-none border-0" >
                                <button>بیشتر ببینید</button>
                            </div>
                        </div>
                        <!-- end of second tab -->
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                            aria-labelledby="pills-contact-tab" tabindex="0">
                            
                                  <div class="row">
                                <!-- first card -->
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class=" col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center ">
                                        <img src="./assets/images/عکس‌های وبلاگ/Istanbul-Tram-T1-Visual.jpg" alt="عکس مترو در استانبول "
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end">حمل و نقل عمومی در استانبول ترکیه</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/louis-magnotti-YvCg5X3pWzc-unsplash.jpg" alt="عکس هواپیما"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> راهنمای خرید بلیت هواپیما     </h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/56-3710787-colors-streaming-winter-prayer-hall-nasir-ol-molk-mosque-shiraz-14288444120-.jpg" alt="عکس مسجد نصیرالمک"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> مسجد نصیرالملک، شاهکار معماری ایرانی</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                         <img src="./assets/images/عکس‌های وبلاگ/turkey-istanbul-rooftop.jpg" alt="عکس خانه در استانبول"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end">    معروفترین غذاهای خیابانی استانبول</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/water-planet-aquapark-alanya.jpg" alt="عکس آبشار آبی در استانبول"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> بزرگ‌ترین پارک آبی آنتالیا</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                          <img src="./assets/images/عکس‌های وبلاگ/averie-woodard-5d20kdvFCfA-unsplash.jpg" alt="عکس جاده"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> فواید سفر کردن</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                            </div>

                            <div class="seemore col-12 d-flex justify-content-center align-items-center mt-5 outline-none border-0" >
                                <button>بیشتر ببینید</button>
                            </div>
                        </div>
                        <!-- end of third tab -->
                        <div class="tab-pane fade" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab"
                            tabindex="0">
                                  <div class="row">
                                <!-- first card -->
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class=" col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center ">
                                        <img src="./assets/images/عکس‌های وبلاگ/Istanbul-Tram-T1-Visual.jpg" alt="عکس مترو در استانبول "
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end">حمل و نقل عمومی در استانبول ترکیه</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/louis-magnotti-YvCg5X3pWzc-unsplash.jpg" alt="عکس هواپیما"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> راهنمای خرید بلیت هواپیما     </h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/56-3710787-colors-streaming-winter-prayer-hall-nasir-ol-molk-mosque-shiraz-14288444120-.jpg" alt="عکس مسجد نصیرالمک"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> مسجد نصیرالملک، شاهکار معماری ایرانی</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                         <img src="./assets/images/عکس‌های وبلاگ/turkey-istanbul-rooftop.jpg" alt="عکس خانه در استانبول"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end">    معروفترین غذاهای خیابانی استانبول</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                        <img src="./assets/images/عکس‌های وبلاگ/water-planet-aquapark-alanya.jpg" alt="عکس آبشار آبی در استانبول"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> بزرگ‌ترین پارک آبی آنتالیا</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                                <div class=" travel-items mb-2 col-sm-12 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div class="col-12 col-md-6 img-wrapper position-relative d-flex justify-content-center align-items-center">
                                          <img src="./assets/images/عکس‌های وبلاگ/averie-woodard-5d20kdvFCfA-unsplash.jpg" alt="عکس جاده"
                                            class="img-fluid travel-img">
                                    </div>
                                    <div class="col-12 col-md-6 pe-2 ps-2">
                                        <h4 class="travel-header text-center text-md-end"> فواید سفر کردن</h4>
                                        <p class="travel-desciption text-justify ">این متن صرفا برای نمونه بوده تا کاربر
                                            بتواند اندازه آن در محیط واقعی وب را
                                            تصور کند و تصویری ذهنی از آن داشته باشد تا بتواند تصمیم گیری کند ...</p>
                                    </div>
                                </div>
                            </div>

                            <div class="seemore col-12 d-flex justify-content-center align-items-center mt-5 outline-none border-0" >
                                <button>بیشتر ببینید</button>
                            </div>
                             </div>
                         <!-- end of forth tab -->
                    </div>
                    <!-- end of tabs content -->
                </div>
                <!-- end of tab content -->
            </div>
            <!-- end of row -->
        </div>
        <!-- end of container -->
    </section>
    <!-- end of Tourism Magazine-->`

export default TourismMagazineContext;