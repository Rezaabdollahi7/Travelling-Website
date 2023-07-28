const newsletter = ` 

    <!-- part 3 newsletter  -->

      <div id="newsletter" class="mt-4">
        <div class="newsletter-card">
          <div class="newsletter-card-text">
            <h2>عضویت در خبرنامه</h2>
            <p class="mt-3">با عضویت در خبرنامه از آخرین اخبار, پیشنهاد ها و تخفیف ها با خبر شوید !</p>
            <div class="email-bar relative ">
              <form id="emailForm" action="send_email.php" method="POST">
                <input type="email" name="email" id="emailInput" placeholder="ایمیل خود را وارد کنید...">
                <button class="position-absolute" type="submit"><i class="fa-solid fa-paper-plane" style="color: #ffffff;"></i></button>
              </form>
            </div>
          </div>
          <div class="newsletter-card-img">
            <img src="./assets/images/heidi-fin-mHC0qJ7l-ls-unsplash.jpg" alt="عضویت در خبرنامه">
      
          </div>
        </div>
      </div>`

export default newsletter;