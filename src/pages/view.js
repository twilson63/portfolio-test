import React from 'react'

const MyView = (props) => (
  <div>
    <header>
      <h1>Magic Eight Ball {props.random}</h1>
    </header>
    <main>
      <p>Welcome to the magic eight ball</p>
      <p>Want to know the future, as the Eight Ball, it knows</p>
      <p>(Must be a yes or no questions)</p>
      <form onSubmit={props.handleSubmit}>
        <legend>Magic Eight Ball</legend>
        <h1>{props.question}</h1>
        <fieldset>
          <label>Question</label>
          <textarea
            onChange={props.handleChange}
            value={props.question}
          />
        </fieldset>
        <button>Ask</button>
      </form>
      <section>
        {props.answer}
      </section>
    </main>
  </div>
)

export default MyView
