import type { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <div style={{
      paddingTop: "3em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      color: "sienna",
      textAlign: "center",
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #fdfbfb, #cbedee)",
    }}>
      <div>
        <h1>
          This is a cool site!
        </h1>
        <div>
          <a href="./">
            🔙 Back home
          </a>
        </div>
      </div>

      <div style={{
        width: "100%"
      }}>
        {/* @ts-ignore */}
        <marquee style={{
          color: "pink",
        }}>
          <h2>
            This is a cool site!
          </h2>
          {/* @ts-ignore */}
        </marquee>
      </div>

      <svg viewBox="0 0 1440 320">
        <path fill="#0099ff" d="M0,256L13.3,261.3C26.7,267,53,277,80,250.7C106.7,224,133,160,160,149.3C186.7,139,213,181,240,213.3C266.7,245,293,267,320,272C346.7,277,373,267,400,224C426.7,181,453,107,480,69.3C506.7,32,533,32,560,26.7C586.7,21,613,11,640,21.3C666.7,32,693,64,720,74.7C746.7,85,773,75,800,96C826.7,117,853,171,880,192C906.7,213,933,203,960,176C986.7,149,1013,107,1040,80C1066.7,53,1093,43,1120,74.7C1146.7,107,1173,181,1200,192C1226.7,203,1253,149,1280,112C1306.7,75,1333,53,1360,48C1386.7,43,1413,53,1427,58.7L1440,64L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path>
      </svg>

    </div>
  )
}

export default About
