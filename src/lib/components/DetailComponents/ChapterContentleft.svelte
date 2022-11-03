<script>
    import * as helpers from "@prismicio/helpers";
  
    export let contentLeft;
  </script>
  
  <div>
    <h1>{@html helpers.asHTML(contentLeft)}</h1>
  </div>
  
  <style>
    h1 {
    }
    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
  </style>