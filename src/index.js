// index.js
import styles from './styles.css';

document.getElementById('app').innerHTML = `
  <article class="${styles.profileCard}">
    <div class="${styles.profileCardBody}">
      <img 
        src="http://tachyons.io/img/avatar_1.jpg" 
        class="${styles.profileCardImage}" 
        title="Photo of a kitty staring at you"
      >
      <h1 class="${styles.profileCardTitle}">Mimi W.</h1>
      <h2 class="${styles.profileCardSubtitle}">CCO (Chief Cat Officer)</h2>
    </div>
  </article>
`;