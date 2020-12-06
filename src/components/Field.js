// styles
import useStyles from '../styles';

const Field = ({ label, value, onChange }) => {
    const styles = useStyles();
    
    return (
        <div>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
};

export default Field;
