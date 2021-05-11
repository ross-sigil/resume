<template>
  <v-container>
    <!-- <v-row justify="center">
        <v-img
          :src="require('../assets/sigilSmaller.png')"
          max-width="322"
          height="456"
        />
      </v-row> -->

    <v-row justify="center" style="padding: 2em">
      <v-img
        :src="require('../assets/hireme.png')"
        max-width="690"
        height="188"
      />
    </v-row>

    <!-- so you may have found out this is an image and not text. 
         congrats, i'm completely exposed on this one.
         
         this is not for lack of effort
         turns out finding a monospace font with a bitcoin symbol in ttf that 
         will work with most browsers and display this right does not work out well.
         see Scratchpad.txt for what the code looked like though for a laugh.
     -->

    <v-row justify="center">
      <div class="ik">
        <pre class="my" style="line-height: 1em">
/====================-<span style="color:#6be41f;">LANGUAGES</span>-====================\
|                                                   |
|                                                   |
|                <span class="lpr">Python</span>        <span class="lpr">2017</span>                 |
|                                                   |
|                  <span class="lpr">Java</span>        <span class="lpr">2018</span>                 |
|                                                   |
|                   <span class="lbl">C++</span>        <span class="lbl">2018</span>                 |
|                                                   |
|                    <span class="bl">C#</span>        <span class="bl">2019</span>                 |
|                                                   |
|            <span class="lgr">TypeScript</span>        <span class="lgr">2019</span>                 |
|                                                   |
|          <span class="ye">Visual Basic</span>        <span class="ye">2020</span>                 | <!--   please dont make me do visual basic -->
|                                                   |
|                     <span class="lre">C</span>        <span class="lre">2020</span>                 |
|                                                   |
|              <span class="lre">Solidity</span>        <span class="lre">2021</span>                 |
|                                                   |
\===================================================/
      </pre>
      </div>
    </v-row>

    <!-- add bash scripting, git and some other stuff too -->

    <v-row justify="center">
      <div class="pi">
        <pre class="my" style="line-height: 1em">
 __________________________________________________________________________ _ __  _
/// <span class="ye">TOOLS</span> ///////////////////////////////////////////////////////////
<span class="ye">¯¯+¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ ¯¯  ¯ ¯   ¯
  |
  |                                <span class="lpr">Vue</span>        <span class="lpr">2019</span>
  |
  |                               <span class="lpr">HTML</span>        <span class="lpr">2019</span>
  |
  |                                <span class="lbl">CSS</span>        <span class="lbl">2019</span>
  |
  |                                <span class="bl">SQL</span>        <span class="bl">2019</span>
  |
  |                                <span class="lgr">WPF</span>        <span class="lgr">2019</span>
  |
  |                           <span class="ye">WinForms</span>        <span class="ye">2019</span>
  |
  |                      <span class="lre">RDLC Wizardry</span>        <span class="lre">2019</span>
  |
   \_______________________________________________________________________
</span>
      </pre>
      </div>
    </v-row>

    <v-row justify="center">
      <div class="ye">
        <pre class="my" style="line-height: 1.2">
 ______________________________________________________________________________________________________________ 
