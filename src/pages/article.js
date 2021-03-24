import styles from '../styles/pages/Home.module.css';
import { Link } from 'react-router-dom';
import { Mainarticle } from '../components/Mainarticle'
import { Blogcontent } from '../components/Blogcontent'
import { Footer } from '../components/Footer'
import LoadingM from './loading'
import api from '../service/api';
import { useState, useEffect } from "react";

export default function Article(props) {
  const [Articleunique, SetArticleunique] = useState([]);
  const [id] = useState(props.match.params.id);
  const [Loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(false)
    api.get(`/articles/${id}`).then(response => {
      SetArticleunique(response.data);
    })
    function timeLoading() {
      SetLoading(true)
    }

    setTimeout(timeLoading, 900);
  }, [id]);

  if (!Loading) {
    return <><LoadingM /></>
  }





  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logodiv}>
            <img className={styles.logo} src='https://aceleradev-backend.herokuapp.com/uploads/favicon.png' alt='logo' />
          </div>
          <nav className={styles.nav}>
            <Link to={'/'} >
              <div className={styles.all}>
                <i class="fas fa-reply-all"></i>
              </div>
            </Link>
          </nav>
        </div>
      </header>

      <section className={styles.section}>
        <Mainarticle ArticleM={Articleunique} />
        <Blogcontent ArticleM={Articleunique} />

      </section>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
