import Accordion from "react-bootstrap/Accordion";
import "./footer.css";
function Learnmore() {
  return (
    <div className="learn">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header id="accordheader">
            wafanyabiashara wanawezaje kufaidika!?
          </Accordion.Header>
          <Accordion.Body>
            <strong>Kwa wafanyabiashara </strong>Hupitia changamoto ya kukosa
            Viewers wengi halisi kwenye matangazo yako hivyo hutumia Dubu kupata
            watu wengi zaid kweny contacts zake na kuongeza viewers wengi zaidi
            na wateja kwenye biashara yake.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Namna gani Dubu hufanya kazi! </Accordion.Header>
          <Accordion.Body>
            Dubu huanza kwa members kuifadhi(save) number zao (members) kwenye Buckets
            kisha baada ya kujaa au kufika idadi pendekezwa ,Admin husambaza
            link ya kudownload number hizo kwa watu wake,ambapo kila mmoja
            aliejaza number ndani ya bucket anatakiwa kudownload hio bucket
            kisha kufungua na kusave.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Usalama ndani ya Dubu</Accordion.Header>
          <Accordion.Body>
            Dubu inahakikisha kuna usalama katika kuhifadhi na kushare contacts
            kwa kufuata sheria na kanuni za usalama wa data
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="accbtn">
        <button className="explorebtn2"> about us</button>
      </div>
    </div>
  );
}

export default Learnmore;
