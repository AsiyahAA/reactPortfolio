import React from 'react';

function Portfolio(props) {
    return (
        <section class="headersection">

        <h2 class="container" id="Work">Work</h2>
        
        <div class="content">

            <div id="row-one">
                <h3 id="work-one"> <a href="https://github.com/lindslewis/music-generator">Beats Collective</a></h3>
                <p>https://lindslewis.github.io/music-generator/</p>
            </div>

            <div class="smaller-rows">
                <h3 class="child" id="work-two"> <a href="https://asiyahaa.github.io/code-refactor-challenge-one/">SarApp: https://asiyahaa.github.io/code-refactor-challenge-one/</a></h3>
                {/* <p> https://sarapprecipes.herokuapp.com/</p> */}

                <h3 class="child" id="work-three"> <a href='https://github.com/AsiyahAA/workDay-calendar'></a>WorkDay Calender: https://asiyahaa.github.io/workDay-calendar</h3>
                {/* <p>https://asiyahaa.github.io/workDay-calendar/</p> */}
            </div>

            <div class="smaller-rows">
                <h3 class="child" id="work-four"> <a href='https://github.com/AsiyahAA/weather-Dashboard'></a> Weather Dashboard: https://github.com/AsiyahAA/weather-Dashboard</h3>

                <h3 class="child" id="work-five"> <a href='https://github.com/AsiyahAA/techBlog'></a> Tech Blog: https://github.com/AsiyahAA/techBlog</h3>
            </div>

        </div>

    </section>
    );
}

export default Portfolio;