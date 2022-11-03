<script>
    export let chapterTitle;
    export let chapterNumber;
    export let chapterUID;
  </script>
  
  <section class="chapter" id={chapterUID}>
    <span>{chapterNumber}</span>
    <h2>{chapterTitle}</h2>
    <div class="content">
      <slot />
      <hr class="new4" />
    </div>
  </section>
  
  <style>
    hr.new4 {
      border: 1px solid rgb(0, 0, 0);
    }
    section {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      /* align-items: flex-start; */
      background-color: white;
      text-align: center;
      
    }
  
    section h2 {
      padding: 0.25rem;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      /* border: 2px solid var(--color-black); */
    }
  
    section span {
        font-size: 1.2em;
			text-align: center;
			padding: auto;
			margin: 0.4em;
            background-color:#fff021;
			width: 2.5em;
			height: 2.5em;
  			border-radius: 50%;
    }
  
    div {
      grid-gap: 2rem;
    }
  
    @media (min-width: 45rem) {
      section {
        padding: 1rem 3rem;
      }
    }
  
    @media (min-width: 60rem) {
      section {
        padding: 2rem 5rem;
      }
  
      div {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
      }
    }
  </style>