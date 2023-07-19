const header = `    <header>
<nav class="flexDiv">
    <div class="nav-icons flexDiv">
        <span class="icontainer">
            <i class="fa-solid fa-user-circle"></i>
            <span class="iconHide">ورود / ثبت نام</span>
        </span>
        <span class="icontainer">
            <i class="fa-solid fa-headset"></i>
            <span class="iconHide">021-12345678</span>
        </span>
    </div>
    <div class="nav-links flexDiv">
    <span class="openMenu"><i class="fa-solid fa-arrow-alt-circle-down"></i></span>
        <ul class="flexDiv">
            <li><a href="#">خانه</a></li>
            <li><a href="#">تور</a></li>
            <li><a href="#">ویزا</a></li>
            <li><a href="#">محله گردشگری</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">تماس با ما</a></li>
        </ul>
        <a href="#"><img class="navLogoMain" src="assets/images/Logo Header1.jpg" alt="LOGO"></a>
    </div>
    <ul class="flexDiv openedMenu">
            <li><a href="#">خانه</a></li>
            <li><a href="#">تور</a></li>
            <li><a href="#">ویزا</a></li>
            <li><a href="#">محله گردشگری</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">تماس با ما</a></li>
        </ul>
</nav>
<section class="header-body flexDiv">
    <div class="back-div">
        <img src="assets/images/banner.jpg" alt="Travelling">
    </div>
    <div class="header-search-box">
        <div class="search-box__top">
            <div class="forHover travelType">
                <img class="top-icon" src="assets/images/عکس‌های باکس سرچ/airline.svg" alt="icon">
                <span>پرواز خارجی</span>
            </div>
            <div class="forHover travelType">
                <img class="top-icon" src="assets/images/عکس‌های باکس سرچ/airline-1.svg" alt="icon">
                <span>پرواز داخلی</span>

            </div>
            <div class="forHover travelType">
                <img class="top-icon" src="assets/images/عکس‌های باکس سرچ/airline-2.svg" alt="icon">
                <span>هتل خارجی</span>

            </div>
            <div class="forHover travelType">
                <img class="top-icon" src="assets/images/عکس‌های باکس سرچ/airline-3.svg" alt="icon">
                <span>هتل داخلی</span>

            </div>
            <div class="forHover travelType">
                <img class="top-icon" src="assets/images/عکس‌های باکس سرچ/airline-4.svg" alt="icon">
                <span>تور</span>

            </div>
        </div>
        <div class="search-box__radio">
            <input type="radio" name="travelSide" id="single">
            <label for="single">یک طرفه</label>
            <input type="radio" name="travelSide" id="bidirect">
            <label for="bidirect">رفت و برگشت</label>
        </div>
        <div class="search-box__infos flexDiv">
            <div class="fromToContainer">
            <div class="input-container flexDiv">
                <span class="input-inner-label">مبدا</span>
                <input type="text" placeholder="نام شهر یا فرودگاه">
                <ul class="search-box-ul list-unstyled d-inline-block px-2">
                    <li class="mb-1 fw-medium">مسیرهای پر تردد</li>
                    <li class="d-flex flex-column mb-2">
                        <div class="city-section d-flex align-items-center justify-content-between">
                            <p class="city-text d-inline m-0 fw-bold">تهران</p>
                            <span>همه فرودگاه ها</span>
                            <span>THR</span>
                        </div>
                        <div class="airport-section pt-1  d-flex justify-content-between">
                            <i class="fa-solid fa-arrow-turn-down fa-rotate-90 "></i>
                            <p class="d-inline airport-name fw-bold mb-0">فرودگاه امام خمینی تهران</p>
                            <span>IKA</span>
                        </div>
                    </li>
                    <li class="d-flex flex-column mb-2">
                        <div class="city-section d-flex align-items-center justify-content-between">
                            <p class="city-text d-inline m-0 fw-bold">استانبول</p>
                            <span>همه فرودگاه ها</span>
                            <span>THR</span>
                        </div>
                        <div class="airport-section pt-1  d-flex justify-content-between">
                            <i class="fa-solid fa-arrow-turn-down fa-rotate-90 "></i>
                            <p class="d-inline airport-name fw-bold mb-0">فرودگاه جدید استانبول </p>
                            <span>IStall</span>
                        </div>
                    </li>
                    <li class="d-flex flex-column mb-2">
                        <div class="city-section d-flex align-items-center justify-content-between">
                            <p class="city-text d-inline m-0 fw-bold">تفلیس</p>
                            <span>همه فرودگاه ها</span>
                            <span>THR</span>
                        </div>
                        <div class="airport-section pt-1  d-flex justify-content-between">
                            <i class="fa-solid fa-arrow-turn-down fa-rotate-90 "></i>
                            <p class="d-inline airport-name fw-bold mb-0">فرودگاه بین المللی تفلیس </p>
                            <span>TBS</span>
                        </div>
                    </li>
                    <li class="d-flex flex-column mb-2">
                        <div class="city-section d-flex align-items-center justify-content-between">
                            <p class="city-text d-inline m-0 fw-bold">بانکوک</p>
                            <span>همه فرودگاه ها</span>
                            <span>ISTALL</span>
                        </div>
                        <div class="airport-section pt-1  d-flex justify-content-between">
                            <i class="fa-solid fa-arrow-turn-down fa-rotate-90 "></i>
                            <p class="d-inline airport-name fw-bold mb-0"> فرودگاه بین المللی بانکوک</p>
                            <span>DMK</span>
                        </div>
                    </li>
            
                </ul>
            </div>
            <div class="input-container flexDiv">
                <span class="input-inner-label">مقصد</span>
                <input type="text" placeholder="نام شهر یا فرودگاه">
                <ul class="search-box-ul list-unstyled d-inline-block px-2">
                    <li class="mb-1 fw-medium">مسیرهای پر تردد</li>
                    <li class="d-flex flex-column mb-2">
                        <div class="city-section d-flex align-items-center justify-content-between">
                            <p class="city-text d-inline m-0 fw-bold">تهران</p>
                            <span>همه فرودگاه ها</span>
                            <span>THR</span>
                        </div>
                        <div class="airport-section pt-1  d-flex justify-content-between">
                            <i class="fa-solid fa-arrow-turn-down fa-rotate-90 "></i>
                            <p class="d-inline airport-name fw-bold mb-0">فرودگاه امام خمینی تهران</p>
                            <span>IKA</span>
                        </div>
                    </li>
                    <li class="d-flex flex-column mb-2">
                        <div class="city-section d-flex align-items-center justify-content-between">
                            <p class="city-text d-inline m-0 fw-bold">استانبول</p>
                            <span>همه فرودگاه ها</span>
                            <span>THR</span>
                        </div>
                        <div class="airport-section pt-1  d-flex justify-content-between">
                            <i class="fa-solid fa-arrow-turn-down fa-rotate-90 "></i>
                            <p class="d-inline airport-name fw-bold mb-0">فرودگاه جدید استانبول </p>
                            <span>IStall</span>
                        </div>
                    </li>
                    <li class="d-flex flex-column mb-2">
                        <div class="city-section d-flex align-items-center justify-content-between">
                            <p class="city-text d-inline m-0 fw-bold">تفلیس</p>
                            <span>همه فرودگاه ها</span>
                            <span>THR</span>
                        </div>
                        <div class="airport-section pt-1  d-flex justify-content-between">
                            <i class="fa-solid fa-arrow-turn-down fa-rotate-90 "></i>
                            <p class="d-inline airport-name fw-bold mb-0">فرودگاه بین المللی تفلیس </p>
                            <span>TBS</span>
                        </div>
                    </li>
                    <li class="d-flex flex-column mb-2">
                        <div class="city-section d-flex align-items-center justify-content-between">
                            <p class="city-text d-inline m-0 fw-bold">بانکوک</p>
                            <span>همه فرودگاه ها</span>
                            <span>ISTALL</span>
                        </div>
                        <div class="airport-section pt-1  d-flex justify-content-between">
                            <i class="fa-solid fa-arrow-turn-down fa-rotate-90 "></i>
                            <p class="d-inline airport-name fw-bold mb-0"> فرودگاه بین المللی بانکوک</p>
                            <span>DMK</span>
                        </div>
                    </li>
            
                </ul>
                <i class='fa-solid fa-arrows-left-right'></i>
            </div>
            </div>
            <div class=fromToContainer>
            <div class="input-container flexDiv">
                <span class="input-inner-label">تاریخ رفت</span>
                <input type="text" placeholder="انتخاب کنید">
            </div>
            <div class="input-container flexDiv">
                <span class="input-inner-label">مسافران و کلاس</span>
                <input type="text" placeholder="انتخاب کنید">
                <ul class="search-box-ul box-ul-passengers list-unstyled d-inline-block px-2">
                    <li class="d-flex flex-column mb-2">
                        <div class="passengers-section d-flex align-items-center justify-content-start column-gap-1">
                            <p class="adult-text d-inline m-0 fw-bold">بزرگسال</p>
                            <span>(۱۲ سال به بالا)</span>
                        </div>
                        <div class="adult-count-section pt-1  d-flex justify-content-center">
                            <div class="passengers">
                                <i class="fa-solid fa-plus-square"></i>
                                <span class="passengers-num">1</span>
                                <i class="fa-solid fa-minus-square"></i>
                            </div>
                        </div>
                    </li>
                    <li class="d-flex flex-column mb-2">
                        <div class="passengers-section d-flex align-items-center justify-content-start column-gap-1">
                            <p class="adult-text d-inline m-0 fw-bold">کودک</p>
                            <span>(۲ تا ۱۲ سال)</span>
                        </div>
                        <div class="adult-count-section pt-1  d-flex justify-content-center">
                            <div class="passengers">
                                <i class="fa-solid fa-plus-square"></i>
                                <span class="passengers-num">0</span>
                                <i class="fa-solid fa-minus-square"></i>
                            </div>
                        </div>
                    </li>
                    <li class="d-flex flex-column mb-2">
                        <div class="passengers-section d-flex align-items-center justify-content-start column-gap-1">
                            <p class="adult-text d-inline m-0 fw-bold">نوزاد</p>
                            <span>(۱ تا ۲ سال)</span>
                        </div>
                        <div class="adult-count-section pt-1  d-flex justify-content-center">
                            <div class="passengers">
                                <i class="fa-solid fa-plus-square"></i>
                                <span class="passengers-num">0</span>
                                <i class="fa-solid fa-minus-square"></i>
                            </div>
                        </div>
                    </li>
                    <li class="d-flex flex-column mb-2">
                        <p class="fw-bold">کلاس کابین</p>
                        <input list="class-cabin-list" id="class-cabin-input" name="class-cabin-input" placeholder="تمامی کابین ها">
                        <datalist id="class-cabin-list">
                            <option value="تمامی کابین ها">
                            <option value="اکونومی">
                            <option value="فرست">
                            <option value="بیزینس">
                            <option value="پریمیوم">    
                        </datalist>
                    </li>
                </ul>
            </div>
            </div>
            <div class="input-container">
                <button type="submit"><i class="fa-solid fa-search"></i> جست و جو</button>
            </div>
        </div>
    </div>
</section>
</header>`

export default header