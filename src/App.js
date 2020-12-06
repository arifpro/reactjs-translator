// styles
import useStyles from './styles';

function App() {
  const styles = useStyles();

  return (
    <div>
      <h1 className={styles.app}>React 17!</h1>
    </div>
  );
}

export default App;
