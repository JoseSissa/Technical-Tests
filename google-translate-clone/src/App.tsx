import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
// ----------
import './App.css'
import { useStorage } from './hooks/useStorage';
import { AUTO_LANGUAGE } from './const';
import { ArrowsIcon } from './components/icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';


function App() {
  const { toLanguage, fromLanguage, interchangeLanguage, setFromLanguage, setToLanguage } = useStorage()

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.FROM}
            value={fromLanguage}
            onChange={setFromLanguage} />
          {fromLanguage}
        </Col>
        <Col>
          <Button variant='link'
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguage}>
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector
            type={SectionType.TO}
            value={toLanguage}
            onChange={setToLanguage} />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
