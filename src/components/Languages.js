import { useState } from 'react';

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Bengali", value: "bn" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" }
];

const Languages = ({ language, onLanguageChange }) => {
    if (language === undefined) {
        language = 'bn';
    }

    const languageConfig = LANGUAGES.find(l => l.value === language);
    
    if (!languageConfig) {
        throw new Error(`Unknown language code '${language}'`);
    }

    const [open, setOpen] = useState(false);

    const onSelect = language => {
        setOpen(false);
        onLanguageChange(language);
    };

    return (
        <div>
            <label className='label'>Select Language</label>
            <div className={`dropdown ${open && 'is-active'}`}>
                <div className='dropdown-trigger'>
                    <button className='button' onClick={() => setOpen(!open)}>
                        <span>{languageConfig.label} {'↓'}</span>
                        {/* <span className='icon is-small'>
                            <i className='fas fa-angle-down' />
                        </span> */}
                    </button>
                </div>
                <div className='dropdown-menu'>
                    <div className='dropdown-content'>
                        {
                            LANGUAGES.map(({ label, value }) => (
                                <a
                                    href='#/'
                                    onClick={() => onSelect(value)}
                                    className='dropdown-item'
                                >
                                    {label}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;