|   .-------------.   //===================================================================================\\__|
|__/  <span class="lre">UNIVERSITY</span>   \_//                                                                                        |
|                                                                                                              |
| <span class="gr">Southeast Missouri State University</span>      <span class="pi">GRADUATED 2021</span>                                                      |
|                                                                                                              |
| <span class="ik">BS Computer Science</span>                                                                                          |
|                                                                                                              |
|                                                                                                              |
| -> <span class="lgr">Accomplishments</span>                                                                                           |
|     <span class="ik">::</span>                                                                                                       |
|     <span class="ik">::</span> 3.67 Major GPA                                                                                        |
|     <span class="ik">::</span>                                                                                                       |
|     <span class="ik">::</span> President of the AIX (Artifical Intelligence eXtension) Club 2019-2020                                |
|     <span class="ik">::</span>                                                                                                       |
|                                                                                                              |
|                                                                                                              |
| -> <span class="lgr">Significant Work</span>                                                                                          |
|     <span class="ik">::</span>                                                                                                       |
|     <span class="ik">::</span> Worked to analyze soybean fields for Mizzou Agricultural Center with Dr. Wei Dai and others.          |
|     <span class="ik">::</span> Images were taken with drones and analyzed with <span class="gr">machine learning</span> techniques. The <span class="rainbow-text">color</span> of the         |
|     <span class="ik">::</span> soybeans would determine if <span class="bl">irrigation</span> was needed.                                                    |
|     <span class="ik">::</span>                                                                                                       |
|     <span class="ik">::</span> Developed a <span class="gr">blockchain</span> as a research project for <span class="re">COVID-19</span> contact tracing . If two users came         |
|     <span class="ik">::</span> within a set proximity of one another a token would be generated and transfered between them.         |
|     <span class="ik">::</span> The number, frequency and variety of coins would be used to quantify a persons risk.                  |
|     <span class="ik">::</span> Exponential decay models were then used to represent the user <span class="gr">healing</span>. A <span class="gr">tree</span> structure could be      |
|     <span class="ik">::</span> generated from these results to see the spread of a <span class="re">virus</span> upon a population.                          |
|     <span class="ik">::</span> This project is still in deveopment and has secured <span class="gr">grant funding</span>.                                    |
|     <span class="ik">::</span>                                                                                                       |
:                                                                                                              :
:______________________________________________________________________________________________________________:
      </pre>
      </div>
    </v-row>

    <v-row justify="center">
      <div class="lbl">
        <pre class="my" style="line-height: 1.2em">
┌────────────────────────────────────────────────────────────────────────────────┐ 
││        ___ _                                                                        _ ___    ││
││        ╲__╲╲╲ ╲─────────────────  <span class="ye">E X P E R I E N C E</span>  ─────────────────╱ ╱╱╱__╱    ││
││                                                                                              ││
││  + <span class="re">Lots of low wage work.</span>                                                                    ││
││                                                                                              ││
││    -> I work with a team towards a common, well communicated and understood goal well.       ││
││       I've done factory work, I've worked in a record store, I've served restauraunts.       ││
││       Did you know Pizza Hut point of sale systems run on CentOS? The focus has              ││
││       never changed, <span class="gr">listen</span> to people and get them what they want.                           ││
││                                                                                              ││
││                                                                                              ││
││                                                                                              ││
││  + <span class="gr">Internship - W.W. Wood Inc.</span>                                         <span class="ye">( 2019 - Present )</span>    ││
││                                                                                              ││
││    -> Named <span class="gr">lead developer</span> on multiple internal projects. Have worked on webapps that        ││
││       required the construction of a <span class="gr">REST API</span> to consume data from the company               ││
││       <span class="gr">SQL server</span>. Have created algorithms to pair datas that had few common elements.        ││
││       Have worked on <span class="gr">WPF</span> and <span class="gr">WinForms</span> for ordering software.                                 ││
││                                                                                              ││
└────────────────────────────────────────────────────────────────────────────────┘
        </pre>
      </div>
    </v-row>

    <v-row justify="center">
      <div class="lpr">
        <pre class="my" style="line-height: 1em">
   +== <span class="ye">PORTFOLIO</span> ===========================================================+
   |                                                                        |
