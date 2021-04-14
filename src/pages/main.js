import styles from '../styles/pages/Home.module.css';
import LoadingM from './loading'
import DatabaseIcon from '../styles/imagens/database.gif'
import FrontendIcon from '../styles/imagens/Frontend.gif'
import AutomacaoIcon from '../styles/imagens/Automacao.gif'
import { Mainarticle } from '../components/Mainarticle'
import { Articles } from '../components/Articles'
import { Suggestion } from '../components/Suggestion'
import { Footer } from '../components/Footer'
import api from '../service/api';
import { useState, useEffect } from "react";
import Favicon from '../styles/imagens/favicon.png'

const exemple = [{
  autor: "GABRIEL DA SILVA CRUZ",
  content: "<p> Ola Dev's ainda não temos artigos</p>",
  datapost: "2021-03-21T20:36:15.224Z",
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
  const [IconeLoad, SetIconeLoad] = useState(['https://aceleradev-backend.herokuapp.com/uploads/loading.gif']);
  const [Width, SetWidth] = useState('100px')

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
    return <><LoadingM Width={Width} Img={IconeLoad} /></>
  }

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
    SetIconeLoad('https://aceleradev-backend.herokuapp.com/uploads/loading.gif')
    SetWidth('100px')
  }
  const filteringback = () => {
    SetType('BACKEND')
    SetIconeLoad(DatabaseIcon)
    SetWidth('550px')
  }
  const filteringfron = () => {
    SetType('FRONTEND')
    SetIconeLoad(FrontendIcon)
    SetWidth('550px')
  }
  const filteringauto = () => {
    SetType('AUTOMACAO')
    SetIconeLoad(AutomacaoIcon)
    SetWidth('550px')
  }

  function Paginate() {
    if (ArticleAll.length !== 0) {
      return (
        <div className={styles.paginate} >
          <button disabled={parseInt(ArticleInfo.page) === 1} onClick={prevPage}><i class="far fa-arrow-alt-circle-left"></i></button>
          <span>{ArticleInfo.page}</span>
          <button disabled={parseInt(ArticleInfo.page) === parseInt(ArticleInfo.pages)} onClick={nextPage}><i class="far fa-arrow-alt-circle-right"></i></button>
        </div>)
    } else {
      return (<></>)
    }
  }





  return (
    <div className={styles.container}>


      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logodiv}>
            <img className={styles.logo} src={Favicon} alt='logo' />
          </div>

          <nav className={styles.nav}>
            <button onClick={filteringhome}><i class="fas fa-globe"></i> HOME</button>
            <button onClick={filteringback}><i class="fas fa-database"></i> BACKEND</button>
            <button onClick={filteringfron}><i class="fas fa-chalkboard"></i> FRONTEND</button>
            <button onClick={filteringauto}><i class="fas fa-robot"></i> AUTOMAÇÃO</button>
          </nav>
        </div>
      </header>

      <section className={styles.section}>
        <Mainarticle ArticleM={ArticleMain} />
        <Suggestion />
        <Paginate />


        <div className={styles.containerArticle}>

          {ArticleAll.map((item) => {

            return (
              <Articles ArticleM={item} />
            )

          })
          }
        </div>
        <Paginate />
      </section>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}


