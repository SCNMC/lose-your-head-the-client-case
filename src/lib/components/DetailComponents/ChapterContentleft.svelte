<script>
    import * as helpers from "@prismicio/helpers";
  
    export let contentLeft;
  </script>
  
  <div>
    <h1>{@html helpers.asHTML(contentLeft)}</h1>
  </div>
  
  <style>
   
    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      text-align: left;     

    }
  
  </style>