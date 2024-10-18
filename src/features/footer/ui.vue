<template>
    <footer class="footer">
        <div class="footer__content">
            <img class="footer__angle" src="/img/angle.png" alt="">
            <div class="footer__header">
                <h2 class="footer__title">academy@gazprom.ru</h2>
            </div>
            <div class="footer__body">
                <hr class="footer__line--top line">
                <nav class="footer__nav">
                    <ul>
                        <h3>О Академии</h3>
                        <li>Кто мы</li>
                        <li>Карьера</li>
                        <li>Отзывы</li>
                        <li>Контакты</li>
                    </ul>
                    <ul>
                        <h3>Поступающим</h3>
                        <li>Как мы учим</li>
                        <li>Как поступить</li>
                        <li>Программа и платформа</li>
                        <li>Трудоустройство</li>
                    </ul>
                    <ul>
                        <h3>Партнерам</h3>
                        <li>Вузам</li>
                        <li>Компаниям</li>
                        <li>Экспертам</li>
                        <li>Корпоративное обучение</li>
                    </ul>
                    <div class="footer__links">
                        <a class="link"><svg width="26" height="16" viewBox="0 0 26 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.1308 15.9113C5.46998 15.9113 0.530059 9.9737 0.324219 0.09375H4.66256C4.80506 7.3454 8.00331 10.4171 10.5366 11.0504V0.09375H14.6218V6.3479C17.1234 6.0787 19.7514 3.22875 20.6381 0.09375H24.7232C24.0423 3.95708 21.1923 6.8071 19.1657 7.9788C21.1923 8.9288 24.4383 11.4146 25.6733 15.9113H21.1765C20.2107 12.9029 17.8043 10.5754 14.6218 10.2587V15.9113H14.1308Z"
                                    fill="white" />
                            </svg>
                        </a>
                        <a class="link">
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.64987 9.4709C8.09231 6.36615 12.3883 4.31934 14.5378 3.33042C20.675 0.506852 21.9503 0.0163725 22.7815 0.000172472C22.9643 -0.00338753 23.3731 0.0467324 23.6379 0.284372C23.8614 0.485042 23.9229 0.756113 23.9524 0.946363C23.9818 1.13661 24.0185 1.57001 23.9893 1.90866C23.6568 5.7739 22.2177 15.1538 21.4856 19.483C21.1758 21.3148 20.5658 21.929 19.9753 21.9891C18.6919 22.1197 17.7174 21.051 16.4744 20.1497C14.5294 18.7394 13.4305 17.8615 11.5425 16.4853C9.36064 14.8949 10.7751 14.0208 12.0185 12.5922C12.344 12.2184 17.9985 6.52943 18.1079 6.01335C18.1216 5.94881 18.1343 5.70822 18.0051 5.58118C17.8759 5.45414 17.6851 5.49758 17.5475 5.53213C17.3524 5.5811 14.2452 7.8528 8.22584 12.3472C7.34386 13.0171 6.545 13.3435 5.82924 13.3264C5.04018 13.3075 3.52233 12.8329 2.39397 12.4272C1.00999 11.9296 -0.0899676 11.6665 0.00581424 10.8214C0.0557033 10.3812 0.603723 9.931 1.64987 9.4709Z"
                                    fill="white" />
                            </svg>

                        </a>
                    </div>
                </nav>
                <hr class="footer__line--bottom line">
            </div>

            <div class="footer__bottom">
                <p class="footer__text--left text">© Образовательная платформа Газпром. Академия, 2024 </p>
                <p class="footer__text--right text">Мы используем файлы cookie. Они нужны для персонализации сервисов и
                    удобства пользования
                    сайтом. Если вы не согласны на их использование, поменяйте настройки браузера.</p>
            </div>

        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.text {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 12px;
    line-height: 167%;
    color: #161f3e;
}

.line {
    border: 1px solid #161f3e;
    opacity: 0.3;
}

.link {
    width: 48px;
    height: 48px;
    background: #0079c2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 74px;

}

ul {
    list-style: none;
}

li {
    margin-bottom: 15px;
}

h3 {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 18px;
    line-height: 167%;
    color: #161f3e;
    margin-bottom: 20px;
}

@media screen and (max-width:800px) {
    .footer {
        &__nav {
            justify-content: space-between;
        }
    }
}

@media screen and (max-width:900px) {
    .footer {
        &__title {
            font-size: 33px !important;
        }

        &__bottom {
            flex-direction: column !important;
            gap: 20px;
        }

        &__text {
            &--left {
                text-align: end !important;
            }
        }
    }
}

.footer {
    &__line {
        &--top {
            margin-bottom: 45px;
        }

        &--bottom {
            margin-top: 45px;
        }
    }

    &__header {
        padding: 25px 30px 0 30px;
    }

    &__title {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 70px;
        line-height: 110%;
        color: #161f3e;
    }

    &__nav {
        display: flex;
        gap: 60px;
        flex-wrap: wrap;
        position: relative;
    }

    &__angle {
        position: absolute;
        right: 0;
        top: 0;
    }

    &__links {
        display: flex;
        flex-direction: column;
        gap: 15px;
        position: absolute;
        right: 0;
        bottom: 0;
    }

    &__text {
        text-wrap: nowrap;

        &--right {
            text-align: end;
        }
    }

    &__body {
        padding: 45px 30px;


    }

    &__bottom {
        padding: 0 30px 30px 30px;
        display: flex;
        justify-content: space-between;
    }

    &__content {
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: 1240px;
        margin: 0 auto;
        min-height: 540px;
        background-color: #CDECFF;
        border-radius: 20px;

    }

}
</style>