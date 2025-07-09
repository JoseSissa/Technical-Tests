import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
// ----------
import './App.css'
import { useStorage } from './hooks/useStorage';
import { AUTO_LANGUAGE } from './const';
import { ArrowsIcon } from './components/icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';


function App() {
  const { toLanguage, fromLanguage, fromText, result, isLoading, interchangeLanguage, setFromLanguage, setToLanguage, setFromText, setToText } = useStorage()

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.FROM}
              value={fromLanguage}
              onChange={setFromLanguage} />
            <TextArea
              onChange={setFromText}
              type={SectionType.FROM}
              value={fromText}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link'
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguage}>
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.TO}
              value={toLanguage}
              onChange={setToLanguage} />
            <TextArea
              isLoading={isLoading}
              onChange={setToText}
              type={SectionType.TO}
              value={result}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