+--|  ~ This is my collection of worthwhile work I am available to show.    |--+
|<span class="re">\\</span>|    It has been recently uploaded to this account.                      |<span class="re">\\</span>|
|<span class="re">\\</span>|                                                                        |<span class="re">\\</span>|
|<span class="re">\\</span>|  ~ <a href="https://github.com/ross-sigil/">Link</a>                                                                |<span class="re">\\</span>|
|<span class="re">\\</span>|                                                                        |<span class="re">\\</span>|
|<span class="re">\\</span>+=========================================================== <span class="ye">PORTFOLIO</span> ==+<span class="re">\\</span>|
|<span class="re">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</span>|
|<span class="re">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</span>|
|<span class="re">\\</span>+== <span class="lgr">DOX</span> =================================================================+<span class="re">\\</span>|
|<span class="re">\\</span>|                                                                        |<span class="re">\\</span>|
|<span class="re">\\</span>|  Name:  Ross Dillard                                                   |<span class="re">\\</span>|
|<span class="re">\\</span>|                                                                        |<span class="re">\\</span>|
|<span class="re">\\</span>|  Phone: 1-(618)-932-4037                                               |<span class="re">\\</span>|
|<span class="re">\\</span>|                                                                        |<span class="re">\\</span>|
|<span class="re">\\</span>|  Email: <a href="mailto:ross@sigil.systems?subject=Your site either got you an interview or spam!">ross@sigil.systems</a>                                             |<span class="re">\\</span>|
|<span class="re">\\</span>|                                                                        |<span class="re">\\</span>|
|<span class="re">\\</span>|  Age:   32                                                             |<span class="re">\\</span>|
|<span class="re">\\</span>|                                                                        |<span class="re">\\</span>|
|<span class="re">\\</span>|                                                                        |<span class="re">\\</span>|
|<span class="re">\\</span>|  About Me: I love computers. I'm very interested in working with       |<span class="re">\\</span>|
|<span class="re">\\</span>|            smart-contracts at some point in my career. Old school      |<span class="re">\\</span>|
|<span class="re">\\</span>|            textmode aesthetics are my jam.                             |<span class="re">\\</span>|
+--|                                                                        |--+
   +================================================================= <span class="lgr">DOX</span> ==+
        </pre>
      </div>
    </v-row>

    <v-row justify="center">
      <div class="lgr">
        <pre class="my" style="line-height: 1.2em">
 _   _           _          ___                          _ _         
| |_| |_ ___ ___| |_ ___   |  _|___ ___    ___ ___ ___ _| |_|___ ___ 
|  _|   | .'|   | '_|_ -|  |  _| . |  _|  |  _| -_| .'| . | |   | . |
|_| |_|_|__,|_|_|_,_|___|  |_| |___|_|    |_| |___|__,|___|_|_|_|_  |
                                                                |___|
        </pre>
      </div>
    </v-row>

    <v-row justify="center">
      <div class="pi">
        <pre
          class="my"
          style="line-height: 1em; text-align: center; margin-bottom: -0.5em"
        >
<span class="ye">Hey, you got to the bottom!</span>

For your patience here's an <span class="rainbow-text">easter egg</span>.
You've seen <span class="pr">dark</span> and <span class="ik">light</span> mode before.
But never like <span class="re">this</span>.

<span class="ik">Mess around with the slider below.</span>

<span class='pi'>|
V</span>
        </pre>
      </div>
    </v-row>

    <!-- dont fill me in, just a placeholder for the elements im making this page out of -->
    <v-row justify="center">
      <div class="lbl">
        <pre class="my" style="line-height: 1.2em"></pre>
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
@font-face {
  font-family: "TopazPlus";
  src: url(../assets/topazplus500.ttf);
}

@font-face {
  font-family: "ps55";
  src: url(../assets/ps55.ttf);
}

.my {
  font-family: "TopazPlus", "Lucida Console", monospace, Monaco;
}

.ps {
  font-family: "ps55";
  font-size: 29px;
}

.rainbow-text {
  background-image: linear-gradient(
    to left,
    violet,
    #ce33f6,
    #64e0e0,
    green,
    yellow,
    orange,
    red
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.re {
  color: #c90c54;
}

.bl {
  color: #64e0e0;
}

.lbl {
  color: #6ee5e9;
}

.or {
  color: #f89f34;
}

.gr {
  color: #6be41f;
}

.lgr {
  color: #aaf3a2;
}

.ik {
  color: #87ffff;
}

.pr {
  color: #ce33f6;
}

.lpr {
  color: #b1a7f0;
}

.lre {
  color: #f8b8b3;
}

.pi {
  color: #fc92de;
}
.ye {
  color: #f7fdaf;
}
</style>
