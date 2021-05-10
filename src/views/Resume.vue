<template>
  <v-container>
    <!-- <v-row justify="center">
        <v-img
          :src="require('../assets/sigilSmaller.png')"
          max-width="322"
          height="456"
        />
      </v-row> -->

    <v-row justify="center">
      <v-card class="my" style="color: #8df28a">
        <pre></pre>
      </v-card>
    </v-row>

    <!-- so you may have found out this is an image and not ascii. 
        this is not for lack of effort
        turns out vue really hates preserving whitespace. 
        see /assets/aPreviousAttempt.png for what the code looked like though
     -->

    <v-row justify="center">
      <v-img
        :src="require('../assets/hireme.png')"
        max-width="620"
        height="179"
      />
    </v-row>

    <v-row justify="center">
      <v-card class="my" style="color: #8df28a"> </v-card>
    </v-row>

    <v-row justify="center">
      <div class="ik">
        <pre class="my" style="line-height: 0.7em">
        

        
/====================-<span style="color:#6be41f;">LANGUAGES</span>-====================\
|                                                   |
|                                                   |
|                <span class="lpr">Python</span>        <span class="lpr">2017</span>                 |
|                                                   |
|                                                   |
|                  <span class="lpr">Java</span>        <span class="lpr">2018</span>                 |
|                                                   |
|                                                   |
|                   <span class="lbl">C++</span>        <span class="lbl">2018</span>                 |
|                                                   |
|                                                   |
|                    <span class="bl">C#</span>        <span class="bl">2019</span>                 |
|                                                   |
|                                                   |
|            <span class="lgr">TypeScript</span>        <span class="lgr">2019</span>                 |
|                                                   |
|                                                   |
|          <span class="ye">Visual Basic</span>        <span class="ye">2020</span>                 | <!--   please dont make me do visual basic -->
|                                                   |
|                                                   |
|                     <span class="lre">C</span>        <span class="lre">2020</span>                 |
|                                                   |
|                                                   |
|              <span class="lre">Solidity</span>        <span class="lre">2021</span>                 |
|                                                   |
\===================================================/



      </pre>
      </div>
    </v-row>

    <v-row justify="center">
      <div class="ye">
        <pre class="my" style="line-height: 1.2em">
        
 _______________________________________________________________________________
/// <span class="pr">TOOLS</span> //////////////////////////////////////////////////////////////////////
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

      </pre>
      </div>
    </v-row>

    <v-row justify="center">
      <div class="ye">
        <pre class="my" style="line-height: 1.2em"></pre>
      </div>
    </v-row>

    <!-- organize things by when i started learning and when i started getting paid to do it -->

    <!-- 

      Languages:

      Python        2017
      Java          2018
      C++           2018
      C#            2019
      TypeScript    2019
      Visual Basic  2020
      C             2020
      Solidity      2021

      Vue           2019
      HTML          2019
      CSS           2019
      SQL           2019
      WPF/WinForms  2020
      RDLC Wizardry 2020


      A pile of retail jobs:
        I work with a team towards a common, well communicated and understood goal well. I've done factory work, and found myself to much prefer programming.

      College Works:
        President of AIX (AI Ext) helped explore solutions with using drones to analyze soybean fields using color as a metric for hydration. Other roles for this were communication and orgnizational ability.
        
        Developed a blockchain as a research project as a contact tracer for COVID-19. 
          The idea was that the service would run in the background and if another user came within a proximity determined by gps a token would be generated and transfered from each user.
          These tokens represent risk and the more a user has the greater their risk, they then use an exponential decay funtion as the user is progressively healed.
          We could generate a contact tree and organize that tree by risk.


      Intership"
      W.W. Wood (2019 - Present)

        Named lead developer on multiple internal projects. Have worked on internal webapps required the construction of a REST API to consume data from the company SQL server.
        

      A bit about me:

        I love computers. I also love talking to people about them. I am very interested in cryptocurrencies and smart contracts (been following $LINK development since 2017). Nick Szabo's "The God Protocols" are interesting to me. 
        I've actually 


     -->

    <v-row justify="center">
      <p class="pre">I do code</p>
    </v-row>

    <v-row justify="center">
      <p class="pre" style="color: #f0c674">previous work</p>
    </v-row>
  </v-container>
</template>

<style scoped>
@font-face {
  font-family: "TopazPlus";
  src: url(../assets/topazplus500.ttf);
}

.my {
  font-family: "TopazPlus", "Lucida Console", monospace, Monaco;
}

.bl {
  color: #64e0e0;
}

.lbl {
  color: #aec5f1;
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

.ye {
  color: #f7fdaf;
}
</style>
