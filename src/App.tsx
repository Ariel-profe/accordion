
import './App.css'
import { Question } from './components/Question'
import { questions } from './data/data'

function App() {

  return (
    <main >
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {
            questions.map( ({id, title, info}) => (
              <Question 
                key={id}
                title={title}  
                info={info}
              />
            ) )
          }
        </section>
      </div>
    </main>
  )
}

export default App
