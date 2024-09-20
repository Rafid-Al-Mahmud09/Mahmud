function crEl(d){
    d.secA  = d.secA  || "primary-context";
    d.secB  = d.secB  || "secondary-context";
    d.title = d.title || "Paragraph Title"
document.querySelector('main')
.innerHTML=`
<style>
    section.MHComps {

        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        box-shadow: 0px 13px 27px -5px rgba(50, 50, 93, 0.25), 0px 8px 16px -8px rgba(0, 0, 0, 0.3), 0px -6px 16px -6px rgba(0, 0, 0, 0.025);
        overflow-x: auto;
        justify-content: center;
        align-items: initial;
    }
    section.MHComps * {font-size: xx-large !important;}
    section.MHComps h2.title {font-size: 50px !important;}
    section.MHComps>* {
        height: 1000px !important;
        width: 100% !important;
    }
    section.MHComps>div.primary-context {/*max-width: 550px;*/}
    section.MHComps>*>* {width: 100% !important;}
    section.MHComps>div.primary-context>*:nth-child(1) {padding: 20px 0;height: 900px;background:#A3B3BA;}
    section.MHComps>div.primary-context>*:nth-child(1),
    section.MHComps>div.primary-context>*:nth-child(1)>* {border-radius: 50px;}
    section.MHComps>div.primary-context>*:nth-child(2) {
        padding: 20px 0;
        border-radius: 5px;
        background: #05B007;
        background: #40B573;
        background: #444;
        text-align: center;
        color: white;
    }
    section.MHComps>div.secondary-context {
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }
    section.MHComps>div.secondary-context>h2 {
        text-align: center;
        margin-bottom: initial;
    }
    section.MHComps>div.secondary-context>div.content {
        text-align: center;
    }
    section.MHComps>div.secondary-context>div.content>p {text-align: left;}
    section.MHComps>div.secondary-context>div.content>p>span {display: none;}
    section.MHComps>*:nth-child(1) {grid-area: primary-context;}
    section.MHComps>*:nth-child(2) {grid-area: secondary-context;}
    section.MHComps {grid-template-areas: "${d.secA} ${d.secB}"}
    /*70em=1120px*/
    @media screen and (max-width: 1120px) {
        section.MHComps {flex-wrap: wrap;}
        section.MHComps * {font-size: large !important;}
        section.MHComps h2.title {font-size: x-large !important;}
        /*
        section.MHComps>div.primary-context {
            height: 300px !important;
            padding: 20px 0;
        }
        section.MHComps>div.secondary-context {border-radius: 5px;}*/
    }
    
    @media screen and (max-width: 600px) {
        section.MHComps {
            grid-template-areas: "${d.secA}"
            "${d.secB}"
        }
    }
</style>
<section class="MHComps" id="${d.id}" style="display:grid;">
    <div class="primary-context">
        ${d.primary_content}
    </div>
    <div class="secondary-context c" style="border:5px solid red;">
    <h2 class="title">${d.title}</h2>
    <div class="content">${d.secondary_content}</div>
    </div>
</section>
`+document.querySelector('main')
.innerHTML;
}

// mhc.init(___p___);
crEl({
  id: "p5",
  title: "Summary",
  primary_content: `
    <picture autoplay style="border:5px solid black;display:block;">
        <source media="(min-width:650px)" srcset="./Images/demo.jpg" type="video/mp4">
        <source media="(min-width:465px)" srcset="./Images/demo.jpg">
        <img srcset="./Images/demo.jpg" alt="" style="width:auto;height:100%">
    </picture>
    <div>I am browsing in the world of IT.</div>
  `,
  secondary_content: "I'm Rafid Al Mahmud, a passionate 16-year-old aspiring web developer, software engineer, and cybersecurity enthusiast based in Dhaka, Bangladesh. Since the age of 12, I've been immersed in the world of programming, mastering technologies like HTML, CSS, JavaScript, and many more. With over 30 apps under my belt, I thrive on building innovative web applications and software solutions. My journey started with a simple curiosity, and now, it's a full-fledged passion that drives me to constantly learn and create. When I'm not coding, you can find me exploring the intricacies of system-level operations and dreaming up new ways to push the boundaries of technology.",
  secA_partA: "primary-part",
  secB_partB: "secondary-part"
})
