import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../const";
import { type FromLanguage, type Language, SectionType } from "../types.d";

type Props =
    | { type: SectionType.FROM, value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: SectionType.TO, value: Language, onChange: (language: Language) => void }

export function LanguageSelector({ onChange, type, value }: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }
    return (
        <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>
            {
                type === SectionType.FROM &&
                <option value={AUTO_LANGUAGE}>Detectar Idioma</option>
            }
            {
                Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                ))
            }
        </Form.Select>
    )
}