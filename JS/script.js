const Ama = document.querySelector(".job1")
const gdansk = document.getElementById("gdansk")
const uk = document.getElementById("uk")
const nigeria = document.getElementById("nigeria")
const warsaw = document.getElementById("warsaw")
const innertext = Ama.innerHTML
gdansk.addEventListener("click", function (event) {
    Ama.innerHTML = `<p class="amazon_role">Compliance Associate <span>@ Amazon</span></p>
        <p class="amazon_time">October 2022 - Present</p>
        <br>
        <ol class="amazon_duties">
            <li>
                Create procedures and rules for classifying products in accordance with internal requirements
                and
                legal
                regulations which continuously drive process improvement.
            </li>
            <br>
            <li>
                Employ automation, technology, data analytics and machine learning models to continuously
                improve
                Amazon
                customer shopping experience.
            </li>
            <br>
            <li>
                Analyze products documentation data to generate insights that help the company in making an
                informed
                decision.
            </li>
        </ol>`
})
uk.addEventListener("click", function (event) {
    Ama.innerHTML = `<p class="amazon_role">ServiceNow NextGen <span>@ ServiceNow</span></p>
        <p class="amazon_time">October 2022 - January 2023</p>
        <br>
        <ol class="amazon_duties">
            <li>
                Designed a full working application that is used for reaching out for help
                during a road accident. I also designed an application that is used for processing loaners
                request
                that uses ServiceNow
                features like Service Portal, Flow Designer and Studio
            </li>
            <br>
            <li>
                Learned and used numerous services available on the ServiceNow platform such as virtual agent
                integration, Page
                Designers, Agile Development, UI Policies, ServiceNow Portal and Automated Testing process.
            </li>
            <br>
            <li>
                Performed client scripts and server-side scripting within ServiceNow with common APIs by
                leveraging
                on JavaScript
                programming language whie also having an extensive knowledge about Service Desk Managent which
                includes the
                Incident, Request, Problem and Change Management.
            </li>
        </ol>`
})
nigeria.addEventListener("click", function (event) {
    Ama.innerHTML = `<p class="amazon_role">Energy Data Analyst <span>@ Christapeace Technologies</span></p>
        <p class="amazon_time">October 2022 - January 2023</p>
        <br>
        <ol class="amazon_duties">
            <li>
                Extracted, inspected, cleaned, transformed, validate, load and interpreted clients energy data
                to
                identify their energy consumption
                pattern
            </li>
            <br>
            <li>
                Collaborated across cross-functional team to help aid clients seamless transition towards
                renewable
                energy.
            </li>
            <br>
            <li>
                Facilitated energy data collection across the country.
            </li>
        </ol>`
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const navigation = document.querySelector(".navigation");
let LatestScroll = window.scrollY;
window.addEventListener("scroll", () => {
    if (LatestScroll < window.scrollY) {
        navigation.classList.add("hidden_nav")
    }
    else {
        navigation.classList.remove("hidden_nav")
    }
    LatestScroll = window.scrollY
});