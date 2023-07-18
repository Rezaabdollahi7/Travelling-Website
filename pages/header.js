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
        <ul class="flexDiv">
            <li><a href="#">خانه</a></li>
            <li><a href="#">تور</a></li>
            <li><a href="#">ویزا</a></li>
            <li><a href="#">محله گردشگری</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">تماس با ما</a></li>
        </ul>
        <a href="#"><img src="assets/images/Logo Header1.jpg" alt="LOGO"></a>
    </div>
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
            <div class="input-container flexDiv">
                <span class="input-inner-label">مبدا</span>
                <input type="text" placeholder="نام شهر یا فرودگاه">
            </div>
            <div class="input-container flexDiv">
                <span class="input-inner-label">مقصد</span>
                <input type="text" placeholder="نام شهر یا فرودگاه">
                <i class='fa-solid fa-arrows-left-right'></i>
            </div>
            <div class="input-container flexDiv">
                <span class="input-inner-label">تاریخ رفت</span>
                <input type="text" placeholder="انتخاب کنید">
            </div>
            <div class="input-container flexDiv">
                <span class="input-inner-label">مسافران و کلاس</span>
                <input type="text" placeholder="انتخاب کنید">
            </div>
            <div class="input-container">
                <button type="submit"><i class="fa-solid fa-search"></i> جست و جو</button>
            </div>
        </div>
    </div>
</section>
</header>`

export default header