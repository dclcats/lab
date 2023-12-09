import styles from './index.less';
import {TITLE_BASE} from "@/constant";

function Publications() {
  return (
    <div>
      <h1 className={styles.title}>Publications - 敬请期待</h1>
    </div>
  );
}

Publications.title = TITLE_BASE + "Publications"

export default Publications;
