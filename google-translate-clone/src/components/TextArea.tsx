import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {
    isLoading?: boolean
    onChange: (language: string) => void,
    type: SectionType,
    value: string
}

const commonStyles = {
    border: '1px solid #ccc',
    height: '200px',
    // resize: 'none',
}

const getPlaceHolder = ({ type, isLoading }: { type: SectionType, isLoading?: boolean }) => {
    if (type === SectionType.FROM) return 'Intrudicir texto'
    if (isLoading) return 'Traduciendo...'
    if (type === SectionType.TO) return 'Traducción'
}

export function TextArea({ isLoading, onChange, type, value }: Props) {

    const styles = type === SectionType.FROM
        ? commonStyles
        : { ...commonStyles, backgroundColor: '#f5f5f5' }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return (
        <Form.Control
            as="textarea"
            placeholder={getPlaceHolder({ type, isLoading })}
            autoFocus={type === SectionType.FROM}
            value={value}
            onChange={handleChange}
            style={styles}
        />
    )
}