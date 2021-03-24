import styles from '../styles/pages/Home.module.css';
import LoadingM from './loading'
import { Mainarticle } from '../components/Mainarticle'
import { Articles } from '../components/Articles'
import { Footer } from '../components/Footer'
import api from '../service/api';
import { useState, useEffect } from "react";

const exemple = [{
  autor: "GABRIEL DA SILVA CRUZ",
  content: "<p> Ola Dev's ainda não temos artigos</p>",
  datapost: "2021-03-21T20:36:15.224Z",
  thumbnail: "https://aceleradev-backend.herokuapp.com/uploads/vazio.png",
  tipo: "SEM ARTIGO",
  title: "SEM ARTIGO ",
  urlgithub: "https://github.com/Gabrielscruz?tab=repositories",
  urlyoutube: "https://www.youtube.com/channel/UCpQYgA_Lvmyg6z2usJ8fTiA",
}]


export default function Main() {
  const [Page, SetPage] = useState(1);
  const [Type, SetType] = useState('')
  const [ArticleAll, SetArticleAll] = useState();
  const [ArticleInfo, SetArticleInfo] = useState([]);
  const [ArticleMain, SetArticleMain] = useState([]);
  const [Loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(false)
    api.get(`/articles?page=${Page}&tipo=${Type}`).then(response => {
      const { total, limit, page, pages, docs } = response.data;
      SetArticleInfo({ total, limit, pages, page });
      SetArticleAll(docs ? docs : exemple)
      SetArticleMain(response.data.docs[0] ? response.data.docs[0] : exemple[0])
      function timeLoading() {
        SetLoading(true)
      }

      setTimeout(timeLoading, 900);

    })
  }, [Page, Type]);

  if (!Loading) {
    return <><LoadingM /></>
  }
  console.log(ArticleInfo)

  const prevPage = () => {
    if (parseInt(ArticleInfo.page) === 1) return
    SetPage(parseInt(ArticleInfo.page) - 1);
  }

  const nextPage = () => {
    if (ArticleInfo.page === ArticleInfo.pages) return
    SetPage(parseInt(ArticleInfo.page) + 1);
  }

  const filteringhome = () => {
    SetType('')
  }
  const filteringback = () => {
    SetType('BACKEND')
  }
  const filteringfron = () => {
    SetType('FRONTEND')
  }
  const filteringauto = () => {
    SetType('AUTOMACAO')
  }





  return (
    <div className={styles.container}>


      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logodiv}>
            <img className={styles.logo} src='https://aceleradev-backend.herokuapp.com/uploads/favicon.png' alt='logo' />
          </div>
          <nav className={styles.nav}>
            <button onClick={filteringhome}>HOME</button>
            <button onClick={filteringback}>BACK END</button>
            <button onClick={filteringfron}>FRONT END</button>
            <button onClick={filteringauto}>AUTOMAÇÃO</button>
          </nav>
        </div>
      </header>

      <section className={styles.section}>
        <Mainarticle ArticleM={ArticleMain} />
        <div className={styles.paginate} >
          <button disabled={parseInt(ArticleInfo.page) === 1} onClick={prevPage}><i class="far fa-arrow-alt-circle-left"></i></button>
          <span>{ArticleInfo.page}</span>
          <button disabled={parseInt(ArticleInfo.page) === parseInt(ArticleInfo.pages)} onClick={nextPage}><i class="far fa-arrow-alt-circle-right"></i></button>
        </div>


        <div className={styles.containerArticle}>

          {ArticleAll.map((item) => {

            return (
              <Articles ArticleM={item} />
            )

          })
          }
        </div>
        <div className={styles.paginate} >
          <button disabled={parseInt(ArticleInfo.page) === 1} onClick={prevPage}><i class="far fa-arrow-alt-circle-left"></i></button>
          <span>{ArticleInfo.page}</span>
          <button disabled={parseInt(ArticleInfo.page) === parseInt(ArticleInfo.pages)} onClick={nextPage}><i class="far fa-arrow-alt-circle-right"></i></button>
        </div>


      </section>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}


