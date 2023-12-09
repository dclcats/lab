import styles from './index.less';
import {TITLE_BASE} from "@/constant";

function Members() {
  return (
    <div>
      <h1 className={styles.title}>Members - 敬请期待</h1>
    </div>
  );
}


Members.title = TITLE_BASE + "人员简介";

export default Members;
