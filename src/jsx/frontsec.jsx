import '../style/frontsec.css'

function FrontSec() {
  return (
    <section className="frontsec">
        <div className="fs-left">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
        </div>
        <div className="fs-right">
        <h2><i class="fa-solid fa-house"></i> File System</h2>
        <ul>
            <li>index.html</li>
            <li>styles.css</li>
            <li>app.js</li>
            <li>README.md</li>
        </ul>
    </div>
    </section>
  );
}

export default FrontSec;