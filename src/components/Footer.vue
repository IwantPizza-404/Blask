<script>
export default{

}
</script>

<template>
    <footer class="footer-sec">
        <div class="container">
            <div class="footer_wrapp">
                <div class="footer-content">
                    <h2 class="footer-title sec-title">Got a project ?<br>Let’s talk</h2>
                    <a class="email-link" href="#">safarov.1513@gmail.com</a>
                    <svg class="bg-asset" width="166" height="238" viewBox="0 0 166 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.9872 1.71834C-14.1114 18.5047 2.35909 141.966 2.35909 141.966C2.35909 141.966 101.33 274.237 149.736 228.313C186.33 193.595 149.736 99.0545 149.736 99.0545C149.736 99.0545 94.6755 -15.251 39.9872 1.71834Z" fill="url(#paint0_linear_90_18)" fill-opacity="0.8"/>
                        <defs>
                            <linearGradient id="paint0_linear_90_18" x1="83" y1="0" x2="83" y2="238" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#DBF52F"/>
                                <stop offset="1" stop-color="white"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <form class="footer-form">
                    <div class="form-inputs">
                        <input class="form_input" type="text" name="email" placeholder="E-mail">
                        <input class="form_input" type="text" placeholder="Message">
                    </div>
                    <button class="send-btn">Send</button>
                </form>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer-sec{
        padding: 280px 0 145px 0;
    }
    .footer_wrapp{
        display: flex;
        gap: 135px;
        justify-content: space-between;
    }
    .footer-content{
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 65px;
        flex: 1;
        max-width: fit-content;
        min-width: fit-content;
    }
    .footer-title{
        line-height: 130%;
    }
    .email-link{
        font-size: 32px;
        font-weight: 400;
        width: fit-content;
    }

    .footer-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        flex: 1;
        max-width: 500px;
    }

    .form-inputs{
        display: flex;
        flex-direction: column;
        gap: 35px;
        width: 100%;
    }
    .form_input::placeholder{
        color: #fff;
    }
    .form_input{
        background: transparent;
        border: none;
        height: 65px;
        border-bottom: 2px solid #fff;
        outline: none;
        font-size: 24px;
        color: #fff;
        padding: 20px 0px;
    }
    .send-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #fff;
        border-radius: 15px;
        width: 100%;
        font-size: 26px;
        font-weight: 400;
        color: #fff;
        height: 65px;
    }
    .bg-asset{
        position: absolute;
        top: -30px;
        left: -30px;
        z-index: -1;
        filter: blur(60px);
    }


    @media screen and (max-width: 1135px){
        .footer_wrapp{
            flex-direction: column;
        }
        .footer-content, .footer-form{
            max-width: 100%;
        }
        .send-btn{
            max-width: 50%;
        }
    }
    @media screen and (max-width: 950px){
        .send-btn{
            max-width: 100%;
        }
    }
    @media screen and (max-width: 675px){
        .footer-content{
            gap: 35px;
        }
        .email-link{
            font-size: 26px;
        }
        .footer_wrapp{
            gap: 75px;
        }
        .footer-sec{
            padding: 240px 0 75px 0;
        }
        .send-btn{
            font-size: 25px;
        }
    }
</style>