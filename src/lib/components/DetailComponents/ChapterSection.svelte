<script>
    export let chapterTitle;
    export let chapterNumber;
    export let chapterUID;
  </script>
  
  <section class="chapter" id={chapterUID}>
    <span>
      <h3>{chapterNumber}</h3>
    </span>
    <h4>{chapterTitle}</h4>
    <div class="content">
      <slot />
      <hr class="new4" />
    </div>
  </section>
  
  <style>
    hr.new4 {
      border: 2px solid rgb(0, 0, 0);
      background-color: black;
    }
    section {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* align-items: flex-start; */
      background-color: white;
      text-align: center;
      
    }
  
    span h3 {
      padding: 0.25rem;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      /* border: 2px solid var(--color-black); */
    }
  
    section span {
      display: flex;
      justify-content: center;
      align-items: center;
        font-size: 1.2em;
			/* text-align: center; */
			padding: auto;
			/* margin: 0.4em; */
      background-color:#fff021;
			width: 2.5em;
			height: 2.5em;
  			border-radius: 50%;
        margin-bottom: 1em;
 
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

      span {
			background-color:#fff021;
			width: 2.5em;
			height: 2.5em;
  			border-radius: 50%;
		}

		span > h3{
			font-size: 1em;
			text-align: center;
			padding: auto;
			margin: 0.4em;
		}
    .chapter > h4{
      text-align: left;
    
      font-size: 2em;
      margin-bottom: 1em;

    }
    .content {
      font-size: 0.75em;
    
      text-align: left;
    }
    }
  </style>